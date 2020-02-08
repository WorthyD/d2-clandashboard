import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSearchComponent } from './clan-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
    declarations: [ClanSearchComponent],
    imports: [CommonModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule]
})
export class ClanSearchModule {}
