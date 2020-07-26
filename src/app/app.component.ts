import { Component } from '@angular/core';

// import {
//   DataService,
//   MilestoneDefinitionService,
//   ActivitiesService,
//   ActivityModeService,
//   PresentationNodeDefinitionService
// } from '@destiny/data';

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
    // private data: DataService,
    // private activityService: ActivitiesService,
    // private activityModeService: ActivityModeService,
    // private milestoneDefinitionService: MilestoneDefinitionService,
    // private presentationNodeDefinitionService: PresentationNodeDefinitionService,
    iconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer
  ) {
    console.log('constructin');
    registerIcons(iconRegistry, domSanitizer);

  }
}
