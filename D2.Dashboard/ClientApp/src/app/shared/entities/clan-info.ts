import { ClanProgression } from './clan-progression';

import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClanInfo {
  clanProgressions: ClanProgression[];
}
