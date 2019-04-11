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
import { DestinyItemComponentSetOfint32 } from './destinyItemComponentSetOfint32';
import { DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent } from './dictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent';
import { SingleComponentResponseOfDestinyCurrenciesComponent } from './singleComponentResponseOfDestinyCurrenciesComponent';
import { SingleComponentResponseOfDestinyVendorCategoriesComponent } from './singleComponentResponseOfDestinyVendorCategoriesComponent';
import { SingleComponentResponseOfDestinyVendorComponent } from './singleComponentResponseOfDestinyVendorComponent';


/**
 * A response containing all of the components for a vendor.
 */
export interface DestinyResponsesDestinyVendorResponse { 
    /**
     * The base properties of the vendor.  COMPONENT TYPE: Vendors
     */
    vendor?: SingleComponentResponseOfDestinyVendorComponent;
    /**
     * Categories that the vendor has available, and references to the sales therein.  COMPONENT TYPE: VendorCategories
     */
    categories?: SingleComponentResponseOfDestinyVendorCategoriesComponent;
    /**
     * Sales, keyed by the vendorItemIndex of the item being sold.  COMPONENT TYPE: VendorSales
     */
    sales?: DictionaryComponentResponseOfint32AndDestinyVendorSaleItemComponent;
    /**
     * Item components, keyed by the vendorItemIndex of the active sale items.  COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
     */
    itemComponents?: DestinyItemComponentSetOfint32;
    /**
     * A \"lookup\" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.  COMPONENT TYPE: CurrencyLookups
     */
    currencyLookups?: SingleComponentResponseOfDestinyCurrenciesComponent;
}

