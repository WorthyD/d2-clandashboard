import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSearchComponent } from './clan-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

import { MatTooltipModule } from '@angular/material/tooltip';

import { CoreModule } from '../core/core.module';
@NgModule({
    declarations: [ClanSearchComponent],
    imports: [
        CommonModule,
        CoreModule,
        MatTooltipModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
        RouterModule
    ]
})
export class ClanSearchModule {}
