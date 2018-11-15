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
    /// Display Categories are different from \&quot;categories\&quot; in that these are specifically for visual grouping and display of categories in Vendor UI. The \&quot;categories\&quot; structure is for validation of the contained items, and can be categorized entirely separately from \&quot;Display Categories\&quot;, there need be and often will be no meaningful relationship between the two.
    /// </summary>
    [DataContract]
    public partial class DestinyDefinitionsDestinyDisplayCategoryDefinition :  IEquatable<DestinyDefinitionsDestinyDisplayCategoryDefinition>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDefinitionsDestinyDisplayCategoryDefinition" /> class.
        /// </summary>
        /// <param name="Identifier">A string identifier for the display category..</param>
        /// <param name="DisplayCategoryHash">DisplayCategoryHash.</param>
        /// <param name="DisplayProperties">DisplayProperties.</param>
        /// <param name="DisplayInBanner">If true, this category should be displayed in the \&quot;Banner\&quot; section of the vendor&#39;s UI..</param>
        /// <param name="ProgressionHash">If it exists, this is the hash identifier of a DestinyProgressionDefinition that represents the progression to show on this display category.  Specific categories can now have thier own distinct progression, apparently. So that&#39;s cool..</param>
        /// <param name="SortOrder">If this category sorts items in a nonstandard way, this will be the way we sort..</param>
        /// <param name="DisplayStyleHash">An indicator of how the category will be displayed in the UI. It&#39;s up to you to do something cool or interesting in response to this, or just to treat it as a normal category..</param>
        /// <param name="DisplayStyleIdentifier">An indicator of how the category will be displayed in the UI. It&#39;s up to you to do something cool or interesting in response to this, or just to treat it as a normal category..</param>
        public DestinyDefinitionsDestinyDisplayCategoryDefinition(string Identifier = default(string), uint? DisplayCategoryHash = default(uint?), DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition DisplayProperties = default(DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition), bool? DisplayInBanner = default(bool?), uint? ProgressionHash = default(uint?), DestinyVendorDisplayCategorySortOrder SortOrder = default(DestinyVendorDisplayCategorySortOrder), uint? DisplayStyleHash = default(uint?), string DisplayStyleIdentifier = default(string))
        {
            this.Identifier = Identifier;
            this.DisplayCategoryHash = DisplayCategoryHash;
            this.DisplayProperties = DisplayProperties;
            this.DisplayInBanner = DisplayInBanner;
            this.ProgressionHash = ProgressionHash;
            this.SortOrder = SortOrder;
            this.DisplayStyleHash = DisplayStyleHash;
            this.DisplayStyleIdentifier = DisplayStyleIdentifier;
        }
        
        /// <summary>
        /// A string identifier for the display category.
        /// </summary>
        /// <value>A string identifier for the display category.</value>
        [DataMember(Name="identifier", EmitDefaultValue=false)]
        public string Identifier { get; set; }

        /// <summary>
        /// Gets or Sets DisplayCategoryHash
        /// </summary>
        [DataMember(Name="displayCategoryHash", EmitDefaultValue=false)]
        public uint? DisplayCategoryHash { get; set; }

        /// <summary>
        /// Gets or Sets DisplayProperties
        /// </summary>
        [DataMember(Name="displayProperties", EmitDefaultValue=false)]
        public DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition DisplayProperties { get; set; }

        /// <summary>
        /// If true, this category should be displayed in the \&quot;Banner\&quot; section of the vendor&#39;s UI.
        /// </summary>
        /// <value>If true, this category should be displayed in the \&quot;Banner\&quot; section of the vendor&#39;s UI.</value>
        [DataMember(Name="displayInBanner", EmitDefaultValue=false)]
        public bool? DisplayInBanner { get; set; }

        /// <summary>
        /// If it exists, this is the hash identifier of a DestinyProgressionDefinition that represents the progression to show on this display category.  Specific categories can now have thier own distinct progression, apparently. So that&#39;s cool.
        /// </summary>
        /// <value>If it exists, this is the hash identifier of a DestinyProgressionDefinition that represents the progression to show on this display category.  Specific categories can now have thier own distinct progression, apparently. So that&#39;s cool.</value>
        [DataMember(Name="progressionHash", EmitDefaultValue=false)]
        public uint? ProgressionHash { get; set; }

        /// <summary>
        /// If this category sorts items in a nonstandard way, this will be the way we sort.
        /// </summary>
        /// <value>If this category sorts items in a nonstandard way, this will be the way we sort.</value>
        [DataMember(Name="sortOrder", EmitDefaultValue=false)]
        public DestinyVendorDisplayCategorySortOrder SortOrder { get; set; }

        /// <summary>
        /// An indicator of how the category will be displayed in the UI. It&#39;s up to you to do something cool or interesting in response to this, or just to treat it as a normal category.
        /// </summary>
        /// <value>An indicator of how the category will be displayed in the UI. It&#39;s up to you to do something cool or interesting in response to this, or just to treat it as a normal category.</value>
        [DataMember(Name="displayStyleHash", EmitDefaultValue=false)]
        public uint? DisplayStyleHash { get; set; }

        /// <summary>
        /// An indicator of how the category will be displayed in the UI. It&#39;s up to you to do something cool or interesting in response to this, or just to treat it as a normal category.
        /// </summary>
        /// <value>An indicator of how the category will be displayed in the UI. It&#39;s up to you to do something cool or interesting in response to this, or just to treat it as a normal category.</value>
        [DataMember(Name="displayStyleIdentifier", EmitDefaultValue=false)]
        public string DisplayStyleIdentifier { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyDefinitionsDestinyDisplayCategoryDefinition {\n");
            sb.Append("  Identifier: ").Append(Identifier).Append("\n");
            sb.Append("  DisplayCategoryHash: ").Append(DisplayCategoryHash).Append("\n");
            sb.Append("  DisplayProperties: ").Append(DisplayProperties).Append("\n");
            sb.Append("  DisplayInBanner: ").Append(DisplayInBanner).Append("\n");
            sb.Append("  ProgressionHash: ").Append(ProgressionHash).Append("\n");
            sb.Append("  SortOrder: ").Append(SortOrder).Append("\n");
            sb.Append("  DisplayStyleHash: ").Append(DisplayStyleHash).Append("\n");
            sb.Append("  DisplayStyleIdentifier: ").Append(DisplayStyleIdentifier).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
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
            return this.Equals(input as DestinyDefinitionsDestinyDisplayCategoryDefinition);
        }

        /// <summary>
        /// Returns true if DestinyDefinitionsDestinyDisplayCategoryDefinition instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDefinitionsDestinyDisplayCategoryDefinition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDefinitionsDestinyDisplayCategoryDefinition input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Identifier == input.Identifier ||
                    (this.Identifier != null &&
                    this.Identifier.Equals(input.Identifier))
                ) && 
                (
                    this.DisplayCategoryHash == input.DisplayCategoryHash ||
                    (this.DisplayCategoryHash != null &&
                    this.DisplayCategoryHash.Equals(input.DisplayCategoryHash))
                ) && 
                (
                    this.DisplayProperties == input.DisplayProperties ||
                    (this.DisplayProperties != null &&
                    this.DisplayProperties.Equals(input.DisplayProperties))
                ) && 
                (
                    this.DisplayInBanner == input.DisplayInBanner ||
                    (this.DisplayInBanner != null &&
                    this.DisplayInBanner.Equals(input.DisplayInBanner))
                ) && 
                (
                    this.ProgressionHash == input.ProgressionHash ||
                    (this.ProgressionHash != null &&
                    this.ProgressionHash.Equals(input.ProgressionHash))
                ) && 
                (
                    this.SortOrder == input.SortOrder ||
                    (this.SortOrder != null &&
                    this.SortOrder.Equals(input.SortOrder))
                ) && 
                (
                    this.DisplayStyleHash == input.DisplayStyleHash ||
                    (this.DisplayStyleHash != null &&
                    this.DisplayStyleHash.Equals(input.DisplayStyleHash))
                ) && 
                (
                    this.DisplayStyleIdentifier == input.DisplayStyleIdentifier ||
                    (this.DisplayStyleIdentifier != null &&
                    this.DisplayStyleIdentifier.Equals(input.DisplayStyleIdentifier))
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
                if (this.Identifier != null)
                    hashCode = hashCode * 59 + this.Identifier.GetHashCode();
                if (this.DisplayCategoryHash != null)
                    hashCode = hashCode * 59 + this.DisplayCategoryHash.GetHashCode();
                if (this.DisplayProperties != null)
                    hashCode = hashCode * 59 + this.DisplayProperties.GetHashCode();
                if (this.DisplayInBanner != null)
                    hashCode = hashCode * 59 + this.DisplayInBanner.GetHashCode();
                if (this.ProgressionHash != null)
                    hashCode = hashCode * 59 + this.ProgressionHash.GetHashCode();
                if (this.SortOrder != null)
                    hashCode = hashCode * 59 + this.SortOrder.GetHashCode();
                if (this.DisplayStyleHash != null)
                    hashCode = hashCode * 59 + this.DisplayStyleHash.GetHashCode();
                if (this.DisplayStyleIdentifier != null)
                    hashCode = hashCode * 59 + this.DisplayStyleIdentifier.GetHashCode();
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
