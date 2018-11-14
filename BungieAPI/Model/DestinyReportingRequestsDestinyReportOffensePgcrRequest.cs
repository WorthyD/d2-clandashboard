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
    /// If you want to report a player causing trouble in a game, this request will let you report that player and the specific PGCR in which the trouble was caused, along with why.  Please don&#39;t do this just because you dislike the person! I mean, I know people will do it anyways, but can you like take a good walk, or put a curse on them or something? Do me a solid and reconsider.  Note that this request object doesn&#39;t have the actual PGCR ID nor your Account/Character ID in it. We will infer that information from your authentication information and the PGCR ID that you pass into the URL of the reporting endpoint itself.
    /// </summary>
    [DataContract]
    public partial class DestinyReportingRequestsDestinyReportOffensePgcrRequest :  IEquatable<DestinyReportingRequestsDestinyReportOffensePgcrRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyReportingRequestsDestinyReportOffensePgcrRequest" /> class.
        /// </summary>
        /// <param name="reasonCategoryHashes">So you&#39;ve decided to report someone instead of cursing them and their descendants. Well, okay then. This is the category or categorie(s) of infractions for which you are reporting the user. These are hash identifiers that map to DestinyReportReasonCategoryDefinition entries..</param>
        /// <param name="reasonHashes">If applicable, provide a more specific reason(s) within the general category of problems provided by the reasonHash. This is also an identifier for a reason. All reasonHashes provided must be children of at least one the reasonCategoryHashes provided..</param>
        /// <param name="offendingCharacterId">Within the PGCR provided when calling the Reporting endpoint, this should be the character ID of the user that you thought was violating terms of use. They must exist in the PGCR provided..</param>
        public DestinyReportingRequestsDestinyReportOffensePgcrRequest(List<int?> reasonCategoryHashes = default(List<int?>), List<int?> reasonHashes = default(List<int?>), long? offendingCharacterId = default(long?))
        {
            this.ReasonCategoryHashes = reasonCategoryHashes;
            this.ReasonHashes = reasonHashes;
            this.OffendingCharacterId = offendingCharacterId;
        }
        
        /// <summary>
        /// So you&#39;ve decided to report someone instead of cursing them and their descendants. Well, okay then. This is the category or categorie(s) of infractions for which you are reporting the user. These are hash identifiers that map to DestinyReportReasonCategoryDefinition entries.
        /// </summary>
        /// <value>So you&#39;ve decided to report someone instead of cursing them and their descendants. Well, okay then. This is the category or categorie(s) of infractions for which you are reporting the user. These are hash identifiers that map to DestinyReportReasonCategoryDefinition entries.</value>
        [DataMember(Name="reasonCategoryHashes", EmitDefaultValue=false)]
        public List<int?> ReasonCategoryHashes { get; set; }

        /// <summary>
        /// If applicable, provide a more specific reason(s) within the general category of problems provided by the reasonHash. This is also an identifier for a reason. All reasonHashes provided must be children of at least one the reasonCategoryHashes provided.
        /// </summary>
        /// <value>If applicable, provide a more specific reason(s) within the general category of problems provided by the reasonHash. This is also an identifier for a reason. All reasonHashes provided must be children of at least one the reasonCategoryHashes provided.</value>
        [DataMember(Name="reasonHashes", EmitDefaultValue=false)]
        public List<int?> ReasonHashes { get; set; }

        /// <summary>
        /// Within the PGCR provided when calling the Reporting endpoint, this should be the character ID of the user that you thought was violating terms of use. They must exist in the PGCR provided.
        /// </summary>
        /// <value>Within the PGCR provided when calling the Reporting endpoint, this should be the character ID of the user that you thought was violating terms of use. They must exist in the PGCR provided.</value>
        [DataMember(Name="offendingCharacterId", EmitDefaultValue=false)]
        public long? OffendingCharacterId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyReportingRequestsDestinyReportOffensePgcrRequest {\n");
            sb.Append("  ReasonCategoryHashes: ").Append(ReasonCategoryHashes).Append("\n");
            sb.Append("  ReasonHashes: ").Append(ReasonHashes).Append("\n");
            sb.Append("  OffendingCharacterId: ").Append(OffendingCharacterId).Append("\n");
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
            return this.Equals(input as DestinyReportingRequestsDestinyReportOffensePgcrRequest);
        }

        /// <summary>
        /// Returns true if DestinyReportingRequestsDestinyReportOffensePgcrRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyReportingRequestsDestinyReportOffensePgcrRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyReportingRequestsDestinyReportOffensePgcrRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ReasonCategoryHashes == input.ReasonCategoryHashes ||
                    this.ReasonCategoryHashes != null &&
                    this.ReasonCategoryHashes.SequenceEqual(input.ReasonCategoryHashes)
                ) && 
                (
                    this.ReasonHashes == input.ReasonHashes ||
                    this.ReasonHashes != null &&
                    this.ReasonHashes.SequenceEqual(input.ReasonHashes)
                ) && 
                (
                    this.OffendingCharacterId == input.OffendingCharacterId ||
                    (this.OffendingCharacterId != null &&
                    this.OffendingCharacterId.Equals(input.OffendingCharacterId))
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
                if (this.ReasonCategoryHashes != null)
                    hashCode = hashCode * 59 + this.ReasonCategoryHashes.GetHashCode();
                if (this.ReasonHashes != null)
                    hashCode = hashCode * 59 + this.ReasonHashes.GetHashCode();
                if (this.OffendingCharacterId != null)
                    hashCode = hashCode * 59 + this.OffendingCharacterId.GetHashCode();
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
