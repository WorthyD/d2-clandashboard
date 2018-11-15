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
    /// DestinyHistoricalStatsDestinyHistoricalStatsWithMerged
    /// </summary>
    [DataContract]
    public partial class DestinyHistoricalStatsDestinyHistoricalStatsWithMerged :  IEquatable<DestinyHistoricalStatsDestinyHistoricalStatsWithMerged>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyHistoricalStatsDestinyHistoricalStatsWithMerged" /> class.
        /// </summary>
        /// <param name="Results">Results.</param>
        /// <param name="Merged">Merged.</param>
        public DestinyHistoricalStatsDestinyHistoricalStatsWithMerged(Dictionary<string, DestinyHistoricalStatsDestinyHistoricalStatsByPeriod> Results = default(Dictionary<string, DestinyHistoricalStatsDestinyHistoricalStatsByPeriod>), DestinyHistoricalStatsDestinyHistoricalStatsByPeriod Merged = default(DestinyHistoricalStatsDestinyHistoricalStatsByPeriod))
        {
            this.Results = Results;
            this.Merged = Merged;
        }
        
        /// <summary>
        /// Gets or Sets Results
        /// </summary>
        [DataMember(Name="results", EmitDefaultValue=false)]
        public Dictionary<string, DestinyHistoricalStatsDestinyHistoricalStatsByPeriod> Results { get; set; }

        /// <summary>
        /// Gets or Sets Merged
        /// </summary>
        [DataMember(Name="merged", EmitDefaultValue=false)]
        public DestinyHistoricalStatsDestinyHistoricalStatsByPeriod Merged { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyHistoricalStatsDestinyHistoricalStatsWithMerged {\n");
            sb.Append("  Results: ").Append(Results).Append("\n");
            sb.Append("  Merged: ").Append(Merged).Append("\n");
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
            return this.Equals(input as DestinyHistoricalStatsDestinyHistoricalStatsWithMerged);
        }

        /// <summary>
        /// Returns true if DestinyHistoricalStatsDestinyHistoricalStatsWithMerged instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyHistoricalStatsDestinyHistoricalStatsWithMerged to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyHistoricalStatsDestinyHistoricalStatsWithMerged input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Results == input.Results ||
                    this.Results != null &&
                    this.Results.SequenceEqual(input.Results)
                ) && 
                (
                    this.Merged == input.Merged ||
                    (this.Merged != null &&
                    this.Merged.Equals(input.Merged))
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
                if (this.Results != null)
                    hashCode = hashCode * 59 + this.Results.GetHashCode();
                if (this.Merged != null)
                    hashCode = hashCode * 59 + this.Merged.GetHashCode();
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
