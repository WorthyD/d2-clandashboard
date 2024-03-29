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
import { DestinyArtifactsDestinyArtifactCharacterScoped } from './destinyArtifactsDestinyArtifactCharacterScoped';
import { DestinyQuestsDestinyObjectiveProgress } from './destinyQuestsDestinyObjectiveProgress';
import { DestinyQuestsDestinyQuestStatus } from './destinyQuestsDestinyQuestStatus';
import { DestinyMilestonesDestinyMilestone } from './destinyMilestonesDestinyMilestone';
import { DestinyProgressionDestinyFactionProgression } from './destinyProgressionDestinyFactionProgression';
import { DestinyDestinyProgression } from './destinyDestinyProgression';

/**
 * This component returns anything that could be considered \"Progression\" on a user: data where the user is gaining levels, reputation, completions, rewards, etc...
 */
export interface DestinyEntitiesCharactersDestinyCharacterProgressionComponent {
  /**
   * A Dictionary of all known progressions for the Character, keyed by the Progression\'s hash.  Not all progressions have user-facing data, but those who do will have that data contained in the DestinyProgressionDefinition.
   */
  progressions?: { [key: string]: DestinyDestinyProgression };
  /**
   * A dictionary of all known Factions, keyed by the Faction\'s hash. It contains data about this character\'s status with the faction.
   */
  factions?: { [key: string]: DestinyProgressionDestinyFactionProgression };
  /**
   * Milestones are related to the simple progressions shown in the game, but return additional and hopefully helpful information for users about the specifics of the Milestone\'s status.
   */
  milestones?: { [key: string]: DestinyMilestonesDestinyMilestone };
  /**
   * If the user has any active quests, the quests\' statuses will be returned here.   Note that quests have been largely supplanted by Milestones, but that doesn\'t mean that they won\'t make a comeback independent of milestones at some point.   (Fun fact: quests came back as I feared they would, but we never looped back to populate this... I\'m going to put that in the backlog.)
   */
  quests?: Array<DestinyQuestsDestinyQuestStatus>;
  /**
   * Sometimes, you have items in your inventory that don\'t have instances, but still have Objective information. This provides you that objective information for uninstanced items.   This dictionary is keyed by the item\'s hash: which you can use to look up the name and description for the overall task(s) implied by the objective. The value is the list of objectives for this item, and their statuses.
   */
  uninstancedItemObjectives?: { [key: string]: Array<DestinyQuestsDestinyObjectiveProgress> };
  /**
   * The set of checklists that can be examined for this specific character, keyed by the hash identifier of the Checklist (DestinyChecklistDefinition)  For each checklist returned, its value is itself a Dictionary keyed by the checklist\'s hash identifier with the value being a boolean indicating if it\'s been discovered yet.
   */
  checklists?: { [key: string]: { [key: string]: boolean } };
  /**
   * Data related to your progress on the current season\'s artifact that can vary per character.
   */
  seasonalArtifact?: DestinyArtifactsDestinyArtifactCharacterScoped;
}
