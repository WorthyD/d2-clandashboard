using System;
using System.Collections.Generic;
using System.Text;

namespace BungieAPI.DTOs
{
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "9.11.0.0 (Newtonsoft.Json v9.0.0.0)")]
    public partial class ApiUsage
    {
        /// <summary>The date range for the data being reported.</summary>
        [Newtonsoft.Json.JsonProperty("range", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public Range Range { get; set; }

        /// <summary>Counts for on API calls made for the time range.</summary>
        [Newtonsoft.Json.JsonProperty("apiCalls", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public System.Collections.ObjectModel.ObservableCollection<Series> ApiCalls { get; set; }

        /// <summary>Instances of blocked requests or requests that crossed the warn threshold during the time range.</summary>
        [Newtonsoft.Json.JsonProperty("throttledRequests", Required = Newtonsoft.Json.Required.Default, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public System.Collections.ObjectModel.ObservableCollection<Series> ThrottledRequests { get; set; }

        public string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this);
        }

        public static ApiUsage FromJson(string data)
        {
            return Newtonsoft.Json.JsonConvert.DeserializeObject<ApiUsage>(data);
        }

    }

}
