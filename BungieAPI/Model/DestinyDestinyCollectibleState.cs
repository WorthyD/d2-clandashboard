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
    /// A Flags Enumeration where each bit represents a different state that the Collectible can be in. A collectible can be in any number of these states, and you can choose to use or ignore any or all of them when making your own UI that shows Collectible info. Our displays are going to honor them, but we&#39;re also the kind of people who only pretend to inhale before quickly passing it to the left. So, you know, do what you got to do.
    /// </summary>
    /// <value>A Flags Enumeration where each bit represents a different state that the Collectible can be in. A collectible can be in any number of these states, and you can choose to use or ignore any or all of them when making your own UI that shows Collectible info. Our displays are going to honor them, but we&#39;re also the kind of people who only pretend to inhale before quickly passing it to the left. So, you know, do what you got to do.</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum DestinyDestinyCollectibleState
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
        /// Enum NUMBER_4 for value: 4
        /// </summary>
        [EnumMember(Value = "4")]
        NUMBER_4 = 4,
        
        /// <summary>
        /// Enum NUMBER_8 for value: 8
        /// </summary>
        [EnumMember(Value = "8")]
        NUMBER_8 = 5,
        
        /// <summary>
        /// Enum NUMBER_16 for value: 16
        /// </summary>
        [EnumMember(Value = "16")]
        NUMBER_16 = 6,
        
        /// <summary>
        /// Enum NUMBER_32 for value: 32
        /// </summary>
        [EnumMember(Value = "32")]
        NUMBER_32 = 7,
        
        /// <summary>
        /// Enum NUMBER_64 for value: 64
        /// </summary>
        [EnumMember(Value = "64")]
        NUMBER_64 = 8
    }

}
