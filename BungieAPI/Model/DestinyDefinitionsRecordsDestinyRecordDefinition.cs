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
    /// DestinyDefinitionsRecordsDestinyRecordDefinition
    /// </summary>
    [DataContract]
    public partial class DestinyDefinitionsRecordsDestinyRecordDefinition :  IEquatable<DestinyDefinitionsRecordsDestinyRecordDefinition>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDefinitionsRecordsDestinyRecordDefinition" /> class.
        /// </summary>
        /// <param name="DisplayProperties">DisplayProperties.</param>
        /// <param name="Scope">Indicates whether this Record&#39;s state is determined on a per-character or on an account-wide basis..</param>
        /// <param name="PresentationInfo">PresentationInfo.</param>
        /// <param name="LoreHash">LoreHash.</param>
        /// <param name="ObjectiveHashes">ObjectiveHashes.</param>
        /// <param name="RecordValueStyle">RecordValueStyle.</param>
        /// <param name="TitleInfo">TitleInfo.</param>
        /// <param name="CompletionInfo">CompletionInfo.</param>
        /// <param name="StateInfo">StateInfo.</param>
        /// <param name="Requirements">Requirements.</param>
        /// <param name="Hash">The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to..</param>
        /// <param name="Index">The index of the entity as it was found in the investment tables..</param>
        /// <param name="Redacted">If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!.</param>
        public DestinyDefinitionsRecordsDestinyRecordDefinition(DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition DisplayProperties = default(DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition), DestinyDestinyScope Scope = default(DestinyDestinyScope), DestinyDefinitionsPresentationDestinyPresentationChildBlock PresentationInfo = default(DestinyDefinitionsPresentationDestinyPresentationChildBlock), uint? LoreHash = default(uint?), List<uint?> ObjectiveHashes = default(List<uint?>), DestinyDestinyRecordValueStyle RecordValueStyle = default(DestinyDestinyRecordValueStyle), DestinyDefinitionsRecordsDestinyRecordTitleBlock TitleInfo = default(DestinyDefinitionsRecordsDestinyRecordTitleBlock), DestinyDefinitionsRecordsDestinyRecordCompletionBlock CompletionInfo = default(DestinyDefinitionsRecordsDestinyRecordCompletionBlock), DestinyDefinitionsRecordsSchemaRecordStateBlock StateInfo = default(DestinyDefinitionsRecordsSchemaRecordStateBlock), DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock Requirements = default(DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock), uint? Hash = default(uint?), int? Index = default(int?), bool? Redacted = default(bool?))
        {
            this.DisplayProperties = DisplayProperties;
            this.Scope = Scope;
            this.PresentationInfo = PresentationInfo;
            this.LoreHash = LoreHash;
            this.ObjectiveHashes = ObjectiveHashes;
            this.RecordValueStyle = RecordValueStyle;
            this.TitleInfo = TitleInfo;
            this.CompletionInfo = CompletionInfo;
            this.StateInfo = StateInfo;
            this.Requirements = Requirements;
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
        /// Indicates whether this Record&#39;s state is determined on a per-character or on an account-wide basis.
        /// </summary>
        /// <value>Indicates whether this Record&#39;s state is determined on a per-character or on an account-wide basis.</value>
        [DataMember(Name="scope", EmitDefaultValue=false)]
        public DestinyDestinyScope Scope { get; set; }

        /// <summary>
        /// Gets or Sets PresentationInfo
        /// </summary>
        [DataMember(Name="presentationInfo", EmitDefaultValue=false)]
        public DestinyDefinitionsPresentationDestinyPresentationChildBlock PresentationInfo { get; set; }

        /// <summary>
        /// Gets or Sets LoreHash
        /// </summary>
        [DataMember(Name="loreHash", EmitDefaultValue=false)]
        public uint? LoreHash { get; set; }

        /// <summary>
        /// Gets or Sets ObjectiveHashes
        /// </summary>
        [DataMember(Name="objectiveHashes", EmitDefaultValue=false)]
        public List<uint?> ObjectiveHashes { get; set; }

        /// <summary>
        /// Gets or Sets RecordValueStyle
        /// </summary>
        [DataMember(Name="recordValueStyle", EmitDefaultValue=false)]
        public DestinyDestinyRecordValueStyle RecordValueStyle { get; set; }

        /// <summary>
        /// Gets or Sets TitleInfo
        /// </summary>
        [DataMember(Name="titleInfo", EmitDefaultValue=false)]
        public DestinyDefinitionsRecordsDestinyRecordTitleBlock TitleInfo { get; set; }

        /// <summary>
        /// Gets or Sets CompletionInfo
        /// </summary>
        [DataMember(Name="completionInfo", EmitDefaultValue=false)]
        public DestinyDefinitionsRecordsDestinyRecordCompletionBlock CompletionInfo { get; set; }

        /// <summary>
        /// Gets or Sets StateInfo
        /// </summary>
        [DataMember(Name="stateInfo", EmitDefaultValue=false)]
        public DestinyDefinitionsRecordsSchemaRecordStateBlock StateInfo { get; set; }

        /// <summary>
        /// Gets or Sets Requirements
        /// </summary>
        [DataMember(Name="requirements", EmitDefaultValue=false)]
        public DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock Requirements { get; set; }

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
            sb.Append("class DestinyDefinitionsRecordsDestinyRecordDefinition {\n");
            sb.Append("  DisplayProperties: ").Append(DisplayProperties).Append("\n");
            sb.Append("  Scope: ").Append(Scope).Append("\n");
            sb.Append("  PresentationInfo: ").Append(PresentationInfo).Append("\n");
            sb.Append("  LoreHash: ").Append(LoreHash).Append("\n");
            sb.Append("  ObjectiveHashes: ").Append(ObjectiveHashes).Append("\n");
            sb.Append("  RecordValueStyle: ").Append(RecordValueStyle).Append("\n");
            sb.Append("  TitleInfo: ").Append(TitleInfo).Append("\n");
            sb.Append("  CompletionInfo: ").Append(CompletionInfo).Append("\n");
            sb.Append("  StateInfo: ").Append(StateInfo).Append("\n");
            sb.Append("  Requirements: ").Append(Requirements).Append("\n");
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
            return this.Equals(input as DestinyDefinitionsRecordsDestinyRecordDefinition);
        }

        /// <summary>
        /// Returns true if DestinyDefinitionsRecordsDestinyRecordDefinition instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDefinitionsRecordsDestinyRecordDefinition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDefinitionsRecordsDestinyRecordDefinition input)
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
                    this.PresentationInfo == input.PresentationInfo ||
                    (this.PresentationInfo != null &&
                    this.PresentationInfo.Equals(input.PresentationInfo))
                ) && 
                (
                    this.LoreHash == input.LoreHash ||
                    (this.LoreHash != null &&
                    this.LoreHash.Equals(input.LoreHash))
                ) && 
                (
                    this.ObjectiveHashes == input.ObjectiveHashes ||
                    this.ObjectiveHashes != null &&
                    this.ObjectiveHashes.SequenceEqual(input.ObjectiveHashes)
                ) && 
                (
                    this.RecordValueStyle == input.RecordValueStyle ||
                    (this.RecordValueStyle != null &&
                    this.RecordValueStyle.Equals(input.RecordValueStyle))
                ) && 
                (
                    this.TitleInfo == input.TitleInfo ||
                    (this.TitleInfo != null &&
                    this.TitleInfo.Equals(input.TitleInfo))
                ) && 
                (
                    this.CompletionInfo == input.CompletionInfo ||
                    (this.CompletionInfo != null &&
                    this.CompletionInfo.Equals(input.CompletionInfo))
                ) && 
                (
                    this.StateInfo == input.StateInfo ||
                    (this.StateInfo != null &&
                    this.StateInfo.Equals(input.StateInfo))
                ) && 
                (
                    this.Requirements == input.Requirements ||
                    (this.Requirements != null &&
                    this.Requirements.Equals(input.Requirements))
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
                if (this.PresentationInfo != null)
                    hashCode = hashCode * 59 + this.PresentationInfo.GetHashCode();
                if (this.LoreHash != null)
                    hashCode = hashCode * 59 + this.LoreHash.GetHashCode();
                if (this.ObjectiveHashes != null)
                    hashCode = hashCode * 59 + this.ObjectiveHashes.GetHashCode();
                if (this.RecordValueStyle != null)
                    hashCode = hashCode * 59 + this.RecordValueStyle.GetHashCode();
                if (this.TitleInfo != null)
                    hashCode = hashCode * 59 + this.TitleInfo.GetHashCode();
                if (this.CompletionInfo != null)
                    hashCode = hashCode * 59 + this.CompletionInfo.GetHashCode();
                if (this.StateInfo != null)
                    hashCode = hashCode * 59 + this.StateInfo.GetHashCode();
                if (this.Requirements != null)
                    hashCode = hashCode * 59 + this.Requirements.GetHashCode();
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
