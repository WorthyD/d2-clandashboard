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
    /// Defines Destiny.HistoricalStats.Definitions.DestinyStatsMergeMethod
    /// </summary>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum DestinyHistoricalStatsDefinitionsDestinyStatsMergeMethod
    {
        
		/// <summary>
		/// When collapsing multiple instances of the stat together, add the values.
		/// </summary>
		[EnumMember(Value = "0")]
        Add,
        
		/// <summary>
		/// When collapsing multiple instances of the stat together, take the lower value.
		/// </summary>
		[EnumMember(Value = "1")]
        Min,
        
		/// <summary>
		/// When collapsing multiple instances of the stat together, take the higher value.
		/// </summary>
		[EnumMember(Value = "2")]
        Max
    }

}
