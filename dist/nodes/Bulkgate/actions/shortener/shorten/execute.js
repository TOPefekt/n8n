"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shorten = shorten;
const transport_1 = require("../../../transport");
async function shorten(index) {
    const body = {};
    const requestMethod = 'POST';
    const endpoint = '/api/1.0/shortener/shorten';
    body.target_url = this.getNodeParameter('target_url', index);
    body.url_type = this.getNodeParameter('url_type', index);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
//# sourceMappingURL=execute.js.map