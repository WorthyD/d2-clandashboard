import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDefinitionsPipe } from './base-definitions.pipe';
import { StoreModule } from '@ngrx/store';
import {DefinitionReducer} from './store/definitions.reducers';

@NgModule({
    declarations: [BaseDefinitionsPipe],
    imports: [CommonModule,
        StoreModule.forFeature('definitions', DefinitionReducer)
    ]
})
export class DefinitionsModule {}
