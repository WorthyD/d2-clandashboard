import { Component, Output, OnInit, Input, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { ClanDetails } from 'bungie-models';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @Input()
  clanDetails: ClanDetails;
  @Input()
  versionNumber: string;

  @Output() selectThemeOutput = new EventEmitter<String>();
  @Output() openLink = new EventEmitter<string>();
  @Output() openAbout = new EventEmitter<string>();
  @Output() resetDatabase = new EventEmitter<string>();
  @Output() toggleMenu = new EventEmitter<string>();

  themes = [
    { name: 'Light', value: 'light-theme' },
    { name: 'Dark', value: 'dark-theme' }
  ];

  constructor() {}

  themeSelect(themeValue) {
    this.selectThemeOutput.emit(themeValue);
  }
  toggleMenuEvent() {
    this.toggleMenu.emit();
  }

  ngOnInit(): void {}
}
