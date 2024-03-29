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
import { SingleComponentResponseOfDestinyItemObjectivesComponent } from './singleComponentResponseOfDestinyItemObjectivesComponent';
import { SingleComponentResponseOfDestinyItemPlugObjectivesComponent } from './singleComponentResponseOfDestinyItemPlugObjectivesComponent';
import { SingleComponentResponseOfDestinyItemStatsComponent } from './singleComponentResponseOfDestinyItemStatsComponent';
import { SingleComponentResponseOfDestinyItemTalentGridComponent } from './singleComponentResponseOfDestinyItemTalentGridComponent';
import { SingleComponentResponseOfDestinyItemComponent } from './singleComponentResponseOfDestinyItemComponent';
import { SingleComponentResponseOfDestinyItemSocketsComponent } from './singleComponentResponseOfDestinyItemSocketsComponent';
import { SingleComponentResponseOfDestinyItemInstanceComponent } from './singleComponentResponseOfDestinyItemInstanceComponent';
import { SingleComponentResponseOfDestinyItemReusablePlugsComponent } from './singleComponentResponseOfDestinyItemReusablePlugsComponent';
import { SingleComponentResponseOfDestinyItemPerksComponent } from './singleComponentResponseOfDestinyItemPerksComponent';
import { SingleComponentResponseOfDestinyItemRenderComponent } from './singleComponentResponseOfDestinyItemRenderComponent';

/**
 * The Response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn\'t have an \"itemInstanceId\": for those, get your information from the DestinyInventoryDefinition.
 */
export interface DestinyResponsesDestinyItemResponse {
  /**
   * If the item is on a character, this will return the ID of the character that is holding the item.
   */
  characterId?: number;
  /**
   * Common data for the item relevant to its non-instanced properties.  COMPONENT TYPE: ItemCommonData
   */
  item?: SingleComponentResponseOfDestinyItemComponent;
  /**
   * Basic instance data for the item.  COMPONENT TYPE: ItemInstances
   */
  instance?: SingleComponentResponseOfDestinyItemInstanceComponent;
  /**
   * Information specifically about the item\'s objectives.  COMPONENT TYPE: ItemObjectives
   */
  objectives?: SingleComponentResponseOfDestinyItemObjectivesComponent;
  /**
   * Information specifically about the perks currently active on the item.  COMPONENT TYPE: ItemPerks
   */
  perks?: SingleComponentResponseOfDestinyItemPerksComponent;
  /**
   * Information about how to render the item in 3D.  COMPONENT TYPE: ItemRenderData
   */
  renderData?: SingleComponentResponseOfDestinyItemRenderComponent;
  /**
   * Information about the computed stats of the item: power, defense, etc...  COMPONENT TYPE: ItemStats
   */
  stats?: SingleComponentResponseOfDestinyItemStatsComponent;
  /**
   * Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character\'s \"Builds\".  COMPONENT TYPE: ItemTalentGrids
   */
  talentGrid?: SingleComponentResponseOfDestinyItemTalentGridComponent;
  /**
   * Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them.  COMPONENT TYPE: ItemSockets
   */
  sockets?: SingleComponentResponseOfDestinyItemSocketsComponent;
  /**
   * Information about the Reusable Plugs for sockets on an item. These are plugs that you can insert into the given socket regardless of if you actually own an instance of that plug: they are logic-driven plugs rather than inventory-driven.   These may need to be combined with Plug Set component data to get a full picture of available plugs on a given socket.   COMPONENT TYPE: ItemReusablePlugs
   */
  reusablePlugs?: SingleComponentResponseOfDestinyItemReusablePlugsComponent;
  /**
   * Information about objectives on Plugs for a given item. See the component\'s documentation for more info.  COMPONENT TYPE: ItemPlugObjectives
   */
  plugObjectives?: SingleComponentResponseOfDestinyItemPlugObjectivesComponent;
}
