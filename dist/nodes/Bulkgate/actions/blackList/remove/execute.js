"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = remove;
const transport_1 = require("../../../transport");
async function remove(index) {
    const body = {};
    const requestMethod = 'POST';
    const endpoint = '/api/1.0/black-list/remove';
    const phoneNumber = this.getNodeParameter('number', index);
    const sourceId = this.getNodeParameter('source_id', index);
    if (phoneNumber) {
        body.number = phoneNumber;
    }
    else if (sourceId) {
        body.source_id = sourceId;
    }
    body.wallet = this.getNodeParameter('wallet', index);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
//# sourceMappingURL=execute.js.map