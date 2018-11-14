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
    /// If you look in the DestinyInventoryItemDefinition&#39;s \&quot;sockets\&quot; property, you&#39;ll see that there are two types of sockets: intrinsic, and \&quot;socketEntry.\&quot;  Unfortunately, because Intrinsic sockets are a whole separate array, it is no longer sufficient to know the index into that array to know which socket we&#39;re talking about. You have to know whether it&#39;s in the default \&quot;socketEntries\&quot; or if it&#39;s in the \&quot;intrinsic\&quot; list.
    /// </summary>
    /// <value>If you look in the DestinyInventoryItemDefinition&#39;s \&quot;sockets\&quot; property, you&#39;ll see that there are two types of sockets: intrinsic, and \&quot;socketEntry.\&quot;  Unfortunately, because Intrinsic sockets are a whole separate array, it is no longer sufficient to know the index into that array to know which socket we&#39;re talking about. You have to know whether it&#39;s in the default \&quot;socketEntries\&quot; or if it&#39;s in the \&quot;intrinsic\&quot; list.</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum DestinyRequestsActionsDestinySocketArrayType
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
        NUMBER_1 = 2
    }

}
