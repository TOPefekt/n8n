"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = check;
const transport_1 = require("../../../transport");
async function check(index) {
    const body = {};
    const requestMethod = 'POST';
    const endpoint = '/api/1.0/black-list/is-black-listed';
    const numberList = this.getNodeParameter('number', index);
    const newNumberList = [];
    if (Array.isArray(numberList.numbers) && numberList.numbers.length > 0) {
        numberList.numbers.forEach((value, index) => {
            newNumberList[index] = value.phone_number;
        });
        body.numbers = newNumberList;
    }
    body.wallet = this.getNodeParameter('wallet', index);
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
//# sourceMappingURL=execute.js.map