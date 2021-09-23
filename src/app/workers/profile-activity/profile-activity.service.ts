import { Injectable } from '@angular/core';
import { MemberProfile, ClanMember } from 'bungie-models';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileActivityWorkerService {
  constructor() {}
  //members: BehaviorSubject<MemberProfile[]> = new BehaviorSubject([]);
  activityCacheComplete: Subject<boolean> = new Subject();

  updateAllActivityCache(clanId: string, clanMembers: MemberProfile[], progress?: (done) => any): Observable<boolean> {
    const worker = new Worker(new URL('./profile-activity-updater.worker', import.meta.url));
    worker.onmessage = ({ data }) => {
      // if (data.type === 'progress') {
      //   progress(data.data);
      // } else if (data.type === 'complete') {
      //   this.members.next(data.data);
      // }
      this.activityCacheComplete.next(true);
    };

    worker.postMessage({
      clanId,
      clanMembers,
      apiKey: environment.bungieAPI
    });
    return this.activityCacheComplete;
  }

  getAllActivitiesFromCache(clanId: string, memberProfiles: MemberProfile[]): Observable<any> {
    const memberActivities = new Subject();
    const worker = new Worker(new URL('./profile-activity-getter.worker', import.meta.url));
    worker.onmessage = ({ data }) => {
      // if (data.type === 'progress') {
      //   progress(data.data);
      // } else if (data.type === 'complete') {
      //   this.members.next(data.data);
      // }
      this.activityCacheComplete.next(true);
      memberActivities.next(data);
    };

    worker.postMessage({
      clanId,
      memberProfiles,
      apiKey: environment.bungieAPI
    });
    return memberActivities;
  }
}
