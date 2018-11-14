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
    /// DestinyHistoricalStatsDestinyAggregateActivityStats
    /// </summary>
    [DataContract]
    public partial class DestinyHistoricalStatsDestinyAggregateActivityStats :  IEquatable<DestinyHistoricalStatsDestinyAggregateActivityStats>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyHistoricalStatsDestinyAggregateActivityStats" /> class.
        /// </summary>
        /// <param name="activityHash">Hash ID that can be looked up in the DestinyActivityTable..</param>
        /// <param name="values">Collection of stats for the player in this activity..</param>
        public DestinyHistoricalStatsDestinyAggregateActivityStats(int? activityHash = default(int?), Dictionary<string, DestinyHistoricalStatsDestinyHistoricalStatsValue> values = default(Dictionary<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>))
        {
            this.ActivityHash = activityHash;
            this.Values = values;
        }
        
        /// <summary>
        /// Hash ID that can be looked up in the DestinyActivityTable.
        /// </summary>
        /// <value>Hash ID that can be looked up in the DestinyActivityTable.</value>
        [DataMember(Name="activityHash", EmitDefaultValue=false)]
        public int? ActivityHash { get; set; }

        /// <summary>
        /// Collection of stats for the player in this activity.
        /// </summary>
        /// <value>Collection of stats for the player in this activity.</value>
        [DataMember(Name="values", EmitDefaultValue=false)]
        public Dictionary<string, DestinyHistoricalStatsDestinyHistoricalStatsValue> Values { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyHistoricalStatsDestinyAggregateActivityStats {\n");
            sb.Append("  ActivityHash: ").Append(ActivityHash).Append("\n");
            sb.Append("  Values: ").Append(Values).Append("\n");
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
            return this.Equals(input as DestinyHistoricalStatsDestinyAggregateActivityStats);
        }

        /// <summary>
        /// Returns true if DestinyHistoricalStatsDestinyAggregateActivityStats instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyHistoricalStatsDestinyAggregateActivityStats to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyHistoricalStatsDestinyAggregateActivityStats input)
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
                    this.Values == input.Values ||
                    this.Values != null &&
                    this.Values.SequenceEqual(input.Values)
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
                if (this.Values != null)
                    hashCode = hashCode * 59 + this.Values.GetHashCode();
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
