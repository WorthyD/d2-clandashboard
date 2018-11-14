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
    /// ApplicationsApplicationDeveloper
    /// </summary>
    [DataContract]
    public partial class ApplicationsApplicationDeveloper :  IEquatable<ApplicationsApplicationDeveloper>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationsApplicationDeveloper" /> class.
        /// </summary>
        /// <param name="role">role.</param>
        /// <param name="apiEulaVersion">apiEulaVersion.</param>
        /// <param name="user">user.</param>
        public ApplicationsApplicationDeveloper(ApplicationsDeveloperRole role = default(ApplicationsDeveloperRole), int? apiEulaVersion = default(int?), UserUserInfoCard user = default(UserUserInfoCard))
        {
            this.Role = role;
            this.ApiEulaVersion = apiEulaVersion;
            this.User = user;
        }
        
        /// <summary>
        /// Gets or Sets Role
        /// </summary>
        [DataMember(Name="role", EmitDefaultValue=false)]
        public ApplicationsDeveloperRole Role { get; set; }

        /// <summary>
        /// Gets or Sets ApiEulaVersion
        /// </summary>
        [DataMember(Name="apiEulaVersion", EmitDefaultValue=false)]
        public int? ApiEulaVersion { get; set; }

        /// <summary>
        /// Gets or Sets User
        /// </summary>
        [DataMember(Name="user", EmitDefaultValue=false)]
        public UserUserInfoCard User { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ApplicationsApplicationDeveloper {\n");
            sb.Append("  Role: ").Append(Role).Append("\n");
            sb.Append("  ApiEulaVersion: ").Append(ApiEulaVersion).Append("\n");
            sb.Append("  User: ").Append(User).Append("\n");
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
            return this.Equals(input as ApplicationsApplicationDeveloper);
        }

        /// <summary>
        /// Returns true if ApplicationsApplicationDeveloper instances are equal
        /// </summary>
        /// <param name="input">Instance of ApplicationsApplicationDeveloper to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ApplicationsApplicationDeveloper input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Role == input.Role ||
                    (this.Role != null &&
                    this.Role.Equals(input.Role))
                ) && 
                (
                    this.ApiEulaVersion == input.ApiEulaVersion ||
                    (this.ApiEulaVersion != null &&
                    this.ApiEulaVersion.Equals(input.ApiEulaVersion))
                ) && 
                (
                    this.User == input.User ||
                    (this.User != null &&
                    this.User.Equals(input.User))
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
                if (this.Role != null)
                    hashCode = hashCode * 59 + this.Role.GetHashCode();
                if (this.ApiEulaVersion != null)
                    hashCode = hashCode * 59 + this.ApiEulaVersion.GetHashCode();
                if (this.User != null)
                    hashCode = hashCode * 59 + this.User.GetHashCode();
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
