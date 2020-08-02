import { Component } from '@angular/core';


import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { registerIcons } from 'projects/components/src/lib/icons/register-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'destiny-dashboard';
  constructor(
    iconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer
  ) {
    registerIcons(iconRegistry, domSanitizer);

  }
}
