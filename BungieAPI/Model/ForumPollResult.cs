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
    /// ForumPollResult
    /// </summary>
    [DataContract]
    public partial class ForumPollResult :  IEquatable<ForumPollResult>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ForumPollResult" /> class.
        /// </summary>
        /// <param name="answerText">answerText.</param>
        /// <param name="answerSlot">answerSlot.</param>
        /// <param name="lastVoteDate">lastVoteDate.</param>
        /// <param name="votes">votes.</param>
        /// <param name="requestingUserVoted">requestingUserVoted.</param>
        public ForumPollResult(string answerText = default(string), int? answerSlot = default(int?), DateTime? lastVoteDate = default(DateTime?), int? votes = default(int?), bool? requestingUserVoted = default(bool?))
        {
            this.AnswerText = answerText;
            this.AnswerSlot = answerSlot;
            this.LastVoteDate = lastVoteDate;
            this.Votes = votes;
            this.RequestingUserVoted = requestingUserVoted;
        }
        
        /// <summary>
        /// Gets or Sets AnswerText
        /// </summary>
        [DataMember(Name="answerText", EmitDefaultValue=false)]
        public string AnswerText { get; set; }

        /// <summary>
        /// Gets or Sets AnswerSlot
        /// </summary>
        [DataMember(Name="answerSlot", EmitDefaultValue=false)]
        public int? AnswerSlot { get; set; }

        /// <summary>
        /// Gets or Sets LastVoteDate
        /// </summary>
        [DataMember(Name="lastVoteDate", EmitDefaultValue=false)]
        public DateTime? LastVoteDate { get; set; }

        /// <summary>
        /// Gets or Sets Votes
        /// </summary>
        [DataMember(Name="votes", EmitDefaultValue=false)]
        public int? Votes { get; set; }

        /// <summary>
        /// Gets or Sets RequestingUserVoted
        /// </summary>
        [DataMember(Name="requestingUserVoted", EmitDefaultValue=false)]
        public bool? RequestingUserVoted { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ForumPollResult {\n");
            sb.Append("  AnswerText: ").Append(AnswerText).Append("\n");
            sb.Append("  AnswerSlot: ").Append(AnswerSlot).Append("\n");
            sb.Append("  LastVoteDate: ").Append(LastVoteDate).Append("\n");
            sb.Append("  Votes: ").Append(Votes).Append("\n");
            sb.Append("  RequestingUserVoted: ").Append(RequestingUserVoted).Append("\n");
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
            return this.Equals(input as ForumPollResult);
        }

        /// <summary>
        /// Returns true if ForumPollResult instances are equal
        /// </summary>
        /// <param name="input">Instance of ForumPollResult to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ForumPollResult input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.AnswerText == input.AnswerText ||
                    (this.AnswerText != null &&
                    this.AnswerText.Equals(input.AnswerText))
                ) && 
                (
                    this.AnswerSlot == input.AnswerSlot ||
                    (this.AnswerSlot != null &&
                    this.AnswerSlot.Equals(input.AnswerSlot))
                ) && 
                (
                    this.LastVoteDate == input.LastVoteDate ||
                    (this.LastVoteDate != null &&
                    this.LastVoteDate.Equals(input.LastVoteDate))
                ) && 
                (
                    this.Votes == input.Votes ||
                    (this.Votes != null &&
                    this.Votes.Equals(input.Votes))
                ) && 
                (
                    this.RequestingUserVoted == input.RequestingUserVoted ||
                    (this.RequestingUserVoted != null &&
                    this.RequestingUserVoted.Equals(input.RequestingUserVoted))
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
                if (this.AnswerText != null)
                    hashCode = hashCode * 59 + this.AnswerText.GetHashCode();
                if (this.AnswerSlot != null)
                    hashCode = hashCode * 59 + this.AnswerSlot.GetHashCode();
                if (this.LastVoteDate != null)
                    hashCode = hashCode * 59 + this.LastVoteDate.GetHashCode();
                if (this.Votes != null)
                    hashCode = hashCode * 59 + this.Votes.GetHashCode();
                if (this.RequestingUserVoted != null)
                    hashCode = hashCode * 59 + this.RequestingUserVoted.GetHashCode();
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
