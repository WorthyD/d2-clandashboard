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
    /// GroupsV2GroupOptionsEditAction
    /// </summary>
    [DataContract]
    public partial class GroupsV2GroupOptionsEditAction :  IEquatable<GroupsV2GroupOptionsEditAction>, IValidatableObject
    {
        /// <summary>
        /// Minimum Member Level allowed to host guided games  Always Allowed: Founder, Acting Founder, Admin  Allowed Overrides: None, Member, Beginner  Default is Member for clans, None for groups, although this means nothing for groups.
        /// </summary>
        /// <value>Minimum Member Level allowed to host guided games  Always Allowed: Founder, Acting Founder, Admin  Allowed Overrides: None, Member, Beginner  Default is Member for clans, None for groups, although this means nothing for groups.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum HostGuidedGamePermissionOverrideEnum
        {
            
            /// <summary>
            /// Enum None for 0
            /// </summary>
            [EnumMember(Value = "0")]
            None = 0,
            
            /// <summary>
            /// Enum Beginner for 1
            /// </summary>
            [EnumMember(Value = "1")]
            Beginner = 1,
            
            /// <summary>
            /// Enum Member for 2
            /// </summary>
            [EnumMember(Value = "2")]
            Member = 2
        }

        /// <summary>
        /// Level to join a member at when accepting an invite, application, or joining an open clan  Default is Beginner.
        /// </summary>
        /// <value>Level to join a member at when accepting an invite, application, or joining an open clan  Default is Beginner.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum JoinLevelEnum
        {
            
            /// <summary>
            /// Enum None for 0
            /// </summary>
            [EnumMember(Value = "0")]
            None = 0,
            
            /// <summary>
            /// Enum Beginner for 1
            /// </summary>
            [EnumMember(Value = "1")]
            Beginner = 1,
            
            /// <summary>
            /// Enum Member for 2
            /// </summary>
            [EnumMember(Value = "2")]
            Member = 2,
            
            /// <summary>
            /// Enum Admin for 3
            /// </summary>
            [EnumMember(Value = "3")]
            Admin = 3,
            
            /// <summary>
            /// Enum ActingFounder for 4
            /// </summary>
            [EnumMember(Value = "4")]
            ActingFounder = 4,
            
            /// <summary>
            /// Enum Founder for 5
            /// </summary>
            [EnumMember(Value = "5")]
            Founder = 5
        }

        /// <summary>
        /// Minimum Member Level allowed to host guided games  Always Allowed: Founder, Acting Founder, Admin  Allowed Overrides: None, Member, Beginner  Default is Member for clans, None for groups, although this means nothing for groups.
        /// </summary>
        /// <value>Minimum Member Level allowed to host guided games  Always Allowed: Founder, Acting Founder, Admin  Allowed Overrides: None, Member, Beginner  Default is Member for clans, None for groups, although this means nothing for groups.</value>
        [DataMember(Name="HostGuidedGamePermissionOverride", EmitDefaultValue=false)]
        public HostGuidedGamePermissionOverrideEnum? HostGuidedGamePermissionOverride { get; set; }
        /// <summary>
        /// Level to join a member at when accepting an invite, application, or joining an open clan  Default is Beginner.
        /// </summary>
        /// <value>Level to join a member at when accepting an invite, application, or joining an open clan  Default is Beginner.</value>
        [DataMember(Name="JoinLevel", EmitDefaultValue=false)]
        public JoinLevelEnum? JoinLevel { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="GroupsV2GroupOptionsEditAction" /> class.
        /// </summary>
        /// <param name="InvitePermissionOverride">Minimum Member Level allowed to invite new members to group  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don&#39;t  Default is false for clans, true for groups..</param>
        /// <param name="UpdateCulturePermissionOverride">Minimum Member Level allowed to update group culture  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don&#39;t  Default is false for clans, true for groups..</param>
        /// <param name="HostGuidedGamePermissionOverride">Minimum Member Level allowed to host guided games  Always Allowed: Founder, Acting Founder, Admin  Allowed Overrides: None, Member, Beginner  Default is Member for clans, None for groups, although this means nothing for groups..</param>
        /// <param name="UpdateBannerPermissionOverride">Minimum Member Level allowed to update banner  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don&#39;t  Default is false for clans, true for groups..</param>
        /// <param name="JoinLevel">Level to join a member at when accepting an invite, application, or joining an open clan  Default is Beginner..</param>
        public GroupsV2GroupOptionsEditAction(bool? InvitePermissionOverride = default(bool?), bool? UpdateCulturePermissionOverride = default(bool?), HostGuidedGamePermissionOverrideEnum? HostGuidedGamePermissionOverride = default(HostGuidedGamePermissionOverrideEnum?), bool? UpdateBannerPermissionOverride = default(bool?), JoinLevelEnum? JoinLevel = default(JoinLevelEnum?))
        {
            this.InvitePermissionOverride = InvitePermissionOverride;
            this.UpdateCulturePermissionOverride = UpdateCulturePermissionOverride;
            this.HostGuidedGamePermissionOverride = HostGuidedGamePermissionOverride;
            this.UpdateBannerPermissionOverride = UpdateBannerPermissionOverride;
            this.JoinLevel = JoinLevel;
        }
        
        /// <summary>
        /// Minimum Member Level allowed to invite new members to group  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don&#39;t  Default is false for clans, true for groups.
        /// </summary>
        /// <value>Minimum Member Level allowed to invite new members to group  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don&#39;t  Default is false for clans, true for groups.</value>
        [DataMember(Name="InvitePermissionOverride", EmitDefaultValue=false)]
        public bool? InvitePermissionOverride { get; set; }

        /// <summary>
        /// Minimum Member Level allowed to update group culture  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don&#39;t  Default is false for clans, true for groups.
        /// </summary>
        /// <value>Minimum Member Level allowed to update group culture  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don&#39;t  Default is false for clans, true for groups.</value>
        [DataMember(Name="UpdateCulturePermissionOverride", EmitDefaultValue=false)]
        public bool? UpdateCulturePermissionOverride { get; set; }


        /// <summary>
        /// Minimum Member Level allowed to update banner  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don&#39;t  Default is false for clans, true for groups.
        /// </summary>
        /// <value>Minimum Member Level allowed to update banner  Always Allowed: Founder, Acting Founder  True means admins have this power, false means they don&#39;t  Default is false for clans, true for groups.</value>
        [DataMember(Name="UpdateBannerPermissionOverride", EmitDefaultValue=false)]
        public bool? UpdateBannerPermissionOverride { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GroupsV2GroupOptionsEditAction {\n");
            sb.Append("  InvitePermissionOverride: ").Append(InvitePermissionOverride).Append("\n");
            sb.Append("  UpdateCulturePermissionOverride: ").Append(UpdateCulturePermissionOverride).Append("\n");
            sb.Append("  HostGuidedGamePermissionOverride: ").Append(HostGuidedGamePermissionOverride).Append("\n");
            sb.Append("  UpdateBannerPermissionOverride: ").Append(UpdateBannerPermissionOverride).Append("\n");
            sb.Append("  JoinLevel: ").Append(JoinLevel).Append("\n");
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
            return this.Equals(input as GroupsV2GroupOptionsEditAction);
        }

        /// <summary>
        /// Returns true if GroupsV2GroupOptionsEditAction instances are equal
        /// </summary>
        /// <param name="input">Instance of GroupsV2GroupOptionsEditAction to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GroupsV2GroupOptionsEditAction input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.InvitePermissionOverride == input.InvitePermissionOverride ||
                    (this.InvitePermissionOverride != null &&
                    this.InvitePermissionOverride.Equals(input.InvitePermissionOverride))
                ) && 
                (
                    this.UpdateCulturePermissionOverride == input.UpdateCulturePermissionOverride ||
                    (this.UpdateCulturePermissionOverride != null &&
                    this.UpdateCulturePermissionOverride.Equals(input.UpdateCulturePermissionOverride))
                ) && 
                (
                    this.HostGuidedGamePermissionOverride == input.HostGuidedGamePermissionOverride ||
                    (this.HostGuidedGamePermissionOverride != null &&
                    this.HostGuidedGamePermissionOverride.Equals(input.HostGuidedGamePermissionOverride))
                ) && 
                (
                    this.UpdateBannerPermissionOverride == input.UpdateBannerPermissionOverride ||
                    (this.UpdateBannerPermissionOverride != null &&
                    this.UpdateBannerPermissionOverride.Equals(input.UpdateBannerPermissionOverride))
                ) && 
                (
                    this.JoinLevel == input.JoinLevel ||
                    (this.JoinLevel != null &&
                    this.JoinLevel.Equals(input.JoinLevel))
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
                if (this.InvitePermissionOverride != null)
                    hashCode = hashCode * 59 + this.InvitePermissionOverride.GetHashCode();
                if (this.UpdateCulturePermissionOverride != null)
                    hashCode = hashCode * 59 + this.UpdateCulturePermissionOverride.GetHashCode();
                if (this.HostGuidedGamePermissionOverride != null)
                    hashCode = hashCode * 59 + this.HostGuidedGamePermissionOverride.GetHashCode();
                if (this.UpdateBannerPermissionOverride != null)
                    hashCode = hashCode * 59 + this.UpdateBannerPermissionOverride.GetHashCode();
                if (this.JoinLevel != null)
                    hashCode = hashCode * 59 + this.JoinLevel.GetHashCode();
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
