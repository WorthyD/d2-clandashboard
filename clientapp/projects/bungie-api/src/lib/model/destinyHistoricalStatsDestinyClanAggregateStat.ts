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
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from './destinyHistoricalStatsDestinyHistoricalStatsValue';


export interface DestinyHistoricalStatsDestinyClanAggregateStat { 
    /**
     * The id of the mode of stats (allPvp, allPvE, etc)
     */
    mode?: number;
    /**
     * The id of the stat
     */
    statId?: string;
    /**
     * Value of the stat for this player
     */
    value?: DestinyHistoricalStatsDestinyHistoricalStatsValue;
}

