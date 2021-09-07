import { DoWork, runWorker } from 'observable-webworker';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MemberProfile, ClanMember } from 'bungie-models';

import { ProfileService } from '@destiny/data';

export interface ProfileWorkerInput {
  clanId: string;
  clanMembers: ClanMember[];
  profileService: ProfileService;
  progress(done): any;
}

export class HelloWorker implements DoWork<ProfileWorkerInput, MemberProfile[]> {
  public work(input$: Observable<ProfileWorkerInput>): Observable<MemberProfile[]> {
    return input$.pipe(
      map((message) => {
        console.log(message); // outputs 'Hello from main thread'
        return null;
      })
    );
  }
}

runWorker(HelloWorker);
