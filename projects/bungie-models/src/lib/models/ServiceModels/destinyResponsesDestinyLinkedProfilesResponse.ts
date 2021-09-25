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
import { DestinyResponsesDestinyProfileUserInfoCard } from './destinyResponsesDestinyProfileUserInfoCard';
import { UserUserInfoCard } from './userUserInfoCard';
import { DestinyResponsesDestinyErrorProfile } from './destinyResponsesDestinyErrorProfile';

/**
 * I know what you seek. You seek linked accounts. Found them, you have.  This contract returns a minimal amount of data about Destiny Accounts that are linked through your Bungie.Net account. We will not return accounts in this Response whose
 */
export interface DestinyResponsesDestinyLinkedProfilesResponse {
  /**
   * Any Destiny account for whom we could successfully pull characters will be returned here, as the Platform-level summary of user data. (no character data, no Destiny account data other than the Membership ID and Type so you can make further queries)
   */
  profiles?: Array<DestinyResponsesDestinyProfileUserInfoCard>;
  /**
   * If the requested membership had a linked Bungie.Net membership ID, this is the basic information about that BNet account.  I know, Tetron; I know this is mixing UserServices concerns with DestinyServices concerns. But it\'s so damn convenient! https://www.youtube.com/watch?v=X5R-bB-gKVI
   */
  bnetMembership?: UserUserInfoCard;
  /**
   * This is brief summary info for profiles that we believe have valid Destiny info, but who failed to return data for some other reason and thus we know that subsequent calls for their info will also fail.
   */
  profilesWithErrors?: Array<DestinyResponsesDestinyErrorProfile>;
}
