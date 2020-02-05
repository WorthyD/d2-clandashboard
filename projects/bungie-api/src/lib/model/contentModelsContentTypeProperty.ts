/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ContentModelsContentTypeDefaultValue } from './contentModelsContentTypeDefaultValue';


export interface ContentModelsContentTypeProperty { 
    name?: string;
    readableName?: string;
    value?: string;
    propertyDescription?: string;
    localizable?: boolean;
    fallback?: boolean;
    enabled?: boolean;
    order?: number;
    visible?: boolean;
    isTitle?: boolean;
    required?: boolean;
    maxLength?: number;
    maxByteLength?: number;
    maxFileSize?: number;
    regexp?: string;
    validateAs?: string;
    rssAttribute?: string;
    visibleDependency?: string;
    visibleOn?: string;
    datatype?: number;
    attributes?: { [key: string]: string; };
    childProperties?: Array<ContentModelsContentTypeProperty>;
    contentTypeAllowed?: string;
    bindToProperty?: string;
    boundRegex?: string;
    representationSelection?: { [key: string]: string; };
    defaultValues?: Array<ContentModelsContentTypeDefaultValue>;
    isExternalAllowed?: boolean;
    propertySection?: string;
    weight?: number;
    entitytype?: string;
    isCombo?: boolean;
    suppressProperty?: boolean;
    legalContentTypes?: Array<string>;
    representationValidationString?: string;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    isVideo?: boolean;
    isImage?: boolean;
}

