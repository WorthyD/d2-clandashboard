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
    /// DestinyHistoricalStatsDestinyHistoricalStatsResults
    /// </summary>
    [DataContract]
    public partial class DestinyHistoricalStatsDestinyHistoricalStatsResults : Dictionary<String, DestinyHistoricalStatsDestinyHistoricalStatsByPeriod>,  IEquatable<DestinyHistoricalStatsDestinyHistoricalStatsResults>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyHistoricalStatsDestinyHistoricalStatsResults" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        public DestinyHistoricalStatsDestinyHistoricalStatsResults() : base()
        {
        }
        
        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyHistoricalStatsDestinyHistoricalStatsResults {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public  string ToJson()
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
            return this.Equals(input as DestinyHistoricalStatsDestinyHistoricalStatsResults);
        }

        /// <summary>
        /// Returns true if DestinyHistoricalStatsDestinyHistoricalStatsResults instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyHistoricalStatsDestinyHistoricalStatsResults to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyHistoricalStatsDestinyHistoricalStatsResults input)
        {
            if (input == null)
                return false;

            return base.Equals(input);
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = base.GetHashCode();
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
            //foreach(var x in BaseValidate(validationContext)) yield return x;
            //yield break;
            yield break;
        }
    }

}
