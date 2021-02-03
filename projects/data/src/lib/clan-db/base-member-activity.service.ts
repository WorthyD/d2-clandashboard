import { BaseClanService } from './base-clan.service';
import { ClanDatabase } from './ClanDatabase';
import { StoreId, DBObject } from './app-indexed-db';
import { Destiny2Service, DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'bungie-api-angular';
import { ClanMember, MemberProfile } from 'bungie-models';
import { mergeMap, map, catchError, toArray } from 'rxjs/operators';
import { Observable, of, from, defer, concat, EMPTY, forkJoin } from 'rxjs';
interface ActivityCollection {
  activities: any[];
}
export class BaseMemberActivityService extends BaseClanService {
  private ACTIVITY_GET_COUNT = 250;
  constructor(
    private clanDbPBase: ClanDatabase,
    private tableNamePBase: StoreId,
    private d2ServiceBase: Destiny2Service,
    public startValue: Date,
    public maxRequestCount: Number,
    public activityTypeId = 0
  ) {
    super(clanDbPBase, tableNamePBase);
  }

  public getMemberCharacterActivityFromAPI(member: MemberProfile, characterId: number, pageNumber = 0) {
    return this.d2ServiceBase.destiny2GetActivityHistory(
      characterId,
      member.profile.data.userInfo.membershipId,
      member.profile.data.userInfo.membershipType,
      this.ACTIVITY_GET_COUNT,
      this.activityTypeId,
      pageNumber
    );
  }

  private activitiesContainExpiredYear(activities, expiration) {
    if (!activities) {
      return true;
    }

    return !!activities.find((x) => {
      const activityYear = new Date(x.period);
      return activityYear <= expiration;
    });
  }

  private getAllRecentActivity(member: MemberProfile, characterId: number): Observable<ActivityCollection> {
    const maxConcurrentCount = 4;
    const fetchPage = (page = 0) => {
      return this.getMemberCharacterActivityFromAPI(member, characterId, page).pipe(
        map((x) => {
          const nextPage =
            this.activitiesContainExpiredYear(x?.Response?.activities, this.startValue) || page >= this.maxRequestCount
              ? null
              : page + maxConcurrentCount;

          const activities = x?.Response?.activities || [];
          return { activities, nextPage };
        })
      );
    };

    const getItems = (page) =>
      defer(() => fetchPage(page)).pipe(
        mergeMap(({ activities, nextPage }) => {
          const items$ = from(activities);
          const next$ = nextPage ? getItems(nextPage) : EMPTY;
          return concat(items$, next$);
        })
      );

    const batchedRequest = [];
    for (let i = 0; i < maxConcurrentCount; i++) {
      batchedRequest.push(getItems(i).pipe(toArray()));
    }

    return forkJoin(batchedRequest).pipe(
      map((x: any) => {
        return {
          activities: x.flat()
        };
      })
    );
  }

  getMemberActivityId(member: MemberProfile, characterId: number) {
    return `${this.getMemberProfileId(member)}-${characterId}`;
  }
  getMemberProfileId(member: MemberProfile) {
    return `${member.profile.data.userInfo.membershipType}-${member.profile.data.userInfo.membershipId}`;
  }

  /**
   *  Pulls character activity from cache and will return fresh data if cache is exipred
   */
  getMemberCharacterActivity(
    clanId: number,
    member: MemberProfile,
    characterId: number
  ): Observable<Array<DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup>> {
    const characterActivityId = this.getMemberActivityId(member, characterId);

    return from(this.getDataFromCache(clanId.toString(), characterActivityId)).pipe(
      mergeMap((cachedData) => {
        // if (this.isCacheValid(cachedData, 720, new Date(member.profile.data.dateLastPlayed))) {
        //   return of(cachedData.data);
        // }

        // return this.getFreshMemberCharacterActivity(clanId, member, characterId, characterActivityId, cachedData);
        return this.verifyCacheIntegrity(clanId, member, characterId, cachedData);
      })
    );
  }

  /**
   * Determines if Cached data is fresh enough to use. Triggers new call if too old.
   *
   */
  verifyCacheIntegrity(clanId, memberProfile: MemberProfile, characterId, cachedData: DBObject) {
    const characterActivityId = this.getMemberActivityId(memberProfile, characterId);
    if (this.isCacheValid(cachedData, 720, new Date(memberProfile.profile.data.dateLastPlayed))) {
      return of(cachedData.data);
    }

    return this.getFreshMemberCharacterActivity(clanId, memberProfile, characterId, characterActivityId, cachedData);
  }

  /**
   * Calls for fresh character activity. Updates cache. Falls back on cache on failure.
   */
  getFreshMemberCharacterActivity(
    clanId: number,
    member: MemberProfile,
    characterId: number,
    characterActivityId: string,
    cachedData: DBObject
  ): Observable<Array<DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup>> {
    return this.getAllRecentActivity(member, characterId).pipe(
      map((activityResponse) => {
        if (activityResponse.activities) {
          this.updateDB(clanId, characterActivityId, activityResponse.activities);
          return activityResponse.activities;
        }
      }),
      catchError((error) => {
        if (error.error?.ErrorStatus === 'DestinyPrivacyRestriction') {
          this.updateDB(clanId, characterActivityId, []);
          return of([]);
        }
        if (cachedData && cachedData.data) {
          return of(cachedData.data);
        }

        throw error;
      })
    );
  }
}
