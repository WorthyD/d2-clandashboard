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
 * Where the sausage gets made. Unlock Expressions are the foundation of the game's gating mechanics and investment-related restrictions. They can test Unlock Flags and Unlock Values for certain states, using a sufficient amount of logical operators such that unlock expressions are effectively Turing complete.  Use UnlockExpressionParser to evaluate expressions using an IUnlockContext parsed from Babel.
 */
export interface DestinyDefinitionsDestinyUnlockExpressionDefinition { 
    /**
     * A shortcut for determining the most restrictive gating that this expression performs. See the DestinyGatingScope enum's documentation for more details.
     */
    scope?: number;
}

