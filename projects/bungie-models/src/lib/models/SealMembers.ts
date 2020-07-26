import { MemberProfile } from './MemberProfile';
import { PresentationNodeDefinition } from './Definitions/ParentNodeDefinitions';

export interface SealMembers {
  seal: PresentationNodeDefinition;
  members: MemberProfile[];
}
