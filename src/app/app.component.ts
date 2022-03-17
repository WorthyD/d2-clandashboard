import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { registerIcons } from 'projects/components/src/lib/icons/register-icons';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectEffectiveTheme } from './root-store/settings/settings.selectors';
import { routeAnimations } from './core/core.module';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  title = 'destiny-dashboard';
  hideDisclaimer;
  theme$: Observable<string>;
  constructor(
    iconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
    private store: Store,
    public dialog: MatDialog
  ) {
    registerIcons(iconRegistry, domSanitizer);
  }
  ngOnInit(): void {
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
    // const hasViews = window.sessionStorage.getItem('season');
    // if (!hasViews) {
    //   const dialogRef = this.dialog.open(AlertComponent);
    //   dialogRef.afterClosed().subscribe((result) => {
    //     window.sessionStorage.setItem('season', 'true');
    //   });
    // }
  }
}
