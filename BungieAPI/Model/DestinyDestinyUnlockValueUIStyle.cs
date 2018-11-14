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
    /// If you&#39;re showing an unlock value in the UI, this is the format in which it should be shown. You&#39;ll have to build your own algorithms on the client side to determine how best to render these options.
    /// </summary>
    /// <value>If you&#39;re showing an unlock value in the UI, this is the format in which it should be shown. You&#39;ll have to build your own algorithms on the client side to determine how best to render these options.</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum DestinyDestinyUnlockValueUIStyle
    {
        
        /// <summary>
        /// Enum NUMBER_0 for value: 0
        /// </summary>
        [EnumMember(Value = "0")]
        NUMBER_0 = 1,
        
        /// <summary>
        /// Enum NUMBER_1 for value: 1
        /// </summary>
        [EnumMember(Value = "1")]
        NUMBER_1 = 2,
        
        /// <summary>
        /// Enum NUMBER_2 for value: 2
        /// </summary>
        [EnumMember(Value = "2")]
        NUMBER_2 = 3,
        
        /// <summary>
        /// Enum NUMBER_3 for value: 3
        /// </summary>
        [EnumMember(Value = "3")]
        NUMBER_3 = 4,
        
        /// <summary>
        /// Enum NUMBER_4 for value: 4
        /// </summary>
        [EnumMember(Value = "4")]
        NUMBER_4 = 5,
        
        /// <summary>
        /// Enum NUMBER_5 for value: 5
        /// </summary>
        [EnumMember(Value = "5")]
        NUMBER_5 = 6,
        
        /// <summary>
        /// Enum NUMBER_6 for value: 6
        /// </summary>
        [EnumMember(Value = "6")]
        NUMBER_6 = 7,
        
        /// <summary>
        /// Enum NUMBER_7 for value: 7
        /// </summary>
        [EnumMember(Value = "7")]
        NUMBER_7 = 8,
        
        /// <summary>
        /// Enum NUMBER_8 for value: 8
        /// </summary>
        [EnumMember(Value = "8")]
        NUMBER_8 = 9,
        
        /// <summary>
        /// Enum NUMBER_9 for value: 9
        /// </summary>
        [EnumMember(Value = "9")]
        NUMBER_9 = 10
    }

}
