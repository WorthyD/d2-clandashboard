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
    /// UserUserMembershipData
    /// </summary>
    [DataContract]
    public partial class UserUserMembershipData :  IEquatable<UserUserMembershipData>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserUserMembershipData" /> class.
        /// </summary>
        /// <param name="destinyMemberships">this allows you to see destiny memberships that are visible and linked to this account (regardless of whether or not they have characters on the world server).</param>
        /// <param name="bungieNetUser">bungieNetUser.</param>
        public UserUserMembershipData(List<UserUserInfoCard> destinyMemberships = default(List<UserUserInfoCard>), UserGeneralUser bungieNetUser = default(UserGeneralUser))
        {
            this.DestinyMemberships = destinyMemberships;
            this.BungieNetUser = bungieNetUser;
        }
        
        /// <summary>
        /// this allows you to see destiny memberships that are visible and linked to this account (regardless of whether or not they have characters on the world server)
        /// </summary>
        /// <value>this allows you to see destiny memberships that are visible and linked to this account (regardless of whether or not they have characters on the world server)</value>
        [DataMember(Name="destinyMemberships", EmitDefaultValue=false)]
        public List<UserUserInfoCard> DestinyMemberships { get; set; }

        /// <summary>
        /// Gets or Sets BungieNetUser
        /// </summary>
        [DataMember(Name="bungieNetUser", EmitDefaultValue=false)]
        public UserGeneralUser BungieNetUser { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UserUserMembershipData {\n");
            sb.Append("  DestinyMemberships: ").Append(DestinyMemberships).Append("\n");
            sb.Append("  BungieNetUser: ").Append(BungieNetUser).Append("\n");
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
            return this.Equals(input as UserUserMembershipData);
        }

        /// <summary>
        /// Returns true if UserUserMembershipData instances are equal
        /// </summary>
        /// <param name="input">Instance of UserUserMembershipData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UserUserMembershipData input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.DestinyMemberships == input.DestinyMemberships ||
                    this.DestinyMemberships != null &&
                    this.DestinyMemberships.SequenceEqual(input.DestinyMemberships)
                ) && 
                (
                    this.BungieNetUser == input.BungieNetUser ||
                    (this.BungieNetUser != null &&
                    this.BungieNetUser.Equals(input.BungieNetUser))
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
                if (this.DestinyMemberships != null)
                    hashCode = hashCode * 59 + this.DestinyMemberships.GetHashCode();
                if (this.BungieNetUser != null)
                    hashCode = hashCode * 59 + this.BungieNetUser.GetHashCode();
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
