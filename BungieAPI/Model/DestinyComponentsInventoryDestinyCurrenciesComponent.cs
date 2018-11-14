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
    /// This component provides a quick lookup of every item the requested character has and how much of that item they have.  Requesting this component will allow you to circumvent manually putting together the list of which currencies you have for the purpose of testing currency requirements on an item being purchased, or operations that have costs.  You *could* figure this out yourself by doing a GetCharacter or GetProfile request and forming your own lookup table, but that is inconvenient enough that this feels like a worthwhile (and optional) redundency. Don&#39;t bother requesting it if you have already created your own lookup from prior GetCharacter/GetProfile calls.
    /// </summary>
    [DataContract]
    public partial class DestinyComponentsInventoryDestinyCurrenciesComponent :  IEquatable<DestinyComponentsInventoryDestinyCurrenciesComponent>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyComponentsInventoryDestinyCurrenciesComponent" /> class.
        /// </summary>
        /// <param name="itemQuantities">A dictionary - keyed by the item&#39;s hash identifier (DestinyInventoryItemDefinition), and whose value is the amount of that item you have across all available inventory buckets for purchasing.  This allows you to see whether the requesting character can afford any given purchase/action without having to re-create this list itself..</param>
        public DestinyComponentsInventoryDestinyCurrenciesComponent(Dictionary<string, int?> itemQuantities = default(Dictionary<string, int?>))
        {
            this.ItemQuantities = itemQuantities;
        }
        
        /// <summary>
        /// A dictionary - keyed by the item&#39;s hash identifier (DestinyInventoryItemDefinition), and whose value is the amount of that item you have across all available inventory buckets for purchasing.  This allows you to see whether the requesting character can afford any given purchase/action without having to re-create this list itself.
        /// </summary>
        /// <value>A dictionary - keyed by the item&#39;s hash identifier (DestinyInventoryItemDefinition), and whose value is the amount of that item you have across all available inventory buckets for purchasing.  This allows you to see whether the requesting character can afford any given purchase/action without having to re-create this list itself.</value>
        [DataMember(Name="itemQuantities", EmitDefaultValue=false)]
        public Dictionary<string, int?> ItemQuantities { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyComponentsInventoryDestinyCurrenciesComponent {\n");
            sb.Append("  ItemQuantities: ").Append(ItemQuantities).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as DestinyComponentsInventoryDestinyCurrenciesComponent);
        }

        /// <summary>
        /// Returns true if DestinyComponentsInventoryDestinyCurrenciesComponent instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyComponentsInventoryDestinyCurrenciesComponent to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyComponentsInventoryDestinyCurrenciesComponent input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ItemQuantities == input.ItemQuantities ||
                    this.ItemQuantities != null &&
                    this.ItemQuantities.SequenceEqual(input.ItemQuantities)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.ItemQuantities != null)
                    hashCode = hashCode * 59 + this.ItemQuantities.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
