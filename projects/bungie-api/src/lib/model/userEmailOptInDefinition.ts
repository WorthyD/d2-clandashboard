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
import { UserEmailSubscriptionDefinition } from './userEmailSubscriptionDefinition';


/**
 * Defines a single opt-in category: a wide-scoped permission to send emails for the subject related to the opt-in.
 */
export interface UserEmailOptInDefinition { 
    /**
     * The unique identifier for this opt-in category.
     */
    name?: string;
    /**
     * The flag value for this opt-in category. For historical reasons, this is defined as a flags enum.
     */
    value?: number;
    /**
     * If true, this opt-in setting should be set by default in situations where accounts are created without explicit choices about what they're opting into.
     */
    setByDefault?: boolean;
    /**
     * Information about the dependent subscriptions for this opt-in.
     */
    dependentSubscriptions?: Array<UserEmailSubscriptionDefinition>;
}

