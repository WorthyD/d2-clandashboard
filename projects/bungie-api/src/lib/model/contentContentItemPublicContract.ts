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
import { ContentCommentSummary } from './contentCommentSummary';
import { ContentContentRepresentation } from './contentContentRepresentation';
import { UserGeneralUser } from './userGeneralUser';


export interface ContentContentItemPublicContract { 
    contentId?: number;
    cType?: string;
    cmsPath?: string;
    creationDate?: Date;
    modifyDate?: Date;
    allowComments?: boolean;
    hasAgeGate?: boolean;
    minimumAge?: number;
    ratingImagePath?: string;
    author?: UserGeneralUser;
    autoEnglishPropertyFallback?: boolean;
    /**
     * Firehose content is really a collection of metadata and \"properties\", which are the potentially-but-not-strictly localizable data that comprises the meat of whatever content is being shown.  As Cole Porter would have crooned, \"Anything Goes\" with Firehose properties. They are most often strings, but they can theoretically be anything. They are JSON encoded, and could be JSON structures, simple strings, numbers etc... The Content Type of the item (cType) will describe the properties, and thus how they ought to be deserialized.
     */
    properties?: { [key: string]: any; };
    representations?: Array<ContentContentRepresentation>;
    /**
     * NOTE: Tags will always be lower case.
     */
    tags?: Array<string>;
    commentSummary?: ContentCommentSummary;
}
