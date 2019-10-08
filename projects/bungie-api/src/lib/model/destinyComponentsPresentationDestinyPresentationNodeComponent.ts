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
import { DestinyQuestsDestinyObjectiveProgress } from './destinyQuestsDestinyObjectiveProgress';


export interface DestinyComponentsPresentationDestinyPresentationNodeComponent { 
    state?: number;
    /**
     * An optional property: presentation nodes MAY have objectives, which can be used to infer more human readable data about the progress. However, progressValue and completionValue ought to be considered the canonical values for progress on Progression Nodes.
     */
    objective?: DestinyQuestsDestinyObjectiveProgress;
    /**
     * How much of the presentation node is considered to be completed so far by the given character/profile.
     */
    progressValue?: number;
    /**
     * The value at which the presentation ode is considered to be completed.
     */
    completionValue?: number;
}

