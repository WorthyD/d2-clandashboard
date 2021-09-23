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
import { UserUserToUserContext } from './userUserToUserContext';

export interface UserGeneralUser {
  membershipId?: number;
  uniqueName?: string;
  normalizedName?: string;
  displayName?: string;
  profilePicture?: number;
  profileTheme?: number;
  userTitle?: number;
  successMessageFlags?: number;
  isDeleted?: boolean;
  about?: string;
  firstAccess?: string;
  lastUpdate?: string;
  legacyPortalUID?: number;
  context?: UserUserToUserContext;
  psnDisplayName?: string;
  xboxDisplayName?: string;
  fbDisplayName?: string;
  showActivity?: boolean;
  locale?: string;
  localeInheritDefault?: boolean;
  lastBanReportId?: number;
  showGroupMessaging?: boolean;
  profilePicturePath?: string;
  profilePictureWidePath?: string;
  profileThemeName?: string;
  userTitleDisplay?: string;
  statusText?: string;
  statusDate?: string;
  profileBanExpire?: string;
  blizzardDisplayName?: string;
  steamDisplayName?: string;
  stadiaDisplayName?: string;
  twitchDisplayName?: string;
  cachedBungieGlobalDisplayName?: string;
  cachedBungieGlobalDisplayNameCode?: number;
}
