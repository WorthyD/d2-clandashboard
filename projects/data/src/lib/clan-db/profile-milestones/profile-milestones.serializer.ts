import { MemberProfile } from 'bungie-models';

export function profileMilestoneSerializer(p: MemberProfile, profileRecords: any[]): MemberProfile {
  return {
    profile: {
      data: {
        userInfo: {
          membershipType: p.profile.data.userInfo.membershipType,
          membershipId: p.profile.data.userInfo.membershipId,
          displayName: p.profile.data.userInfo.displayName
        }
      }
    },
    profileRecords: {
      data: {
        score: p.profileRecords?.data?.score,
        records: getProfileRecords(p.profileRecords?.data?.records, profileRecords)
      }
    }
  };
}

function getProfileRecords(data, profileRecordHashes: number[]) {
  let profileRecords = {};
  if (data) {
    const progressions = {};
    profileRecordHashes.forEach((ph) => {
      progressions[ph] = data[ph];
    });
    profileRecords = progressions;
  }

  return profileRecords;
}
