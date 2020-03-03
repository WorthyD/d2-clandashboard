import { moduleMetadata } from '@storybook/angular';
/// import { ActivityGridComponent } from './activity-grid.component';
// import { ActivityGridModule } from './activity-grid.module';
// import {MOCK_GRID_ITEMS} from './_MOCK_GRID_ITEMS';
// import { ClanWeeklyProgressComponent } from './clan-weekly-progress.component';
// import { ClanWeeklyProgressModule } from './clan-weekly-progress.module';
//import { MOCK_WEEKLY_PROGRESS } from './_MOCK_WEEKLY_PROGRESS';
import { StorybookModule } from '../storybook/storybook.module';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {registerIcons} from './register-icons';


@Component({
    selector: 'lib-icons',
    template: `
    <mat-icon svgIcon="titan"></mat-icon>

    `,
})
export class IconComponent  {

    constructor(
        iconRegistry: MatIconRegistry,
        domSanitizer: DomSanitizer,

    ) {
        registerIcons(iconRegistry, domSanitizer);
    }

}


export default {
    title: 'Icons',
    decorators: [
        moduleMetadata({
            imports: [ StorybookModule, MatIconModule]
        })
    ]
};

export const base = () => ({
    component: IconComponent,
    template: `
    <lib-icons></lib-icons>
   `,
    props: {
    }
});
