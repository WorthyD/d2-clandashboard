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
import { ApplicationsSeries } from './applicationsSeries';
import { DatesDateRange } from './datesDateRange';


export interface ApplicationsApiUsage { 
    /**
     * The date range for the data being reported.
     */
    range?: DatesDateRange;
    /**
     * Counts for on API calls made for the time range.
     */
    apiCalls?: Array<ApplicationsSeries>;
    /**
     * Instances of blocked requests or requests that crossed the warn threshold during the time range.
     */
    throttledRequests?: Array<ApplicationsSeries>;
}

