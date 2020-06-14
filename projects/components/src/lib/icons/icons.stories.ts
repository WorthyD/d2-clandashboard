import { moduleMetadata } from '@storybook/angular';
/// import { ActivityGridComponent } from './activity-grid.component';
// import { ActivityGridModule } from './activity-grid.module';
// import {MOCK_GRID_ITEMS} from './_MOCK_GRID_ITEMS';
// import { ClanWeeklyProgressComponent } from './clan-weekly-progress.component';
// import { ClanWeeklyProgressModule } from './clan-weekly-progress.module';
//import { MOCK_WEEKLY_PROGRESS } from './_MOCK_WEEKLY_PROGRESS';
import { StorybookModule } from '../storybook/storybook.module';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { Component, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { registerIcons } from './register-icons';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
    selector: 'lib-icons',
    template: `
         <mat-icon svgIcon="titan"></mat-icon>
         <mat-icon svgIcon="hunter"></mat-icon>
         <mat-icon svgIcon="warlock"></mat-icon>
    `
})
class IconComponent {
    constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
           registerIcons(iconRegistry, domSanitizer);
    }
}

@NgModule({
    declarations: [IconComponent],
    exports: [IconComponent],
    imports: [CommonModule, MatIconModule, HttpClientModule]
})
class NavbarModule {}

export default {
    title: 'Icons',
    decorators: [
        moduleMetadata({
            imports: [NavbarModule, StorybookModule]
        })
    ]
};

export const base = () => ({
    component: IconComponent,
    template: `
    <lib-icons></lib-icons>
   `,
    props: {}
});
