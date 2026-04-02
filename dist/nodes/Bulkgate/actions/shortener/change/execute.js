"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.change = change;
const transport_1 = require("../../../transport");
async function change(index) {
    const body = {};
    const requestMethod = 'POST';
    const endpoint = '/api/1.0/shortener/change';
    body.short_url = this.getNodeParameter('short_url', index);
    body.target_url = this.getNodeParameter('target_url', index);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
//# sourceMappingURL=execute.js.map