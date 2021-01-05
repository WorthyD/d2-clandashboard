import { MemberProfile } from 'bungie-models';

export function profileCollectionsSerializer(p: MemberProfile, itemHashes: any[]): MemberProfile {
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
    profileCollectibles: {
      data: {
        collectibles: getProfileItems(p.profileCollectibles?.data?.collectibles, itemHashes)
      }
    }
  };
}

function getProfileItems(data, itemHashes: number[]) {
  let profileRecords = {};
  if (data) {
    const progressions = {};
    itemHashes.forEach((ph) => {
      progressions[ph] = data[ph];
    });
    profileRecords = progressions;
  }

  return profileRecords;
}
