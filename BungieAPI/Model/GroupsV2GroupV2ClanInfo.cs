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
    /// This contract contains clan-specific group information. It does not include any investment data.
    /// </summary>
    [DataContract]
    public partial class GroupsV2GroupV2ClanInfo :  IEquatable<GroupsV2GroupV2ClanInfo>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GroupsV2GroupV2ClanInfo" /> class.
        /// </summary>
        /// <param name="ClanCallsign">ClanCallsign.</param>
        /// <param name="ClanBannerData">ClanBannerData.</param>
        public GroupsV2GroupV2ClanInfo(string ClanCallsign = default(string), GroupsV2ClanBanner ClanBannerData = default(GroupsV2ClanBanner))
        {
            this.ClanCallsign = ClanCallsign;
            this.ClanBannerData = ClanBannerData;
        }
        
        /// <summary>
        /// Gets or Sets ClanCallsign
        /// </summary>
        [DataMember(Name="clanCallsign", EmitDefaultValue=false)]
        public string ClanCallsign { get; set; }

        /// <summary>
        /// Gets or Sets ClanBannerData
        /// </summary>
        [DataMember(Name="clanBannerData", EmitDefaultValue=false)]
        public GroupsV2ClanBanner ClanBannerData { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GroupsV2GroupV2ClanInfo {\n");
            sb.Append("  ClanCallsign: ").Append(ClanCallsign).Append("\n");
            sb.Append("  ClanBannerData: ").Append(ClanBannerData).Append("\n");
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
            return this.Equals(input as GroupsV2GroupV2ClanInfo);
        }

        /// <summary>
        /// Returns true if GroupsV2GroupV2ClanInfo instances are equal
        /// </summary>
        /// <param name="input">Instance of GroupsV2GroupV2ClanInfo to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GroupsV2GroupV2ClanInfo input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ClanCallsign == input.ClanCallsign ||
                    (this.ClanCallsign != null &&
                    this.ClanCallsign.Equals(input.ClanCallsign))
                ) && 
                (
                    this.ClanBannerData == input.ClanBannerData ||
                    (this.ClanBannerData != null &&
                    this.ClanBannerData.Equals(input.ClanBannerData))
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
                if (this.ClanCallsign != null)
                    hashCode = hashCode * 59 + this.ClanCallsign.GetHashCode();
                if (this.ClanBannerData != null)
                    hashCode = hashCode * 59 + this.ClanBannerData.GetHashCode();
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
