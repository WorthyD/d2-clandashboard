import { season01 } from './season01';
import { season02 } from './season02';
import { season03 } from './season03';
import { season04 } from './season04';
import { season05 } from './season05';
import { season06 } from './season06';
import { season07 } from './season07';
import { season08 } from './season08';
import { season09 } from './season09';
import { season10 } from './season10';
import { season11 } from './season11';
import { season12 } from './season12';
import { season13 } from './season13';
export const ALL_SEASONS = [
  season01,
  season02,
  season03,
  season04,
  season05,
  season06,
  season07,
  season08,
  season09,
  season10,
  season11,
  season12,
  season13
];
ALL_SEASONS.forEach((x) => {
  console.log(x.name, x.startDate);
});
