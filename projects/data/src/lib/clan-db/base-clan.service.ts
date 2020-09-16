import { ClanDatabase } from './ClanDatabase';
import { map, take } from 'rxjs/operators';
import { DBObject, StoreId } from './app-indexed-db';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import * as _ from 'lodash';

export class BaseClanService {
  tableName;
  constructor(private clanDbBase: ClanDatabase, private tableNameBase: StoreId) {
    this.tableName = tableNameBase;
  }

  getDataFromCache(clanId: string, rowId: string): Promise<DBObject> {
    // return this.clanDbBase.getValues(clanId)[this.tableNameBase].pipe(
    //   map((rows: DBObject[]) => {
    //     if (rows && rows.length > 0) {
    //       return rows.find((m) => m.id === rowId);
    //     }
    //     return undefined;
    //   }),
    //   take(1)
    // );
    return this.clanDbBase.getById(clanId, this.tableNameBase, rowId);
  }

  // TODO: Refactor with fewer if statements
  isCacheValid(cachedData: DBObject, minuteExpiration: number, lastActivity?: Date) {
    if (cachedData && cachedData.createDate) {
      const cacheDate = moment(cachedData.createDate);
      let expireDate;
      if (_.isDate(lastActivity)) {
        if (minuteExpiration === 0) {
          expireDate = moment(lastActivity);
        } else {
          const minuteXP = moment().add(-minuteExpiration, 'minutes');
          const lastActivityXP = moment(lastActivity);
          expireDate = minuteXP.isAfter(lastActivityXP) ? lastActivityXP : minuteXP;
        }
      } else {
        expireDate = moment().add(-minuteExpiration, 'minutes');
      }
      return cacheDate.isAfter(expireDate);
    }
    return false;
  }

  updateDB(clanId: number, rowId: string, data: any) {
    this.clanDbBase.update(clanId.toString(), this.tableName, [
      {
        id: rowId,
        createDate: new Date(),
        data: data
      }
    ]);
  }
}
