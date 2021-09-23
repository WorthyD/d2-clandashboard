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
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemPlugComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemRenderComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemPerksComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemStatsComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent';

export interface DestinyItemComponentSetOfuint32 {
  instances?: DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent;
  perks?: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent;
  renderData?: DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent;
  stats?: DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent;
  sockets?: DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent;
  reusablePlugs?: DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent;
  plugObjectives?: DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent;
  talentGrids?: DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent;
  plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
  objectives?: DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent;
}
