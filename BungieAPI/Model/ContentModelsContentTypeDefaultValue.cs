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
    /// ContentModelsContentTypeDefaultValue
    /// </summary>
    [DataContract]
    public partial class ContentModelsContentTypeDefaultValue :  IEquatable<ContentModelsContentTypeDefaultValue>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ContentModelsContentTypeDefaultValue" /> class.
        /// </summary>
        /// <param name="WhenClause">WhenClause.</param>
        /// <param name="WhenValue">WhenValue.</param>
        /// <param name="DefaultValue">DefaultValue.</param>
        public ContentModelsContentTypeDefaultValue(string WhenClause = default(string), string WhenValue = default(string), string DefaultValue = default(string))
        {
            this.WhenClause = WhenClause;
            this.WhenValue = WhenValue;
            this.DefaultValue = DefaultValue;
        }
        
        /// <summary>
        /// Gets or Sets WhenClause
        /// </summary>
        [DataMember(Name="whenClause", EmitDefaultValue=false)]
        public string WhenClause { get; set; }

        /// <summary>
        /// Gets or Sets WhenValue
        /// </summary>
        [DataMember(Name="whenValue", EmitDefaultValue=false)]
        public string WhenValue { get; set; }

        /// <summary>
        /// Gets or Sets DefaultValue
        /// </summary>
        [DataMember(Name="defaultValue", EmitDefaultValue=false)]
        public string DefaultValue { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ContentModelsContentTypeDefaultValue {\n");
            sb.Append("  WhenClause: ").Append(WhenClause).Append("\n");
            sb.Append("  WhenValue: ").Append(WhenValue).Append("\n");
            sb.Append("  DefaultValue: ").Append(DefaultValue).Append("\n");
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
            return this.Equals(input as ContentModelsContentTypeDefaultValue);
        }

        /// <summary>
        /// Returns true if ContentModelsContentTypeDefaultValue instances are equal
        /// </summary>
        /// <param name="input">Instance of ContentModelsContentTypeDefaultValue to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ContentModelsContentTypeDefaultValue input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.WhenClause == input.WhenClause ||
                    (this.WhenClause != null &&
                    this.WhenClause.Equals(input.WhenClause))
                ) && 
                (
                    this.WhenValue == input.WhenValue ||
                    (this.WhenValue != null &&
                    this.WhenValue.Equals(input.WhenValue))
                ) && 
                (
                    this.DefaultValue == input.DefaultValue ||
                    (this.DefaultValue != null &&
                    this.DefaultValue.Equals(input.DefaultValue))
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
                if (this.WhenClause != null)
                    hashCode = hashCode * 59 + this.WhenClause.GetHashCode();
                if (this.WhenValue != null)
                    hashCode = hashCode * 59 + this.WhenValue.GetHashCode();
                if (this.DefaultValue != null)
                    hashCode = hashCode * 59 + this.DefaultValue.GetHashCode();
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
