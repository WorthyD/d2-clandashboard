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
    /// Only really useful if you&#39;re attempting to render the character&#39;s current appearance in 3D, this returns a bare minimum of information, pre-aggregated, that you&#39;ll need to perform that rendering. Note that you need to combine this with other 3D assets and data from our servers.  Examine the Javascript returned by https://bungie.net/sharedbundle/spasm to see how we use this data, but be warned: the rabbit hole goes pretty deep.
    /// </summary>
    [DataContract]
    public partial class DestinyEntitiesCharactersDestinyCharacterRenderComponent :  IEquatable<DestinyEntitiesCharactersDestinyCharacterRenderComponent>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyEntitiesCharactersDestinyCharacterRenderComponent" /> class.
        /// </summary>
        /// <param name="CustomDyes">Custom dyes, calculated by iterating over the character&#39;s equipped items. Useful for pre-fetching all of the dye data needed from our server..</param>
        /// <param name="Customization">This is actually something that Spasm.js *doesn&#39;t* do right now, and that we don&#39;t return assets for yet. This is the data about what character customization options you picked. You can combine this with DestinyCharacterCustomizationOptionDefinition to show some cool info, and hopefully someday to actually render a user&#39;s face in 3D. We&#39;ll see if we ever end up with time for that..</param>
        /// <param name="PeerView">A minimal view of:  - Equipped items  - The rendering-related custom options on those equipped items  Combined, that should be enough to render all of the items on the equipped character..</param>
        public DestinyEntitiesCharactersDestinyCharacterRenderComponent(List<DestinyDyeReference> CustomDyes = default(List<DestinyDyeReference>), DestinyCharacterDestinyCharacterCustomization Customization = default(DestinyCharacterDestinyCharacterCustomization), DestinyCharacterDestinyCharacterPeerView PeerView = default(DestinyCharacterDestinyCharacterPeerView))
        {
            this.CustomDyes = CustomDyes;
            this.Customization = Customization;
            this.PeerView = PeerView;
        }
        
        /// <summary>
        /// Custom dyes, calculated by iterating over the character&#39;s equipped items. Useful for pre-fetching all of the dye data needed from our server.
        /// </summary>
        /// <value>Custom dyes, calculated by iterating over the character&#39;s equipped items. Useful for pre-fetching all of the dye data needed from our server.</value>
        [DataMember(Name="customDyes", EmitDefaultValue=false)]
        public List<DestinyDyeReference> CustomDyes { get; set; }

        /// <summary>
        /// This is actually something that Spasm.js *doesn&#39;t* do right now, and that we don&#39;t return assets for yet. This is the data about what character customization options you picked. You can combine this with DestinyCharacterCustomizationOptionDefinition to show some cool info, and hopefully someday to actually render a user&#39;s face in 3D. We&#39;ll see if we ever end up with time for that.
        /// </summary>
        /// <value>This is actually something that Spasm.js *doesn&#39;t* do right now, and that we don&#39;t return assets for yet. This is the data about what character customization options you picked. You can combine this with DestinyCharacterCustomizationOptionDefinition to show some cool info, and hopefully someday to actually render a user&#39;s face in 3D. We&#39;ll see if we ever end up with time for that.</value>
        [DataMember(Name="customization", EmitDefaultValue=false)]
        public DestinyCharacterDestinyCharacterCustomization Customization { get; set; }

        /// <summary>
        /// A minimal view of:  - Equipped items  - The rendering-related custom options on those equipped items  Combined, that should be enough to render all of the items on the equipped character.
        /// </summary>
        /// <value>A minimal view of:  - Equipped items  - The rendering-related custom options on those equipped items  Combined, that should be enough to render all of the items on the equipped character.</value>
        [DataMember(Name="peerView", EmitDefaultValue=false)]
        public DestinyCharacterDestinyCharacterPeerView PeerView { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyEntitiesCharactersDestinyCharacterRenderComponent {\n");
            sb.Append("  CustomDyes: ").Append(CustomDyes).Append("\n");
            sb.Append("  Customization: ").Append(Customization).Append("\n");
            sb.Append("  PeerView: ").Append(PeerView).Append("\n");
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
            return this.Equals(input as DestinyEntitiesCharactersDestinyCharacterRenderComponent);
        }

        /// <summary>
        /// Returns true if DestinyEntitiesCharactersDestinyCharacterRenderComponent instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyEntitiesCharactersDestinyCharacterRenderComponent to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyEntitiesCharactersDestinyCharacterRenderComponent input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CustomDyes == input.CustomDyes ||
                    this.CustomDyes != null &&
                    this.CustomDyes.SequenceEqual(input.CustomDyes)
                ) && 
                (
                    this.Customization == input.Customization ||
                    (this.Customization != null &&
                    this.Customization.Equals(input.Customization))
                ) && 
                (
                    this.PeerView == input.PeerView ||
                    (this.PeerView != null &&
                    this.PeerView.Equals(input.PeerView))
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
                if (this.CustomDyes != null)
                    hashCode = hashCode * 59 + this.CustomDyes.GetHashCode();
                if (this.Customization != null)
                    hashCode = hashCode * 59 + this.Customization.GetHashCode();
                if (this.PeerView != null)
                    hashCode = hashCode * 59 + this.PeerView.GetHashCode();
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
