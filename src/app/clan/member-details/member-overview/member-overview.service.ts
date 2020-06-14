import { Injectable } from '@angular/core';

import { ClanMemberState } from '../../store/clan-members/clan-members.state';
import { MemberProfileState } from '../../store/member-profiles/member-profiles.state';
import { Store, select } from '@ngrx/store';
import { getSelectedClanMember } from '../../store/clan-members/clan-members.selectors';
import { getClanMemberById } from '../../store/member-profiles/member-profiles.selectors';
import { map, switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ClanMemberSeasonPassProgression } from '@destiny/components';
import { AppConstants } from 'src/app/app.constants';

@Injectable()
export class MemberOverviewService {
    constructor(
        private memberStore: Store<ClanMemberState>,
        private profileStore: Store<MemberProfileState>
    ) {}

    selectedMember$ = this.memberStore.pipe(select(getSelectedClanMember));
    selectedProfile$ = this.selectedMember$.pipe(
        switchMap((item) => {
            return this.profileStore.pipe(select(getClanMemberById(item?.id)));
        })
    );

    selectSeasonPass$: Observable<ClanMemberSeasonPassProgression> = this.selectedProfile$.pipe(
        map((member) => {
            const characterId = member?.profile?.data?.characterIds[0];
            if (characterId > 0) {
                const characterProgressions =
                    member?.characterProgressions?.data[characterId].progressions;
                return {
                    progression: characterProgressions[AppConstants.SeasonRewardProgressionHash],
                    prestigeProgression:
                        characterProgressions[AppConstants.SeasonPrestigeProgressionHash],
                };
            }
        })
    );

    selectedCharacters$ = this.selectedProfile$.pipe(
        map((item) => {
            const charIDs = item?.profile?.data?.characterIds;
            return charIDs?.map((x) => {
                return item.characters.data[x];
            });
        })
    );
}
