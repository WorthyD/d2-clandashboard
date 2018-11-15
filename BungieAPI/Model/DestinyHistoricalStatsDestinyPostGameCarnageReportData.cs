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
    /// DestinyHistoricalStatsDestinyPostGameCarnageReportData
    /// </summary>
    [DataContract]
    public partial class DestinyHistoricalStatsDestinyPostGameCarnageReportData :  IEquatable<DestinyHistoricalStatsDestinyPostGameCarnageReportData>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyHistoricalStatsDestinyPostGameCarnageReportData" /> class.
        /// </summary>
        /// <param name="Period">Date and time for the activity..</param>
        /// <param name="StartingPhaseIndex">If this activity has \&quot;phases\&quot;, this is the phase at which the activity was started..</param>
        /// <param name="ActivityDetails">Details about the activity..</param>
        /// <param name="Entries">Collection of players and their data for this activity..</param>
        /// <param name="Teams">Collection of stats for the player in this activity..</param>
        public DestinyHistoricalStatsDestinyPostGameCarnageReportData(DateTime? Period = default(DateTime?), int? StartingPhaseIndex = default(int?), DestinyHistoricalStatsDestinyHistoricalStatsActivity ActivityDetails = default(DestinyHistoricalStatsDestinyHistoricalStatsActivity), List<DestinyHistoricalStatsDestinyPostGameCarnageReportEntry> Entries = default(List<DestinyHistoricalStatsDestinyPostGameCarnageReportEntry>), List<DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry> Teams = default(List<DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry>))
        {
            this.Period = Period;
            this.StartingPhaseIndex = StartingPhaseIndex;
            this.ActivityDetails = ActivityDetails;
            this.Entries = Entries;
            this.Teams = Teams;
        }
        
        /// <summary>
        /// Date and time for the activity.
        /// </summary>
        /// <value>Date and time for the activity.</value>
        [DataMember(Name="period", EmitDefaultValue=false)]
        public DateTime? Period { get; set; }

        /// <summary>
        /// If this activity has \&quot;phases\&quot;, this is the phase at which the activity was started.
        /// </summary>
        /// <value>If this activity has \&quot;phases\&quot;, this is the phase at which the activity was started.</value>
        [DataMember(Name="startingPhaseIndex", EmitDefaultValue=false)]
        public int? StartingPhaseIndex { get; set; }

        /// <summary>
        /// Details about the activity.
        /// </summary>
        /// <value>Details about the activity.</value>
        [DataMember(Name="activityDetails", EmitDefaultValue=false)]
        public DestinyHistoricalStatsDestinyHistoricalStatsActivity ActivityDetails { get; set; }

        /// <summary>
        /// Collection of players and their data for this activity.
        /// </summary>
        /// <value>Collection of players and their data for this activity.</value>
        [DataMember(Name="entries", EmitDefaultValue=false)]
        public List<DestinyHistoricalStatsDestinyPostGameCarnageReportEntry> Entries { get; set; }

        /// <summary>
        /// Collection of stats for the player in this activity.
        /// </summary>
        /// <value>Collection of stats for the player in this activity.</value>
        [DataMember(Name="teams", EmitDefaultValue=false)]
        public List<DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry> Teams { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyHistoricalStatsDestinyPostGameCarnageReportData {\n");
            sb.Append("  Period: ").Append(Period).Append("\n");
            sb.Append("  StartingPhaseIndex: ").Append(StartingPhaseIndex).Append("\n");
            sb.Append("  ActivityDetails: ").Append(ActivityDetails).Append("\n");
            sb.Append("  Entries: ").Append(Entries).Append("\n");
            sb.Append("  Teams: ").Append(Teams).Append("\n");
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
            return this.Equals(input as DestinyHistoricalStatsDestinyPostGameCarnageReportData);
        }

        /// <summary>
        /// Returns true if DestinyHistoricalStatsDestinyPostGameCarnageReportData instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyHistoricalStatsDestinyPostGameCarnageReportData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyHistoricalStatsDestinyPostGameCarnageReportData input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Period == input.Period ||
                    (this.Period != null &&
                    this.Period.Equals(input.Period))
                ) && 
                (
                    this.StartingPhaseIndex == input.StartingPhaseIndex ||
                    (this.StartingPhaseIndex != null &&
                    this.StartingPhaseIndex.Equals(input.StartingPhaseIndex))
                ) && 
                (
                    this.ActivityDetails == input.ActivityDetails ||
                    (this.ActivityDetails != null &&
                    this.ActivityDetails.Equals(input.ActivityDetails))
                ) && 
                (
                    this.Entries == input.Entries ||
                    this.Entries != null &&
                    this.Entries.SequenceEqual(input.Entries)
                ) && 
                (
                    this.Teams == input.Teams ||
                    this.Teams != null &&
                    this.Teams.SequenceEqual(input.Teams)
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
                if (this.Period != null)
                    hashCode = hashCode * 59 + this.Period.GetHashCode();
                if (this.StartingPhaseIndex != null)
                    hashCode = hashCode * 59 + this.StartingPhaseIndex.GetHashCode();
                if (this.ActivityDetails != null)
                    hashCode = hashCode * 59 + this.ActivityDetails.GetHashCode();
                if (this.Entries != null)
                    hashCode = hashCode * 59 + this.Entries.GetHashCode();
                if (this.Teams != null)
                    hashCode = hashCode * 59 + this.Teams.GetHashCode();
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
