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
    /// If the enum value is &gt; 100, it is a \&quot;special\&quot; group that cannot be queried for directly (special cases apply to when they are returned, and are not relevant in general cases)
    /// </summary>
    /// <value>If the enum value is &gt; 100, it is a \&quot;special\&quot; group that cannot be queried for directly (special cases apply to when they are returned, and are not relevant in general cases)</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum DestinyHistoricalStatsDefinitionsDestinyStatsGroupType
    {
        
		/// <summary>
		/// If the enum value is &gt; 100, it is a \&quot;special\&quot; group that cannot be queried for directly (special cases apply to when they are returned, and are not relevant in general cases)
		/// </summary>
		[EnumMember(Value = "0")]
        None,
        
		/// <summary>
		/// If the enum value is &gt; 100, it is a \&quot;special\&quot; group that cannot be queried for directly (special cases apply to when they are returned, and are not relevant in general cases)
		/// </summary>
		[EnumMember(Value = "1")]
        General,
        
		/// <summary>
		/// If the enum value is &gt; 100, it is a \&quot;special\&quot; group that cannot be queried for directly (special cases apply to when they are returned, and are not relevant in general cases)
		/// </summary>
		[EnumMember(Value = "2")]
        Weapons,
        
		/// <summary>
		/// If the enum value is &gt; 100, it is a \&quot;special\&quot; group that cannot be queried for directly (special cases apply to when they are returned, and are not relevant in general cases)
		/// </summary>
		[EnumMember(Value = "3")]
        Medals,
        
		/// <summary>
		/// This is purely to serve as the dividing line between filterable and un-filterable groups. Below this number is a group you can pass as a filter. Above it are groups used in very specific circumstances and not relevant for filtering.
		/// </summary>
		[EnumMember(Value = "100")]
        ReservedGroups,
        
		/// <summary>
		/// Only applicable while generating leaderboards.
		/// </summary>
		[EnumMember(Value = "101")]
        Leaderboard,
        
		/// <summary>
		/// These will *only* be consumed by GetAggregateStatsByActivity
		/// </summary>
		[EnumMember(Value = "102")]
        Activity,
        
		/// <summary>
		/// These are only consumed and returned by GetUniqueWeaponHistory
		/// </summary>
		[EnumMember(Value = "103")]
        UniqueWeapon,
        
		/// <summary>
		/// If the enum value is &gt; 100, it is a \&quot;special\&quot; group that cannot be queried for directly (special cases apply to when they are returned, and are not relevant in general cases)
		/// </summary>
		[EnumMember(Value = "104")]
        Internal
    }

}
