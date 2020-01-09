import { createFeatureSelector } from '@ngrx/store';
import { DefinitionModelState } from './definitions.state';
export const getDefinitionState = createFeatureSelector<DefinitionModelState>('definitions');
