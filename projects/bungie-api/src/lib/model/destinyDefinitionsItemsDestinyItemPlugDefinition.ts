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
import { DestinyDefinitionsItemsDestinyEnergyCapacityEntry } from './destinyDefinitionsItemsDestinyEnergyCapacityEntry';
import { DestinyDefinitionsItemsDestinyEnergyCostEntry } from './destinyDefinitionsItemsDestinyEnergyCostEntry';
import { DestinyDefinitionsItemsDestinyParentItemOverride } from './destinyDefinitionsItemsDestinyParentItemOverride';
import { DestinyDefinitionsItemsDestinyPlugRuleDefinition } from './destinyDefinitionsItemsDestinyPlugRuleDefinition';


/**
 * If an item is a Plug, its DestinyInventoryItemDefinition.plug property will be populated with an instance of one of these bad boys.  This gives information about when it can be inserted, what the plug's category is (and thus whether it is compatible with a socket... see DestinySocketTypeDefinition for information about Plug Categories and socket compatibility), whether it is enabled and other Plug info.
 */
export interface DestinyDefinitionsItemsDestinyItemPlugDefinition { 
    /**
     * The rules around when this plug can be inserted into a socket, aside from the socket's individual restrictions.  The live data DestinyItemPlugComponent.insertFailIndexes will be an index into this array, so you can pull out the failure strings appropriate for the user.
     */
    insertionRules?: Array<DestinyDefinitionsItemsDestinyPlugRuleDefinition>;
    /**
     * The string identifier for the plug's category. Use the socket's DestinySocketTypeDefinition.plugWhitelist to determine whether this plug can be inserted into the socket.
     */
    plugCategoryIdentifier?: string;
    /**
     * The hash for the plugCategoryIdentifier. You can use this instead if you wish: I put both in the definition for debugging purposes.
     */
    plugCategoryHash?: number;
    /**
     * If you successfully socket the item, this will determine whether or not you get \"refunded\" on the plug.
     */
    onActionRecreateSelf?: boolean;
    /**
     * If inserting this plug requires materials, this is the hash identifier for looking up the DestinyMaterialRequirementSetDefinition for those requirements.
     */
    insertionMaterialRequirementHash?: number;
    /**
     * In the game, if you're inspecting a plug item directly, this will be the item shown with the plug attached. Look up the DestinyInventoryItemDefinition for this hash for the item.
     */
    previewItemOverrideHash?: number;
    /**
     * It's not enough for the plug to be inserted. It has to be enabled as well. For it to be enabled, it may require materials. This is the hash identifier for the DestinyMaterialRequirementSetDefinition for those requirements, if there is one.
     */
    enabledMaterialRequirementHash?: number;
    /**
     * The rules around whether the plug, once inserted, is enabled and providing its benefits.  The live data DestinyItemPlugComponent.enableFailIndexes will be an index into this array, so you can pull out the failure strings appropriate for the user.
     */
    enabledRules?: Array<DestinyDefinitionsItemsDestinyPlugRuleDefinition>;
    /**
     * Plugs can have arbitrary, UI-defined identifiers that the UI designers use to determine the style applied to plugs. Unfortunately, we have neither a definitive list of these labels nor advance warning of when new labels might be applied or how that relates to how they get rendered. If you want to, you can refer to known labels to change your own styles: but know that new ones can be created arbitrarily, and we have no way of associating the labels with any specific UI style guidance... you'll have to piece that together on your end. Or do what we do, and just show plugs more generically, without specialized styles.
     */
    uiPlugLabel?: string;
    plugStyle?: number;
    /**
     * Indicates the rules about when this plug can be used. See the PlugAvailabilityMode enumeration for more information!
     */
    plugAvailability?: number;
    /**
     * If the plug meets certain state requirements, it may have an alternative label applied to it. This is the alternative label that will be applied in such a situation.
     */
    alternateUiPlugLabel?: string;
    /**
     * The alternate plug of the plug: only applies when the item is in states that only the server can know about and control, unfortunately. See AlternateUiPlugLabel for the related label info.
     */
    alternatePlugStyle?: number;
    /**
     * If TRUE, this plug is used for UI display purposes only, and doesn't have any interesting effects of its own.
     */
    isDummyPlug?: boolean;
    /**
     * Do you ever get the feeling that a system has become so overburdened by edge cases that it probably should have become some other system entirely? So do I!  In totally unrelated news, Plugs can now override properties of their parent items. This is some of the relevant definition data for those overrides.  If this is populated, it will have the override data to be applied when this plug is applied to an item.
     */
    parentItemOverride?: DestinyDefinitionsItemsDestinyParentItemOverride;
    /**
     * IF not null, this plug provides Energy capacity to the item in which it is socketed. In Armor 2.0 for example, is implemented in a similar way to Masterworks, where visually it's a single area of the UI being clicked on to \"Upgrade\" to higher energy levels, but it's actually socketing new plugs.
     */
    energyCapacity?: DestinyDefinitionsItemsDestinyEnergyCapacityEntry;
    /**
     * IF not null, this plug has an energy cost. This contains the details of that cost.
     */
    energyCost?: DestinyDefinitionsItemsDestinyEnergyCostEntry;
}

