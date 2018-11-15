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
    /// The reasons why an item cannot be equipped, if any. Many flags can be set, or \&quot;None\&quot; if
    /// </summary>
    /// <value>The reasons why an item cannot be equipped, if any. Many flags can be set, or \&quot;None\&quot; if</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum DestinyEquipFailureReason
    {
        
		/// <summary>
		/// The item is/was able to be equipped.
		/// </summary>
		[EnumMember(Value = "0")]
        None,
        
		/// <summary>
		/// This is not the kind of item that can be equipped. Did you try equipping Glimmer or something?
		/// </summary>
		[EnumMember(Value = "1")]
        ItemUnequippable,
        
		/// <summary>
		/// This item is part of a &quot;unique set&quot;, and you can&#39;t have more than one item of that same set type equipped at once. For instance, if you already have an Exotic Weapon equipped, you can&#39;t equip a second one in another weapon slot.
		/// </summary>
		[EnumMember(Value = "2")]
        ItemUniqueEquipRestricted,
        
		/// <summary>
		/// This item has state-based gating that prevents it from being equipped in certain circumstances. For instance, an item might be for Warlocks only and you&#39;re a Titan, or it might require you to have beaten some special quest that you haven&#39;t beaten yet. Use the additional failure data passed on the item itself to get more information about what the specific failure case was (See DestinyInventoryItemDefinition and DestinyItemInstanceComponent)
		/// </summary>
		[EnumMember(Value = "4")]
        ItemFailedUnlockCheck,
        
		/// <summary>
		/// This item requires you to have reached a specific character level in order to equip it, and you haven&#39;t reached that level yet.
		/// </summary>
		[EnumMember(Value = "8")]
        ItemFailedLevelCheck,
        
		/// <summary>
		/// This item can&#39;t be equipped on the character requested, because it must be in that character&#39;s inventory first. Transfer the item to the character you want to equip it before you attempt to equip it.
		/// </summary>
		[EnumMember(Value = "16")]
        ItemNotOnCharacter
    }

}
