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
import { StreamInfo } from './streamInfo';


export interface GlobalAlert { 
    alertKey?: string;
    alertHtml?: string;
    alertTimestamp?: Date;
    alertLink?: string;
    alertLevel?: number;
    alertType?: number;
    streamInfo?: StreamInfo;
}

