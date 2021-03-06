import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BungieInfo } from 'bungie-models';

@Component({
  selector: 'lib-bungie-info',
  templateUrl: './bungie-info.component.html',
  styleUrls: ['./bungie-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BungieInfoComponent implements OnInit {
  _bungieInfo: BungieInfo;
  @Input()
  get bungieInfo(): BungieInfo {
    return this._bungieInfo;
  }
  set bungieInfo(value) {
    this._bungieInfo = value;
    console.log('bInfor', value);
    this.applyLinks();
  }

  @Input()
  isLoading: boolean;

  linkedAccounts = [];
  constructor() {}

  ngOnInit(): void {}

  applyLinks() {
    if (!this._bungieInfo) {
      return;
    }
    const tempLinkedAccounts = [];
    if (this.bungieInfo.steamDisplayName) {
      tempLinkedAccounts.push({
        icon: 'steam',
        name: this.bungieInfo.steamDisplayName,
        description: 'Steam'
      });
    }
    if (this.bungieInfo.xboxDisplayName) {
      tempLinkedAccounts.push({
        icon: 'xbox',
        name: this.bungieInfo.xboxDisplayName,
        description: 'Xbox Live'
      });
    }
    if (this.bungieInfo.psnDisplayName) {
      tempLinkedAccounts.push({
        icon: 'playstation',
        name: this.bungieInfo.psnDisplayName,
        description: 'PlayStation'
      });
    }
    if (this.bungieInfo.stadiaDisplayName) {
      tempLinkedAccounts.push({
        icon: 'stadia',
        name: this.bungieInfo.stadiaDisplayName,
        description: 'Stadia'
      });
    }

    if (this.bungieInfo.twitchDisplayName) {
      tempLinkedAccounts.push({
        icon: 'twitch',
        name: this.bungieInfo.twitchDisplayName,
        description: 'Twitch'
      });
    }

    this.linkedAccounts = tempLinkedAccounts;
  }
}
