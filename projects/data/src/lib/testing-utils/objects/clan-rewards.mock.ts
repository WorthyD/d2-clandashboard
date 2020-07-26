import { DBObject } from '../../clan-db/app-indexed-db';
import * as moment from 'moment';

export const MOCK_CLAN_REWARDS = {
  milestoneHash: 4253138191,
  rewards: [
    {
      rewardCategoryHash: 1064137897,
      entries: [
        {
          rewardEntryHash: 3789021730,
          earned: true,
          redeemed: false
        },
        {
          rewardEntryHash: 248695599,
          earned: true,
          redeemed: false
        },
        {
          rewardEntryHash: 2043403989,
          earned: true,
          redeemed: false
        },
        {
          rewardEntryHash: 964120289,
          earned: true,
          redeemed: false
        }
      ]
    },
    {
      rewardCategoryHash: 4258746474,
      entries: [
        {
          rewardEntryHash: 305996677,
          earned: true,
          redeemed: false
        },
        {
          rewardEntryHash: 1514402550,
          earned: true,
          redeemed: false
        },
        {
          rewardEntryHash: 783563440,
          earned: true,
          redeemed: false
        },
        {
          rewardEntryHash: 1478801436,
          earned: true,
          redeemed: false
        }
      ]
    }
  ],
  startDate: '2020-07-07T17:00:00Z',
  endDate: '2020-07-14T17:00:00Z',
  order: 3000
};
export const MOCK_DB_CLAN_REWARDS: DBObject[] = [
  {
    id: 'ClanRewards',
    createDate:  new Date(moment(new Date()).add(-10, 'days').valueOf()),
    data: MOCK_CLAN_REWARDS
  }
]

