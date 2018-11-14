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
    /// SingleComponentResponseOfDestinyPlugSetsComponent
    /// </summary>
    [DataContract]
    public partial class SingleComponentResponseOfDestinyPlugSetsComponent :  IEquatable<SingleComponentResponseOfDestinyPlugSetsComponent>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SingleComponentResponseOfDestinyPlugSetsComponent" /> class.
        /// </summary>
        /// <param name="data">data.</param>
        /// <param name="privacy">privacy.</param>
        public SingleComponentResponseOfDestinyPlugSetsComponent(DestinyComponentsPlugSetsDestinyPlugSetsComponent data = default(DestinyComponentsPlugSetsDestinyPlugSetsComponent), ComponentsComponentPrivacySetting privacy = default(ComponentsComponentPrivacySetting))
        {
            this.Data = data;
            this.Privacy = privacy;
        }
        
        /// <summary>
        /// Gets or Sets Data
        /// </summary>
        [DataMember(Name="data", EmitDefaultValue=false)]
        public DestinyComponentsPlugSetsDestinyPlugSetsComponent Data { get; set; }

        /// <summary>
        /// Gets or Sets Privacy
        /// </summary>
        [DataMember(Name="privacy", EmitDefaultValue=false)]
        public ComponentsComponentPrivacySetting Privacy { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SingleComponentResponseOfDestinyPlugSetsComponent {\n");
            sb.Append("  Data: ").Append(Data).Append("\n");
            sb.Append("  Privacy: ").Append(Privacy).Append("\n");
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
            return this.Equals(input as SingleComponentResponseOfDestinyPlugSetsComponent);
        }

        /// <summary>
        /// Returns true if SingleComponentResponseOfDestinyPlugSetsComponent instances are equal
        /// </summary>
        /// <param name="input">Instance of SingleComponentResponseOfDestinyPlugSetsComponent to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SingleComponentResponseOfDestinyPlugSetsComponent input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Data == input.Data ||
                    (this.Data != null &&
                    this.Data.Equals(input.Data))
                ) && 
                (
                    this.Privacy == input.Privacy ||
                    (this.Privacy != null &&
                    this.Privacy.Equals(input.Privacy))
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
                if (this.Data != null)
                    hashCode = hashCode * 59 + this.Data.GetHashCode();
                if (this.Privacy != null)
                    hashCode = hashCode * 59 + this.Privacy.GetHashCode();
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
