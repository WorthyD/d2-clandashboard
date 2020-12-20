import { Leviathan, LeviathanGuidedGames, LeviathanPrestige } from './leviathan';
export * from './leviathan';

import { EaterOfWorlds, EaterOfWorldsGG, EaterOfWorldsPrestige } from './eater-of-worlds';
export * from './eater-of-worlds';

import { SpireOfStars, SpireOfStarsGG, SpireOfStarsPrestige } from './spire-of-stars';
export * from './spire-of-stars';

import { LastWishGG, LastWish, LastWishInfo } from './last-wish';
export * from './last-wish';

import { ScourgeOfThePast, ScourgeOfThePastGG } from './scourge-of-the-past';
export * from './scourge-of-the-past';

import { CrownOfSorrow, CrownOfSorrowGG } from './crown-of-sorrow';
export * from './crown-of-sorrow';

import { GardenOfSalvation, GardenOfSalvationGG, GardenOfSalvationInfo } from './garden-of-salvation';
export * from './garden-of-salvation';

import { DeepStoneCryptInfo, DeepStoneCrypt, DeepStoneCryptGG } from './deep-stone-crypt';
export * from './deep-stone-crypt';

export const AllRaids = [
  Leviathan,
  LeviathanGuidedGames,
  LeviathanPrestige,
  EaterOfWorlds,
  EaterOfWorldsGG,
  EaterOfWorldsPrestige,
  SpireOfStars,
  SpireOfStarsGG,
  SpireOfStarsPrestige,
  LastWishGG,
  LastWish,
  ScourgeOfThePast,
  ScourgeOfThePastGG,
  CrownOfSorrow,
  CrownOfSorrowGG,
  GardenOfSalvation,
  GardenOfSalvationGG,
  DeepStoneCrypt,
  DeepStoneCryptGG
];

export const AllRaidInfos = [DeepStoneCryptInfo, GardenOfSalvationInfo, LastWishInfo];
