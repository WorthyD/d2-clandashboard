export interface AppConfigParameters {
  apiKey?: string;
}

export class AppConfig {
  apiKey?: string;
  constructor(configurationParameters: AppConfigParameters = {}) {
    this.apiKey = configurationParameters.apiKey;
  }
}
