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
    /// GroupsV2GroupV2
    /// </summary>
    [DataContract]
    public partial class GroupsV2GroupV2 :  IEquatable<GroupsV2GroupV2>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GroupsV2GroupV2" /> class.
        /// </summary>
        /// <param name="GroupId">GroupId.</param>
        /// <param name="Name">Name.</param>
        /// <param name="GroupType">GroupType.</param>
        /// <param name="MembershipIdCreated">MembershipIdCreated.</param>
        /// <param name="CreationDate">CreationDate.</param>
        /// <param name="ModificationDate">ModificationDate.</param>
        /// <param name="About">About.</param>
        /// <param name="Tags">Tags.</param>
        /// <param name="MemberCount">MemberCount.</param>
        /// <param name="IsPublic">IsPublic.</param>
        /// <param name="IsPublicTopicAdminOnly">IsPublicTopicAdminOnly.</param>
        /// <param name="Motto">Motto.</param>
        /// <param name="AllowChat">AllowChat.</param>
        /// <param name="IsDefaultPostPublic">IsDefaultPostPublic.</param>
        /// <param name="ChatSecurity">ChatSecurity.</param>
        /// <param name="Locale">Locale.</param>
        /// <param name="AvatarImageIndex">AvatarImageIndex.</param>
        /// <param name="Homepage">Homepage.</param>
        /// <param name="MembershipOption">MembershipOption.</param>
        /// <param name="DefaultPublicity">DefaultPublicity.</param>
        /// <param name="Theme">Theme.</param>
        /// <param name="BannerPath">BannerPath.</param>
        /// <param name="AvatarPath">AvatarPath.</param>
        /// <param name="ConversationId">ConversationId.</param>
        /// <param name="EnableInvitationMessagingForAdmins">EnableInvitationMessagingForAdmins.</param>
        /// <param name="BanExpireDate">BanExpireDate.</param>
        /// <param name="Features">Features.</param>
        /// <param name="ClanInfo">ClanInfo.</param>
        public GroupsV2GroupV2(long? GroupId = default(long?), string Name = default(string), GroupsV2GroupType GroupType = default(GroupsV2GroupType), long? MembershipIdCreated = default(long?), DateTime? CreationDate = default(DateTime?), DateTime? ModificationDate = default(DateTime?), string About = default(string), List<string> Tags = default(List<string>), int? MemberCount = default(int?), bool? IsPublic = default(bool?), bool? IsPublicTopicAdminOnly = default(bool?), string Motto = default(string), bool? AllowChat = default(bool?), bool? IsDefaultPostPublic = default(bool?), GroupsV2ChatSecuritySetting ChatSecurity = default(GroupsV2ChatSecuritySetting), string Locale = default(string), int? AvatarImageIndex = default(int?), GroupsV2GroupHomepage Homepage = default(GroupsV2GroupHomepage), GroupsV2MembershipOption MembershipOption = default(GroupsV2MembershipOption), GroupsV2GroupPostPublicity DefaultPublicity = default(GroupsV2GroupPostPublicity), string Theme = default(string), string BannerPath = default(string), string AvatarPath = default(string), long? ConversationId = default(long?), bool? EnableInvitationMessagingForAdmins = default(bool?), DateTime? BanExpireDate = default(DateTime?), GroupsV2GroupFeatures Features = default(GroupsV2GroupFeatures), GroupsV2GroupV2ClanInfoAndInvestment ClanInfo = default(GroupsV2GroupV2ClanInfoAndInvestment))
        {
            this.GroupId = GroupId;
            this.Name = Name;
            this.GroupType = GroupType;
            this.MembershipIdCreated = MembershipIdCreated;
            this.CreationDate = CreationDate;
            this.ModificationDate = ModificationDate;
            this.About = About;
            this.Tags = Tags;
            this.MemberCount = MemberCount;
            this.IsPublic = IsPublic;
            this.IsPublicTopicAdminOnly = IsPublicTopicAdminOnly;
            this.Motto = Motto;
            this.AllowChat = AllowChat;
            this.IsDefaultPostPublic = IsDefaultPostPublic;
            this.ChatSecurity = ChatSecurity;
            this.Locale = Locale;
            this.AvatarImageIndex = AvatarImageIndex;
            this.Homepage = Homepage;
            this.MembershipOption = MembershipOption;
            this.DefaultPublicity = DefaultPublicity;
            this.Theme = Theme;
            this.BannerPath = BannerPath;
            this.AvatarPath = AvatarPath;
            this.ConversationId = ConversationId;
            this.EnableInvitationMessagingForAdmins = EnableInvitationMessagingForAdmins;
            this.BanExpireDate = BanExpireDate;
            this.Features = Features;
            this.ClanInfo = ClanInfo;
        }
        
        /// <summary>
        /// Gets or Sets GroupId
        /// </summary>
        [DataMember(Name="groupId", EmitDefaultValue=false)]
        public long? GroupId { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets GroupType
        /// </summary>
        [DataMember(Name="groupType", EmitDefaultValue=false)]
        public GroupsV2GroupType GroupType { get; set; }

        /// <summary>
        /// Gets or Sets MembershipIdCreated
        /// </summary>
        [DataMember(Name="membershipIdCreated", EmitDefaultValue=false)]
        public long? MembershipIdCreated { get; set; }

        /// <summary>
        /// Gets or Sets CreationDate
        /// </summary>
        [DataMember(Name="creationDate", EmitDefaultValue=false)]
        public DateTime? CreationDate { get; set; }

        /// <summary>
        /// Gets or Sets ModificationDate
        /// </summary>
        [DataMember(Name="modificationDate", EmitDefaultValue=false)]
        public DateTime? ModificationDate { get; set; }

        /// <summary>
        /// Gets or Sets About
        /// </summary>
        [DataMember(Name="about", EmitDefaultValue=false)]
        public string About { get; set; }

        /// <summary>
        /// Gets or Sets Tags
        /// </summary>
        [DataMember(Name="tags", EmitDefaultValue=false)]
        public List<string> Tags { get; set; }

        /// <summary>
        /// Gets or Sets MemberCount
        /// </summary>
        [DataMember(Name="memberCount", EmitDefaultValue=false)]
        public int? MemberCount { get; set; }

        /// <summary>
        /// Gets or Sets IsPublic
        /// </summary>
        [DataMember(Name="isPublic", EmitDefaultValue=false)]
        public bool? IsPublic { get; set; }

        /// <summary>
        /// Gets or Sets IsPublicTopicAdminOnly
        /// </summary>
        [DataMember(Name="isPublicTopicAdminOnly", EmitDefaultValue=false)]
        public bool? IsPublicTopicAdminOnly { get; set; }

        /// <summary>
        /// Gets or Sets Motto
        /// </summary>
        [DataMember(Name="motto", EmitDefaultValue=false)]
        public string Motto { get; set; }

        /// <summary>
        /// Gets or Sets AllowChat
        /// </summary>
        [DataMember(Name="allowChat", EmitDefaultValue=false)]
        public bool? AllowChat { get; set; }

        /// <summary>
        /// Gets or Sets IsDefaultPostPublic
        /// </summary>
        [DataMember(Name="isDefaultPostPublic", EmitDefaultValue=false)]
        public bool? IsDefaultPostPublic { get; set; }

        /// <summary>
        /// Gets or Sets ChatSecurity
        /// </summary>
        [DataMember(Name="chatSecurity", EmitDefaultValue=false)]
        public GroupsV2ChatSecuritySetting ChatSecurity { get; set; }

        /// <summary>
        /// Gets or Sets Locale
        /// </summary>
        [DataMember(Name="locale", EmitDefaultValue=false)]
        public string Locale { get; set; }

        /// <summary>
        /// Gets or Sets AvatarImageIndex
        /// </summary>
        [DataMember(Name="avatarImageIndex", EmitDefaultValue=false)]
        public int? AvatarImageIndex { get; set; }

        /// <summary>
        /// Gets or Sets Homepage
        /// </summary>
        [DataMember(Name="homepage", EmitDefaultValue=false)]
        public GroupsV2GroupHomepage Homepage { get; set; }

        /// <summary>
        /// Gets or Sets MembershipOption
        /// </summary>
        [DataMember(Name="membershipOption", EmitDefaultValue=false)]
        public GroupsV2MembershipOption MembershipOption { get; set; }

        /// <summary>
        /// Gets or Sets DefaultPublicity
        /// </summary>
        [DataMember(Name="defaultPublicity", EmitDefaultValue=false)]
        public GroupsV2GroupPostPublicity DefaultPublicity { get; set; }

        /// <summary>
        /// Gets or Sets Theme
        /// </summary>
        [DataMember(Name="theme", EmitDefaultValue=false)]
        public string Theme { get; set; }

        /// <summary>
        /// Gets or Sets BannerPath
        /// </summary>
        [DataMember(Name="bannerPath", EmitDefaultValue=false)]
        public string BannerPath { get; set; }

        /// <summary>
        /// Gets or Sets AvatarPath
        /// </summary>
        [DataMember(Name="avatarPath", EmitDefaultValue=false)]
        public string AvatarPath { get; set; }

        /// <summary>
        /// Gets or Sets ConversationId
        /// </summary>
        [DataMember(Name="conversationId", EmitDefaultValue=false)]
        public long? ConversationId { get; set; }

        /// <summary>
        /// Gets or Sets EnableInvitationMessagingForAdmins
        /// </summary>
        [DataMember(Name="enableInvitationMessagingForAdmins", EmitDefaultValue=false)]
        public bool? EnableInvitationMessagingForAdmins { get; set; }

        /// <summary>
        /// Gets or Sets BanExpireDate
        /// </summary>
        [DataMember(Name="banExpireDate", EmitDefaultValue=false)]
        public DateTime? BanExpireDate { get; set; }

        /// <summary>
        /// Gets or Sets Features
        /// </summary>
        [DataMember(Name="features", EmitDefaultValue=false)]
        public GroupsV2GroupFeatures Features { get; set; }

        /// <summary>
        /// Gets or Sets ClanInfo
        /// </summary>
        [DataMember(Name="clanInfo", EmitDefaultValue=false)]
        public GroupsV2GroupV2ClanInfoAndInvestment ClanInfo { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GroupsV2GroupV2 {\n");
            sb.Append("  GroupId: ").Append(GroupId).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  GroupType: ").Append(GroupType).Append("\n");
            sb.Append("  MembershipIdCreated: ").Append(MembershipIdCreated).Append("\n");
            sb.Append("  CreationDate: ").Append(CreationDate).Append("\n");
            sb.Append("  ModificationDate: ").Append(ModificationDate).Append("\n");
            sb.Append("  About: ").Append(About).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  MemberCount: ").Append(MemberCount).Append("\n");
            sb.Append("  IsPublic: ").Append(IsPublic).Append("\n");
            sb.Append("  IsPublicTopicAdminOnly: ").Append(IsPublicTopicAdminOnly).Append("\n");
            sb.Append("  Motto: ").Append(Motto).Append("\n");
            sb.Append("  AllowChat: ").Append(AllowChat).Append("\n");
            sb.Append("  IsDefaultPostPublic: ").Append(IsDefaultPostPublic).Append("\n");
            sb.Append("  ChatSecurity: ").Append(ChatSecurity).Append("\n");
            sb.Append("  Locale: ").Append(Locale).Append("\n");
            sb.Append("  AvatarImageIndex: ").Append(AvatarImageIndex).Append("\n");
            sb.Append("  Homepage: ").Append(Homepage).Append("\n");
            sb.Append("  MembershipOption: ").Append(MembershipOption).Append("\n");
            sb.Append("  DefaultPublicity: ").Append(DefaultPublicity).Append("\n");
            sb.Append("  Theme: ").Append(Theme).Append("\n");
            sb.Append("  BannerPath: ").Append(BannerPath).Append("\n");
            sb.Append("  AvatarPath: ").Append(AvatarPath).Append("\n");
            sb.Append("  ConversationId: ").Append(ConversationId).Append("\n");
            sb.Append("  EnableInvitationMessagingForAdmins: ").Append(EnableInvitationMessagingForAdmins).Append("\n");
            sb.Append("  BanExpireDate: ").Append(BanExpireDate).Append("\n");
            sb.Append("  Features: ").Append(Features).Append("\n");
            sb.Append("  ClanInfo: ").Append(ClanInfo).Append("\n");
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
            return this.Equals(input as GroupsV2GroupV2);
        }

        /// <summary>
        /// Returns true if GroupsV2GroupV2 instances are equal
        /// </summary>
        /// <param name="input">Instance of GroupsV2GroupV2 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GroupsV2GroupV2 input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.GroupId == input.GroupId ||
                    (this.GroupId != null &&
                    this.GroupId.Equals(input.GroupId))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.GroupType == input.GroupType ||
                    (this.GroupType != null &&
                    this.GroupType.Equals(input.GroupType))
                ) && 
                (
                    this.MembershipIdCreated == input.MembershipIdCreated ||
                    (this.MembershipIdCreated != null &&
                    this.MembershipIdCreated.Equals(input.MembershipIdCreated))
                ) && 
                (
                    this.CreationDate == input.CreationDate ||
                    (this.CreationDate != null &&
                    this.CreationDate.Equals(input.CreationDate))
                ) && 
                (
                    this.ModificationDate == input.ModificationDate ||
                    (this.ModificationDate != null &&
                    this.ModificationDate.Equals(input.ModificationDate))
                ) && 
                (
                    this.About == input.About ||
                    (this.About != null &&
                    this.About.Equals(input.About))
                ) && 
                (
                    this.Tags == input.Tags ||
                    this.Tags != null &&
                    this.Tags.SequenceEqual(input.Tags)
                ) && 
                (
                    this.MemberCount == input.MemberCount ||
                    (this.MemberCount != null &&
                    this.MemberCount.Equals(input.MemberCount))
                ) && 
                (
                    this.IsPublic == input.IsPublic ||
                    (this.IsPublic != null &&
                    this.IsPublic.Equals(input.IsPublic))
                ) && 
                (
                    this.IsPublicTopicAdminOnly == input.IsPublicTopicAdminOnly ||
                    (this.IsPublicTopicAdminOnly != null &&
                    this.IsPublicTopicAdminOnly.Equals(input.IsPublicTopicAdminOnly))
                ) && 
                (
                    this.Motto == input.Motto ||
                    (this.Motto != null &&
                    this.Motto.Equals(input.Motto))
                ) && 
                (
                    this.AllowChat == input.AllowChat ||
                    (this.AllowChat != null &&
                    this.AllowChat.Equals(input.AllowChat))
                ) && 
                (
                    this.IsDefaultPostPublic == input.IsDefaultPostPublic ||
                    (this.IsDefaultPostPublic != null &&
                    this.IsDefaultPostPublic.Equals(input.IsDefaultPostPublic))
                ) && 
                (
                    this.ChatSecurity == input.ChatSecurity ||
                    (this.ChatSecurity != null &&
                    this.ChatSecurity.Equals(input.ChatSecurity))
                ) && 
                (
                    this.Locale == input.Locale ||
                    (this.Locale != null &&
                    this.Locale.Equals(input.Locale))
                ) && 
                (
                    this.AvatarImageIndex == input.AvatarImageIndex ||
                    (this.AvatarImageIndex != null &&
                    this.AvatarImageIndex.Equals(input.AvatarImageIndex))
                ) && 
                (
                    this.Homepage == input.Homepage ||
                    (this.Homepage != null &&
                    this.Homepage.Equals(input.Homepage))
                ) && 
                (
                    this.MembershipOption == input.MembershipOption ||
                    (this.MembershipOption != null &&
                    this.MembershipOption.Equals(input.MembershipOption))
                ) && 
                (
                    this.DefaultPublicity == input.DefaultPublicity ||
                    (this.DefaultPublicity != null &&
                    this.DefaultPublicity.Equals(input.DefaultPublicity))
                ) && 
                (
                    this.Theme == input.Theme ||
                    (this.Theme != null &&
                    this.Theme.Equals(input.Theme))
                ) && 
                (
                    this.BannerPath == input.BannerPath ||
                    (this.BannerPath != null &&
                    this.BannerPath.Equals(input.BannerPath))
                ) && 
                (
                    this.AvatarPath == input.AvatarPath ||
                    (this.AvatarPath != null &&
                    this.AvatarPath.Equals(input.AvatarPath))
                ) && 
                (
                    this.ConversationId == input.ConversationId ||
                    (this.ConversationId != null &&
                    this.ConversationId.Equals(input.ConversationId))
                ) && 
                (
                    this.EnableInvitationMessagingForAdmins == input.EnableInvitationMessagingForAdmins ||
                    (this.EnableInvitationMessagingForAdmins != null &&
                    this.EnableInvitationMessagingForAdmins.Equals(input.EnableInvitationMessagingForAdmins))
                ) && 
                (
                    this.BanExpireDate == input.BanExpireDate ||
                    (this.BanExpireDate != null &&
                    this.BanExpireDate.Equals(input.BanExpireDate))
                ) && 
                (
                    this.Features == input.Features ||
                    (this.Features != null &&
                    this.Features.Equals(input.Features))
                ) && 
                (
                    this.ClanInfo == input.ClanInfo ||
                    (this.ClanInfo != null &&
                    this.ClanInfo.Equals(input.ClanInfo))
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
                if (this.GroupId != null)
                    hashCode = hashCode * 59 + this.GroupId.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.GroupType != null)
                    hashCode = hashCode * 59 + this.GroupType.GetHashCode();
                if (this.MembershipIdCreated != null)
                    hashCode = hashCode * 59 + this.MembershipIdCreated.GetHashCode();
                if (this.CreationDate != null)
                    hashCode = hashCode * 59 + this.CreationDate.GetHashCode();
                if (this.ModificationDate != null)
                    hashCode = hashCode * 59 + this.ModificationDate.GetHashCode();
                if (this.About != null)
                    hashCode = hashCode * 59 + this.About.GetHashCode();
                if (this.Tags != null)
                    hashCode = hashCode * 59 + this.Tags.GetHashCode();
                if (this.MemberCount != null)
                    hashCode = hashCode * 59 + this.MemberCount.GetHashCode();
                if (this.IsPublic != null)
                    hashCode = hashCode * 59 + this.IsPublic.GetHashCode();
                if (this.IsPublicTopicAdminOnly != null)
                    hashCode = hashCode * 59 + this.IsPublicTopicAdminOnly.GetHashCode();
                if (this.Motto != null)
                    hashCode = hashCode * 59 + this.Motto.GetHashCode();
                if (this.AllowChat != null)
                    hashCode = hashCode * 59 + this.AllowChat.GetHashCode();
                if (this.IsDefaultPostPublic != null)
                    hashCode = hashCode * 59 + this.IsDefaultPostPublic.GetHashCode();
                if (this.ChatSecurity != null)
                    hashCode = hashCode * 59 + this.ChatSecurity.GetHashCode();
                if (this.Locale != null)
                    hashCode = hashCode * 59 + this.Locale.GetHashCode();
                if (this.AvatarImageIndex != null)
                    hashCode = hashCode * 59 + this.AvatarImageIndex.GetHashCode();
                if (this.Homepage != null)
                    hashCode = hashCode * 59 + this.Homepage.GetHashCode();
                if (this.MembershipOption != null)
                    hashCode = hashCode * 59 + this.MembershipOption.GetHashCode();
                if (this.DefaultPublicity != null)
                    hashCode = hashCode * 59 + this.DefaultPublicity.GetHashCode();
                if (this.Theme != null)
                    hashCode = hashCode * 59 + this.Theme.GetHashCode();
                if (this.BannerPath != null)
                    hashCode = hashCode * 59 + this.BannerPath.GetHashCode();
                if (this.AvatarPath != null)
                    hashCode = hashCode * 59 + this.AvatarPath.GetHashCode();
                if (this.ConversationId != null)
                    hashCode = hashCode * 59 + this.ConversationId.GetHashCode();
                if (this.EnableInvitationMessagingForAdmins != null)
                    hashCode = hashCode * 59 + this.EnableInvitationMessagingForAdmins.GetHashCode();
                if (this.BanExpireDate != null)
                    hashCode = hashCode * 59 + this.BanExpireDate.GetHashCode();
                if (this.Features != null)
                    hashCode = hashCode * 59 + this.Features.GetHashCode();
                if (this.ClanInfo != null)
                    hashCode = hashCode * 59 + this.ClanInfo.GetHashCode();
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
