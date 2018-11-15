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
    /// Indicates the status of an \&quot;Unlock Flag\&quot; on a Character or Profile.  These are individual bits of state that can be either set or not set, and sometimes provide interesting human-readable information in their related DestinyUnlockDefinition.
    /// </summary>
    [DataContract]
    public partial class DestinyDestinyUnlockStatus :  IEquatable<DestinyDestinyUnlockStatus>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDestinyUnlockStatus" /> class.
        /// </summary>
        /// <param name="UnlockHash">The hash identifier for the Unlock Flag. Use to lookup DestinyUnlockDefinition for static data. Not all unlocks have human readable data - in fact, most don&#39;t. But when they do, it can be very useful to show. Even if they don&#39;t have human readable data, you might be able to infer the meaning of an unlock flag with a bit of experimentation....</param>
        /// <param name="IsSet">Whether the unlock flag is set..</param>
        public DestinyDestinyUnlockStatus(uint? UnlockHash = default(uint?), bool? IsSet = default(bool?))
        {
            this.UnlockHash = UnlockHash;
            this.IsSet = IsSet;
        }
        
        /// <summary>
        /// The hash identifier for the Unlock Flag. Use to lookup DestinyUnlockDefinition for static data. Not all unlocks have human readable data - in fact, most don&#39;t. But when they do, it can be very useful to show. Even if they don&#39;t have human readable data, you might be able to infer the meaning of an unlock flag with a bit of experimentation...
        /// </summary>
        /// <value>The hash identifier for the Unlock Flag. Use to lookup DestinyUnlockDefinition for static data. Not all unlocks have human readable data - in fact, most don&#39;t. But when they do, it can be very useful to show. Even if they don&#39;t have human readable data, you might be able to infer the meaning of an unlock flag with a bit of experimentation...</value>
        [DataMember(Name="unlockHash", EmitDefaultValue=false)]
        public uint? UnlockHash { get; set; }

        /// <summary>
        /// Whether the unlock flag is set.
        /// </summary>
        /// <value>Whether the unlock flag is set.</value>
        [DataMember(Name="isSet", EmitDefaultValue=false)]
        public bool? IsSet { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyDestinyUnlockStatus {\n");
            sb.Append("  UnlockHash: ").Append(UnlockHash).Append("\n");
            sb.Append("  IsSet: ").Append(IsSet).Append("\n");
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
            return this.Equals(input as DestinyDestinyUnlockStatus);
        }

        /// <summary>
        /// Returns true if DestinyDestinyUnlockStatus instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDestinyUnlockStatus to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDestinyUnlockStatus input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.UnlockHash == input.UnlockHash ||
                    (this.UnlockHash != null &&
                    this.UnlockHash.Equals(input.UnlockHash))
                ) && 
                (
                    this.IsSet == input.IsSet ||
                    (this.IsSet != null &&
                    this.IsSet.Equals(input.IsSet))
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
                if (this.UnlockHash != null)
                    hashCode = hashCode * 59 + this.UnlockHash.GetHashCode();
                if (this.IsSet != null)
                    hashCode = hashCode * 59 + this.IsSet.GetHashCode();
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
