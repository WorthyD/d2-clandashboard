import { prod } from './keys';

const packageJson = require('../../package.json');
export const environment = {
    production: true,
    bungieAPI: prod.apiKey,
    versions: {
        app: packageJson.version
    }

};
