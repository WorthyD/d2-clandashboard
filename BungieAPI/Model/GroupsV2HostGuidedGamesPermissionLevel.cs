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
    /// Used for setting the guided game permission level override (admins and founders can always host guided games).
    /// </summary>
    /// <value>Used for setting the guided game permission level override (admins and founders can always host guided games).</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum GroupsV2HostGuidedGamesPermissionLevel
    {
        
		/// <summary>
		/// Used for setting the guided game permission level override (admins and founders can always host guided games).
		/// </summary>
		[EnumMember(Value = "0")]
        None,
        
		/// <summary>
		/// Used for setting the guided game permission level override (admins and founders can always host guided games).
		/// </summary>
		[EnumMember(Value = "1")]
        Beginner,
        
		/// <summary>
		/// Used for setting the guided game permission level override (admins and founders can always host guided games).
		/// </summary>
		[EnumMember(Value = "2")]
        Member
    }

}
