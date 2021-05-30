import { SingleComponentResponseOfDestinyProfileRecordsComponent } from 'bungie-api-angular';
import { ActivityHashes, MemberProfile, RecordHashes } from 'bungie-models';
import { getPoints } from './member-stats-base';

export function getInfamyPoints(mp: MemberProfile) {
  return getPoints(mp, ActivityHashes.infamyRank);
}

export function getInfamyResets(records: SingleComponentResponseOfDestinyProfileRecordsComponent) {
  return (
    records?.data?.records[RecordHashes.InfamyResetHash]?.objectives.find(
      (x) => x.objectiveHash === RecordHashes.InfamyReseHashObjective
    )?.progress || 0
  );
}
