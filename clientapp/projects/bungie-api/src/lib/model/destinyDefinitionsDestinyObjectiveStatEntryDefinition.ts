/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.5
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyDefinitionsDestinyItemInvestmentStatDefinition } from './destinyDefinitionsDestinyItemInvestmentStatDefinition';


/**
 * Defines the conditions under which stat modifications will be applied to a Character while participating in an objective.
 */
export interface DestinyDefinitionsDestinyObjectiveStatEntryDefinition { 
    /**
     * The stat being modified, and the value used.
     */
    stat?: DestinyDefinitionsDestinyItemInvestmentStatDefinition;
    /**
     * Whether it will be applied as long as the objective is active, when it's completed, or until it's completed.
     */
    style?: number;
}

