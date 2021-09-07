import { Injectable } from '@angular/core';
import { MemberProfile, ClanMember } from 'bungie-models';
import { fromWorker } from 'observable-webworker';
import { Observable, of } from 'rxjs';

import { ProfileService } from '@destiny/data';

@Injectable({
  providedIn: 'root'
})
export class ProfileWorkerService {
  constructor(private profileService: ProfileService) {}

  loadProfiles(clanId: string, clanMembers: ClanMember[], progress?: (done) => any): Observable<MemberProfile[]> {
    return fromWorker(
      () => new Worker('./profile.worker', { type: 'module' }),
      of({
        clanId,
        clanMembers,
        profileService: this.profileService,
        progress
      })
    );
  }
}

// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker(new URL('./profile.worker', import.meta.url));
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message: ${data}`);
//   };
//   worker.postMessage('hello');
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }
