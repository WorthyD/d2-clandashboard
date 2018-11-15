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
    /// Represents custom data that we know about an individual variant of an activity.
    /// </summary>
    [DataContract]
    public partial class DestinyMilestonesDestinyMilestoneActivityVariant :  IEquatable<DestinyMilestonesDestinyMilestoneActivityVariant>, IValidatableObject
    {
        /// <summary>
        /// The enumeration equivalent of the most specific Activity Mode under which this activity is played.
        /// </summary>
        /// <value>The enumeration equivalent of the most specific Activity Mode under which this activity is played.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ActivityModeTypeEnum
        {
            
            /// <summary>
            /// Enum None for 0
            /// </summary>
            [EnumMember(Value = "0")]
            None = 0,
            
            /// <summary>
            /// Enum Story for 2
            /// </summary>
            [EnumMember(Value = "2")]
            Story = 2,
            
            /// <summary>
            /// Enum Strike for 3
            /// </summary>
            [EnumMember(Value = "3")]
            Strike = 3,
            
            /// <summary>
            /// Enum Raid for 4
            /// </summary>
            [EnumMember(Value = "4")]
            Raid = 4,
            
            /// <summary>
            /// Enum AllPvP for 5
            /// </summary>
            [EnumMember(Value = "5")]
            AllPvP = 5,
            
            /// <summary>
            /// Enum Patrol for 6
            /// </summary>
            [EnumMember(Value = "6")]
            Patrol = 6,
            
            /// <summary>
            /// Enum AllPvE for 7
            /// </summary>
            [EnumMember(Value = "7")]
            AllPvE = 7,
            
            /// <summary>
            /// Enum Reserved9 for 9
            /// </summary>
            [EnumMember(Value = "9")]
            Reserved9 = 9,
            
            /// <summary>
            /// Enum Control for 10
            /// </summary>
            [EnumMember(Value = "10")]
            Control = 10,
            
            /// <summary>
            /// Enum Reserved11 for 11
            /// </summary>
            [EnumMember(Value = "11")]
            Reserved11 = 11,
            
            /// <summary>
            /// Enum Clash for 12
            /// </summary>
            [EnumMember(Value = "12")]
            Clash = 12,
            
            /// <summary>
            /// Enum Reserved13 for 13
            /// </summary>
            [EnumMember(Value = "13")]
            Reserved13 = 13,
            
            /// <summary>
            /// Enum CrimsonDoubles for 15
            /// </summary>
            [EnumMember(Value = "15")]
            CrimsonDoubles = 15,
            
            /// <summary>
            /// Enum Nightfall for 16
            /// </summary>
            [EnumMember(Value = "16")]
            Nightfall = 16,
            
            /// <summary>
            /// Enum HeroicNightfall for 17
            /// </summary>
            [EnumMember(Value = "17")]
            HeroicNightfall = 17,
            
            /// <summary>
            /// Enum AllStrikes for 18
            /// </summary>
            [EnumMember(Value = "18")]
            AllStrikes = 18,
            
            /// <summary>
            /// Enum IronBanner for 19
            /// </summary>
            [EnumMember(Value = "19")]
            IronBanner = 19,
            
            /// <summary>
            /// Enum Reserved20 for 20
            /// </summary>
            [EnumMember(Value = "20")]
            Reserved20 = 20,
            
            /// <summary>
            /// Enum Reserved21 for 21
            /// </summary>
            [EnumMember(Value = "21")]
            Reserved21 = 21,
            
            /// <summary>
            /// Enum Reserved22 for 22
            /// </summary>
            [EnumMember(Value = "22")]
            Reserved22 = 22,
            
            /// <summary>
            /// Enum Reserved24 for 24
            /// </summary>
            [EnumMember(Value = "24")]
            Reserved24 = 24,
            
            /// <summary>
            /// Enum AllMayhem for 25
            /// </summary>
            [EnumMember(Value = "25")]
            AllMayhem = 25,
            
            /// <summary>
            /// Enum Reserved26 for 26
            /// </summary>
            [EnumMember(Value = "26")]
            Reserved26 = 26,
            
            /// <summary>
            /// Enum Reserved27 for 27
            /// </summary>
            [EnumMember(Value = "27")]
            Reserved27 = 27,
            
            /// <summary>
            /// Enum Reserved28 for 28
            /// </summary>
            [EnumMember(Value = "28")]
            Reserved28 = 28,
            
            /// <summary>
            /// Enum Reserved29 for 29
            /// </summary>
            [EnumMember(Value = "29")]
            Reserved29 = 29,
            
            /// <summary>
            /// Enum Reserved30 for 30
            /// </summary>
            [EnumMember(Value = "30")]
            Reserved30 = 30,
            
            /// <summary>
            /// Enum Supremacy for 31
            /// </summary>
            [EnumMember(Value = "31")]
            Supremacy = 31,
            
            /// <summary>
            /// Enum PrivateMatchesAll for 32
            /// </summary>
            [EnumMember(Value = "32")]
            PrivateMatchesAll = 32,
            
            /// <summary>
            /// Enum Survival for 37
            /// </summary>
            [EnumMember(Value = "37")]
            Survival = 37,
            
            /// <summary>
            /// Enum Countdown for 38
            /// </summary>
            [EnumMember(Value = "38")]
            Countdown = 38,
            
            /// <summary>
            /// Enum TrialsOfTheNine for 39
            /// </summary>
            [EnumMember(Value = "39")]
            TrialsOfTheNine = 39,
            
            /// <summary>
            /// Enum Social for 40
            /// </summary>
            [EnumMember(Value = "40")]
            Social = 40,
            
            /// <summary>
            /// Enum TrialsCountdown for 41
            /// </summary>
            [EnumMember(Value = "41")]
            TrialsCountdown = 41,
            
            /// <summary>
            /// Enum TrialsSurvival for 42
            /// </summary>
            [EnumMember(Value = "42")]
            TrialsSurvival = 42,
            
            /// <summary>
            /// Enum IronBannerControl for 43
            /// </summary>
            [EnumMember(Value = "43")]
            IronBannerControl = 43,
            
            /// <summary>
            /// Enum IronBannerClash for 44
            /// </summary>
            [EnumMember(Value = "44")]
            IronBannerClash = 44,
            
            /// <summary>
            /// Enum IronBannerSupremacy for 45
            /// </summary>
            [EnumMember(Value = "45")]
            IronBannerSupremacy = 45,
            
            /// <summary>
            /// Enum ScoredNightfall for 46
            /// </summary>
            [EnumMember(Value = "46")]
            ScoredNightfall = 46,
            
            /// <summary>
            /// Enum ScoredHeroicNightfall for 47
            /// </summary>
            [EnumMember(Value = "47")]
            ScoredHeroicNightfall = 47,
            
            /// <summary>
            /// Enum Rumble for 48
            /// </summary>
            [EnumMember(Value = "48")]
            Rumble = 48,
            
            /// <summary>
            /// Enum AllDoubles for 49
            /// </summary>
            [EnumMember(Value = "49")]
            AllDoubles = 49,
            
            /// <summary>
            /// Enum Doubles for 50
            /// </summary>
            [EnumMember(Value = "50")]
            Doubles = 50,
            
            /// <summary>
            /// Enum PrivateMatchesClash for 51
            /// </summary>
            [EnumMember(Value = "51")]
            PrivateMatchesClash = 51,
            
            /// <summary>
            /// Enum PrivateMatchesControl for 52
            /// </summary>
            [EnumMember(Value = "52")]
            PrivateMatchesControl = 52,
            
            /// <summary>
            /// Enum PrivateMatchesSupremacy for 53
            /// </summary>
            [EnumMember(Value = "53")]
            PrivateMatchesSupremacy = 53,
            
            /// <summary>
            /// Enum PrivateMatchesCountdown for 54
            /// </summary>
            [EnumMember(Value = "54")]
            PrivateMatchesCountdown = 54,
            
            /// <summary>
            /// Enum PrivateMatchesSurvival for 55
            /// </summary>
            [EnumMember(Value = "55")]
            PrivateMatchesSurvival = 55,
            
            /// <summary>
            /// Enum PrivateMatchesMayhem for 56
            /// </summary>
            [EnumMember(Value = "56")]
            PrivateMatchesMayhem = 56,
            
            /// <summary>
            /// Enum PrivateMatchesRumble for 57
            /// </summary>
            [EnumMember(Value = "57")]
            PrivateMatchesRumble = 57,
            
            /// <summary>
            /// Enum HeroicAdventure for 58
            /// </summary>
            [EnumMember(Value = "58")]
            HeroicAdventure = 58,
            
            /// <summary>
            /// Enum Showdown for 59
            /// </summary>
            [EnumMember(Value = "59")]
            Showdown = 59,
            
            /// <summary>
            /// Enum Lockdown for 60
            /// </summary>
            [EnumMember(Value = "60")]
            Lockdown = 60,
            
            /// <summary>
            /// Enum Scorched for 61
            /// </summary>
            [EnumMember(Value = "61")]
            Scorched = 61,
            
            /// <summary>
            /// Enum ScorchedTeam for 62
            /// </summary>
            [EnumMember(Value = "62")]
            ScorchedTeam = 62,
            
            /// <summary>
            /// Enum Gambit for 63
            /// </summary>
            [EnumMember(Value = "63")]
            Gambit = 63,
            
            /// <summary>
            /// Enum AllPvECompetitive for 64
            /// </summary>
            [EnumMember(Value = "64")]
            AllPvECompetitive = 64,
            
            /// <summary>
            /// Enum Breakthrough for 65
            /// </summary>
            [EnumMember(Value = "65")]
            Breakthrough = 65
        }

        /// <summary>
        /// The enumeration equivalent of the most specific Activity Mode under which this activity is played.
        /// </summary>
        /// <value>The enumeration equivalent of the most specific Activity Mode under which this activity is played.</value>
        [DataMember(Name="activityModeType", EmitDefaultValue=false)]
        public ActivityModeTypeEnum? ActivityModeType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyMilestonesDestinyMilestoneActivityVariant" /> class.
        /// </summary>
        /// <param name="ActivityHash">The hash for the specific variant of the activity related to this milestone. You can pull more detailed static info from the DestinyActivityDefinition, such as difficulty level..</param>
        /// <param name="CompletionStatus">An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL..</param>
        /// <param name="ActivityModeHash">The hash identifier of the most specific Activity Mode under which this activity is played. This is useful for situations where the activity in question is - for instance - a PVP map, but it&#39;s not clear what mode the PVP map is being played under. If it&#39;s a playlist, this will be less specific: but hopefully useful in some way..</param>
        /// <param name="ActivityModeType">The enumeration equivalent of the most specific Activity Mode under which this activity is played..</param>
        public DestinyMilestonesDestinyMilestoneActivityVariant(uint? ActivityHash = default(uint?), DestinyMilestonesDestinyMilestoneActivityCompletionStatus CompletionStatus = default(DestinyMilestonesDestinyMilestoneActivityCompletionStatus), uint? ActivityModeHash = default(uint?), ActivityModeTypeEnum? ActivityModeType = default(ActivityModeTypeEnum?))
        {
            this.ActivityHash = ActivityHash;
            this.CompletionStatus = CompletionStatus;
            this.ActivityModeHash = ActivityModeHash;
            this.ActivityModeType = ActivityModeType;
        }
        
        /// <summary>
        /// The hash for the specific variant of the activity related to this milestone. You can pull more detailed static info from the DestinyActivityDefinition, such as difficulty level.
        /// </summary>
        /// <value>The hash for the specific variant of the activity related to this milestone. You can pull more detailed static info from the DestinyActivityDefinition, such as difficulty level.</value>
        [DataMember(Name="activityHash", EmitDefaultValue=false)]
        public uint? ActivityHash { get; set; }

        /// <summary>
        /// An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL.
        /// </summary>
        /// <value>An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL.</value>
        [DataMember(Name="completionStatus", EmitDefaultValue=false)]
        public DestinyMilestonesDestinyMilestoneActivityCompletionStatus CompletionStatus { get; set; }

        /// <summary>
        /// The hash identifier of the most specific Activity Mode under which this activity is played. This is useful for situations where the activity in question is - for instance - a PVP map, but it&#39;s not clear what mode the PVP map is being played under. If it&#39;s a playlist, this will be less specific: but hopefully useful in some way.
        /// </summary>
        /// <value>The hash identifier of the most specific Activity Mode under which this activity is played. This is useful for situations where the activity in question is - for instance - a PVP map, but it&#39;s not clear what mode the PVP map is being played under. If it&#39;s a playlist, this will be less specific: but hopefully useful in some way.</value>
        [DataMember(Name="activityModeHash", EmitDefaultValue=false)]
        public uint? ActivityModeHash { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyMilestonesDestinyMilestoneActivityVariant {\n");
            sb.Append("  ActivityHash: ").Append(ActivityHash).Append("\n");
            sb.Append("  CompletionStatus: ").Append(CompletionStatus).Append("\n");
            sb.Append("  ActivityModeHash: ").Append(ActivityModeHash).Append("\n");
            sb.Append("  ActivityModeType: ").Append(ActivityModeType).Append("\n");
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
            return this.Equals(input as DestinyMilestonesDestinyMilestoneActivityVariant);
        }

        /// <summary>
        /// Returns true if DestinyMilestonesDestinyMilestoneActivityVariant instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyMilestonesDestinyMilestoneActivityVariant to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyMilestonesDestinyMilestoneActivityVariant input)
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
                    this.CompletionStatus == input.CompletionStatus ||
                    (this.CompletionStatus != null &&
                    this.CompletionStatus.Equals(input.CompletionStatus))
                ) && 
                (
                    this.ActivityModeHash == input.ActivityModeHash ||
                    (this.ActivityModeHash != null &&
                    this.ActivityModeHash.Equals(input.ActivityModeHash))
                ) && 
                (
                    this.ActivityModeType == input.ActivityModeType ||
                    (this.ActivityModeType != null &&
                    this.ActivityModeType.Equals(input.ActivityModeType))
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
                if (this.CompletionStatus != null)
                    hashCode = hashCode * 59 + this.CompletionStatus.GetHashCode();
                if (this.ActivityModeHash != null)
                    hashCode = hashCode * 59 + this.ActivityModeHash.GetHashCode();
                if (this.ActivityModeType != null)
                    hashCode = hashCode * 59 + this.ActivityModeType.GetHashCode();
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
