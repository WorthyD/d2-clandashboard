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
    /// DestinyHistoricalStatsDestinyLeaderboard
    /// </summary>
    [DataContract]
    public partial class DestinyHistoricalStatsDestinyLeaderboard :  IEquatable<DestinyHistoricalStatsDestinyLeaderboard>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyHistoricalStatsDestinyLeaderboard" /> class.
        /// </summary>
        /// <param name="statId">statId.</param>
        /// <param name="entries">entries.</param>
        public DestinyHistoricalStatsDestinyLeaderboard(string statId = default(string), List<DestinyHistoricalStatsDestinyLeaderboardEntry> entries = default(List<DestinyHistoricalStatsDestinyLeaderboardEntry>))
        {
            this.StatId = statId;
            this.Entries = entries;
        }
        
        /// <summary>
        /// Gets or Sets StatId
        /// </summary>
        [DataMember(Name="statId", EmitDefaultValue=false)]
        public string StatId { get; set; }

        /// <summary>
        /// Gets or Sets Entries
        /// </summary>
        [DataMember(Name="entries", EmitDefaultValue=false)]
        public List<DestinyHistoricalStatsDestinyLeaderboardEntry> Entries { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyHistoricalStatsDestinyLeaderboard {\n");
            sb.Append("  StatId: ").Append(StatId).Append("\n");
            sb.Append("  Entries: ").Append(Entries).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
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
            return this.Equals(input as DestinyHistoricalStatsDestinyLeaderboard);
        }

        /// <summary>
        /// Returns true if DestinyHistoricalStatsDestinyLeaderboard instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyHistoricalStatsDestinyLeaderboard to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyHistoricalStatsDestinyLeaderboard input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.StatId == input.StatId ||
                    (this.StatId != null &&
                    this.StatId.Equals(input.StatId))
                ) && 
                (
                    this.Entries == input.Entries ||
                    this.Entries != null &&
                    this.Entries.SequenceEqual(input.Entries)
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
                if (this.StatId != null)
                    hashCode = hashCode * 59 + this.StatId.GetHashCode();
                if (this.Entries != null)
                    hashCode = hashCode * 59 + this.Entries.GetHashCode();
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
