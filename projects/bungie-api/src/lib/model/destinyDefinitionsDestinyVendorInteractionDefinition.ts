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
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from './destinyDefinitionsCommonDestinyDisplayPropertiesDefinition';
import { DestinyDefinitionsDestinyVendorInteractionReplyDefinition } from './destinyDefinitionsDestinyVendorInteractionReplyDefinition';
import { DestinyDefinitionsDestinyVendorInteractionSackEntryDefinition } from './destinyDefinitionsDestinyVendorInteractionSackEntryDefinition';


/**
 * A Vendor Interaction is a dialog shown by the vendor other than sale items or transfer screens. The vendor is showing you something, and asking you to reply to it by choosing an option or reward.
 */
export interface DestinyDefinitionsDestinyVendorInteractionDefinition { 
    /**
     * The position of this interaction in its parent array. Note that this is NOT content agnostic, and should not be used as such.
     */
    interactionIndex?: number;
    /**
     * The potential replies that the user can make to the interaction.
     */
    replies?: Array<DestinyDefinitionsDestinyVendorInteractionReplyDefinition>;
    /**
     * If >= 0, this is the category of sale items to show along with this interaction dialog.
     */
    vendorCategoryIndex?: number;
    /**
     * If this interaction dialog is about a quest, this is the questline related to the interaction. You can use this to show the quest overview, or even the character's status with the quest if you use it to find the character's current Quest Step by checking their inventory against this questlineItemHash's DestinyInventoryItemDefinition.setData.
     */
    questlineItemHash?: number;
    /**
     * If this interaction is meant to show you sacks, this is the list of types of sacks to be shown. If empty, the interaction is not meant to show sacks.
     */
    sackInteractionList?: Array<DestinyDefinitionsDestinyVendorInteractionSackEntryDefinition>;
    /**
     * A UI hint for the behavior of the interaction screen. This is useful to determine what type of interaction is occurring, such as a prompt to receive a rank up reward or a prompt to choose a reward for completing a quest. The hash isn't as useful as the Enum in retrospect, well what can you do. Try using interactionType instead.
     */
    uiInteractionType?: number;
    /**
     * The enumerated version of the possible UI hints for vendor interactions, which is a little easier to grok than the hash found in uiInteractionType.
     */
    interactionType?: number;
    /**
     * If this interaction is displaying rewards, this is the text to use for the header of the reward-displaying section of the interaction.
     */
    rewardBlockLabel?: string;
    /**
     * If the vendor's reward list is sourced from one of his categories, this is the index into the category array of items to show.
     */
    rewardVendorCategoryIndex?: number;
    /**
     * If the vendor interaction has flavor text, this is some of it.
     */
    flavorLineOne?: string;
    /**
     * If the vendor interaction has flavor text, this is the rest of it.
     */
    flavorLineTwo?: string;
    /**
     * The header for the interaction dialog.
     */
    headerDisplayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
    /**
     * The localized text telling the player what to do when they see this dialog.
     */
    instructions?: string;
}

