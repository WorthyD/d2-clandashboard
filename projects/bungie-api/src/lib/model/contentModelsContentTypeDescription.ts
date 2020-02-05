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
import { ContentModelsContentPreview } from './contentModelsContentPreview';
import { ContentModelsContentTypeProperty } from './contentModelsContentTypeProperty';
import { ContentModelsContentTypePropertySection } from './contentModelsContentTypePropertySection';
import { ContentModelsTagMetadataDefinition } from './contentModelsTagMetadataDefinition';
import { ContentModelsTagMetadataItem } from './contentModelsTagMetadataItem';


export interface ContentModelsContentTypeDescription { 
    cType?: string;
    name?: string;
    contentDescription?: string;
    previewImage?: string;
    priority?: number;
    reminder?: string;
    properties?: Array<ContentModelsContentTypeProperty>;
    tagMetadata?: Array<ContentModelsTagMetadataDefinition>;
    tagMetadataItems?: { [key: string]: ContentModelsTagMetadataItem; };
    usageExamples?: Array<string>;
    showInContentEditor?: boolean;
    typeOf?: string;
    bindIdentifierToProperty?: string;
    boundRegex?: string;
    forceIdentifierBinding?: boolean;
    allowComments?: boolean;
    autoEnglishPropertyFallback?: boolean;
    bulkUploadable?: boolean;
    previews?: Array<ContentModelsContentPreview>;
    suppressCmsPath?: boolean;
    propertySections?: Array<ContentModelsContentTypePropertySection>;
}

