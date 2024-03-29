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
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from './destinyDefinitionsCommonDestinyDisplayPropertiesDefinition';
import { DestinyDefinitionsDestinyTalentNodeStepGroups } from './destinyDefinitionsDestinyTalentNodeStepGroups';

/**
 * Perks are modifiers to a character or item that can be applied situationally.  - Perks determine a weapons\' damage type.  - Perks put the Mods in Modifiers (they are literally the entity that bestows the Sandbox benefit for whatever fluff text about the modifier in the Socket, Plug or Talent Node)  - Perks are applied for unique alterations of state in Objectives  Anyways, I\'m sure you can see why perks are so interesting.  What Perks often don\'t have is human readable information, so we attempt to reverse engineer that by pulling that data from places that uniquely refer to these perks: namely, Talent Nodes and Plugs. That only gives us a subset of perks that are human readable, but those perks are the ones people generally care about anyways. The others are left as a mystery, their true purpose mostly unknown and undocumented.
 */
export interface DestinyDefinitionsDestinySandboxPerkDefinition {
  /**
   * These display properties are by no means guaranteed to be populated. Usually when it is, it\'s only because we back-filled them with the displayProperties of some Talent Node or Plug item that happened to be uniquely providing that perk.
   */
  displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
  /**
   * The string identifier for the perk.
   */
  perkIdentifier?: string;
  /**
   * If true, you can actually show the perk in the UI. Otherwise, it doesn\'t have useful player-facing information.
   */
  isDisplayable?: boolean;
  /**
   * If this perk grants a damage type to a weapon, the damage type will be defined here.  Unless you have a compelling reason to use this enum value, use the damageTypeHash instead to look up the actual DestinyDamageTypeDefinition.
   */
  damageType?: number;
  /**
   * The hash identifier for looking up the DestinyDamageTypeDefinition, if this perk has a damage type.  This is preferred over using the damageType enumeration value, which has been left purely because it is occasionally convenient.
   */
  damageTypeHash?: number;
  /**
   * An old holdover from the original Armory, this was an attempt to group perks by functionality.  It is as yet unpopulated, and there will be quite a bit of work needed to restore it to its former working order.
   */
  perkGroups?: DestinyDefinitionsDestinyTalentNodeStepGroups;
  /**
   * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to.
   */
  hash?: number;
  /**
   * The index of the entity as it was found in the investment tables.
   */
  index?: number;
  /**
   * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
   */
  redacted?: boolean;
}
