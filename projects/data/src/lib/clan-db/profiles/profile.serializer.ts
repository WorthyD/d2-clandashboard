import { MemberProfile } from 'bungie-models';

export function profileSerializer(p: MemberProfile, progressionHashes: any[]): MemberProfile {
  return {
    profile: {
      data: {
        userInfo: {
          membershipType: p.profile.data.userInfo.membershipType,
          membershipId: p.profile.data.userInfo.membershipId,
          displayName: p.profile.data.userInfo.displayName
        },
        dateLastPlayed: p.profile.data.dateLastPlayed
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: { ...p.profileProgression.data.seasonalArtifact }
      }
    },
    characters: { ...p.characters },
    characterProgressions: {
      data: getCharacterProgressions(p.characterProgressions.data, progressionHashes)
    }
  };
}

function getCharacterProgressions(data, progressionHashes) {
  const characterProgressions = {};
  for (const [key, value] of Object.entries(data)) {
    const progressions = {};
    progressionHashes.forEach((ph) => {
      progressions[ph] = value['progressions'][ph];
    });
    characterProgressions[key] = { progressions };
  }
  return characterProgressions;
}
