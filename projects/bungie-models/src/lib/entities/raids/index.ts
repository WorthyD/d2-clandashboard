import { Leviathan, LeviathanGuidedGames, LeviathanPrestige, LeviathanInfo } from './leviathan';
export * from './leviathan';

import { EaterOfWorlds, EaterOfWorldsGG, EaterOfWorldsPrestige, EaterOfWorldsInfo } from './eater-of-worlds';
export * from './eater-of-worlds';

import { SpireOfStars, SpireOfStarsGG, SpireOfStarsPrestige, SpireOfStarsInfo } from './spire-of-stars';
export * from './spire-of-stars';

import { LastWishGG, LastWish, LastWishInfo } from './last-wish';
export * from './last-wish';

import { ScourgeOfThePast, ScourgeOfThePastGG, ScourgeOfThePastInfo } from './scourge-of-the-past';
export * from './scourge-of-the-past';

import { CrownOfSorrow, CrownOfSorrowGG, CrownOfSorrowInfo } from './crown-of-sorrow';
export * from './crown-of-sorrow';

import { GardenOfSalvation, GardenOfSalvationGG, GardenOfSalvationInfo } from './garden-of-salvation';
export * from './garden-of-salvation';

import { DeepStoneCryptInfo, DeepStoneCrypt, DeepStoneCryptGG } from './deep-stone-crypt';
export * from './deep-stone-crypt';

export const AllRaids = [
  Leviathan,
  //LeviathanGuidedGames,
  LeviathanPrestige,
  EaterOfWorlds,
  //EaterOfWorldsGG,
  EaterOfWorldsPrestige,
  SpireOfStars,
  //SpireOfStarsGG,
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

export const AllRaidInfos = [
  DeepStoneCryptInfo,
  GardenOfSalvationInfo,
  LastWishInfo,
  CrownOfSorrowInfo,
  ScourgeOfThePastInfo,
  SpireOfStarsInfo,
  EaterOfWorldsInfo,
  LeviathanInfo
];
