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
    /// InlineResponse20053
    /// </summary>
    [DataContract]
    public partial class InlineResponse20053 :  IEquatable<InlineResponse20053>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse20053" /> class.
        /// </summary>
        /// <param name="response">response.</param>
        /// <param name="errorCode">errorCode.</param>
        /// <param name="throttleSeconds">throttleSeconds.</param>
        /// <param name="errorStatus">errorStatus.</param>
        /// <param name="message">message.</param>
        /// <param name="messageData">messageData.</param>
        /// <param name="detailedErrorTrace">detailedErrorTrace.</param>
        public InlineResponse20053(DestinyHistoricalStatsDestinyActivityHistoryResults response = default(DestinyHistoricalStatsDestinyActivityHistoryResults), ExceptionsPlatformErrorCodes errorCode = default(ExceptionsPlatformErrorCodes), int? throttleSeconds = default(int?), string errorStatus = default(string), string message = default(string), Dictionary<string, string> messageData = default(Dictionary<string, string>), string detailedErrorTrace = default(string))
        {
            this.Response = response;
            this.ErrorCode = errorCode;
            this.ThrottleSeconds = throttleSeconds;
            this.ErrorStatus = errorStatus;
            this.Message = message;
            this.MessageData = messageData;
            this.DetailedErrorTrace = detailedErrorTrace;
        }
        
        /// <summary>
        /// Gets or Sets Response
        /// </summary>
        [DataMember(Name="Response", EmitDefaultValue=false)]
        public DestinyHistoricalStatsDestinyActivityHistoryResults Response { get; set; }

        /// <summary>
        /// Gets or Sets ErrorCode
        /// </summary>
        [DataMember(Name="ErrorCode", EmitDefaultValue=false)]
        public ExceptionsPlatformErrorCodes ErrorCode { get; set; }

        /// <summary>
        /// Gets or Sets ThrottleSeconds
        /// </summary>
        [DataMember(Name="ThrottleSeconds", EmitDefaultValue=false)]
        public int? ThrottleSeconds { get; set; }

        /// <summary>
        /// Gets or Sets ErrorStatus
        /// </summary>
        [DataMember(Name="ErrorStatus", EmitDefaultValue=false)]
        public string ErrorStatus { get; set; }

        /// <summary>
        /// Gets or Sets Message
        /// </summary>
        [DataMember(Name="Message", EmitDefaultValue=false)]
        public string Message { get; set; }

        /// <summary>
        /// Gets or Sets MessageData
        /// </summary>
        [DataMember(Name="MessageData", EmitDefaultValue=false)]
        public Dictionary<string, string> MessageData { get; set; }

        /// <summary>
        /// Gets or Sets DetailedErrorTrace
        /// </summary>
        [DataMember(Name="DetailedErrorTrace", EmitDefaultValue=false)]
        public string DetailedErrorTrace { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse20053 {\n");
            sb.Append("  Response: ").Append(Response).Append("\n");
            sb.Append("  ErrorCode: ").Append(ErrorCode).Append("\n");
            sb.Append("  ThrottleSeconds: ").Append(ThrottleSeconds).Append("\n");
            sb.Append("  ErrorStatus: ").Append(ErrorStatus).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  MessageData: ").Append(MessageData).Append("\n");
            sb.Append("  DetailedErrorTrace: ").Append(DetailedErrorTrace).Append("\n");
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
            return this.Equals(input as InlineResponse20053);
        }

        /// <summary>
        /// Returns true if InlineResponse20053 instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse20053 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse20053 input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Response == input.Response ||
                    (this.Response != null &&
                    this.Response.Equals(input.Response))
                ) && 
                (
                    this.ErrorCode == input.ErrorCode ||
                    (this.ErrorCode != null &&
                    this.ErrorCode.Equals(input.ErrorCode))
                ) && 
                (
                    this.ThrottleSeconds == input.ThrottleSeconds ||
                    (this.ThrottleSeconds != null &&
                    this.ThrottleSeconds.Equals(input.ThrottleSeconds))
                ) && 
                (
                    this.ErrorStatus == input.ErrorStatus ||
                    (this.ErrorStatus != null &&
                    this.ErrorStatus.Equals(input.ErrorStatus))
                ) && 
                (
                    this.Message == input.Message ||
                    (this.Message != null &&
                    this.Message.Equals(input.Message))
                ) && 
                (
                    this.MessageData == input.MessageData ||
                    this.MessageData != null &&
                    this.MessageData.SequenceEqual(input.MessageData)
                ) && 
                (
                    this.DetailedErrorTrace == input.DetailedErrorTrace ||
                    (this.DetailedErrorTrace != null &&
                    this.DetailedErrorTrace.Equals(input.DetailedErrorTrace))
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
                if (this.Response != null)
                    hashCode = hashCode * 59 + this.Response.GetHashCode();
                if (this.ErrorCode != null)
                    hashCode = hashCode * 59 + this.ErrorCode.GetHashCode();
                if (this.ThrottleSeconds != null)
                    hashCode = hashCode * 59 + this.ThrottleSeconds.GetHashCode();
                if (this.ErrorStatus != null)
                    hashCode = hashCode * 59 + this.ErrorStatus.GetHashCode();
                if (this.Message != null)
                    hashCode = hashCode * 59 + this.Message.GetHashCode();
                if (this.MessageData != null)
                    hashCode = hashCode * 59 + this.MessageData.GetHashCode();
                if (this.DetailedErrorTrace != null)
                    hashCode = hashCode * 59 + this.DetailedErrorTrace.GetHashCode();
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
