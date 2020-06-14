import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-clans',
  templateUrl: './featured-clans.component.html',
  styleUrls: ['./featured-clans.component.scss'],
})
export class FeaturedClansComponent implements OnInit {
  constructor(private router: Router) {}
  dodClans = [
    { name: 'DOD PC', id: 2073131 },
    { name: 'DADS OF DESTINY GMT X86', id: 2866236 },
    { name: 'DOD BFAM', id: 2916512 },

    // { name: 'DOD BACKWATER', id: 114213 },
    // { name: 'DOD BATTLEBORN', id: 523657 },
    // { name: 'DOD ELITISTS', id: 2073131 },
    // { name: 'DOD JUGGERNAUTS', id: 1161209 },
    // { name: 'DOD SPACE WOLVES', id: 3136336 },
    // { name: 'DOD X1 FOXTROT', id: 806412 },
    // { name: 'DOD ORBIT ', id: 546562 },
    // { name: 'DOD UNITED ', id: 1245118 },
    // { name: 'DOD REBELLION ', id: 2501138 },
    // { name: 'DOD EMPIRE ', id: 849654 },
    // { name: 'DOD CHATTAWHYTE KREW', id: 910604 },
    // { name: 'DOD STORM ', id: 3219957 },
  ];

  rjnClans = [
    { name: 'SIGMA ', id: 4106667 },
    { name: 'RHO ', id: 4153229 },
    { name: 'ZETA ', id: 4117920 },
    { name: 'TAU ', id: 4134634 },
    { name: 'OMEGA ', id: 4182341 },
    { name: 'XI ', id: 4124266 },
  ];

  otherClans = [
    { name: 'Redeem', id: 817426 },
    { name: 'Math Class', id: 881267 },
    { name: 'Primal ', id: 1362153 },
    { name: 'My Dad is Bungie', id: 2071523 },
    { name: 'The Raid Parade', id: 2956384 },
    { name: 'Focused Fire Chat', id: 1595671 },
  ];
  viewClan(clan) {
    this.router.navigate(['clan', clan.id]);
  }

  ngOnInit(): void {}
}
