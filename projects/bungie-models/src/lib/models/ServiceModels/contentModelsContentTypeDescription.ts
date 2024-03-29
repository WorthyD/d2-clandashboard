/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.12.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ContentModelsContentTypeProperty } from './contentModelsContentTypeProperty';
import { ContentModelsTagMetadataItem } from './contentModelsTagMetadataItem';
import { ContentModelsTagMetadataDefinition } from './contentModelsTagMetadataDefinition';
import { ContentModelsContentPreview } from './contentModelsContentPreview';
import { ContentModelsContentTypePropertySection } from './contentModelsContentTypePropertySection';

export interface ContentModelsContentTypeDescription {
  cType?: string;
  name?: string;
  contentDescription?: string;
  previewImage?: string;
  priority?: number;
  reminder?: string;
  properties?: Array<ContentModelsContentTypeProperty>;
  tagMetadata?: Array<ContentModelsTagMetadataDefinition>;
  tagMetadataItems?: { [key: string]: ContentModelsTagMetadataItem };
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
