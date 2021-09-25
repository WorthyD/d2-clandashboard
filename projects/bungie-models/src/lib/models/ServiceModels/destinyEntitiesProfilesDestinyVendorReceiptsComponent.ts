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
import { DestinyVendorsDestinyVendorReceipt } from './destinyVendorsDestinyVendorReceipt';

/**
 * For now, this isn\'t used for much: it\'s a record of the recent refundable purchases that the user has made. In the future, it could be used for providing refunds/buyback via the API. Wouldn\'t that be fun?
 */
export interface DestinyEntitiesProfilesDestinyVendorReceiptsComponent {
  /**
   * The receipts for refundable purchases made at a vendor.
   */
  receipts?: Array<DestinyVendorsDestinyVendorReceipt>;
}
