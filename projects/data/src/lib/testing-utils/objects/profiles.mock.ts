import { MOCK_WORTHY_PROFILE } from './profile.worthy.mock';
import { MOCK_OMEGA_PROFILE } from './profile.omega.mock';
import { MOCK_ZONED_PROFILE } from './profile.zoned.mock';
import { DBObject } from '../../clan-db/app-indexed-db';
import * as moment from 'moment';

export * from './profile.worthy.mock';
export * from './profile.zoned.mock';
export * from './profile.omega.mock';

export const MOCK_PROFILES = [MOCK_WORTHY_PROFILE, MOCK_OMEGA_PROFILE, MOCK_ZONED_PROFILE];

export const MOCK_DB_PROFILES: DBObject[] = [
  {
    id: '3-4611686018469839063',
    createDate: new Date(),
    data: MOCK_ZONED_PROFILE
  },
  {
    id: '3-4611686018467296647',
    createDate: new Date(),
    data: MOCK_OMEGA_PROFILE
  },
  {
    id: '3-4611686018467238913',
    createDate: new Date(moment(new Date()).add(-10, 'days').valueOf()),
    data: MOCK_WORTHY_PROFILE
  }
];
