import { Injectable } from '@angular/core';
import { ClanMemberState } from '../../store/clan-members/clan-members.state';
import { getSelectedClanMember } from '../../store/clan-members/clan-members.selectors';
import { Store, select } from '@ngrx/store';
import { ActivitiesService, ActivityModeService } from '@destiny/data';
import { Observable, combineLatest } from 'rxjs';
import { MemberActivityGridItem } from '@destiny/components';
import { getSelectedClanMemberActivities } from '../../store/member-activities/member-activities.selectors';
@Injectable()
export class MemberActivityService {
    constructor(
        private store: Store<ClanMemberState>,
        private activityModeService: ActivityModeService,
        private activityService: ActivitiesService
    ) {}

    selectedMember$ = this.store.pipe(select(getSelectedClanMember));
    activityModeDefinitions$ = this.activityModeService.getDefinitions();
    activityDefinitions$ = this.activityService.getDefinitions();
    playerActivities$ = this.store.pipe(select(getSelectedClanMemberActivities));

    activityDetails$: Observable<MemberActivityGridItem[]> = combineLatest(
        this.playerActivities$,
        this.activityModeDefinitions$,
        this.activityDefinitions$,
        (pActivities, activityModeDefinitions, activityDefinitions) => {
            if (pActivities && activityModeDefinitions && activityDefinitions) {
                pActivities = pActivities.slice(0, 25);
                const defArray = Object.keys(activityModeDefinitions.definitions).map(id => activityModeDefinitions.definitions[id]);
                return pActivities.map(x => {
                    return {
                        playerActivity: x,
                        activityDefinition: activityDefinitions.definitions[x.activityDetails.referenceId],
                        activityModeDefinition: defArray.find(y => {
                            return y.modeType === x.activityDetails.mode;
                        })
                    };
                });
            }
            return [];
        }
    );
}
