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


export interface DestinyDefinitionsDestinyProgressionDisplayPropertiesDefinition { 
    /**
     * When progressions show your \"experience\" gained, that bar has units (i.e. \"Experience\", \"Bad Dudes Snuffed Out\", whatever). This is the localized string for that unit of measurement.
     */
    displayUnitsName?: string;
    description?: string;
    name?: string;
    /**
     * Note that \"icon\" is sometimes misleading, and should be interpreted in the context of the entity. For instance, in Destiny 1 the DestinyRecordBookDefinition's icon was a big picture of a book.  But usually, it will be a small square image that you can use as... well, an icon.  They are currently represented as 96px x 96px images.
     */
    icon?: string;
    hasIcon?: boolean;
}

