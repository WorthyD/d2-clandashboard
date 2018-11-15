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
    /// Defines an \&quot;Objective\&quot;.  An objective is a specific task you should accomplish in the game. These are referred to by:  - Quest Steps (which are DestinyInventoryItemDefinition entities with Objectives)  - Challenges (which are Objectives defined on an DestinyActivityDefintion)  - Milestones (which refer to Objectives that are defined on both Quest Steps and Activities)  - Anything else that the designers decide to do later.  Objectives have progress, a notion of having been Completed, human readable data describing the task to be accomplished, and a lot of optional tack-on data that can enhance the information provided about the task.
    /// </summary>
    [DataContract]
    public partial class DestinyDefinitionsDestinyObjectiveDefinition :  IEquatable<DestinyDefinitionsDestinyObjectiveDefinition>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDefinitionsDestinyObjectiveDefinition" /> class.
        /// </summary>
        /// <param name="DisplayProperties">Ideally, this should tell you what your task is. I&#39;m not going to lie to you though. Sometimes this doesn&#39;t have useful information at all. Which sucks, but there&#39;s nothing either of us can do about it..</param>
        /// <param name="CompletionValue">The value that the unlock value defined in unlockValueHash must reach in order for the objective to be considered Completed. Used in calculating progress and completion status..</param>
        /// <param name="Scope">A shortcut for determining the most restrictive gating that this Objective is set to use. This includes both the dynamic determination of progress and of completion values. See the DestinyGatingScope enum&#39;s documentation for more details..</param>
        /// <param name="LocationHash">OPTIONAL: a hash identifier for the location at which this objective must be accomplished, if there is a location defined. Look up the DestinyLocationDefinition for this hash for that additional location info..</param>
        /// <param name="AllowNegativeValue">If true, the value is allowed to go negative..</param>
        /// <param name="AllowValueChangeWhenCompleted">If true, you can effectively \&quot;un-complete\&quot; this objective if you lose progress after crossing the completion threshold.   If False, once you complete the task it will remain completed forever by locking the value..</param>
        /// <param name="IsCountingDownward">If true, completion means having an unlock value less than or equal to the completionValue.  If False, completion means having an unlock value greater than or equal to the completionValue..</param>
        /// <param name="ValueStyle">The UI style applied to the objective. It&#39;s an enum, take a look at DestinyUnlockValueUIStyle for details of the possible styles. Use this info as you wish to customize your UI..</param>
        /// <param name="ProgressDescription">Text to describe the progress bar..</param>
        /// <param name="Perks">If this objective enables Perks intrinsically, the conditions for that enabling are defined here..</param>
        /// <param name="Stats">If this objective enables modifications on a player&#39;s stats intrinsically, the conditions are defined here..</param>
        /// <param name="MinimumVisibilityThreshold">If nonzero, this is the minimum value at which the objective&#39;s progression should be shown. Otherwise, don&#39;t show it yet..</param>
        /// <param name="AllowOvercompletion">If True, the progress will continue even beyond the point where the objective met its minimum completion requirements. Your UI will have to accommodate it..</param>
        /// <param name="ShowValueOnComplete">If True, you should continue showing the progression value in the UI after it&#39;s complete. I mean, we already do that in BNet anyways, but if you want to be better behaved than us you could honor this flag..</param>
        /// <param name="CompletedValueStyle">The style to use when the objective is completed..</param>
        /// <param name="InProgressValueStyle">The style to use when the objective is still in progress..</param>
        /// <param name="Hash">The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to..</param>
        /// <param name="Index">The index of the entity as it was found in the investment tables..</param>
        /// <param name="Redacted">If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!.</param>
        public DestinyDefinitionsDestinyObjectiveDefinition(DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition DisplayProperties = default(DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition), int? CompletionValue = default(int?), DestinyDestinyGatingScope Scope = default(DestinyDestinyGatingScope), uint? LocationHash = default(uint?), bool? AllowNegativeValue = default(bool?), bool? AllowValueChangeWhenCompleted = default(bool?), bool? IsCountingDownward = default(bool?), DestinyDestinyUnlockValueUIStyle ValueStyle = default(DestinyDestinyUnlockValueUIStyle), string ProgressDescription = default(string), DestinyDefinitionsDestinyObjectivePerkEntryDefinition Perks = default(DestinyDefinitionsDestinyObjectivePerkEntryDefinition), DestinyDefinitionsDestinyObjectiveStatEntryDefinition Stats = default(DestinyDefinitionsDestinyObjectiveStatEntryDefinition), int? MinimumVisibilityThreshold = default(int?), bool? AllowOvercompletion = default(bool?), bool? ShowValueOnComplete = default(bool?), DestinyDestinyUnlockValueUIStyle CompletedValueStyle = default(DestinyDestinyUnlockValueUIStyle), DestinyDestinyUnlockValueUIStyle InProgressValueStyle = default(DestinyDestinyUnlockValueUIStyle), uint? Hash = default(uint?), int? Index = default(int?), bool? Redacted = default(bool?))
        {
            this.DisplayProperties = DisplayProperties;
            this.CompletionValue = CompletionValue;
            this.Scope = Scope;
            this.LocationHash = LocationHash;
            this.AllowNegativeValue = AllowNegativeValue;
            this.AllowValueChangeWhenCompleted = AllowValueChangeWhenCompleted;
            this.IsCountingDownward = IsCountingDownward;
            this.ValueStyle = ValueStyle;
            this.ProgressDescription = ProgressDescription;
            this.Perks = Perks;
            this.Stats = Stats;
            this.MinimumVisibilityThreshold = MinimumVisibilityThreshold;
            this.AllowOvercompletion = AllowOvercompletion;
            this.ShowValueOnComplete = ShowValueOnComplete;
            this.CompletedValueStyle = CompletedValueStyle;
            this.InProgressValueStyle = InProgressValueStyle;
            this.Hash = Hash;
            this.Index = Index;
            this.Redacted = Redacted;
        }
        
        /// <summary>
        /// Ideally, this should tell you what your task is. I&#39;m not going to lie to you though. Sometimes this doesn&#39;t have useful information at all. Which sucks, but there&#39;s nothing either of us can do about it.
        /// </summary>
        /// <value>Ideally, this should tell you what your task is. I&#39;m not going to lie to you though. Sometimes this doesn&#39;t have useful information at all. Which sucks, but there&#39;s nothing either of us can do about it.</value>
        [DataMember(Name="displayProperties", EmitDefaultValue=false)]
        public DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition DisplayProperties { get; set; }

        /// <summary>
        /// The value that the unlock value defined in unlockValueHash must reach in order for the objective to be considered Completed. Used in calculating progress and completion status.
        /// </summary>
        /// <value>The value that the unlock value defined in unlockValueHash must reach in order for the objective to be considered Completed. Used in calculating progress and completion status.</value>
        [DataMember(Name="completionValue", EmitDefaultValue=false)]
        public int? CompletionValue { get; set; }

        /// <summary>
        /// A shortcut for determining the most restrictive gating that this Objective is set to use. This includes both the dynamic determination of progress and of completion values. See the DestinyGatingScope enum&#39;s documentation for more details.
        /// </summary>
        /// <value>A shortcut for determining the most restrictive gating that this Objective is set to use. This includes both the dynamic determination of progress and of completion values. See the DestinyGatingScope enum&#39;s documentation for more details.</value>
        [DataMember(Name="scope", EmitDefaultValue=false)]
        public DestinyDestinyGatingScope Scope { get; set; }

        /// <summary>
        /// OPTIONAL: a hash identifier for the location at which this objective must be accomplished, if there is a location defined. Look up the DestinyLocationDefinition for this hash for that additional location info.
        /// </summary>
        /// <value>OPTIONAL: a hash identifier for the location at which this objective must be accomplished, if there is a location defined. Look up the DestinyLocationDefinition for this hash for that additional location info.</value>
        [DataMember(Name="locationHash", EmitDefaultValue=false)]
        public uint? LocationHash { get; set; }

        /// <summary>
        /// If true, the value is allowed to go negative.
        /// </summary>
        /// <value>If true, the value is allowed to go negative.</value>
        [DataMember(Name="allowNegativeValue", EmitDefaultValue=false)]
        public bool? AllowNegativeValue { get; set; }

        /// <summary>
        /// If true, you can effectively \&quot;un-complete\&quot; this objective if you lose progress after crossing the completion threshold.   If False, once you complete the task it will remain completed forever by locking the value.
        /// </summary>
        /// <value>If true, you can effectively \&quot;un-complete\&quot; this objective if you lose progress after crossing the completion threshold.   If False, once you complete the task it will remain completed forever by locking the value.</value>
        [DataMember(Name="allowValueChangeWhenCompleted", EmitDefaultValue=false)]
        public bool? AllowValueChangeWhenCompleted { get; set; }

        /// <summary>
        /// If true, completion means having an unlock value less than or equal to the completionValue.  If False, completion means having an unlock value greater than or equal to the completionValue.
        /// </summary>
        /// <value>If true, completion means having an unlock value less than or equal to the completionValue.  If False, completion means having an unlock value greater than or equal to the completionValue.</value>
        [DataMember(Name="isCountingDownward", EmitDefaultValue=false)]
        public bool? IsCountingDownward { get; set; }

        /// <summary>
        /// The UI style applied to the objective. It&#39;s an enum, take a look at DestinyUnlockValueUIStyle for details of the possible styles. Use this info as you wish to customize your UI.
        /// </summary>
        /// <value>The UI style applied to the objective. It&#39;s an enum, take a look at DestinyUnlockValueUIStyle for details of the possible styles. Use this info as you wish to customize your UI.</value>
        [DataMember(Name="valueStyle", EmitDefaultValue=false)]
        public DestinyDestinyUnlockValueUIStyle ValueStyle { get; set; }

        /// <summary>
        /// Text to describe the progress bar.
        /// </summary>
        /// <value>Text to describe the progress bar.</value>
        [DataMember(Name="progressDescription", EmitDefaultValue=false)]
        public string ProgressDescription { get; set; }

        /// <summary>
        /// If this objective enables Perks intrinsically, the conditions for that enabling are defined here.
        /// </summary>
        /// <value>If this objective enables Perks intrinsically, the conditions for that enabling are defined here.</value>
        [DataMember(Name="perks", EmitDefaultValue=false)]
        public DestinyDefinitionsDestinyObjectivePerkEntryDefinition Perks { get; set; }

        /// <summary>
        /// If this objective enables modifications on a player&#39;s stats intrinsically, the conditions are defined here.
        /// </summary>
        /// <value>If this objective enables modifications on a player&#39;s stats intrinsically, the conditions are defined here.</value>
        [DataMember(Name="stats", EmitDefaultValue=false)]
        public DestinyDefinitionsDestinyObjectiveStatEntryDefinition Stats { get; set; }

        /// <summary>
        /// If nonzero, this is the minimum value at which the objective&#39;s progression should be shown. Otherwise, don&#39;t show it yet.
        /// </summary>
        /// <value>If nonzero, this is the minimum value at which the objective&#39;s progression should be shown. Otherwise, don&#39;t show it yet.</value>
        [DataMember(Name="minimumVisibilityThreshold", EmitDefaultValue=false)]
        public int? MinimumVisibilityThreshold { get; set; }

        /// <summary>
        /// If True, the progress will continue even beyond the point where the objective met its minimum completion requirements. Your UI will have to accommodate it.
        /// </summary>
        /// <value>If True, the progress will continue even beyond the point where the objective met its minimum completion requirements. Your UI will have to accommodate it.</value>
        [DataMember(Name="allowOvercompletion", EmitDefaultValue=false)]
        public bool? AllowOvercompletion { get; set; }

        /// <summary>
        /// If True, you should continue showing the progression value in the UI after it&#39;s complete. I mean, we already do that in BNet anyways, but if you want to be better behaved than us you could honor this flag.
        /// </summary>
        /// <value>If True, you should continue showing the progression value in the UI after it&#39;s complete. I mean, we already do that in BNet anyways, but if you want to be better behaved than us you could honor this flag.</value>
        [DataMember(Name="showValueOnComplete", EmitDefaultValue=false)]
        public bool? ShowValueOnComplete { get; set; }

        /// <summary>
        /// The style to use when the objective is completed.
        /// </summary>
        /// <value>The style to use when the objective is completed.</value>
        [DataMember(Name="completedValueStyle", EmitDefaultValue=false)]
        public DestinyDestinyUnlockValueUIStyle CompletedValueStyle { get; set; }

        /// <summary>
        /// The style to use when the objective is still in progress.
        /// </summary>
        /// <value>The style to use when the objective is still in progress.</value>
        [DataMember(Name="inProgressValueStyle", EmitDefaultValue=false)]
        public DestinyDestinyUnlockValueUIStyle InProgressValueStyle { get; set; }

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
            sb.Append("class DestinyDefinitionsDestinyObjectiveDefinition {\n");
            sb.Append("  DisplayProperties: ").Append(DisplayProperties).Append("\n");
            sb.Append("  CompletionValue: ").Append(CompletionValue).Append("\n");
            sb.Append("  Scope: ").Append(Scope).Append("\n");
            sb.Append("  LocationHash: ").Append(LocationHash).Append("\n");
            sb.Append("  AllowNegativeValue: ").Append(AllowNegativeValue).Append("\n");
            sb.Append("  AllowValueChangeWhenCompleted: ").Append(AllowValueChangeWhenCompleted).Append("\n");
            sb.Append("  IsCountingDownward: ").Append(IsCountingDownward).Append("\n");
            sb.Append("  ValueStyle: ").Append(ValueStyle).Append("\n");
            sb.Append("  ProgressDescription: ").Append(ProgressDescription).Append("\n");
            sb.Append("  Perks: ").Append(Perks).Append("\n");
            sb.Append("  Stats: ").Append(Stats).Append("\n");
            sb.Append("  MinimumVisibilityThreshold: ").Append(MinimumVisibilityThreshold).Append("\n");
            sb.Append("  AllowOvercompletion: ").Append(AllowOvercompletion).Append("\n");
            sb.Append("  ShowValueOnComplete: ").Append(ShowValueOnComplete).Append("\n");
            sb.Append("  CompletedValueStyle: ").Append(CompletedValueStyle).Append("\n");
            sb.Append("  InProgressValueStyle: ").Append(InProgressValueStyle).Append("\n");
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
            return this.Equals(input as DestinyDefinitionsDestinyObjectiveDefinition);
        }

        /// <summary>
        /// Returns true if DestinyDefinitionsDestinyObjectiveDefinition instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDefinitionsDestinyObjectiveDefinition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDefinitionsDestinyObjectiveDefinition input)
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
                    this.CompletionValue == input.CompletionValue ||
                    (this.CompletionValue != null &&
                    this.CompletionValue.Equals(input.CompletionValue))
                ) && 
                (
                    this.Scope == input.Scope ||
                    (this.Scope != null &&
                    this.Scope.Equals(input.Scope))
                ) && 
                (
                    this.LocationHash == input.LocationHash ||
                    (this.LocationHash != null &&
                    this.LocationHash.Equals(input.LocationHash))
                ) && 
                (
                    this.AllowNegativeValue == input.AllowNegativeValue ||
                    (this.AllowNegativeValue != null &&
                    this.AllowNegativeValue.Equals(input.AllowNegativeValue))
                ) && 
                (
                    this.AllowValueChangeWhenCompleted == input.AllowValueChangeWhenCompleted ||
                    (this.AllowValueChangeWhenCompleted != null &&
                    this.AllowValueChangeWhenCompleted.Equals(input.AllowValueChangeWhenCompleted))
                ) && 
                (
                    this.IsCountingDownward == input.IsCountingDownward ||
                    (this.IsCountingDownward != null &&
                    this.IsCountingDownward.Equals(input.IsCountingDownward))
                ) && 
                (
                    this.ValueStyle == input.ValueStyle ||
                    (this.ValueStyle != null &&
                    this.ValueStyle.Equals(input.ValueStyle))
                ) && 
                (
                    this.ProgressDescription == input.ProgressDescription ||
                    (this.ProgressDescription != null &&
                    this.ProgressDescription.Equals(input.ProgressDescription))
                ) && 
                (
                    this.Perks == input.Perks ||
                    (this.Perks != null &&
                    this.Perks.Equals(input.Perks))
                ) && 
                (
                    this.Stats == input.Stats ||
                    (this.Stats != null &&
                    this.Stats.Equals(input.Stats))
                ) && 
                (
                    this.MinimumVisibilityThreshold == input.MinimumVisibilityThreshold ||
                    (this.MinimumVisibilityThreshold != null &&
                    this.MinimumVisibilityThreshold.Equals(input.MinimumVisibilityThreshold))
                ) && 
                (
                    this.AllowOvercompletion == input.AllowOvercompletion ||
                    (this.AllowOvercompletion != null &&
                    this.AllowOvercompletion.Equals(input.AllowOvercompletion))
                ) && 
                (
                    this.ShowValueOnComplete == input.ShowValueOnComplete ||
                    (this.ShowValueOnComplete != null &&
                    this.ShowValueOnComplete.Equals(input.ShowValueOnComplete))
                ) && 
                (
                    this.CompletedValueStyle == input.CompletedValueStyle ||
                    (this.CompletedValueStyle != null &&
                    this.CompletedValueStyle.Equals(input.CompletedValueStyle))
                ) && 
                (
                    this.InProgressValueStyle == input.InProgressValueStyle ||
                    (this.InProgressValueStyle != null &&
                    this.InProgressValueStyle.Equals(input.InProgressValueStyle))
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
                if (this.CompletionValue != null)
                    hashCode = hashCode * 59 + this.CompletionValue.GetHashCode();
                if (this.Scope != null)
                    hashCode = hashCode * 59 + this.Scope.GetHashCode();
                if (this.LocationHash != null)
                    hashCode = hashCode * 59 + this.LocationHash.GetHashCode();
                if (this.AllowNegativeValue != null)
                    hashCode = hashCode * 59 + this.AllowNegativeValue.GetHashCode();
                if (this.AllowValueChangeWhenCompleted != null)
                    hashCode = hashCode * 59 + this.AllowValueChangeWhenCompleted.GetHashCode();
                if (this.IsCountingDownward != null)
                    hashCode = hashCode * 59 + this.IsCountingDownward.GetHashCode();
                if (this.ValueStyle != null)
                    hashCode = hashCode * 59 + this.ValueStyle.GetHashCode();
                if (this.ProgressDescription != null)
                    hashCode = hashCode * 59 + this.ProgressDescription.GetHashCode();
                if (this.Perks != null)
                    hashCode = hashCode * 59 + this.Perks.GetHashCode();
                if (this.Stats != null)
                    hashCode = hashCode * 59 + this.Stats.GetHashCode();
                if (this.MinimumVisibilityThreshold != null)
                    hashCode = hashCode * 59 + this.MinimumVisibilityThreshold.GetHashCode();
                if (this.AllowOvercompletion != null)
                    hashCode = hashCode * 59 + this.AllowOvercompletion.GetHashCode();
                if (this.ShowValueOnComplete != null)
                    hashCode = hashCode * 59 + this.ShowValueOnComplete.GetHashCode();
                if (this.CompletedValueStyle != null)
                    hashCode = hashCode * 59 + this.CompletedValueStyle.GetHashCode();
                if (this.InProgressValueStyle != null)
                    hashCode = hashCode * 59 + this.InProgressValueStyle.GetHashCode();
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
