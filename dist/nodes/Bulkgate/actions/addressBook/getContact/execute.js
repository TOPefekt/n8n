"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContact = getContact;
const transport_1 = require("../../../transport");
async function getContact(index) {
    const body = {};
    const requestMethod = 'POST';
    const endpoint = '/api/1.0/address-book/get';
    body.phone_number = this.getNodeParameter('phone_number', index);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
//# sourceMappingURL=execute.js.map