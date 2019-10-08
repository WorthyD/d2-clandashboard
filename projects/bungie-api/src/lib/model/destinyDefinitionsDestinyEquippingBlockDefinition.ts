/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Items that can be equipped define this block. It contains information we need to understand how and when the item can be equipped.
 */
export interface DestinyDefinitionsDestinyEquippingBlockDefinition { 
    /**
     * If the item is part of a gearset, this is a reference to that gearset item.
     */
    gearsetItemHash?: number;
    /**
     * If defined, this is the label used to check if the item has other items of matching types already equipped.   For instance, when you aren't allowed to equip more than one Exotic Weapon, that's because all exotic weapons have identical uniqueLabels and the game checks the to-be-equipped item's uniqueLabel vs. all other already equipped items (other than the item in the slot that's about to be occupied).
     */
    uniqueLabel?: string;
    /**
     * The hash of that unique label. Does not point to a specific definition.
     */
    uniqueLabelHash?: number;
    /**
     * An equipped item *must* be equipped in an Equipment Slot. This is the hash identifier of the DestinyEquipmentSlotDefinition into which it must be equipped.
     */
    equipmentSlotTypeHash?: number;
    /**
     * These are custom attributes on the equippability of the item.  For now, this can only be \"equip on acquire\", which would mean that the item will be automatically equipped as soon as you pick it up.
     */
    attributes?: number;
    /**
     * Ammo type used by a weapon is no longer determined by the bucket in which it is contained. If the item has an ammo type - i.e. if it is a weapon - this will be the type of ammunition expected.
     */
    ammoType?: number;
    /**
     * These are strings that represent the possible Game/Account/Character state failure conditions that can occur when trying to equip the item. They match up one-to-one with requiredUnlockExpressions.
     */
    displayStrings?: Array<string>;
}

