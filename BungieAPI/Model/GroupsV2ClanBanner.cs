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
    /// GroupsV2ClanBanner
    /// </summary>
    [DataContract]
    public partial class GroupsV2ClanBanner :  IEquatable<GroupsV2ClanBanner>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GroupsV2ClanBanner" /> class.
        /// </summary>
        /// <param name="decalId">decalId.</param>
        /// <param name="decalColorId">decalColorId.</param>
        /// <param name="decalBackgroundColorId">decalBackgroundColorId.</param>
        /// <param name="gonfalonId">gonfalonId.</param>
        /// <param name="gonfalonColorId">gonfalonColorId.</param>
        /// <param name="gonfalonDetailId">gonfalonDetailId.</param>
        /// <param name="gonfalonDetailColorId">gonfalonDetailColorId.</param>
        public GroupsV2ClanBanner(int? decalId = default(int?), int? decalColorId = default(int?), int? decalBackgroundColorId = default(int?), int? gonfalonId = default(int?), int? gonfalonColorId = default(int?), int? gonfalonDetailId = default(int?), int? gonfalonDetailColorId = default(int?))
        {
            this.DecalId = decalId;
            this.DecalColorId = decalColorId;
            this.DecalBackgroundColorId = decalBackgroundColorId;
            this.GonfalonId = gonfalonId;
            this.GonfalonColorId = gonfalonColorId;
            this.GonfalonDetailId = gonfalonDetailId;
            this.GonfalonDetailColorId = gonfalonDetailColorId;
        }
        
        /// <summary>
        /// Gets or Sets DecalId
        /// </summary>
        [DataMember(Name="decalId", EmitDefaultValue=false)]
        public int? DecalId { get; set; }

        /// <summary>
        /// Gets or Sets DecalColorId
        /// </summary>
        [DataMember(Name="decalColorId", EmitDefaultValue=false)]
        public int? DecalColorId { get; set; }

        /// <summary>
        /// Gets or Sets DecalBackgroundColorId
        /// </summary>
        [DataMember(Name="decalBackgroundColorId", EmitDefaultValue=false)]
        public int? DecalBackgroundColorId { get; set; }

        /// <summary>
        /// Gets or Sets GonfalonId
        /// </summary>
        [DataMember(Name="gonfalonId", EmitDefaultValue=false)]
        public int? GonfalonId { get; set; }

        /// <summary>
        /// Gets or Sets GonfalonColorId
        /// </summary>
        [DataMember(Name="gonfalonColorId", EmitDefaultValue=false)]
        public int? GonfalonColorId { get; set; }

        /// <summary>
        /// Gets or Sets GonfalonDetailId
        /// </summary>
        [DataMember(Name="gonfalonDetailId", EmitDefaultValue=false)]
        public int? GonfalonDetailId { get; set; }

        /// <summary>
        /// Gets or Sets GonfalonDetailColorId
        /// </summary>
        [DataMember(Name="gonfalonDetailColorId", EmitDefaultValue=false)]
        public int? GonfalonDetailColorId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GroupsV2ClanBanner {\n");
            sb.Append("  DecalId: ").Append(DecalId).Append("\n");
            sb.Append("  DecalColorId: ").Append(DecalColorId).Append("\n");
            sb.Append("  DecalBackgroundColorId: ").Append(DecalBackgroundColorId).Append("\n");
            sb.Append("  GonfalonId: ").Append(GonfalonId).Append("\n");
            sb.Append("  GonfalonColorId: ").Append(GonfalonColorId).Append("\n");
            sb.Append("  GonfalonDetailId: ").Append(GonfalonDetailId).Append("\n");
            sb.Append("  GonfalonDetailColorId: ").Append(GonfalonDetailColorId).Append("\n");
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
            return this.Equals(input as GroupsV2ClanBanner);
        }

        /// <summary>
        /// Returns true if GroupsV2ClanBanner instances are equal
        /// </summary>
        /// <param name="input">Instance of GroupsV2ClanBanner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GroupsV2ClanBanner input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.DecalId == input.DecalId ||
                    (this.DecalId != null &&
                    this.DecalId.Equals(input.DecalId))
                ) && 
                (
                    this.DecalColorId == input.DecalColorId ||
                    (this.DecalColorId != null &&
                    this.DecalColorId.Equals(input.DecalColorId))
                ) && 
                (
                    this.DecalBackgroundColorId == input.DecalBackgroundColorId ||
                    (this.DecalBackgroundColorId != null &&
                    this.DecalBackgroundColorId.Equals(input.DecalBackgroundColorId))
                ) && 
                (
                    this.GonfalonId == input.GonfalonId ||
                    (this.GonfalonId != null &&
                    this.GonfalonId.Equals(input.GonfalonId))
                ) && 
                (
                    this.GonfalonColorId == input.GonfalonColorId ||
                    (this.GonfalonColorId != null &&
                    this.GonfalonColorId.Equals(input.GonfalonColorId))
                ) && 
                (
                    this.GonfalonDetailId == input.GonfalonDetailId ||
                    (this.GonfalonDetailId != null &&
                    this.GonfalonDetailId.Equals(input.GonfalonDetailId))
                ) && 
                (
                    this.GonfalonDetailColorId == input.GonfalonDetailColorId ||
                    (this.GonfalonDetailColorId != null &&
                    this.GonfalonDetailColorId.Equals(input.GonfalonDetailColorId))
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
                if (this.DecalId != null)
                    hashCode = hashCode * 59 + this.DecalId.GetHashCode();
                if (this.DecalColorId != null)
                    hashCode = hashCode * 59 + this.DecalColorId.GetHashCode();
                if (this.DecalBackgroundColorId != null)
                    hashCode = hashCode * 59 + this.DecalBackgroundColorId.GetHashCode();
                if (this.GonfalonId != null)
                    hashCode = hashCode * 59 + this.GonfalonId.GetHashCode();
                if (this.GonfalonColorId != null)
                    hashCode = hashCode * 59 + this.GonfalonColorId.GetHashCode();
                if (this.GonfalonDetailId != null)
                    hashCode = hashCode * 59 + this.GonfalonDetailId.GetHashCode();
                if (this.GonfalonDetailColorId != null)
                    hashCode = hashCode * 59 + this.GonfalonDetailColorId.GetHashCode();
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
