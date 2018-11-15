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
    /// If a Destiny Profile can&#39;t be returned, but we&#39;re pretty certain it&#39;s a valid Destiny account, this will contain as much info as we can get about the profile for your use.  Assume that the most you&#39;ll get is the Error Code, the Membership Type and the Membership ID.
    /// </summary>
    [DataContract]
    public partial class DestinyResponsesDestinyErrorProfile :  IEquatable<DestinyResponsesDestinyErrorProfile>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyResponsesDestinyErrorProfile" /> class.
        /// </summary>
        /// <param name="ErrorCode">The error that we encountered. You should be able to look up localized text to show to the user for these failures..</param>
        /// <param name="InfoCard">Basic info about the account that failed. Don&#39;t expect anything other than membership ID, Membership Type, and displayName to be populated..</param>
        public DestinyResponsesDestinyErrorProfile(ExceptionsPlatformErrorCodes ErrorCode = default(ExceptionsPlatformErrorCodes), UserUserInfoCard InfoCard = default(UserUserInfoCard))
        {
            this.ErrorCode = ErrorCode;
            this.InfoCard = InfoCard;
        }
        
        /// <summary>
        /// The error that we encountered. You should be able to look up localized text to show to the user for these failures.
        /// </summary>
        /// <value>The error that we encountered. You should be able to look up localized text to show to the user for these failures.</value>
        [DataMember(Name="errorCode", EmitDefaultValue=false)]
        public ExceptionsPlatformErrorCodes ErrorCode { get; set; }

        /// <summary>
        /// Basic info about the account that failed. Don&#39;t expect anything other than membership ID, Membership Type, and displayName to be populated.
        /// </summary>
        /// <value>Basic info about the account that failed. Don&#39;t expect anything other than membership ID, Membership Type, and displayName to be populated.</value>
        [DataMember(Name="infoCard", EmitDefaultValue=false)]
        public UserUserInfoCard InfoCard { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyResponsesDestinyErrorProfile {\n");
            sb.Append("  ErrorCode: ").Append(ErrorCode).Append("\n");
            sb.Append("  InfoCard: ").Append(InfoCard).Append("\n");
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
            return this.Equals(input as DestinyResponsesDestinyErrorProfile);
        }

        /// <summary>
        /// Returns true if DestinyResponsesDestinyErrorProfile instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyResponsesDestinyErrorProfile to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyResponsesDestinyErrorProfile input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ErrorCode == input.ErrorCode ||
                    (this.ErrorCode != null &&
                    this.ErrorCode.Equals(input.ErrorCode))
                ) && 
                (
                    this.InfoCard == input.InfoCard ||
                    (this.InfoCard != null &&
                    this.InfoCard.Equals(input.InfoCard))
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
                if (this.ErrorCode != null)
                    hashCode = hashCode * 59 + this.ErrorCode.GetHashCode();
                if (this.InfoCard != null)
                    hashCode = hashCode * 59 + this.InfoCard.GetHashCode();
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
