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
    /// Data regarding the progress of a Quest for a specific character. Quests are composed of multiple steps, each with potentially multiple objectives: this QuestStatus will return Objective data for the *currently active* step in this quest.
    /// </summary>
    [DataContract]
    public partial class DestinyQuestsDestinyQuestStatus :  IEquatable<DestinyQuestsDestinyQuestStatus>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DestinyQuestsDestinyQuestStatus" /> class.
        /// </summary>
        /// <param name="QuestHash">The hash identifier for the Quest Item. (Note: Quests are defined as Items, and thus you would use this to look up the quest&#39;s DestinyInventoryItemDefinition). For information on all steps in the quest, you can then examine its DestinyInventoryItemDefinition.setData property for Quest Steps (which are *also* items). You can use the Item Definition to display human readable data about the overall quest..</param>
        /// <param name="StepHash">The hash identifier of the current Quest Step, which is also a DestinyInventoryItemDefinition. You can use this to get human readable data about the current step and what to do in that step..</param>
        /// <param name="StepObjectives">A step can have multiple objectives. This will give you the progress for each objective in the current step, in the order in which they are rendered in-game..</param>
        /// <param name="Tracked">Whether or not the quest is tracked.</param>
        /// <param name="ItemInstanceId">The current Quest Step will be an instanced item in the player&#39;s inventory. If you care about that, this is the instance ID of that item..</param>
        /// <param name="Completed">Whether or not the whole quest has been completed, regardless of whether or not you have redeemed the rewards for the quest..</param>
        /// <param name="Redeemed">Whether or not you have redeemed rewards for this quest..</param>
        /// <param name="Started">Whether or not you have started this quest..</param>
        /// <param name="VendorHash">If the quest has a related Vendor that you should talk to in order to initiate the quest/earn rewards/continue the quest, this will be the hash identifier of that Vendor. Look it up its DestinyVendorDefinition..</param>
        public DestinyQuestsDestinyQuestStatus(uint? QuestHash = default(uint?), uint? StepHash = default(uint?), List<DestinyQuestsDestinyObjectiveProgress> StepObjectives = default(List<DestinyQuestsDestinyObjectiveProgress>), bool? Tracked = default(bool?), long? ItemInstanceId = default(long?), bool? Completed = default(bool?), bool? Redeemed = default(bool?), bool? Started = default(bool?), uint? VendorHash = default(uint?))
        {
            this.QuestHash = QuestHash;
            this.StepHash = StepHash;
            this.StepObjectives = StepObjectives;
            this.Tracked = Tracked;
            this.ItemInstanceId = ItemInstanceId;
            this.Completed = Completed;
            this.Redeemed = Redeemed;
            this.Started = Started;
            this.VendorHash = VendorHash;
        }
        
        /// <summary>
        /// The hash identifier for the Quest Item. (Note: Quests are defined as Items, and thus you would use this to look up the quest&#39;s DestinyInventoryItemDefinition). For information on all steps in the quest, you can then examine its DestinyInventoryItemDefinition.setData property for Quest Steps (which are *also* items). You can use the Item Definition to display human readable data about the overall quest.
        /// </summary>
        /// <value>The hash identifier for the Quest Item. (Note: Quests are defined as Items, and thus you would use this to look up the quest&#39;s DestinyInventoryItemDefinition). For information on all steps in the quest, you can then examine its DestinyInventoryItemDefinition.setData property for Quest Steps (which are *also* items). You can use the Item Definition to display human readable data about the overall quest.</value>
        [DataMember(Name="questHash", EmitDefaultValue=false)]
        public uint? QuestHash { get; set; }

        /// <summary>
        /// The hash identifier of the current Quest Step, which is also a DestinyInventoryItemDefinition. You can use this to get human readable data about the current step and what to do in that step.
        /// </summary>
        /// <value>The hash identifier of the current Quest Step, which is also a DestinyInventoryItemDefinition. You can use this to get human readable data about the current step and what to do in that step.</value>
        [DataMember(Name="stepHash", EmitDefaultValue=false)]
        public uint? StepHash { get; set; }

        /// <summary>
        /// A step can have multiple objectives. This will give you the progress for each objective in the current step, in the order in which they are rendered in-game.
        /// </summary>
        /// <value>A step can have multiple objectives. This will give you the progress for each objective in the current step, in the order in which they are rendered in-game.</value>
        [DataMember(Name="stepObjectives", EmitDefaultValue=false)]
        public List<DestinyQuestsDestinyObjectiveProgress> StepObjectives { get; set; }

        /// <summary>
        /// Whether or not the quest is tracked
        /// </summary>
        /// <value>Whether or not the quest is tracked</value>
        [DataMember(Name="tracked", EmitDefaultValue=false)]
        public bool? Tracked { get; set; }

        /// <summary>
        /// The current Quest Step will be an instanced item in the player&#39;s inventory. If you care about that, this is the instance ID of that item.
        /// </summary>
        /// <value>The current Quest Step will be an instanced item in the player&#39;s inventory. If you care about that, this is the instance ID of that item.</value>
        [DataMember(Name="itemInstanceId", EmitDefaultValue=false)]
        public long? ItemInstanceId { get; set; }

        /// <summary>
        /// Whether or not the whole quest has been completed, regardless of whether or not you have redeemed the rewards for the quest.
        /// </summary>
        /// <value>Whether or not the whole quest has been completed, regardless of whether or not you have redeemed the rewards for the quest.</value>
        [DataMember(Name="completed", EmitDefaultValue=false)]
        public bool? Completed { get; set; }

        /// <summary>
        /// Whether or not you have redeemed rewards for this quest.
        /// </summary>
        /// <value>Whether or not you have redeemed rewards for this quest.</value>
        [DataMember(Name="redeemed", EmitDefaultValue=false)]
        public bool? Redeemed { get; set; }

        /// <summary>
        /// Whether or not you have started this quest.
        /// </summary>
        /// <value>Whether or not you have started this quest.</value>
        [DataMember(Name="started", EmitDefaultValue=false)]
        public bool? Started { get; set; }

        /// <summary>
        /// If the quest has a related Vendor that you should talk to in order to initiate the quest/earn rewards/continue the quest, this will be the hash identifier of that Vendor. Look it up its DestinyVendorDefinition.
        /// </summary>
        /// <value>If the quest has a related Vendor that you should talk to in order to initiate the quest/earn rewards/continue the quest, this will be the hash identifier of that Vendor. Look it up its DestinyVendorDefinition.</value>
        [DataMember(Name="vendorHash", EmitDefaultValue=false)]
        public uint? VendorHash { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DestinyQuestsDestinyQuestStatus {\n");
            sb.Append("  QuestHash: ").Append(QuestHash).Append("\n");
            sb.Append("  StepHash: ").Append(StepHash).Append("\n");
            sb.Append("  StepObjectives: ").Append(StepObjectives).Append("\n");
            sb.Append("  Tracked: ").Append(Tracked).Append("\n");
            sb.Append("  ItemInstanceId: ").Append(ItemInstanceId).Append("\n");
            sb.Append("  Completed: ").Append(Completed).Append("\n");
            sb.Append("  Redeemed: ").Append(Redeemed).Append("\n");
            sb.Append("  Started: ").Append(Started).Append("\n");
            sb.Append("  VendorHash: ").Append(VendorHash).Append("\n");
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
            return this.Equals(input as DestinyQuestsDestinyQuestStatus);
        }

        /// <summary>
        /// Returns true if DestinyQuestsDestinyQuestStatus instances are equal
        /// </summary>
        /// <param name="input">Instance of DestinyQuestsDestinyQuestStatus to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DestinyQuestsDestinyQuestStatus input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.QuestHash == input.QuestHash ||
                    (this.QuestHash != null &&
                    this.QuestHash.Equals(input.QuestHash))
                ) && 
                (
                    this.StepHash == input.StepHash ||
                    (this.StepHash != null &&
                    this.StepHash.Equals(input.StepHash))
                ) && 
                (
                    this.StepObjectives == input.StepObjectives ||
                    this.StepObjectives != null &&
                    this.StepObjectives.SequenceEqual(input.StepObjectives)
                ) && 
                (
                    this.Tracked == input.Tracked ||
                    (this.Tracked != null &&
                    this.Tracked.Equals(input.Tracked))
                ) && 
                (
                    this.ItemInstanceId == input.ItemInstanceId ||
                    (this.ItemInstanceId != null &&
                    this.ItemInstanceId.Equals(input.ItemInstanceId))
                ) && 
                (
                    this.Completed == input.Completed ||
                    (this.Completed != null &&
                    this.Completed.Equals(input.Completed))
                ) && 
                (
                    this.Redeemed == input.Redeemed ||
                    (this.Redeemed != null &&
                    this.Redeemed.Equals(input.Redeemed))
                ) && 
                (
                    this.Started == input.Started ||
                    (this.Started != null &&
                    this.Started.Equals(input.Started))
                ) && 
                (
                    this.VendorHash == input.VendorHash ||
                    (this.VendorHash != null &&
                    this.VendorHash.Equals(input.VendorHash))
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
                if (this.QuestHash != null)
                    hashCode = hashCode * 59 + this.QuestHash.GetHashCode();
                if (this.StepHash != null)
                    hashCode = hashCode * 59 + this.StepHash.GetHashCode();
                if (this.StepObjectives != null)
                    hashCode = hashCode * 59 + this.StepObjectives.GetHashCode();
                if (this.Tracked != null)
                    hashCode = hashCode * 59 + this.Tracked.GetHashCode();
                if (this.ItemInstanceId != null)
                    hashCode = hashCode * 59 + this.ItemInstanceId.GetHashCode();
                if (this.Completed != null)
                    hashCode = hashCode * 59 + this.Completed.GetHashCode();
                if (this.Redeemed != null)
                    hashCode = hashCode * 59 + this.Redeemed.GetHashCode();
                if (this.Started != null)
                    hashCode = hashCode * 59 + this.Started.GetHashCode();
                if (this.VendorHash != null)
                    hashCode = hashCode * 59 + this.VendorHash.GetHashCode();
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
