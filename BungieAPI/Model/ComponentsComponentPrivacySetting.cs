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
    /// A set of flags for reason(s) why the component populated in the way that it did. Inspect the individual flags for the reasons.
    /// </summary>
    /// <value>A set of flags for reason(s) why the component populated in the way that it did. Inspect the individual flags for the reasons.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ComponentsComponentPrivacySetting
    {
        
		/// <summary>
		/// A set of flags for reason(s) why the component populated in the way that it did. Inspect the individual flags for the reasons.
		/// </summary>
		[EnumMember(Value = "0")]
        None,
        
		/// <summary>
		/// A set of flags for reason(s) why the component populated in the way that it did. Inspect the individual flags for the reasons.
		/// </summary>
		[EnumMember(Value = "1")]
        Public,
        
		/// <summary>
		/// A set of flags for reason(s) why the component populated in the way that it did. Inspect the individual flags for the reasons.
		/// </summary>
		[EnumMember(Value = "2")]
        Private
    }

}
