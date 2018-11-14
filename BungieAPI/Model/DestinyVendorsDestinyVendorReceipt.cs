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
    /// If a character purchased an item that is refundable, a Vendor Receipt will be created on the user&#39;s Destiny Profile. These expire after a configurable period of time, but until then can be used to get refunds on items. BNet does not provide the ability to refund a purchase *yet*, but you know.
    /// </summary>
    [DataContract]
    public partial class DestinyVendorsDestinyVendorReceipt :  IEquatable<DestinyVendorsDestinyVendorReceipt>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyVendorsDestinyVendorReceipt" /> class.
        /// </summary>
        /// <param name="currencyPaid">The amount paid for the item, in terms of items that were consumed in the purchase and their quantity..</param>
        /// <param name="itemReceived">The item that was received, and its quantity..</param>
        /// <param name="licenseUnlockHash">The unlock flag used to determine whether you still have the purchased item..</param>
        /// <param name="purchasedByCharacterId">The ID of the character who made the purchase..</param>
        /// <param name="refundPolicy">Whether you can get a refund, and what happens in order for the refund to be received. See the DestinyVendorItemRefundPolicy enum for details..</param>
        /// <param name="sequenceNumber">The identifier of this receipt..</param>
        /// <param name="timeToExpiration">The seconds since epoch at which this receipt is rendered invalid..</param>
        /// <param name="expiresOn">The date at which this receipt is rendered invalid..</param>
        public DestinyVendorsDestinyVendorReceipt(List<DestinyDestinyItemQuantity> currencyPaid = default(List<DestinyDestinyItemQuantity>), Object itemReceived = default(Object), int? licenseUnlockHash = default(int?), long? purchasedByCharacterId = default(long?), Object refundPolicy = default(Object), int? sequenceNumber = default(int?), long? timeToExpiration = default(long?), DateTime? expiresOn = default(DateTime?))
        {
            this.CurrencyPaid = currencyPaid;
            this.ItemReceived = itemReceived;
            this.LicenseUnlockHash = licenseUnlockHash;
            this.PurchasedByCharacterId = purchasedByCharacterId;
            this.RefundPolicy = refundPolicy;
            this.SequenceNumber = sequenceNumber;
            this.TimeToExpiration = timeToExpiration;
            this.ExpiresOn = expiresOn;
        }
        
        /// <summary>
        /// The amount paid for the item, in terms of items that were consumed in the purchase and their quantity.
        /// </summary>
        /// <value>The amount paid for the item, in terms of items that were consumed in the purchase and their quantity.</value>
        [DataMember(Name="currencyPaid", EmitDefaultValue=false)]
        public List<DestinyDestinyItemQuantity> CurrencyPaid { get; set; }

        /// <summary>
        /// The item that was received, and its quantity.
        /// </summary>
        /// <value>The item that was received, and its quantity.</value>
        [DataMember(Name="itemReceived", EmitDefaultValue=false)]
        public Object ItemReceived { get; set; }

        /// <summary>
        /// The unlock flag used to determine whether you still have the purchased item.
        /// </summary>
        /// <value>The unlock flag used to determine whether you still have the purchased item.</value>
        [DataMember(Name="licenseUnlockHash", EmitDefaultValue=false)]
        public int? LicenseUnlockHash { get; set; }

        /// <summary>
        /// The ID of the character who made the purchase.
        /// </summary>
        /// <value>The ID of the character who made the purchase.</value>
        [DataMember(Name="purchasedByCharacterId", EmitDefaultValue=false)]
        public long? PurchasedByCharacterId { get; set; }

        /// <summary>
        /// Whether you can get a refund, and what happens in order for the refund to be received. See the DestinyVendorItemRefundPolicy enum for details.
        /// </summary>
        /// <value>Whether you can get a refund, and what happens in order for the refund to be received. See the DestinyVendorItemRefundPolicy enum for details.</value>
        [DataMember(Name="refundPolicy", EmitDefaultValue=false)]
        public Object RefundPolicy { get; set; }

        /// <summary>
        /// The identifier of this receipt.
        /// </summary>
        /// <value>The identifier of this receipt.</value>
        [DataMember(Name="sequenceNumber", EmitDefaultValue=false)]
        public int? SequenceNumber { get; set; }

        /// <summary>
        /// The seconds since epoch at which this receipt is rendered invalid.
        /// </summary>
        /// <value>The seconds since epoch at which this receipt is rendered invalid.</value>
        [DataMember(Name="timeToExpiration", EmitDefaultValue=false)]
        public long? TimeToExpiration { get; set; }

        /// <summary>
        /// The date at which this receipt is rendered invalid.
        /// </summary>
        /// <value>The date at which this receipt is rendered invalid.</value>
        [DataMember(Name="expiresOn", EmitDefaultValue=false)]
        public DateTime? ExpiresOn { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyVendorsDestinyVendorReceipt {\n");
            sb.Append("  CurrencyPaid: ").Append(CurrencyPaid).Append("\n");
            sb.Append("  ItemReceived: ").Append(ItemReceived).Append("\n");
            sb.Append("  LicenseUnlockHash: ").Append(LicenseUnlockHash).Append("\n");
            sb.Append("  PurchasedByCharacterId: ").Append(PurchasedByCharacterId).Append("\n");
            sb.Append("  RefundPolicy: ").Append(RefundPolicy).Append("\n");
            sb.Append("  SequenceNumber: ").Append(SequenceNumber).Append("\n");
            sb.Append("  TimeToExpiration: ").Append(TimeToExpiration).Append("\n");
            sb.Append("  ExpiresOn: ").Append(ExpiresOn).Append("\n");
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
            return this.Equals(input as DestinyVendorsDestinyVendorReceipt);
        }

        /// <summary>
        /// Returns true if DestinyVendorsDestinyVendorReceipt instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyVendorsDestinyVendorReceipt to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyVendorsDestinyVendorReceipt input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CurrencyPaid == input.CurrencyPaid ||
                    this.CurrencyPaid != null &&
                    this.CurrencyPaid.SequenceEqual(input.CurrencyPaid)
                ) && 
                (
                    this.ItemReceived == input.ItemReceived ||
                    (this.ItemReceived != null &&
                    this.ItemReceived.Equals(input.ItemReceived))
                ) && 
                (
                    this.LicenseUnlockHash == input.LicenseUnlockHash ||
                    (this.LicenseUnlockHash != null &&
                    this.LicenseUnlockHash.Equals(input.LicenseUnlockHash))
                ) && 
                (
                    this.PurchasedByCharacterId == input.PurchasedByCharacterId ||
                    (this.PurchasedByCharacterId != null &&
                    this.PurchasedByCharacterId.Equals(input.PurchasedByCharacterId))
                ) && 
                (
                    this.RefundPolicy == input.RefundPolicy ||
                    (this.RefundPolicy != null &&
                    this.RefundPolicy.Equals(input.RefundPolicy))
                ) && 
                (
                    this.SequenceNumber == input.SequenceNumber ||
                    (this.SequenceNumber != null &&
                    this.SequenceNumber.Equals(input.SequenceNumber))
                ) && 
                (
                    this.TimeToExpiration == input.TimeToExpiration ||
                    (this.TimeToExpiration != null &&
                    this.TimeToExpiration.Equals(input.TimeToExpiration))
                ) && 
                (
                    this.ExpiresOn == input.ExpiresOn ||
                    (this.ExpiresOn != null &&
                    this.ExpiresOn.Equals(input.ExpiresOn))
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
                if (this.CurrencyPaid != null)
                    hashCode = hashCode * 59 + this.CurrencyPaid.GetHashCode();
                if (this.ItemReceived != null)
                    hashCode = hashCode * 59 + this.ItemReceived.GetHashCode();
                if (this.LicenseUnlockHash != null)
                    hashCode = hashCode * 59 + this.LicenseUnlockHash.GetHashCode();
                if (this.PurchasedByCharacterId != null)
                    hashCode = hashCode * 59 + this.PurchasedByCharacterId.GetHashCode();
                if (this.RefundPolicy != null)
                    hashCode = hashCode * 59 + this.RefundPolicy.GetHashCode();
                if (this.SequenceNumber != null)
                    hashCode = hashCode * 59 + this.SequenceNumber.GetHashCode();
                if (this.TimeToExpiration != null)
                    hashCode = hashCode * 59 + this.TimeToExpiration.GetHashCode();
                if (this.ExpiresOn != null)
                    hashCode = hashCode * 59 + this.ExpiresOn.GetHashCode();
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
