"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promotionalViber = promotionalViber;
const transport_1 = require("../../../transport");
async function promotionalViber(index) {
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
        viber: {
            text: this.getNodeParameter('text', index),
            sender: this.getNodeParameter('sender', index),
            expiration: this.getNodeParameter('expiration', index),
            button: {
                caption: this.getNodeParameter('caption', index),
                url: this.getNodeParameter('url', index),
            },
        },
    };
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
//# sourceMappingURL=execute.js.map