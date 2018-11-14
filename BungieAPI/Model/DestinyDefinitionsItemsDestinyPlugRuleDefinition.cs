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
    /// Dictates a rule around whether the plug is enabled or insertable.  In practice, the live Destiny data will refer to these entries by index. You can then look up that index in the appropriate property (enabledRules or insertionRules) to get the localized string for the failure message if it failed.
    /// </summary>
    [DataContract]
    public partial class DestinyDefinitionsItemsDestinyPlugRuleDefinition :  IEquatable<DestinyDefinitionsItemsDestinyPlugRuleDefinition>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDefinitionsItemsDestinyPlugRuleDefinition" /> class.
        /// </summary>
        /// <param name="failureMessage">The localized string to show if this rule fails..</param>
        public DestinyDefinitionsItemsDestinyPlugRuleDefinition(string failureMessage = default(string))
        {
            this.FailureMessage = failureMessage;
        }
        
        /// <summary>
        /// The localized string to show if this rule fails.
        /// </summary>
        /// <value>The localized string to show if this rule fails.</value>
        [DataMember(Name="failureMessage", EmitDefaultValue=false)]
        public string FailureMessage { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyDefinitionsItemsDestinyPlugRuleDefinition {\n");
            sb.Append("  FailureMessage: ").Append(FailureMessage).Append("\n");
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
            return this.Equals(input as DestinyDefinitionsItemsDestinyPlugRuleDefinition);
        }

        /// <summary>
        /// Returns true if DestinyDefinitionsItemsDestinyPlugRuleDefinition instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDefinitionsItemsDestinyPlugRuleDefinition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDefinitionsItemsDestinyPlugRuleDefinition input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.FailureMessage == input.FailureMessage ||
                    (this.FailureMessage != null &&
                    this.FailureMessage.Equals(input.FailureMessage))
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
                if (this.FailureMessage != null)
                    hashCode = hashCode * 59 + this.FailureMessage.GetHashCode();
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
