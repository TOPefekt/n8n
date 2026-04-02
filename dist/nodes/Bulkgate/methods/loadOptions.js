"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannels = getChannels;
const n8n_workflow_1 = require("n8n-workflow");
const transport_1 = require("../transport");
async function getChannels() {
    const endpoint = 'channels';
    const responseData = await transport_1.apiRequest.call(this, 'GET', endpoint, {});
    if (responseData === undefined) {
        throw new n8n_workflow_1.NodeOperationError(this.getNode(), 'No data got returned');
    }
    const returnData = [];
    return returnData;
}
//# sourceMappingURL=loadOptions.js.map