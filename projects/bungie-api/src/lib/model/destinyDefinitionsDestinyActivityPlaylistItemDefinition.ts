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


/**
 * If the activity is a playlist, this is the definition for a specific entry in the playlist: a single possible combination of Activity and Activity Mode that can be chosen.
 */
export interface DestinyDefinitionsDestinyActivityPlaylistItemDefinition { 
    /**
     * The hash identifier of the Activity that can be played. Use it to look up the DestinyActivityDefinition.
     */
    activityHash?: number;
    /**
     * If this playlist entry had an activity mode directly defined on it, this will be the hash of that mode.
     */
    directActivityModeHash?: number;
    /**
     * If the playlist entry had an activity mode directly defined on it, this will be the enum value of that mode.
     */
    directActivityModeType?: DestinyDefinitionsDestinyActivityPlaylistItemDefinition.DirectActivityModeTypeEnum;
    /**
     * The hash identifiers for Activity Modes relevant to this entry.
     */
    activityModeHashes?: Array<number>;
    /**
     * The activity modes - if any - in enum form. Because we can't seem to escape the enums.
     */
    activityModeTypes?: Array<number>;
}
export namespace DestinyDefinitionsDestinyActivityPlaylistItemDefinition {
    export type DirectActivityModeTypeEnum = 0 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 10 | 11 | 12 | 13 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81;
    export const DirectActivityModeTypeEnum = {
        NUMBER_0: 0 as DirectActivityModeTypeEnum,
        NUMBER_2: 2 as DirectActivityModeTypeEnum,
        NUMBER_3: 3 as DirectActivityModeTypeEnum,
        NUMBER_4: 4 as DirectActivityModeTypeEnum,
        NUMBER_5: 5 as DirectActivityModeTypeEnum,
        NUMBER_6: 6 as DirectActivityModeTypeEnum,
        NUMBER_7: 7 as DirectActivityModeTypeEnum,
        NUMBER_9: 9 as DirectActivityModeTypeEnum,
        NUMBER_10: 10 as DirectActivityModeTypeEnum,
        NUMBER_11: 11 as DirectActivityModeTypeEnum,
        NUMBER_12: 12 as DirectActivityModeTypeEnum,
        NUMBER_13: 13 as DirectActivityModeTypeEnum,
        NUMBER_15: 15 as DirectActivityModeTypeEnum,
        NUMBER_16: 16 as DirectActivityModeTypeEnum,
        NUMBER_17: 17 as DirectActivityModeTypeEnum,
        NUMBER_18: 18 as DirectActivityModeTypeEnum,
        NUMBER_19: 19 as DirectActivityModeTypeEnum,
        NUMBER_20: 20 as DirectActivityModeTypeEnum,
        NUMBER_21: 21 as DirectActivityModeTypeEnum,
        NUMBER_22: 22 as DirectActivityModeTypeEnum,
        NUMBER_24: 24 as DirectActivityModeTypeEnum,
        NUMBER_25: 25 as DirectActivityModeTypeEnum,
        NUMBER_26: 26 as DirectActivityModeTypeEnum,
        NUMBER_27: 27 as DirectActivityModeTypeEnum,
        NUMBER_28: 28 as DirectActivityModeTypeEnum,
        NUMBER_29: 29 as DirectActivityModeTypeEnum,
        NUMBER_30: 30 as DirectActivityModeTypeEnum,
        NUMBER_31: 31 as DirectActivityModeTypeEnum,
        NUMBER_32: 32 as DirectActivityModeTypeEnum,
        NUMBER_37: 37 as DirectActivityModeTypeEnum,
        NUMBER_38: 38 as DirectActivityModeTypeEnum,
        NUMBER_39: 39 as DirectActivityModeTypeEnum,
        NUMBER_40: 40 as DirectActivityModeTypeEnum,
        NUMBER_41: 41 as DirectActivityModeTypeEnum,
        NUMBER_42: 42 as DirectActivityModeTypeEnum,
        NUMBER_43: 43 as DirectActivityModeTypeEnum,
        NUMBER_44: 44 as DirectActivityModeTypeEnum,
        NUMBER_45: 45 as DirectActivityModeTypeEnum,
        NUMBER_46: 46 as DirectActivityModeTypeEnum,
        NUMBER_47: 47 as DirectActivityModeTypeEnum,
        NUMBER_48: 48 as DirectActivityModeTypeEnum,
        NUMBER_49: 49 as DirectActivityModeTypeEnum,
        NUMBER_50: 50 as DirectActivityModeTypeEnum,
        NUMBER_51: 51 as DirectActivityModeTypeEnum,
        NUMBER_52: 52 as DirectActivityModeTypeEnum,
        NUMBER_53: 53 as DirectActivityModeTypeEnum,
        NUMBER_54: 54 as DirectActivityModeTypeEnum,
        NUMBER_55: 55 as DirectActivityModeTypeEnum,
        NUMBER_56: 56 as DirectActivityModeTypeEnum,
        NUMBER_57: 57 as DirectActivityModeTypeEnum,
        NUMBER_58: 58 as DirectActivityModeTypeEnum,
        NUMBER_59: 59 as DirectActivityModeTypeEnum,
        NUMBER_60: 60 as DirectActivityModeTypeEnum,
        NUMBER_61: 61 as DirectActivityModeTypeEnum,
        NUMBER_62: 62 as DirectActivityModeTypeEnum,
        NUMBER_63: 63 as DirectActivityModeTypeEnum,
        NUMBER_64: 64 as DirectActivityModeTypeEnum,
        NUMBER_65: 65 as DirectActivityModeTypeEnum,
        NUMBER_66: 66 as DirectActivityModeTypeEnum,
        NUMBER_67: 67 as DirectActivityModeTypeEnum,
        NUMBER_68: 68 as DirectActivityModeTypeEnum,
        NUMBER_69: 69 as DirectActivityModeTypeEnum,
        NUMBER_70: 70 as DirectActivityModeTypeEnum,
        NUMBER_71: 71 as DirectActivityModeTypeEnum,
        NUMBER_72: 72 as DirectActivityModeTypeEnum,
        NUMBER_73: 73 as DirectActivityModeTypeEnum,
        NUMBER_74: 74 as DirectActivityModeTypeEnum,
        NUMBER_75: 75 as DirectActivityModeTypeEnum,
        NUMBER_76: 76 as DirectActivityModeTypeEnum,
        NUMBER_77: 77 as DirectActivityModeTypeEnum,
        NUMBER_78: 78 as DirectActivityModeTypeEnum,
        NUMBER_79: 79 as DirectActivityModeTypeEnum,
        NUMBER_80: 80 as DirectActivityModeTypeEnum,
        NUMBER_81: 81 as DirectActivityModeTypeEnum
    };
}

