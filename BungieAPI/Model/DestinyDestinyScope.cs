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
    /// There&#39;s a lot of places where we need to know scope on more than just a profile or character level. For everything else, there&#39;s this more generic sense of scope.
    /// </summary>
    /// <value>There&#39;s a lot of places where we need to know scope on more than just a profile or character level. For everything else, there&#39;s this more generic sense of scope.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum DestinyDestinyScope
    {
        
		/// <summary>
		/// There&#39;s a lot of places where we need to know scope on more than just a profile or character level. For everything else, there&#39;s this more generic sense of scope.
		/// </summary>
		[EnumMember(Value = "0")]
        Profile,
        
		/// <summary>
		/// There&#39;s a lot of places where we need to know scope on more than just a profile or character level. For everything else, there&#39;s this more generic sense of scope.
		/// </summary>
		[EnumMember(Value = "1")]
        Character
    }

}
