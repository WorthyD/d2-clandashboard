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
    /// DestinyDefinitionsPresentationDestinyPresentationChildBlock
    /// </summary>
    [DataContract]
    public partial class DestinyDefinitionsPresentationDestinyPresentationChildBlock :  IEquatable<DestinyDefinitionsPresentationDestinyPresentationChildBlock>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyDefinitionsPresentationDestinyPresentationChildBlock" /> class.
        /// </summary>
        /// <param name="PresentationNodeType">PresentationNodeType.</param>
        /// <param name="ParentPresentationNodeHashes">ParentPresentationNodeHashes.</param>
        /// <param name="DisplayStyle">DisplayStyle.</param>
        public DestinyDefinitionsPresentationDestinyPresentationChildBlock(DestinyDestinyPresentationNodeType PresentationNodeType = default(DestinyDestinyPresentationNodeType), List<uint?> ParentPresentationNodeHashes = default(List<uint?>), DestinyDestinyPresentationDisplayStyle DisplayStyle = default(DestinyDestinyPresentationDisplayStyle))
        {
            this.PresentationNodeType = PresentationNodeType;
            this.ParentPresentationNodeHashes = ParentPresentationNodeHashes;
            this.DisplayStyle = DisplayStyle;
        }
        
        /// <summary>
        /// Gets or Sets PresentationNodeType
        /// </summary>
        [DataMember(Name="presentationNodeType", EmitDefaultValue=false)]
        public DestinyDestinyPresentationNodeType PresentationNodeType { get; set; }

        /// <summary>
        /// Gets or Sets ParentPresentationNodeHashes
        /// </summary>
        [DataMember(Name="parentPresentationNodeHashes", EmitDefaultValue=false)]
        public List<uint?> ParentPresentationNodeHashes { get; set; }

        /// <summary>
        /// Gets or Sets DisplayStyle
        /// </summary>
        [DataMember(Name="displayStyle", EmitDefaultValue=false)]
        public DestinyDestinyPresentationDisplayStyle DisplayStyle { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyDefinitionsPresentationDestinyPresentationChildBlock {\n");
            sb.Append("  PresentationNodeType: ").Append(PresentationNodeType).Append("\n");
            sb.Append("  ParentPresentationNodeHashes: ").Append(ParentPresentationNodeHashes).Append("\n");
            sb.Append("  DisplayStyle: ").Append(DisplayStyle).Append("\n");
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
            return this.Equals(input as DestinyDefinitionsPresentationDestinyPresentationChildBlock);
        }

        /// <summary>
        /// Returns true if DestinyDefinitionsPresentationDestinyPresentationChildBlock instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyDefinitionsPresentationDestinyPresentationChildBlock to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyDefinitionsPresentationDestinyPresentationChildBlock input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.PresentationNodeType == input.PresentationNodeType ||
                    (this.PresentationNodeType != null &&
                    this.PresentationNodeType.Equals(input.PresentationNodeType))
                ) && 
                (
                    this.ParentPresentationNodeHashes == input.ParentPresentationNodeHashes ||
                    this.ParentPresentationNodeHashes != null &&
                    this.ParentPresentationNodeHashes.SequenceEqual(input.ParentPresentationNodeHashes)
                ) && 
                (
                    this.DisplayStyle == input.DisplayStyle ||
                    (this.DisplayStyle != null &&
                    this.DisplayStyle.Equals(input.DisplayStyle))
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
                if (this.PresentationNodeType != null)
                    hashCode = hashCode * 59 + this.PresentationNodeType.GetHashCode();
                if (this.ParentPresentationNodeHashes != null)
                    hashCode = hashCode * 59 + this.ParentPresentationNodeHashes.GetHashCode();
                if (this.DisplayStyle != null)
                    hashCode = hashCode * 59 + this.DisplayStyle.GetHashCode();
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
