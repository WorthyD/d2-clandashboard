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
import { DestinyCharacterDestinyCharacterCustomization } from './destinyCharacterDestinyCharacterCustomization';
import { DestinyCharacterDestinyCharacterPeerView } from './destinyCharacterDestinyCharacterPeerView';
import { DestinyDyeReference } from './destinyDyeReference';

/**
 * Only really useful if you\'re attempting to render the character\'s current appearance in 3D, this returns a bare minimum of information, pre-aggregated, that you\'ll need to perform that rendering. Note that you need to combine this with other 3D assets and data from our servers.  Examine the Javascript returned by https://bungie.net/sharedbundle/spasm to see how we use this data, but be warned: the rabbit hole goes pretty deep.
 */
export interface DestinyEntitiesCharactersDestinyCharacterRenderComponent {
  /**
   * Custom dyes, calculated by iterating over the character\'s equipped items. Useful for pre-fetching all of the dye data needed from our server.
   */
  customDyes?: Array<DestinyDyeReference>;
  /**
   * This is actually something that Spasm.js *doesn\'t* do right now, and that we don\'t return assets for yet. This is the data about what character customization options you picked. You can combine this with DestinyCharacterCustomizationOptionDefinition to show some cool info, and hopefully someday to actually render a user\'s face in 3D. We\'ll see if we ever end up with time for that.
   */
  customization?: DestinyCharacterDestinyCharacterCustomization;
  /**
   * A minimal view of:  - Equipped items  - The rendering-related custom options on those equipped items  Combined, that should be enough to render all of the items on the equipped character.
   */
  peerView?: DestinyCharacterDestinyCharacterPeerView;
}
