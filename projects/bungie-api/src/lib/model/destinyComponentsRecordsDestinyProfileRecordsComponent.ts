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
import { DestinyComponentsRecordsDestinyRecordComponent } from './destinyComponentsRecordsDestinyRecordComponent';


export interface DestinyComponentsRecordsDestinyProfileRecordsComponent { 
    /**
     * Your \"Triumphs\" score.
     */
    score?: number;
    /**
     * If this profile is tracking a record, this is the hash identifier of the record it is tracking.
     */
    trackedRecordHash?: number;
    records?: { [key: string]: DestinyComponentsRecordsDestinyRecordComponent; };
}
