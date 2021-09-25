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

/**
 * Represents the possible components that can be returned from Destiny \"Get\" calls such as GetProfile, GetCharacter, GetVendor etc...  When making one of these requests, you will pass one or more of these components as a comma separated list in the \"?components=\" querystring parameter. For instance, if you want baseline Profile data, Character Data, and character progressions, you would pass \"?components=Profiles,Characters,CharacterProgressions\" You may use either the numerical or string values.
 */
export type DestinyDestinyComponentType =
  | 0
  | 100
  | 101
  | 102
  | 103
  | 104
  | 105
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 309
  | 310
  | 400
  | 401
  | 402
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200;

export const DestinyDestinyComponentType = {
  NUMBER_0: 0 as DestinyDestinyComponentType,
  NUMBER_100: 100 as DestinyDestinyComponentType,
  NUMBER_101: 101 as DestinyDestinyComponentType,
  NUMBER_102: 102 as DestinyDestinyComponentType,
  NUMBER_103: 103 as DestinyDestinyComponentType,
  NUMBER_104: 104 as DestinyDestinyComponentType,
  NUMBER_105: 105 as DestinyDestinyComponentType,
  NUMBER_200: 200 as DestinyDestinyComponentType,
  NUMBER_201: 201 as DestinyDestinyComponentType,
  NUMBER_202: 202 as DestinyDestinyComponentType,
  NUMBER_203: 203 as DestinyDestinyComponentType,
  NUMBER_204: 204 as DestinyDestinyComponentType,
  NUMBER_205: 205 as DestinyDestinyComponentType,
  NUMBER_300: 300 as DestinyDestinyComponentType,
  NUMBER_301: 301 as DestinyDestinyComponentType,
  NUMBER_302: 302 as DestinyDestinyComponentType,
  NUMBER_303: 303 as DestinyDestinyComponentType,
  NUMBER_304: 304 as DestinyDestinyComponentType,
  NUMBER_305: 305 as DestinyDestinyComponentType,
  NUMBER_306: 306 as DestinyDestinyComponentType,
  NUMBER_307: 307 as DestinyDestinyComponentType,
  NUMBER_308: 308 as DestinyDestinyComponentType,
  NUMBER_309: 309 as DestinyDestinyComponentType,
  NUMBER_310: 310 as DestinyDestinyComponentType,
  NUMBER_400: 400 as DestinyDestinyComponentType,
  NUMBER_401: 401 as DestinyDestinyComponentType,
  NUMBER_402: 402 as DestinyDestinyComponentType,
  NUMBER_500: 500 as DestinyDestinyComponentType,
  NUMBER_600: 600 as DestinyDestinyComponentType,
  NUMBER_700: 700 as DestinyDestinyComponentType,
  NUMBER_800: 800 as DestinyDestinyComponentType,
  NUMBER_900: 900 as DestinyDestinyComponentType,
  NUMBER_1000: 1000 as DestinyDestinyComponentType,
  NUMBER_1100: 1100 as DestinyDestinyComponentType,
  NUMBER_1200: 1200 as DestinyDestinyComponentType
};
