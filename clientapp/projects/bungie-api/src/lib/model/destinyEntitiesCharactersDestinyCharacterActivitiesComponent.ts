/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.5
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyDestinyActivity } from './destinyDestinyActivity';


/**
 * This component holds activity data for a character. It will tell you about the character's current activity status, as well as activities that are available to the user.
 */
export interface DestinyEntitiesCharactersDestinyCharacterActivitiesComponent { 
    /**
     * The last date that the user started playing an activity.
     */
    dateActivityStarted?: Date;
    /**
     * The list of activities that the user can play.
     */
    availableActivities?: Array<DestinyDestinyActivity>;
    /**
     * If the user is in an activity, this will be the hash of the Activity being played. Note that you must combine this info with currentActivityModeHash to get a real picture of what the user is doing right now. For instance, PVP \"Activities\" are just maps: it's the ActivityMode that determines what type of PVP game they're playing.
     */
    currentActivityHash?: number;
    /**
     * If the user is in an activity, this will be the hash of the activity mode being played. Combine with currentActivityHash to give a person a full picture of what they're doing right now.
     */
    currentActivityModeHash?: number;
    /**
     * And the current activity's most specific mode type, if it can be found.
     */
    currentActivityModeType?: DestinyEntitiesCharactersDestinyCharacterActivitiesComponent.CurrentActivityModeTypeEnum;
    /**
     * If the user is in an activity, this will be the hashes of the DestinyActivityModeDefinition being played. Combine with currentActivityHash to give a person a full picture of what they're doing right now.
     */
    currentActivityModeHashes?: Array<number>;
    /**
     * All Activity Modes that apply to the current activity being played, in enum form.
     */
    currentActivityModeTypes?: Array<number>;
    /**
     * If the user is in a playlist, this is the hash identifier for the playlist that they chose.
     */
    currentPlaylistActivityHash?: number;
    /**
     * This will have the activity hash of the last completed story/campaign mission, in case you care about that.
     */
    lastCompletedStoryHash?: number;
}
export namespace DestinyEntitiesCharactersDestinyCharacterActivitiesComponent {
    export type CurrentActivityModeTypeEnum = 0 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 10 | 11 | 12 | 13 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76;
    export const CurrentActivityModeTypeEnum = {
        NUMBER_0: 0 as CurrentActivityModeTypeEnum,
        NUMBER_2: 2 as CurrentActivityModeTypeEnum,
        NUMBER_3: 3 as CurrentActivityModeTypeEnum,
        NUMBER_4: 4 as CurrentActivityModeTypeEnum,
        NUMBER_5: 5 as CurrentActivityModeTypeEnum,
        NUMBER_6: 6 as CurrentActivityModeTypeEnum,
        NUMBER_7: 7 as CurrentActivityModeTypeEnum,
        NUMBER_9: 9 as CurrentActivityModeTypeEnum,
        NUMBER_10: 10 as CurrentActivityModeTypeEnum,
        NUMBER_11: 11 as CurrentActivityModeTypeEnum,
        NUMBER_12: 12 as CurrentActivityModeTypeEnum,
        NUMBER_13: 13 as CurrentActivityModeTypeEnum,
        NUMBER_15: 15 as CurrentActivityModeTypeEnum,
        NUMBER_16: 16 as CurrentActivityModeTypeEnum,
        NUMBER_17: 17 as CurrentActivityModeTypeEnum,
        NUMBER_18: 18 as CurrentActivityModeTypeEnum,
        NUMBER_19: 19 as CurrentActivityModeTypeEnum,
        NUMBER_20: 20 as CurrentActivityModeTypeEnum,
        NUMBER_21: 21 as CurrentActivityModeTypeEnum,
        NUMBER_22: 22 as CurrentActivityModeTypeEnum,
        NUMBER_24: 24 as CurrentActivityModeTypeEnum,
        NUMBER_25: 25 as CurrentActivityModeTypeEnum,
        NUMBER_26: 26 as CurrentActivityModeTypeEnum,
        NUMBER_27: 27 as CurrentActivityModeTypeEnum,
        NUMBER_28: 28 as CurrentActivityModeTypeEnum,
        NUMBER_29: 29 as CurrentActivityModeTypeEnum,
        NUMBER_30: 30 as CurrentActivityModeTypeEnum,
        NUMBER_31: 31 as CurrentActivityModeTypeEnum,
        NUMBER_32: 32 as CurrentActivityModeTypeEnum,
        NUMBER_37: 37 as CurrentActivityModeTypeEnum,
        NUMBER_38: 38 as CurrentActivityModeTypeEnum,
        NUMBER_39: 39 as CurrentActivityModeTypeEnum,
        NUMBER_40: 40 as CurrentActivityModeTypeEnum,
        NUMBER_41: 41 as CurrentActivityModeTypeEnum,
        NUMBER_42: 42 as CurrentActivityModeTypeEnum,
        NUMBER_43: 43 as CurrentActivityModeTypeEnum,
        NUMBER_44: 44 as CurrentActivityModeTypeEnum,
        NUMBER_45: 45 as CurrentActivityModeTypeEnum,
        NUMBER_46: 46 as CurrentActivityModeTypeEnum,
        NUMBER_47: 47 as CurrentActivityModeTypeEnum,
        NUMBER_48: 48 as CurrentActivityModeTypeEnum,
        NUMBER_49: 49 as CurrentActivityModeTypeEnum,
        NUMBER_50: 50 as CurrentActivityModeTypeEnum,
        NUMBER_51: 51 as CurrentActivityModeTypeEnum,
        NUMBER_52: 52 as CurrentActivityModeTypeEnum,
        NUMBER_53: 53 as CurrentActivityModeTypeEnum,
        NUMBER_54: 54 as CurrentActivityModeTypeEnum,
        NUMBER_55: 55 as CurrentActivityModeTypeEnum,
        NUMBER_56: 56 as CurrentActivityModeTypeEnum,
        NUMBER_57: 57 as CurrentActivityModeTypeEnum,
        NUMBER_58: 58 as CurrentActivityModeTypeEnum,
        NUMBER_59: 59 as CurrentActivityModeTypeEnum,
        NUMBER_60: 60 as CurrentActivityModeTypeEnum,
        NUMBER_61: 61 as CurrentActivityModeTypeEnum,
        NUMBER_62: 62 as CurrentActivityModeTypeEnum,
        NUMBER_63: 63 as CurrentActivityModeTypeEnum,
        NUMBER_64: 64 as CurrentActivityModeTypeEnum,
        NUMBER_65: 65 as CurrentActivityModeTypeEnum,
        NUMBER_66: 66 as CurrentActivityModeTypeEnum,
        NUMBER_67: 67 as CurrentActivityModeTypeEnum,
        NUMBER_68: 68 as CurrentActivityModeTypeEnum,
        NUMBER_69: 69 as CurrentActivityModeTypeEnum,
        NUMBER_70: 70 as CurrentActivityModeTypeEnum,
        NUMBER_71: 71 as CurrentActivityModeTypeEnum,
        NUMBER_72: 72 as CurrentActivityModeTypeEnum,
        NUMBER_73: 73 as CurrentActivityModeTypeEnum,
        NUMBER_74: 74 as CurrentActivityModeTypeEnum,
        NUMBER_75: 75 as CurrentActivityModeTypeEnum,
        NUMBER_76: 76 as CurrentActivityModeTypeEnum
    };
}

