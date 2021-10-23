export interface ActivityInfo {
  title: string;
  activityCode?: number;
  activityTypes?: ActivityTypes[];
  color: string;
}

export interface ActivityTypes {
  label: string;
  value: string;
}

export interface ActivityData {
  events: any;
  players: any;
}
