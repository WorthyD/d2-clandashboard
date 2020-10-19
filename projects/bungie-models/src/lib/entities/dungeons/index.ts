import { PitOfHeresy } from './pit';
import { Prophecy } from './prophecy';
import { ShatteredThrone } from './throne';
import { Whisper, WhisperHeroic } from './whisper';
import { ZeroHour, ZeroHourHeroic } from './zero-hour';
import { NiobeLabs } from './niobe';
export * from './pit';
export * from './prophecy';
export * from './throne';
export * from './whisper';
export * from './zero-hour';
export * from './niobe';

export const AllDungeons = [
  ShatteredThrone,
  PitOfHeresy,
  Prophecy,
  Whisper,
  WhisperHeroic,
  ZeroHour,
  ZeroHourHeroic,
  NiobeLabs
];
