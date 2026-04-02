"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkgateApi = void 0;
class BulkgateApi {
    constructor() {
        this.name = 'bulkgateApi';
        this.displayName = 'Bulkgate API';
        this.icon = { light: 'file:../icons/bulkgate.svg', dark: 'file:../icons/bulkgate_dark.svg' };
        this.documentationUrl = 'https://github.com/org/-bulkgate?tab=readme-ov-file#credentials';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'x-api-key': '={{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://portal.bulkgate.com/api',
                url: '/v1/user',
            },
        };
    }
}
exports.BulkgateApi = BulkgateApi;
//# sourceMappingURL=BulkgateApi.credentials.js.map