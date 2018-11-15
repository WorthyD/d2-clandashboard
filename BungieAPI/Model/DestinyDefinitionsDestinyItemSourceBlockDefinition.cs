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
    /// Data about an item&#39;s \&quot;sources\&quot;: ways that the item can be obtained.
    /// </summary>
    [DataContract]
    public partial class DestinyDefinitionsDestinyItemSourceBlockDefinition :  IEquatable<DestinyDefinitionsDestinyItemSourceBlockDefinition>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDefinitionsDestinyItemSourceBlockDefinition" /> class.
        /// </summary>
        /// <param name="SourceHashes">The list of hash identifiers for Reward Sources that hint where the item can be found (DestinyRewardSourceDefinition)..</param>
        /// <param name="Sources">A collection of details about the stats that were computed for the ways we found that the item could be spawned..</param>
        /// <param name="Exclusive">If we found that this item is exclusive to a specific platform, this will be set to the BungieMembershipType enumeration that matches that platform..</param>
        public DestinyDefinitionsDestinyItemSourceBlockDefinition(List<uint?> SourceHashes = default(List<uint?>), List<DestinyDefinitionsSourcesDestinyItemSourceDefinition> Sources = default(List<DestinyDefinitionsSourcesDestinyItemSourceDefinition>), BungieMembershipType Exclusive = default(BungieMembershipType))
        {
            this.SourceHashes = SourceHashes;
            this.Sources = Sources;
            this.Exclusive = Exclusive;
        }
        
        /// <summary>
        /// The list of hash identifiers for Reward Sources that hint where the item can be found (DestinyRewardSourceDefinition).
        /// </summary>
        /// <value>The list of hash identifiers for Reward Sources that hint where the item can be found (DestinyRewardSourceDefinition).</value>
        [DataMember(Name="sourceHashes", EmitDefaultValue=false)]
        public List<uint?> SourceHashes { get; set; }

        /// <summary>
        /// A collection of details about the stats that were computed for the ways we found that the item could be spawned.
        /// </summary>
        /// <value>A collection of details about the stats that were computed for the ways we found that the item could be spawned.</value>
        [DataMember(Name="sources", EmitDefaultValue=false)]
        public List<DestinyDefinitionsSourcesDestinyItemSourceDefinition> Sources { get; set; }

        /// <summary>
        /// If we found that this item is exclusive to a specific platform, this will be set to the BungieMembershipType enumeration that matches that platform.
        /// </summary>
        /// <value>If we found that this item is exclusive to a specific platform, this will be set to the BungieMembershipType enumeration that matches that platform.</value>
        [DataMember(Name="exclusive", EmitDefaultValue=false)]
        public BungieMembershipType Exclusive { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyDefinitionsDestinyItemSourceBlockDefinition {\n");
            sb.Append("  SourceHashes: ").Append(SourceHashes).Append("\n");
            sb.Append("  Sources: ").Append(Sources).Append("\n");
            sb.Append("  Exclusive: ").Append(Exclusive).Append("\n");
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
            return this.Equals(input as DestinyDefinitionsDestinyItemSourceBlockDefinition);
        }

        /// <summary>
        /// Returns true if DestinyDefinitionsDestinyItemSourceBlockDefinition instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDefinitionsDestinyItemSourceBlockDefinition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDefinitionsDestinyItemSourceBlockDefinition input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.SourceHashes == input.SourceHashes ||
                    this.SourceHashes != null &&
                    this.SourceHashes.SequenceEqual(input.SourceHashes)
                ) && 
                (
                    this.Sources == input.Sources ||
                    this.Sources != null &&
                    this.Sources.SequenceEqual(input.Sources)
                ) && 
                (
                    this.Exclusive == input.Exclusive ||
                    (this.Exclusive != null &&
                    this.Exclusive.Equals(input.Exclusive))
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
                if (this.SourceHashes != null)
                    hashCode = hashCode * 59 + this.SourceHashes.GetHashCode();
                if (this.Sources != null)
                    hashCode = hashCode * 59 + this.Sources.GetHashCode();
                if (this.Exclusive != null)
                    hashCode = hashCode * 59 + this.Exclusive.GetHashCode();
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
