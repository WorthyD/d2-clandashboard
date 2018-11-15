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
    /// Defines a Character Class in Destiny 2. These are types of characters you can play, like Titan, Warlock, and Hunter.
    /// </summary>
    [DataContract]
    public partial class DestinyDefinitionsDestinyClassDefinition :  IEquatable<DestinyDefinitionsDestinyClassDefinition>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDefinitionsDestinyClassDefinition" /> class.
        /// </summary>
        /// <param name="ClassType">In Destiny 1, we added a convenience Enumeration for referring to classes. We&#39;ve kept it, though mostly for posterity. This is the enum value for this definition&#39;s class..</param>
        /// <param name="DisplayProperties">DisplayProperties.</param>
        /// <param name="GenderedClassNames">A localized string referring to the singular form of the Class&#39;s name when referred to in gendered form. Keyed by the DestinyGender..</param>
        /// <param name="MentorVendorHash">Mentors don&#39;t really mean anything anymore. Don&#39;t expect this to be populated..</param>
        /// <param name="Hash">The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to..</param>
        /// <param name="Index">The index of the entity as it was found in the investment tables..</param>
        /// <param name="Redacted">If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!.</param>
        public DestinyDefinitionsDestinyClassDefinition(DestinyDestinyClass ClassType = default(DestinyDestinyClass), DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition DisplayProperties = default(DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition), Dictionary<string, string> GenderedClassNames = default(Dictionary<string, string>), uint? MentorVendorHash = default(uint?), uint? Hash = default(uint?), int? Index = default(int?), bool? Redacted = default(bool?))
        {
            this.ClassType = ClassType;
            this.DisplayProperties = DisplayProperties;
            this.GenderedClassNames = GenderedClassNames;
            this.MentorVendorHash = MentorVendorHash;
            this.Hash = Hash;
            this.Index = Index;
            this.Redacted = Redacted;
        }
        
        /// <summary>
        /// In Destiny 1, we added a convenience Enumeration for referring to classes. We&#39;ve kept it, though mostly for posterity. This is the enum value for this definition&#39;s class.
        /// </summary>
        /// <value>In Destiny 1, we added a convenience Enumeration for referring to classes. We&#39;ve kept it, though mostly for posterity. This is the enum value for this definition&#39;s class.</value>
        [DataMember(Name="classType", EmitDefaultValue=false)]
        public DestinyDestinyClass ClassType { get; set; }

        /// <summary>
        /// Gets or Sets DisplayProperties
        /// </summary>
        [DataMember(Name="displayProperties", EmitDefaultValue=false)]
        public DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition DisplayProperties { get; set; }

        /// <summary>
        /// A localized string referring to the singular form of the Class&#39;s name when referred to in gendered form. Keyed by the DestinyGender.
        /// </summary>
        /// <value>A localized string referring to the singular form of the Class&#39;s name when referred to in gendered form. Keyed by the DestinyGender.</value>
        [DataMember(Name="genderedClassNames", EmitDefaultValue=false)]
        public Dictionary<string, string> GenderedClassNames { get; set; }

        /// <summary>
        /// Mentors don&#39;t really mean anything anymore. Don&#39;t expect this to be populated.
        /// </summary>
        /// <value>Mentors don&#39;t really mean anything anymore. Don&#39;t expect this to be populated.</value>
        [DataMember(Name="mentorVendorHash", EmitDefaultValue=false)]
        public uint? MentorVendorHash { get; set; }

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
            sb.Append("class DestinyDefinitionsDestinyClassDefinition {\n");
            sb.Append("  ClassType: ").Append(ClassType).Append("\n");
            sb.Append("  DisplayProperties: ").Append(DisplayProperties).Append("\n");
            sb.Append("  GenderedClassNames: ").Append(GenderedClassNames).Append("\n");
            sb.Append("  MentorVendorHash: ").Append(MentorVendorHash).Append("\n");
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
            return this.Equals(input as DestinyDefinitionsDestinyClassDefinition);
        }

        /// <summary>
        /// Returns true if DestinyDefinitionsDestinyClassDefinition instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDefinitionsDestinyClassDefinition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDefinitionsDestinyClassDefinition input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ClassType == input.ClassType ||
                    (this.ClassType != null &&
                    this.ClassType.Equals(input.ClassType))
                ) && 
                (
                    this.DisplayProperties == input.DisplayProperties ||
                    (this.DisplayProperties != null &&
                    this.DisplayProperties.Equals(input.DisplayProperties))
                ) && 
                (
                    this.GenderedClassNames == input.GenderedClassNames ||
                    this.GenderedClassNames != null &&
                    this.GenderedClassNames.SequenceEqual(input.GenderedClassNames)
                ) && 
                (
                    this.MentorVendorHash == input.MentorVendorHash ||
                    (this.MentorVendorHash != null &&
                    this.MentorVendorHash.Equals(input.MentorVendorHash))
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
                if (this.ClassType != null)
                    hashCode = hashCode * 59 + this.ClassType.GetHashCode();
                if (this.DisplayProperties != null)
                    hashCode = hashCode * 59 + this.DisplayProperties.GetHashCode();
                if (this.GenderedClassNames != null)
                    hashCode = hashCode * 59 + this.GenderedClassNames.GetHashCode();
                if (this.MentorVendorHash != null)
                    hashCode = hashCode * 59 + this.MentorVendorHash.GetHashCode();
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
