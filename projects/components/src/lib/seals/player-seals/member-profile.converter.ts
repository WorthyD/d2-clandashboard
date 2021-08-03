import { MilestoneProfiles } from '@destiny/data';
import { MemberProfile, PresentationNodeDefinition } from 'bungie-models';
import { PlayerSeal } from './player-seal';

export function convertSealAndProfile(seals: PresentationNodeDefinition[], records: MilestoneProfiles[]): PlayerSeal[] {
  return seals.map((seal) => {
    const record = records.find((r) => r.milestoneHash === seal.completionRecordHash);
    // There should only be one profile here
    const profile = record.profiles[0];
    const profileRecord = profile?.profileRecords?.data?.records[seal.completionRecordHash]?.objectives[0];

    const completionRecordCount = seal.children.records.length;

    return {
      complete: profileRecord?.complete || false,
      guilded: completionRecordCount === profileRecord?.progress,
      progress:
        profileRecord?.progress > 0 ? Math.floor((profileRecord?.progress / profileRecord?.completionValue) * 100) : 0,
      sealDescription: seal.displayProperties.description,
      sealImage: seal.displayProperties.icon,
      sealTitle: seal.displayProperties.name
    };
  });
}
