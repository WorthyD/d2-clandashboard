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
import { DestinyMilestonesDestinyMilestoneContentItemCategory } from './destinyMilestonesDestinyMilestoneContentItemCategory';

/**
 * Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny Responses, both for brevity of Response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.
 */
export interface DestinyMilestonesDestinyMilestoneContent {
  /**
   * The \"About this Milestone\" text from the Firehose.
   */
  about?: string;
  /**
   * The Current Status of the Milestone, as driven by the Firehose.
   */
  status?: string;
  /**
   * A list of tips, provided by the Firehose.
   */
  tips?: Array<string>;
  /**
   * If DPS has defined items related to this Milestone, they can categorize those items in the Firehose. That data will then be returned as item categories here.
   */
  itemCategories?: Array<DestinyMilestonesDestinyMilestoneContentItemCategory>;
}