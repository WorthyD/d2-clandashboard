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
    /// Defines Destiny.HistoricalStats.Definitions.DestinyStatsCategoryType
    /// </summary>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum DestinyHistoricalStatsDefinitionsDestinyStatsCategoryType
    {
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "0")]
        None,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "1")]
        Kills,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "2")]
        Assists,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "3")]
        Deaths,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "4")]
        Criticals,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "5")]
        KDa,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "6")]
        KD,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "7")]
        Score,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "8")]
        Entered,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "9")]
        TimePlayed,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "10")]
        MedalWins,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "11")]
        MedalGame,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "12")]
        MedalSpecialKills,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "13")]
        MedalSprees,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "14")]
        MedalMultiKills,
        
		/// <summary>
		/// 
		/// </summary>
		[EnumMember(Value = "15")]
        MedalAbilities
    }

}
