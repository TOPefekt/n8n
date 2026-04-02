"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bulkgate = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const user_1 = require("./resources/user");
const company_1 = require("./resources/company");
class Bulkgate {
    constructor() {
        this.description = {
            displayName: 'Bulkgate',
            name: 'bulkgate',
            icon: { light: 'file:bulkgate.svg', dark: 'file:bulkgate.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with the Bulkgate API',
            defaults: {
                name: 'Bulkgate',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [{ name: 'bulkgateApi', required: true }],
            requestDefaults: {
                baseURL: 'https://portal.bulkgate.com/api',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'User',
                            value: 'user',
                        },
                        {
                            name: 'Company',
                            value: 'company',
                        },
                    ],
                    default: 'user',
                },
                ...user_1.userDescription,
                ...company_1.companyDescription,
            ],
        };
    }
}
exports.Bulkgate = Bulkgate;
//# sourceMappingURL=Bulkgate.node.js.map