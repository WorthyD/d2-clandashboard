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
import * as moment from 'moment';

@Injectable()
export class MemberActivityService {
  constructor(
    private store: Store<ClanMemberState>,
    private activityModeService: ActivityModeService,
    private activityService: ActivitiesService
  ) {}
  selectedDate$ = new BehaviorSubject(null);

  selectedMember$ = this.store.pipe(select(getSelectedClanMember));
  // activityModeDefinitions = this.activityModeService.getDefinitions();
  //  activityDefinitions = this.activityService.getDefinitions();
  playerActivities$ = this.store.pipe(select(getSelectedClanMemberActivities));
  playerActivitiesLoading$ = this.store.pipe(select(getClanMemberActivitiesLoading));

  activityDetails$: Observable<MemberActivityGridItem[]> = combineLatest(
    this.playerActivities$,
    this.selectedDate$,
    (pActivities, selectedDate) => {
      const selectedDateObj = new Date(selectedDate).toLocaleDateString();
      if (pActivities && selectedDate) {
        const activitesOfDay = pActivities.filter((x) => new Date(x.period).toLocaleDateString() === selectedDateObj);
        console.log(this.addDefinitions(activitesOfDay));
        return this.addDefinitions(activitesOfDay);
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
        return compare(a.playerActivity.period, b.playerActivity.period, false);
      });
  }

  /*
  activityDetails$: Observable<MemberActivityGridItem[]> = combineLatest(
    this.playerActivities$,
    this.activityModeDefinitions$,
    this.activityDefinitions$,
    (pActivities, activityModeDefinitions, activityDefinitions) => {
      if (pActivities && activityModeDefinitions && activityDefinitions) {
        const defArray = Object.keys(activityModeDefinitions).map((id) => activityModeDefinitions[id]);
        return pActivities
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
            return compare(a.playerActivity.period, b.playerActivity.period, false);
          });
      }
      return [];
    }
  );
  */

  loadDate(event) {
    console.log(event);
    // kthis.selectedDateActivities.next();
    this.selectedDate$.next(event);
  }
}
// TODO: Import from component libs
function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
