import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSearchComponent } from './clan-search.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, SharedModule } from '@destiny/components';

@NgModule({
  declarations: [ClanSearchComponent],
  exports: [ClanSearchComponent],
  imports: [
    CommonModule,
    //    MatTooltipModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MaterialModule,
    SharedModule
  ]
})
export class ClanSearchModule {}
