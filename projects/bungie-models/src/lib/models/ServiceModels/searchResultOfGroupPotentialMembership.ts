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
import { GroupsV2GroupPotentialMembership } from './groupsV2GroupPotentialMembership';
import { QueriesPagedQuery } from './queriesPagedQuery';

export interface SearchResultOfGroupPotentialMembership {
  results?: Array<GroupsV2GroupPotentialMembership>;
  totalResults?: number;
  hasMore?: boolean;
  query?: QueriesPagedQuery;
  replacementContinuationToken?: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.  If False, it does not, and may be estimated/only the size of the current page.  Either way, you should probably always only trust hasMore.  This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
   */
  useTotalResults?: boolean;
}
