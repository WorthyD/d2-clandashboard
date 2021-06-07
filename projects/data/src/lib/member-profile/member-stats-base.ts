import { MemberProfile } from "bungie-models";

export function getPoints(mp: MemberProfile, hash) {
  const firstCharacterId = mp.profile.data.characterIds[0];
  if (mp.characterProgressions.data) {
    return mp.characterProgressions.data[firstCharacterId].progressions[hash].currentProgress;
  } else {
    return -1;
  }
}
