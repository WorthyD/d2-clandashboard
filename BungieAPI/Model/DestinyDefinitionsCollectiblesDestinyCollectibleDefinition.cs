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
    /// Defines a
    /// </summary>
    [DataContract]
    public partial class DestinyDefinitionsCollectiblesDestinyCollectibleDefinition :  IEquatable<DestinyDefinitionsCollectiblesDestinyCollectibleDefinition>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDefinitionsCollectiblesDestinyCollectibleDefinition" /> class.
        /// </summary>
        /// <param name="DisplayProperties">DisplayProperties.</param>
        /// <param name="Scope">Indicates whether this Collectible&#39;s state is determined on a per-character or on an account-wide basis..</param>
        /// <param name="SourceString">A human readable string for a hint about how to acquire the item..</param>
        /// <param name="SourceHash">This is a hash identifier we are building on the BNet side in an attempt to let people group collectibles by similar sources.  I can&#39;t promise that it&#39;s going to be 100% accurate, but if the designers were consistent in assigning the same source strings to items with the same sources, it *ought to* be. No promises though.  This hash also doesn&#39;t relate to an actual definition, just to note: we&#39;ve got nothing useful other than the source string for this data..</param>
        /// <param name="ItemHash">ItemHash.</param>
        /// <param name="AcquisitionInfo">AcquisitionInfo.</param>
        /// <param name="StateInfo">StateInfo.</param>
        /// <param name="PresentationInfo">PresentationInfo.</param>
        /// <param name="Hash">The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to..</param>
        /// <param name="Index">The index of the entity as it was found in the investment tables..</param>
        /// <param name="Redacted">If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!.</param>
        public DestinyDefinitionsCollectiblesDestinyCollectibleDefinition(DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition DisplayProperties = default(DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition), DestinyDestinyScope Scope = default(DestinyDestinyScope), string SourceString = default(string), uint? SourceHash = default(uint?), uint? ItemHash = default(uint?), DestinyDefinitionsCollectiblesDestinyCollectibleAcquisitionBlock AcquisitionInfo = default(DestinyDefinitionsCollectiblesDestinyCollectibleAcquisitionBlock), DestinyDefinitionsCollectiblesDestinyCollectibleStateBlock StateInfo = default(DestinyDefinitionsCollectiblesDestinyCollectibleStateBlock), DestinyDefinitionsPresentationDestinyPresentationChildBlock PresentationInfo = default(DestinyDefinitionsPresentationDestinyPresentationChildBlock), uint? Hash = default(uint?), int? Index = default(int?), bool? Redacted = default(bool?))
        {
            this.DisplayProperties = DisplayProperties;
            this.Scope = Scope;
            this.SourceString = SourceString;
            this.SourceHash = SourceHash;
            this.ItemHash = ItemHash;
            this.AcquisitionInfo = AcquisitionInfo;
            this.StateInfo = StateInfo;
            this.PresentationInfo = PresentationInfo;
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
        /// Indicates whether this Collectible&#39;s state is determined on a per-character or on an account-wide basis.
        /// </summary>
        /// <value>Indicates whether this Collectible&#39;s state is determined on a per-character or on an account-wide basis.</value>
        [DataMember(Name="scope", EmitDefaultValue=false)]
        public DestinyDestinyScope Scope { get; set; }

        /// <summary>
        /// A human readable string for a hint about how to acquire the item.
        /// </summary>
        /// <value>A human readable string for a hint about how to acquire the item.</value>
        [DataMember(Name="sourceString", EmitDefaultValue=false)]
        public string SourceString { get; set; }

        /// <summary>
        /// This is a hash identifier we are building on the BNet side in an attempt to let people group collectibles by similar sources.  I can&#39;t promise that it&#39;s going to be 100% accurate, but if the designers were consistent in assigning the same source strings to items with the same sources, it *ought to* be. No promises though.  This hash also doesn&#39;t relate to an actual definition, just to note: we&#39;ve got nothing useful other than the source string for this data.
        /// </summary>
        /// <value>This is a hash identifier we are building on the BNet side in an attempt to let people group collectibles by similar sources.  I can&#39;t promise that it&#39;s going to be 100% accurate, but if the designers were consistent in assigning the same source strings to items with the same sources, it *ought to* be. No promises though.  This hash also doesn&#39;t relate to an actual definition, just to note: we&#39;ve got nothing useful other than the source string for this data.</value>
        [DataMember(Name="sourceHash", EmitDefaultValue=false)]
        public uint? SourceHash { get; set; }

        /// <summary>
        /// Gets or Sets ItemHash
        /// </summary>
        [DataMember(Name="itemHash", EmitDefaultValue=false)]
        public uint? ItemHash { get; set; }

        /// <summary>
        /// Gets or Sets AcquisitionInfo
        /// </summary>
        [DataMember(Name="acquisitionInfo", EmitDefaultValue=false)]
        public DestinyDefinitionsCollectiblesDestinyCollectibleAcquisitionBlock AcquisitionInfo { get; set; }

        /// <summary>
        /// Gets or Sets StateInfo
        /// </summary>
        [DataMember(Name="stateInfo", EmitDefaultValue=false)]
        public DestinyDefinitionsCollectiblesDestinyCollectibleStateBlock StateInfo { get; set; }

        /// <summary>
        /// Gets or Sets PresentationInfo
        /// </summary>
        [DataMember(Name="presentationInfo", EmitDefaultValue=false)]
        public DestinyDefinitionsPresentationDestinyPresentationChildBlock PresentationInfo { get; set; }

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
            sb.Append("class DestinyDefinitionsCollectiblesDestinyCollectibleDefinition {\n");
            sb.Append("  DisplayProperties: ").Append(DisplayProperties).Append("\n");
            sb.Append("  Scope: ").Append(Scope).Append("\n");
            sb.Append("  SourceString: ").Append(SourceString).Append("\n");
            sb.Append("  SourceHash: ").Append(SourceHash).Append("\n");
            sb.Append("  ItemHash: ").Append(ItemHash).Append("\n");
            sb.Append("  AcquisitionInfo: ").Append(AcquisitionInfo).Append("\n");
            sb.Append("  StateInfo: ").Append(StateInfo).Append("\n");
            sb.Append("  PresentationInfo: ").Append(PresentationInfo).Append("\n");
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
            return this.Equals(input as DestinyDefinitionsCollectiblesDestinyCollectibleDefinition);
        }

        /// <summary>
        /// Returns true if DestinyDefinitionsCollectiblesDestinyCollectibleDefinition instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDefinitionsCollectiblesDestinyCollectibleDefinition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDefinitionsCollectiblesDestinyCollectibleDefinition input)
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
                    this.Scope == input.Scope ||
                    (this.Scope != null &&
                    this.Scope.Equals(input.Scope))
                ) && 
                (
                    this.SourceString == input.SourceString ||
                    (this.SourceString != null &&
                    this.SourceString.Equals(input.SourceString))
                ) && 
                (
                    this.SourceHash == input.SourceHash ||
                    (this.SourceHash != null &&
                    this.SourceHash.Equals(input.SourceHash))
                ) && 
                (
                    this.ItemHash == input.ItemHash ||
                    (this.ItemHash != null &&
                    this.ItemHash.Equals(input.ItemHash))
                ) && 
                (
                    this.AcquisitionInfo == input.AcquisitionInfo ||
                    (this.AcquisitionInfo != null &&
                    this.AcquisitionInfo.Equals(input.AcquisitionInfo))
                ) && 
                (
                    this.StateInfo == input.StateInfo ||
                    (this.StateInfo != null &&
                    this.StateInfo.Equals(input.StateInfo))
                ) && 
                (
                    this.PresentationInfo == input.PresentationInfo ||
                    (this.PresentationInfo != null &&
                    this.PresentationInfo.Equals(input.PresentationInfo))
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
                if (this.Scope != null)
                    hashCode = hashCode * 59 + this.Scope.GetHashCode();
                if (this.SourceString != null)
                    hashCode = hashCode * 59 + this.SourceString.GetHashCode();
                if (this.SourceHash != null)
                    hashCode = hashCode * 59 + this.SourceHash.GetHashCode();
                if (this.ItemHash != null)
                    hashCode = hashCode * 59 + this.ItemHash.GetHashCode();
                if (this.AcquisitionInfo != null)
                    hashCode = hashCode * 59 + this.AcquisitionInfo.GetHashCode();
                if (this.StateInfo != null)
                    hashCode = hashCode * 59 + this.StateInfo.GetHashCode();
                if (this.PresentationInfo != null)
                    hashCode = hashCode * 59 + this.PresentationInfo.GetHashCode();
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
