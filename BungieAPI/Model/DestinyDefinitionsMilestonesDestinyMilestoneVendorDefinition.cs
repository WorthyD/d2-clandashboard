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
    /// If the Milestone or a component has vendors whose inventories could/should be displayed that are relevant to it, this will return the vendor in question.   It also contains information we need to determine whether that vendor is actually relevant at the moment, given the user&#39;s current state.
    /// </summary>
    [DataContract]
    public partial class DestinyDefinitionsMilestonesDestinyMilestoneVendorDefinition :  IEquatable<DestinyDefinitionsMilestonesDestinyMilestoneVendorDefinition>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDefinitionsMilestonesDestinyMilestoneVendorDefinition" /> class.
        /// </summary>
        /// <param name="VendorHash">The hash of the vendor whose wares should be shown as associated with the Milestone..</param>
        public DestinyDefinitionsMilestonesDestinyMilestoneVendorDefinition(uint? VendorHash = default(uint?))
        {
            this.VendorHash = VendorHash;
        }
        
        /// <summary>
        /// The hash of the vendor whose wares should be shown as associated with the Milestone.
        /// </summary>
        /// <value>The hash of the vendor whose wares should be shown as associated with the Milestone.</value>
        [DataMember(Name="vendorHash", EmitDefaultValue=false)]
        public uint? VendorHash { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyDefinitionsMilestonesDestinyMilestoneVendorDefinition {\n");
            sb.Append("  VendorHash: ").Append(VendorHash).Append("\n");
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
            return this.Equals(input as DestinyDefinitionsMilestonesDestinyMilestoneVendorDefinition);
        }

        /// <summary>
        /// Returns true if DestinyDefinitionsMilestonesDestinyMilestoneVendorDefinition instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDefinitionsMilestonesDestinyMilestoneVendorDefinition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDefinitionsMilestonesDestinyMilestoneVendorDefinition input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.VendorHash == input.VendorHash ||
                    (this.VendorHash != null &&
                    this.VendorHash.Equals(input.VendorHash))
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
                if (this.VendorHash != null)
                    hashCode = hashCode * 59 + this.VendorHash.GetHashCode();
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
