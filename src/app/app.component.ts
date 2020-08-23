import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { registerIcons } from 'projects/components/src/lib/icons/register-icons';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectEffectiveTheme } from './root-store/settings/settings.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'destiny-dashboard';
  theme$: Observable<string>;
  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, private store: Store) {
    registerIcons(iconRegistry, domSanitizer);
  }
  ngOnInit(): void {
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }
}
