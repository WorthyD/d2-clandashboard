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
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from './destinyDefinitionsCommonDestinyDisplayPropertiesDefinition';
import { DestinyDefinitionsPresentationDestinyPresentationNodeChildrenBlock } from './destinyDefinitionsPresentationDestinyPresentationNodeChildrenBlock';
import { DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock } from './destinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock';


/**
 * A PresentationNode is an entity that represents a logical grouping of other entities visually/organizationally.  For now, Presentation Nodes may contain the following... but it may be used for more in the future:  - Collectibles - Records (Or, as the public will call them, \"Triumphs.\" Don't ask me why we're overloading the term \"Triumph\", it still hurts me to think about it) - Other Presentation Nodes, allowing a tree of Presentation Nodes to be created  Part of me wants to break these into conceptual definitions per entity being collected, but the possibility of these different types being mixed in the same UI and the possibility that it could actually be more useful to return the \"bare metal\" presentation node concept has resulted in me deciding against that for the time being.  We'll see if I come to regret this as well.
 */
export interface DestinyDefinitionsPresentationDestinyPresentationNodeDefinition { 
    displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
    /**
     * The original icon for this presentation node, before we futzed with it.
     */
    originalIcon?: string;
    /**
     * Some presentation nodes are meant to be explicitly shown on the \"root\" or \"entry\" screens for the feature to which they are related. You should use this icon when showing them on such a view, if you have a similar \"entry point\" view in your UI. If you don't have a UI, then I guess it doesn't matter either way does it?
     */
    rootViewIcon?: string;
    nodeType?: number;
    /**
     * Indicates whether this presentation node's state is determined on a per-character or on an account-wide basis.
     */
    scope?: number;
    /**
     * If this presentation node shows a related objective (for instance, if it tracks the progress of its children), the objective being tracked is indicated here.
     */
    objectiveHash?: number;
    /**
     * If this presentation node has an associated \"Record\" that you can accomplish for completing its children, this is the identifier of that Record.
     */
    completionRecordHash?: number;
    /**
     * The child entities contained by this presentation node.
     */
    children?: DestinyDefinitionsPresentationDestinyPresentationNodeChildrenBlock;
    /**
     * A hint for how to display this presentation node when it's shown in a list.
     */
    displayStyle?: number;
    /**
     * A hint for how to display this presentation node when it's shown in its own detail screen.
     */
    screenStyle?: number;
    /**
     * The requirements for being able to interact with this presentation node and its children.
     */
    requirements?: DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock;
    /**
     * If this presentation node has children, but the game doesn't let you inspect the details of those children, that is indicated here.
     */
    disableChildSubscreenNavigation?: boolean;
    /**
     * A quick reference to presentation nodes that have this node as a child. (presentation nodes can be parented under multiple parents)
     */
    parentNodeHashes?: Array<number>;
    /**
     * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to.
     */
    hash?: number;
    /**
     * The index of the entity as it was found in the investment tables.
     */
    index?: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
     */
    redacted?: boolean;
}

