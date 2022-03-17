export interface MemberActivityAllState {
  loaded: boolean;
  loading: boolean;
  updating: boolean;
}

export const initialMemberActivityAllState: MemberActivityAllState = {
  loaded: false,
  loading: false,
  updating: false
};
