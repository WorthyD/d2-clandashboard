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
    /// The definition for an Activity Type.  In Destiny 2, an Activity Type represents a conceptual categorization of Activities.  These are most commonly used in the game for the subtitle under Activities, but BNet uses them extensively to identify and group activities by their common properties.  Unfortunately, there has been a movement away from providing the richer data in Destiny 2 that we used to get in Destiny 1 for Activity Types. For instance, Nightfalls are grouped under the same Activity Type as regular Strikes.   For this reason, BNet will eventually migrate toward Activity Modes as a better indicator of activity category. But for the time being, it is still referred to in many places across our codebase.
    /// </summary>
    [DataContract]
    public partial class DestinyDefinitionsDestinyActivityTypeDefinition :  IEquatable<DestinyDefinitionsDestinyActivityTypeDefinition>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDefinitionsDestinyActivityTypeDefinition" /> class.
        /// </summary>
        /// <param name="DisplayProperties">DisplayProperties.</param>
        /// <param name="Hash">The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to..</param>
        /// <param name="Index">The index of the entity as it was found in the investment tables..</param>
        /// <param name="Redacted">If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!.</param>
        public DestinyDefinitionsDestinyActivityTypeDefinition(DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition DisplayProperties = default(DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition), uint? Hash = default(uint?), int? Index = default(int?), bool? Redacted = default(bool?))
        {
            this.DisplayProperties = DisplayProperties;
            this.Hash = Hash;
            this.Index = Index;
            this.Redacted = Redacted;
        }
        
        /// <summary>
        /// Gets or Sets DisplayProperties
        /// </summary>
        [DataMember(Name="displayProperties", EmitDefaultValue=false)]
        public DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition DisplayProperties { get; set; }

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
            sb.Append("class DestinyDefinitionsDestinyActivityTypeDefinition {\n");
            sb.Append("  DisplayProperties: ").Append(DisplayProperties).Append("\n");
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
            return this.Equals(input as DestinyDefinitionsDestinyActivityTypeDefinition);
        }

        /// <summary>
        /// Returns true if DestinyDefinitionsDestinyActivityTypeDefinition instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDefinitionsDestinyActivityTypeDefinition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDefinitionsDestinyActivityTypeDefinition input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.DisplayProperties == input.DisplayProperties ||
                    (this.DisplayProperties != null &&
                    this.DisplayProperties.Equals(input.DisplayProperties))
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
                if (this.DisplayProperties != null)
                    hashCode = hashCode * 59 + this.DisplayProperties.GetHashCode();
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
