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
    /// A vendor can have many categories of items that they sell. This component will return the category information for available items, as well as the index into those items in the user&#39;s sale item list.  Note that, since both the category and items are indexes, this data is Content Version dependent. Be sure to check that your content is up to date before using this data. This is an unfortunate, but permanent, limitation of Vendor data.
    /// </summary>
    [DataContract]
    public partial class DestinyEntitiesVendorsDestinyVendorCategoriesComponent :  IEquatable<DestinyEntitiesVendorsDestinyVendorCategoriesComponent>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyEntitiesVendorsDestinyVendorCategoriesComponent" /> class.
        /// </summary>
        /// <param name="categories">The list of categories for items that the vendor sells, in rendering order.  These categories each point to a \&quot;display category\&quot; in the displayCategories property of the DestinyVendorDefinition, as opposed to the other categories..</param>
        public DestinyEntitiesVendorsDestinyVendorCategoriesComponent(List<DestinyEntitiesVendorsDestinyVendorCategory> categories = default(List<DestinyEntitiesVendorsDestinyVendorCategory>))
        {
            this.Categories = categories;
        }
        
        /// <summary>
        /// The list of categories for items that the vendor sells, in rendering order.  These categories each point to a \&quot;display category\&quot; in the displayCategories property of the DestinyVendorDefinition, as opposed to the other categories.
        /// </summary>
        /// <value>The list of categories for items that the vendor sells, in rendering order.  These categories each point to a \&quot;display category\&quot; in the displayCategories property of the DestinyVendorDefinition, as opposed to the other categories.</value>
        [DataMember(Name="categories", EmitDefaultValue=false)]
        public List<DestinyEntitiesVendorsDestinyVendorCategory> Categories { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyEntitiesVendorsDestinyVendorCategoriesComponent {\n");
            sb.Append("  Categories: ").Append(Categories).Append("\n");
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
            return this.Equals(input as DestinyEntitiesVendorsDestinyVendorCategoriesComponent);
        }

        /// <summary>
        /// Returns true if DestinyEntitiesVendorsDestinyVendorCategoriesComponent instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyEntitiesVendorsDestinyVendorCategoriesComponent to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyEntitiesVendorsDestinyVendorCategoriesComponent input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Categories == input.Categories ||
                    this.Categories != null &&
                    this.Categories.SequenceEqual(input.Categories)
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
                if (this.Categories != null)
                    hashCode = hashCode * 59 + this.Categories.GetHashCode();
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
