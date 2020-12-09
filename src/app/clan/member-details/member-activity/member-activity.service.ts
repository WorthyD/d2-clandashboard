import { Injectable } from '@angular/core';
import { ClanMemberState } from '../../store/clan-members/clan-members.state';
import { getSelectedClanMember } from '../../store/clan-members/clan-members.selectors';
import { Store, select } from '@ngrx/store';
import { ActivitiesService, ActivityModeService } from '@destiny/data';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { MemberActivityGridItem } from '@destiny/components';
import {
  getSelectedClanMemberActivities,
  getClanMemberActivitiesLoading
} from '../../store/member-activities/member-activities.selectors';
import { formatDate } from 'projects/data/src/lib/utility/format-date';
import { ActivityModeDefinition } from 'bungie-models';
import * as clanIdSelectors from '../../store/clan-id/clan-id.selector';

@Injectable()
export class MemberActivityService {
  activityModeDefinitionOptions: ActivityModeDefinition[];

  constructor(
    private store: Store<ClanMemberState>,
    private activityModeService: ActivityModeService,
    private activityService: ActivitiesService
  ) {
    const activityModeDefinitions = this.activityModeService.getDefinitions();
    const defArray = Object.keys(activityModeDefinitions).map((id) => activityModeDefinitions[id]);
    const wantedTypes = [0, 2, 3, 4, 5, 6, 16, 17, 18, 63, 82, 84];
    this.activityModeDefinitionOptions = wantedTypes.map((w) => {
      return defArray.find((x) => x.modeType === w);
    });
  }
  selectedDate$ = new BehaviorSubject(null);

  selectedMember$ = this.store.pipe(select(getSelectedClanMember));

  playerActivities$ = this.store.pipe(select(getSelectedClanMemberActivities));
  playerActivitiesLoading$ = this.store.pipe(select(getClanMemberActivitiesLoading));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);

  // playerActivities2$ = combineLatest([ this.clanId$, this.clanMembers$]).pipe(
  //   filter(([id, m]) => isMembersLoaded === true),
  //   map((x) => {
  //     return x;
  //   })
  // );

  activityDetails$: Observable<MemberActivityGridItem[]> = combineLatest(
    this.playerActivities$,
    this.selectedDate$,
    (pActivities, selectedDate) => {
      if (pActivities && selectedDate) {
        // I want to move the format out of the filter. Selected date is already locally formatted and can't format it back to UTC
        const activitiesOfDay = pActivities.filter((x) => formatDate(x.period) === selectedDate);
        return this.addDefinitions(activitiesOfDay);
      }
      return null;
    }
  );

  addDefinitions(activities): MemberActivityGridItem[] {
    const activityModeDefinitions = this.activityModeService.getDefinitions();
    const activityDefinitions = this.activityService.getDefinitions();

    const defArray = Object.keys(activityModeDefinitions).map((id) => activityModeDefinitions[id]);
    return activities
      .map((x) => {
        return {
          playerActivity: x,
          activityDefinition: activityDefinitions[x.activityDetails.referenceId],
          activityModeDefinition: defArray.find((y) => {
            return y.modeType === x.activityDetails.mode;
          })
        };
      })
      .sort((a, b) => {
        return compare(a.playerActivity.period, b.playerActivity.period, true);
      });
  }

  loadDate(event) {
    this.selectedDate$.next(event);
  }
}
// TODO: Import from component libs
function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
