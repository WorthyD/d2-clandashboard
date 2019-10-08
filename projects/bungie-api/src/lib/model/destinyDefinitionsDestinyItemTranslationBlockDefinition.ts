/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyDefinitionsDestinyGearArtArrangementReference } from './destinyDefinitionsDestinyGearArtArrangementReference';
import { DestinyDyeReference } from './destinyDyeReference';


/**
 * This Block defines the rendering data associated with the item, if any.
 */
export interface DestinyDefinitionsDestinyItemTranslationBlockDefinition { 
    weaponPatternIdentifier?: string;
    weaponPatternHash?: number;
    defaultDyes?: Array<DestinyDyeReference>;
    lockedDyes?: Array<DestinyDyeReference>;
    customDyes?: Array<DestinyDyeReference>;
    arrangements?: Array<DestinyDefinitionsDestinyGearArtArrangementReference>;
    hasGeometry?: boolean;
}

