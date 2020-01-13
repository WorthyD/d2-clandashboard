import { DefinitionModel } from './definitionModel';
import { ActivityModeDefinition } from 'bungie-models';
export interface ActivityModeModel extends DefinitionModel {
    definitions: ActivityModeDefinition[];
}
