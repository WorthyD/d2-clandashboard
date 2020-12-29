import { MemberProfile } from 'bungie-models';

export function memberMetricSerializer(p: MemberProfile, profileRecords: any[]): MemberProfile {
  return {
    profile: {
      data: {
        userInfo: {
          membershipType: p.profile.data?.userInfo?.membershipType,
          membershipId: p.profile.data?.userInfo?.membershipId,
          displayName: p.profile.data?.userInfo?.displayName
        }
      }
    },
    metrics: {
      data: {
        metrics: getProfileMetrics(p.metrics?.data?.metrics, profileRecords)
      }
    }
  };
}

function getProfileMetrics(data, profileRecordHashes: number[]) {
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
