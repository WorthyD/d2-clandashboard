import { MemberProfile } from 'bungie-models';

import { ActivityHashes, RecordHashes } from '@destiny/models';
import { SingleComponentResponseOfDestinyProfileRecordsComponent } from 'bungie-api-angular';
import { getPoints } from './member-stats-base';

export function getValorPoints(mp: MemberProfile) {
  return getPoints(mp, ActivityHashes.valorRank);
}
export function getGloryPoints(mp: MemberProfile) {
  return getPoints(mp, ActivityHashes.gloryRank);
}

export function getValorResets(records: SingleComponentResponseOfDestinyProfileRecordsComponent) {
  return (
    records?.data?.records[RecordHashes.ValorResetHash]?.objectives.find(
      (x) => x.objectiveHash === RecordHashes.ValorResetHashObjective
    )?.progress || 0
  );
}
