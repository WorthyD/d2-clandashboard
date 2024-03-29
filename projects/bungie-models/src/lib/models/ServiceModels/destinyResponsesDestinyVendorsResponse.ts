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
import { DictionaryComponentResponseOfuint32AndDestinyVendorComponent } from './dictionaryComponentResponseOfuint32AndDestinyVendorComponent';
import { DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent } from './dictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent';
import { SingleComponentResponseOfDestinyStringVariablesComponent } from './singleComponentResponseOfDestinyStringVariablesComponent';
import { DictionaryComponentResponseOfuint32AndPersonalDestinyVendorSaleItemSetComponent } from './dictionaryComponentResponseOfuint32AndPersonalDestinyVendorSaleItemSetComponent';
import { SingleComponentResponseOfDestinyCurrenciesComponent } from './singleComponentResponseOfDestinyCurrenciesComponent';
import { DestinyItemComponentSetOfint32 } from './destinyItemComponentSetOfint32';
import { SingleComponentResponseOfDestinyVendorGroupComponent } from './singleComponentResponseOfDestinyVendorGroupComponent';

/**
 * A Response containing all of the components for all requested vendors.
 */
export interface DestinyResponsesDestinyVendorsResponse {
  /**
   * For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.  COMPONENT TYPE: Vendors
   */
  vendorGroups?: SingleComponentResponseOfDestinyVendorGroupComponent;
  /**
   * The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.  COMPONENT TYPE: Vendors
   */
  vendors?: DictionaryComponentResponseOfuint32AndDestinyVendorComponent;
  /**
   * Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.  COMPONENT TYPE: VendorCategories
   */
  categories?: DictionaryComponentResponseOfuint32AndDestinyVendorCategoriesComponent;
  /**
   * Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.  Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor\'s definition.  COMPONENT TYPE: VendorSales
   */
  sales?: DictionaryComponentResponseOfuint32AndPersonalDestinyVendorSaleItemSetComponent;
  /**
   * The set of item detail components, one set of item components per Vendor. These are keyed by the Vendor Hash, so you will get one Item Component Set per vendor returned.  The components contained inside are themselves keyed by the vendorSaleIndex, and will have whatever item-level components you requested (Sockets, Stats, Instance data etc...) per item being sold by the vendor.
   */
  itemComponents?: { [key: string]: DestinyItemComponentSetOfint32 };
  /**
   * A \"lookup\" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.  COMPONENT TYPE: CurrencyLookups
   */
  currencyLookups?: SingleComponentResponseOfDestinyCurrenciesComponent;
  /**
   * A map of string variable values by hash for this character context.  COMPONENT TYPE: StringVariables
   */
  stringVariables?: SingleComponentResponseOfDestinyStringVariablesComponent;
}
