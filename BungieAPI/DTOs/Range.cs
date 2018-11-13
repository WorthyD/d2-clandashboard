using System;
using System.Collections.Generic;
using System.Text;

namespace BungieAPI.DTOs
{
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "9.11.0.0 (Newtonsoft.Json v9.0.0.0)")]
    public partial class Range : DateRange
    {
        public string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this);
        }

        public static Range FromJson(string data)
        {
            return Newtonsoft.Json.JsonConvert.DeserializeObject<Range>(data);
        }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "9.11.0.0 (Newtonsoft.Json v9.0.0.0)")]
    public partial class DateRange
    {
        [Newtonsoft.Json.JsonProperty("start", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public System.DateTime? Start { get; set; }

        [Newtonsoft.Json.JsonProperty("end", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public System.DateTime? End { get; set; }

        public string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this);
        }

        public static DateRange FromJson(string data)
        {
            return Newtonsoft.Json.JsonConvert.DeserializeObject<DateRange>(data);
        }

    }
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "9.11.0.0 (Newtonsoft.Json v9.0.0.0)")]
    public partial class Series
    {
        /// <summary>Collection of samples with time and value.</summary>
        [Newtonsoft.Json.JsonProperty("datapoints", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public System.Collections.ObjectModel.ObservableCollection<Datapoint> Datapoints { get; set; }

        /// <summary>Target to which to datapoints apply.</summary>
        [Newtonsoft.Json.JsonProperty("target", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public string Target { get; set; }

        public string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this);
        }

        public static Series FromJson(string data)
        {
            return Newtonsoft.Json.JsonConvert.DeserializeObject<Series>(data);
        }

    }

}
