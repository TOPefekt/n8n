"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promotionalSMS = promotionalSMS;
const transport_1 = require("../../../transport");
async function promotionalSMS(index) {
    const body = {};
    const requestMethod = 'POST';
    const endpoint = '/api/2.0/advanced/promotional';
    const numberList = this.getNodeParameter('number', index);
    const newNumberList = [];
    body.number = this.getNodeParameter('number', index);
    if (Array.isArray(numberList.numbers) && numberList.numbers.length > 0) {
        numberList.numbers.forEach((value, index) => {
            newNumberList[index] = value.phone_number;
        });
        body.number = newNumberList;
    }
    body.country = this.getNodeParameter('country', index);
    body.schedule = this.getNodeParameter('schedule', index);
    body.duplicates_check = this.getNodeParameter('duplicates_check', index);
    body.channel = {
        sms: {
            text: this.getNodeParameter('text', index),
            sender_id: this.getNodeParameter('sender_id', index),
            sender_id_value: this.getNodeParameter('sender_id_value', index),
            unicode: this.getNodeParameter('unicode', index),
        },
    };
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
//# sourceMappingURL=execute.js.map