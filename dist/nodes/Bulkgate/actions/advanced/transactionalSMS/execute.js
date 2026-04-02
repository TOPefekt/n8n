"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionalSMS = transactionalSMS;
const transport_1 = require("../../../transport");
async function transactionalSMS(index) {
    const body = {};
    const requestMethod = 'POST';
    const endpoint = '/api/2.0/advanced/transactional';
    const variables = this.getNodeParameter('variables', index);
    const newVariable = {};
    body.number = this.getNodeParameter('number', index);
    if (Array.isArray(variables.variable_values) && variables.variable_values.length > 0) {
        variables.variable_values.forEach((value) => {
            newVariable[value.name] = value.value;
        });
        body.variables = newVariable;
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