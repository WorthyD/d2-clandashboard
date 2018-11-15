/* 
 * Bungie.Net API
 *
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.2
 * Contact: support@bungie.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = BungieAPI.Client.SwaggerDateConverter;

namespace BungieAPI.Model
{
    /// <summary>
    /// Represents a Map View in the director: be them overview views, destination views, or other.  They have nodes which map to activities, and other various visual elements that we (or others) may or may not be able to use.  Activity graphs, most importantly, have nodes which can have activities in various states of playability.  Unfortunately, activity graphs are combined at runtime with Game UI-only assets such as fragments of map images, various in-game special effects, decals etc... that we don&#39;t get in these definitions.  If we end up having time, we may end up trying to manually populate those here: but the last time we tried that, before the lead-up to D1, it proved to be unmaintainable as the game&#39;s content changed. So don&#39;t bet the farm on us providing that content in this definition.
    /// </summary>
    [DataContract]
    public partial class DestinyDefinitionsDirectorDestinyActivityGraphDefinition :  IEquatable<DestinyDefinitionsDirectorDestinyActivityGraphDefinition>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDefinitionsDirectorDestinyActivityGraphDefinition" /> class.
        /// </summary>
        /// <param name="Nodes">These represent the visual \&quot;nodes\&quot; on the map&#39;s view. These are the activities you can click on in the map..</param>
        /// <param name="ArtElements">Represents one-off/special UI elements that appear on the map..</param>
        /// <param name="Connections">Represents connections between graph nodes. However, it lacks context that we&#39;d need to make good use of it..</param>
        /// <param name="DisplayObjectives">Objectives can display on maps, and this is supposedly metadata for that. I have not had the time to analyze the details of what is useful within however: we could be missing important data to make this work. Expect this property to be expanded on later if possible..</param>
        /// <param name="DisplayProgressions">Progressions can also display on maps, but similarly to displayObjectives we appear to lack some required information and context right now. We will have to look into it later and add more data if possible..</param>
        /// <param name="LinkedGraphs">Represents links between this Activity Graph and other ones..</param>
        /// <param name="Hash">The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to..</param>
        /// <param name="Index">The index of the entity as it was found in the investment tables..</param>
        /// <param name="Redacted">If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!.</param>
        public DestinyDefinitionsDirectorDestinyActivityGraphDefinition(List<DestinyDefinitionsDirectorDestinyActivityGraphNodeDefinition> Nodes = default(List<DestinyDefinitionsDirectorDestinyActivityGraphNodeDefinition>), List<DestinyDefinitionsDirectorDestinyActivityGraphArtElementDefinition> ArtElements = default(List<DestinyDefinitionsDirectorDestinyActivityGraphArtElementDefinition>), List<DestinyDefinitionsDirectorDestinyActivityGraphConnectionDefinition> Connections = default(List<DestinyDefinitionsDirectorDestinyActivityGraphConnectionDefinition>), List<DestinyDefinitionsDirectorDestinyActivityGraphDisplayObjectiveDefinition> DisplayObjectives = default(List<DestinyDefinitionsDirectorDestinyActivityGraphDisplayObjectiveDefinition>), List<DestinyDefinitionsDirectorDestinyActivityGraphDisplayProgressionDefinition> DisplayProgressions = default(List<DestinyDefinitionsDirectorDestinyActivityGraphDisplayProgressionDefinition>), List<DestinyDefinitionsDirectorDestinyLinkedGraphDefinition> LinkedGraphs = default(List<DestinyDefinitionsDirectorDestinyLinkedGraphDefinition>), uint? Hash = default(uint?), int? Index = default(int?), bool? Redacted = default(bool?))
        {
            this.Nodes = Nodes;
            this.ArtElements = ArtElements;
            this.Connections = Connections;
            this.DisplayObjectives = DisplayObjectives;
            this.DisplayProgressions = DisplayProgressions;
            this.LinkedGraphs = LinkedGraphs;
            this.Hash = Hash;
            this.Index = Index;
            this.Redacted = Redacted;
        }
        
        /// <summary>
        /// These represent the visual \&quot;nodes\&quot; on the map&#39;s view. These are the activities you can click on in the map.
        /// </summary>
        /// <value>These represent the visual \&quot;nodes\&quot; on the map&#39;s view. These are the activities you can click on in the map.</value>
        [DataMember(Name="nodes", EmitDefaultValue=false)]
        public List<DestinyDefinitionsDirectorDestinyActivityGraphNodeDefinition> Nodes { get; set; }

        /// <summary>
        /// Represents one-off/special UI elements that appear on the map.
        /// </summary>
        /// <value>Represents one-off/special UI elements that appear on the map.</value>
        [DataMember(Name="artElements", EmitDefaultValue=false)]
        public List<DestinyDefinitionsDirectorDestinyActivityGraphArtElementDefinition> ArtElements { get; set; }

        /// <summary>
        /// Represents connections between graph nodes. However, it lacks context that we&#39;d need to make good use of it.
        /// </summary>
        /// <value>Represents connections between graph nodes. However, it lacks context that we&#39;d need to make good use of it.</value>
        [DataMember(Name="connections", EmitDefaultValue=false)]
        public List<DestinyDefinitionsDirectorDestinyActivityGraphConnectionDefinition> Connections { get; set; }

        /// <summary>
        /// Objectives can display on maps, and this is supposedly metadata for that. I have not had the time to analyze the details of what is useful within however: we could be missing important data to make this work. Expect this property to be expanded on later if possible.
        /// </summary>
        /// <value>Objectives can display on maps, and this is supposedly metadata for that. I have not had the time to analyze the details of what is useful within however: we could be missing important data to make this work. Expect this property to be expanded on later if possible.</value>
        [DataMember(Name="displayObjectives", EmitDefaultValue=false)]
        public List<DestinyDefinitionsDirectorDestinyActivityGraphDisplayObjectiveDefinition> DisplayObjectives { get; set; }

        /// <summary>
        /// Progressions can also display on maps, but similarly to displayObjectives we appear to lack some required information and context right now. We will have to look into it later and add more data if possible.
        /// </summary>
        /// <value>Progressions can also display on maps, but similarly to displayObjectives we appear to lack some required information and context right now. We will have to look into it later and add more data if possible.</value>
        [DataMember(Name="displayProgressions", EmitDefaultValue=false)]
        public List<DestinyDefinitionsDirectorDestinyActivityGraphDisplayProgressionDefinition> DisplayProgressions { get; set; }

        /// <summary>
        /// Represents links between this Activity Graph and other ones.
        /// </summary>
        /// <value>Represents links between this Activity Graph and other ones.</value>
        [DataMember(Name="linkedGraphs", EmitDefaultValue=false)]
        public List<DestinyDefinitionsDirectorDestinyLinkedGraphDefinition> LinkedGraphs { get; set; }

        /// <summary>
        /// The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to.
        /// </summary>
        /// <value>The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to.</value>
        [DataMember(Name="hash", EmitDefaultValue=false)]
        public uint? Hash { get; set; }

        /// <summary>
        /// The index of the entity as it was found in the investment tables.
        /// </summary>
        /// <value>The index of the entity as it was found in the investment tables.</value>
        [DataMember(Name="index", EmitDefaultValue=false)]
        public int? Index { get; set; }

        /// <summary>
        /// If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
        /// </summary>
        /// <value>If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!</value>
        [DataMember(Name="redacted", EmitDefaultValue=false)]
        public bool? Redacted { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyDefinitionsDirectorDestinyActivityGraphDefinition {\n");
            sb.Append("  Nodes: ").Append(Nodes).Append("\n");
            sb.Append("  ArtElements: ").Append(ArtElements).Append("\n");
            sb.Append("  Connections: ").Append(Connections).Append("\n");
            sb.Append("  DisplayObjectives: ").Append(DisplayObjectives).Append("\n");
            sb.Append("  DisplayProgressions: ").Append(DisplayProgressions).Append("\n");
            sb.Append("  LinkedGraphs: ").Append(LinkedGraphs).Append("\n");
            sb.Append("  Hash: ").Append(Hash).Append("\n");
            sb.Append("  Index: ").Append(Index).Append("\n");
            sb.Append("  Redacted: ").Append(Redacted).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as DestinyDefinitionsDirectorDestinyActivityGraphDefinition);
        }

        /// <summary>
        /// Returns true if DestinyDefinitionsDirectorDestinyActivityGraphDefinition instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDefinitionsDirectorDestinyActivityGraphDefinition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDefinitionsDirectorDestinyActivityGraphDefinition input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Nodes == input.Nodes ||
                    this.Nodes != null &&
                    this.Nodes.SequenceEqual(input.Nodes)
                ) && 
                (
                    this.ArtElements == input.ArtElements ||
                    this.ArtElements != null &&
                    this.ArtElements.SequenceEqual(input.ArtElements)
                ) && 
                (
                    this.Connections == input.Connections ||
                    this.Connections != null &&
                    this.Connections.SequenceEqual(input.Connections)
                ) && 
                (
                    this.DisplayObjectives == input.DisplayObjectives ||
                    this.DisplayObjectives != null &&
                    this.DisplayObjectives.SequenceEqual(input.DisplayObjectives)
                ) && 
                (
                    this.DisplayProgressions == input.DisplayProgressions ||
                    this.DisplayProgressions != null &&
                    this.DisplayProgressions.SequenceEqual(input.DisplayProgressions)
                ) && 
                (
                    this.LinkedGraphs == input.LinkedGraphs ||
                    this.LinkedGraphs != null &&
                    this.LinkedGraphs.SequenceEqual(input.LinkedGraphs)
                ) && 
                (
                    this.Hash == input.Hash ||
                    (this.Hash != null &&
                    this.Hash.Equals(input.Hash))
                ) && 
                (
                    this.Index == input.Index ||
                    (this.Index != null &&
                    this.Index.Equals(input.Index))
                ) && 
                (
                    this.Redacted == input.Redacted ||
                    (this.Redacted != null &&
                    this.Redacted.Equals(input.Redacted))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Nodes != null)
                    hashCode = hashCode * 59 + this.Nodes.GetHashCode();
                if (this.ArtElements != null)
                    hashCode = hashCode * 59 + this.ArtElements.GetHashCode();
                if (this.Connections != null)
                    hashCode = hashCode * 59 + this.Connections.GetHashCode();
                if (this.DisplayObjectives != null)
                    hashCode = hashCode * 59 + this.DisplayObjectives.GetHashCode();
                if (this.DisplayProgressions != null)
                    hashCode = hashCode * 59 + this.DisplayProgressions.GetHashCode();
                if (this.LinkedGraphs != null)
                    hashCode = hashCode * 59 + this.LinkedGraphs.GetHashCode();
                if (this.Hash != null)
                    hashCode = hashCode * 59 + this.Hash.GetHashCode();
                if (this.Index != null)
                    hashCode = hashCode * 59 + this.Index.GetHashCode();
                if (this.Redacted != null)
                    hashCode = hashCode * 59 + this.Redacted.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
