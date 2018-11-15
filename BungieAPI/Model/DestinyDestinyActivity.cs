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
    /// Represents the \&quot;Live\&quot; data that we can obtain about a Character&#39;s status with a specific Activity. This will tell you whether the character can participate in the activity, as well as some other basic mutable information.   Meant to be combined with static DestinyActivityDefinition data for a full picture of the Activity.
    /// </summary>
    [DataContract]
    public partial class DestinyDestinyActivity :  IEquatable<DestinyDestinyActivity>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDestinyActivity" /> class.
        /// </summary>
        /// <param name="ActivityHash">The hash identifier of the Activity. Use this to look up the DestinyActivityDefinition of the activity..</param>
        /// <param name="IsNew">If true, then the activity should have a \&quot;new\&quot; indicator in the Director UI..</param>
        /// <param name="CanLead">If true, the user is allowed to lead a Fireteam into this activity..</param>
        /// <param name="CanJoin">If true, the user is allowed to join with another Fireteam in this activity..</param>
        /// <param name="IsCompleted">If true, we both have the ability to know that the user has completed this activity and they have completed it. Unfortunately, we can&#39;t necessarily know this for all activities. As such, this should probably only be used if you already know in advance which specific activities you wish to check..</param>
        /// <param name="IsVisible">If true, the user should be able to see this activity..</param>
        /// <param name="DisplayLevel">The difficulty level of the activity, if applicable..</param>
        /// <param name="RecommendedLight">The recommended light level for the activity, if applicable..</param>
        /// <param name="DifficultyTier">A DestinyActivityDifficultyTier enum value indicating the difficulty of the activity..</param>
        public DestinyDestinyActivity(uint? ActivityHash = default(uint?), bool? IsNew = default(bool?), bool? CanLead = default(bool?), bool? CanJoin = default(bool?), bool? IsCompleted = default(bool?), bool? IsVisible = default(bool?), int? DisplayLevel = default(int?), int? RecommendedLight = default(int?), DestinyDestinyActivityDifficultyTier DifficultyTier = default(DestinyDestinyActivityDifficultyTier))
        {
            this.ActivityHash = ActivityHash;
            this.IsNew = IsNew;
            this.CanLead = CanLead;
            this.CanJoin = CanJoin;
            this.IsCompleted = IsCompleted;
            this.IsVisible = IsVisible;
            this.DisplayLevel = DisplayLevel;
            this.RecommendedLight = RecommendedLight;
            this.DifficultyTier = DifficultyTier;
        }
        
        /// <summary>
        /// The hash identifier of the Activity. Use this to look up the DestinyActivityDefinition of the activity.
        /// </summary>
        /// <value>The hash identifier of the Activity. Use this to look up the DestinyActivityDefinition of the activity.</value>
        [DataMember(Name="activityHash", EmitDefaultValue=false)]
        public uint? ActivityHash { get; set; }

        /// <summary>
        /// If true, then the activity should have a \&quot;new\&quot; indicator in the Director UI.
        /// </summary>
        /// <value>If true, then the activity should have a \&quot;new\&quot; indicator in the Director UI.</value>
        [DataMember(Name="isNew", EmitDefaultValue=false)]
        public bool? IsNew { get; set; }

        /// <summary>
        /// If true, the user is allowed to lead a Fireteam into this activity.
        /// </summary>
        /// <value>If true, the user is allowed to lead a Fireteam into this activity.</value>
        [DataMember(Name="canLead", EmitDefaultValue=false)]
        public bool? CanLead { get; set; }

        /// <summary>
        /// If true, the user is allowed to join with another Fireteam in this activity.
        /// </summary>
        /// <value>If true, the user is allowed to join with another Fireteam in this activity.</value>
        [DataMember(Name="canJoin", EmitDefaultValue=false)]
        public bool? CanJoin { get; set; }

        /// <summary>
        /// If true, we both have the ability to know that the user has completed this activity and they have completed it. Unfortunately, we can&#39;t necessarily know this for all activities. As such, this should probably only be used if you already know in advance which specific activities you wish to check.
        /// </summary>
        /// <value>If true, we both have the ability to know that the user has completed this activity and they have completed it. Unfortunately, we can&#39;t necessarily know this for all activities. As such, this should probably only be used if you already know in advance which specific activities you wish to check.</value>
        [DataMember(Name="isCompleted", EmitDefaultValue=false)]
        public bool? IsCompleted { get; set; }

        /// <summary>
        /// If true, the user should be able to see this activity.
        /// </summary>
        /// <value>If true, the user should be able to see this activity.</value>
        [DataMember(Name="isVisible", EmitDefaultValue=false)]
        public bool? IsVisible { get; set; }

        /// <summary>
        /// The difficulty level of the activity, if applicable.
        /// </summary>
        /// <value>The difficulty level of the activity, if applicable.</value>
        [DataMember(Name="displayLevel", EmitDefaultValue=false)]
        public int? DisplayLevel { get; set; }

        /// <summary>
        /// The recommended light level for the activity, if applicable.
        /// </summary>
        /// <value>The recommended light level for the activity, if applicable.</value>
        [DataMember(Name="recommendedLight", EmitDefaultValue=false)]
        public int? RecommendedLight { get; set; }

        /// <summary>
        /// A DestinyActivityDifficultyTier enum value indicating the difficulty of the activity.
        /// </summary>
        /// <value>A DestinyActivityDifficultyTier enum value indicating the difficulty of the activity.</value>
        [DataMember(Name="difficultyTier", EmitDefaultValue=false)]
        public DestinyDestinyActivityDifficultyTier DifficultyTier { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyDestinyActivity {\n");
            sb.Append("  ActivityHash: ").Append(ActivityHash).Append("\n");
            sb.Append("  IsNew: ").Append(IsNew).Append("\n");
            sb.Append("  CanLead: ").Append(CanLead).Append("\n");
            sb.Append("  CanJoin: ").Append(CanJoin).Append("\n");
            sb.Append("  IsCompleted: ").Append(IsCompleted).Append("\n");
            sb.Append("  IsVisible: ").Append(IsVisible).Append("\n");
            sb.Append("  DisplayLevel: ").Append(DisplayLevel).Append("\n");
            sb.Append("  RecommendedLight: ").Append(RecommendedLight).Append("\n");
            sb.Append("  DifficultyTier: ").Append(DifficultyTier).Append("\n");
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
            return this.Equals(input as DestinyDestinyActivity);
        }

        /// <summary>
        /// Returns true if DestinyDestinyActivity instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDestinyActivity to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDestinyActivity input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ActivityHash == input.ActivityHash ||
                    (this.ActivityHash != null &&
                    this.ActivityHash.Equals(input.ActivityHash))
                ) && 
                (
                    this.IsNew == input.IsNew ||
                    (this.IsNew != null &&
                    this.IsNew.Equals(input.IsNew))
                ) && 
                (
                    this.CanLead == input.CanLead ||
                    (this.CanLead != null &&
                    this.CanLead.Equals(input.CanLead))
                ) && 
                (
                    this.CanJoin == input.CanJoin ||
                    (this.CanJoin != null &&
                    this.CanJoin.Equals(input.CanJoin))
                ) && 
                (
                    this.IsCompleted == input.IsCompleted ||
                    (this.IsCompleted != null &&
                    this.IsCompleted.Equals(input.IsCompleted))
                ) && 
                (
                    this.IsVisible == input.IsVisible ||
                    (this.IsVisible != null &&
                    this.IsVisible.Equals(input.IsVisible))
                ) && 
                (
                    this.DisplayLevel == input.DisplayLevel ||
                    (this.DisplayLevel != null &&
                    this.DisplayLevel.Equals(input.DisplayLevel))
                ) && 
                (
                    this.RecommendedLight == input.RecommendedLight ||
                    (this.RecommendedLight != null &&
                    this.RecommendedLight.Equals(input.RecommendedLight))
                ) && 
                (
                    this.DifficultyTier == input.DifficultyTier ||
                    (this.DifficultyTier != null &&
                    this.DifficultyTier.Equals(input.DifficultyTier))
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
                if (this.ActivityHash != null)
                    hashCode = hashCode * 59 + this.ActivityHash.GetHashCode();
                if (this.IsNew != null)
                    hashCode = hashCode * 59 + this.IsNew.GetHashCode();
                if (this.CanLead != null)
                    hashCode = hashCode * 59 + this.CanLead.GetHashCode();
                if (this.CanJoin != null)
                    hashCode = hashCode * 59 + this.CanJoin.GetHashCode();
                if (this.IsCompleted != null)
                    hashCode = hashCode * 59 + this.IsCompleted.GetHashCode();
                if (this.IsVisible != null)
                    hashCode = hashCode * 59 + this.IsVisible.GetHashCode();
                if (this.DisplayLevel != null)
                    hashCode = hashCode * 59 + this.DisplayLevel.GetHashCode();
                if (this.RecommendedLight != null)
                    hashCode = hashCode * 59 + this.RecommendedLight.GetHashCode();
                if (this.DifficultyTier != null)
                    hashCode = hashCode * 59 + this.DifficultyTier.GetHashCode();
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
