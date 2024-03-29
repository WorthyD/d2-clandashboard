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
import { DestinyDefinitionsDestinyObjectiveDisplayProperties } from './destinyDefinitionsDestinyObjectiveDisplayProperties';

/**
 * An item can have objectives on it. In practice, these are the exclusive purview of \"Quest Step\" items: DestinyInventoryItemDefinitions that represent a specific step in a Quest.  Quest steps have 1:M objectives that we end up processing and returning in live data as DestinyQuestStatus data, and other useful information.
 */
export interface DestinyDefinitionsDestinyItemObjectiveBlockDefinition {
  /**
   * The hashes to Objectives (DestinyObjectiveDefinition) that are part of this Quest Step, in the order that they should be rendered.
   */
  objectiveHashes?: Array<number>;
  /**
   * For every entry in objectiveHashes, there is a corresponding entry in this array at the same index. If the objective is meant to be associated with a specific DestinyActivityDefinition, there will be a valid hash at that index. Otherwise, it will be invalid (0).  Rendered somewhat obsolete by perObjectiveDisplayProperties, which currently has much the same information but may end up with more info in the future.
   */
  displayActivityHashes?: Array<number>;
  /**
   * If True, all objectives must be completed for the step to be completed. If False, any one objective can be completed for the step to be completed.
   */
  requireFullObjectiveCompletion?: boolean;
  /**
   * The hash for the DestinyInventoryItemDefinition representing the Quest to which this Quest Step belongs.
   */
  questlineItemHash?: number;
  /**
   * The localized string for narrative text related to this quest step, if any.
   */
  narrative?: string;
  /**
   * The localized string describing an action to be performed associated with the objectives, if any.
   */
  objectiveVerbName?: string;
  /**
   * The identifier for the type of quest being performed, if any. Not associated with any fixed definition, yet.
   */
  questTypeIdentifier?: string;
  /**
   * A hashed value for the questTypeIdentifier, because apparently I like to be redundant.
   */
  questTypeHash?: number;
  /**
   * One entry per Objective on the item, it will have related display information.
   */
  perObjectiveDisplayProperties?: Array<DestinyDefinitionsDestinyObjectiveDisplayProperties>;
  displayAsStatTracker?: boolean;
}
