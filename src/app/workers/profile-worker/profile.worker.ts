import { DoWork, runWorker } from 'observable-webworker';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MemberProfile, ClanMember } from 'bungie-models';

import { ProfileService } from '@destiny/data';

export interface ProfileWorkerInput {
  clanId: string;
  clanMembers: ClanMember[];
  profileService: ProfileService;
  progress(done): any;
}

export class ProfileWorker implements DoWork<ProfileWorkerInput, MemberProfile[]> {
  public work(input$: Observable<ProfileWorkerInput>): Observable<MemberProfile[]> {
    return input$.pipe(
      switchMap((message) => {
        return message.profileService.getSerializedProfilesWithProgress(
          message.clanId,
          message.clanMembers,
          message.progress
        );
      })
    );
  }
}

runWorker(ProfileWorker);
