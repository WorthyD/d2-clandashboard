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
    /// TrendingTrendingEntryCommunityCreation
    /// </summary>
    [DataContract]
    public partial class TrendingTrendingEntryCommunityCreation :  IEquatable<TrendingTrendingEntryCommunityCreation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TrendingTrendingEntryCommunityCreation" /> class.
        /// </summary>
        /// <param name="Media">Media.</param>
        /// <param name="Title">Title.</param>
        /// <param name="Author">Author.</param>
        /// <param name="AuthorMembershipId">AuthorMembershipId.</param>
        /// <param name="PostId">PostId.</param>
        /// <param name="Body">Body.</param>
        /// <param name="Upvotes">Upvotes.</param>
        public TrendingTrendingEntryCommunityCreation(string Media = default(string), string Title = default(string), string Author = default(string), long? AuthorMembershipId = default(long?), long? PostId = default(long?), string Body = default(string), int? Upvotes = default(int?))
        {
            this.Media = Media;
            this.Title = Title;
            this.Author = Author;
            this.AuthorMembershipId = AuthorMembershipId;
            this.PostId = PostId;
            this.Body = Body;
            this.Upvotes = Upvotes;
        }
        
        /// <summary>
        /// Gets or Sets Media
        /// </summary>
        [DataMember(Name="media", EmitDefaultValue=false)]
        public string Media { get; set; }

        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        [DataMember(Name="title", EmitDefaultValue=false)]
        public string Title { get; set; }

        /// <summary>
        /// Gets or Sets Author
        /// </summary>
        [DataMember(Name="author", EmitDefaultValue=false)]
        public string Author { get; set; }

        /// <summary>
        /// Gets or Sets AuthorMembershipId
        /// </summary>
        [DataMember(Name="authorMembershipId", EmitDefaultValue=false)]
        public long? AuthorMembershipId { get; set; }

        /// <summary>
        /// Gets or Sets PostId
        /// </summary>
        [DataMember(Name="postId", EmitDefaultValue=false)]
        public long? PostId { get; set; }

        /// <summary>
        /// Gets or Sets Body
        /// </summary>
        [DataMember(Name="body", EmitDefaultValue=false)]
        public string Body { get; set; }

        /// <summary>
        /// Gets or Sets Upvotes
        /// </summary>
        [DataMember(Name="upvotes", EmitDefaultValue=false)]
        public int? Upvotes { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class TrendingTrendingEntryCommunityCreation {\n");
            sb.Append("  Media: ").Append(Media).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  Author: ").Append(Author).Append("\n");
            sb.Append("  AuthorMembershipId: ").Append(AuthorMembershipId).Append("\n");
            sb.Append("  PostId: ").Append(PostId).Append("\n");
            sb.Append("  Body: ").Append(Body).Append("\n");
            sb.Append("  Upvotes: ").Append(Upvotes).Append("\n");
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
            return this.Equals(input as TrendingTrendingEntryCommunityCreation);
        }

        /// <summary>
        /// Returns true if TrendingTrendingEntryCommunityCreation instances are equal
        /// </summary>
        /// <param name="input">Instance of TrendingTrendingEntryCommunityCreation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TrendingTrendingEntryCommunityCreation input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Media == input.Media ||
                    (this.Media != null &&
                    this.Media.Equals(input.Media))
                ) && 
                (
                    this.Title == input.Title ||
                    (this.Title != null &&
                    this.Title.Equals(input.Title))
                ) && 
                (
                    this.Author == input.Author ||
                    (this.Author != null &&
                    this.Author.Equals(input.Author))
                ) && 
                (
                    this.AuthorMembershipId == input.AuthorMembershipId ||
                    (this.AuthorMembershipId != null &&
                    this.AuthorMembershipId.Equals(input.AuthorMembershipId))
                ) && 
                (
                    this.PostId == input.PostId ||
                    (this.PostId != null &&
                    this.PostId.Equals(input.PostId))
                ) && 
                (
                    this.Body == input.Body ||
                    (this.Body != null &&
                    this.Body.Equals(input.Body))
                ) && 
                (
                    this.Upvotes == input.Upvotes ||
                    (this.Upvotes != null &&
                    this.Upvotes.Equals(input.Upvotes))
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
                if (this.Media != null)
                    hashCode = hashCode * 59 + this.Media.GetHashCode();
                if (this.Title != null)
                    hashCode = hashCode * 59 + this.Title.GetHashCode();
                if (this.Author != null)
                    hashCode = hashCode * 59 + this.Author.GetHashCode();
                if (this.AuthorMembershipId != null)
                    hashCode = hashCode * 59 + this.AuthorMembershipId.GetHashCode();
                if (this.PostId != null)
                    hashCode = hashCode * 59 + this.PostId.GetHashCode();
                if (this.Body != null)
                    hashCode = hashCode * 59 + this.Body.GetHashCode();
                if (this.Upvotes != null)
                    hashCode = hashCode * 59 + this.Upvotes.GetHashCode();
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
