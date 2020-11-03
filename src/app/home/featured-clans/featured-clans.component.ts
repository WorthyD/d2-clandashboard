import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { actionSettingsChangeClan } from '../../root-store/settings/settings.actions';

@Component({
  selector: 'app-featured-clans',
  templateUrl: './featured-clans.component.html',
  styleUrls: ['./featured-clans.component.scss']
})
export class FeaturedClansComponent implements OnInit {
  constructor(private router: Router, private store: Store<any>) {}
  dodClans = [
    // PC
    { name: 'DOD Paternal Chums', id: 2073131 },
    { name: 'DADS OF DESTINY GMT X86', id: 2866236 },
    //    { name: 'DOD BFAM', id: 2916512 },
    { name: 'DOD PDO', id: 4322250 },

    // ----------------- PS4
    { name: 'DOD BACKWATER', id: 114213 },
    { name: 'DOD BATTLEBORN', id: 523657 },
    { name: 'DOD BATTLEBORN DEUX', id: 3872451 },
    { name: 'DOD ELITISTS', id: 1771725 },
    { name: 'DOD Military', id: 2180975 },
    { name: 'DOD One More', id: 2942177 },
    { name: 'DOD Rocketsauce', id: 1255317 },
    { name: 'DOD Space Wolves', id: 3136336 },
    { name: 'DOD The Unknown', id: 1186355 },
    { name: 'DOD Westside Prime', id: 223562 },
    { name: 'DOD UK', id: 1288185 },
    { name: 'DOD UK Crucible Chapter', id: 1375802 },

    // XBox
    { name: 'DOD Unbroken', id: 4271754 },
    { name: 'DOD X1 FOXTROT', id: 806412 },
    { name: 'DOD ORBIT ', id: 546562 },
    { name: 'DOD UNITED ', id: 1245118 },
    { name: 'DOD REBELLION ', id: 2501138 },
    { name: 'DOD EMPIRE ', id: 849654 },
    { name: 'DOD CHATTAWHYTE KREW', id: 910604 },
    { name: 'DOD ', id: 2704603 },
    { name: 'DOD Iron Warlords', id: 1179713 },
    { name: 'DOD JUGGERNAUTS', id: 1161209 },
    { name: 'DOD SPACE WOLVES', id: 3136336 },
    { name: 'DOD STORM ', id: 3219957 }
  ];

  rjnClans = [
    { name: 'SIGMA ', id: 4106667 },
    { name: 'RHO ', id: 4153229 },
    { name: 'ZETA ', id: 4117920 },
    { name: 'TAU ', id: 4134634 },
    { name: 'OMEGA ', id: 4182341 },
    { name: 'XI ', id: 4124266 }
  ];

  loreNetwork = [
    { name: 'Focused Fire Chat', id: 1595671 },
    { name: 'Dredgens of Lore', id: 3060397 }, // Ellimist
    { name: 'Flavored Milk', id: 3913441 }, // Double check this one orchid
    { name: 'Wizards Asylum', id: 2417902 }, // Anonpig
    { name: `Tommy's Ghosts`, id: 4331196 }, // Taylor B
    { name: 'TheNorthernResistance', id: 1784989 } // Kaz PHD
  ];

  otherClans = [
    { name: 'Tiger Style Clan', id: 2071016 },
    { name: 'Redeem', id: 817426 },
    { name: 'Math Class', id: 881267 },
    { name: 'Primal ', id: 1362153 },
    { name: 'My Dad is Bungie', id: 2071523 },
    { name: 'The Raid Parade', id: 2956384 }
  ];
  viewClan(clan) {
    this.store.dispatch(actionSettingsChangeClan({ selectedClanId: clan.id }));
    this.router.navigate(['clan', clan.id]);
  }

  ngOnInit(): void {}
}
