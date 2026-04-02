"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContact = addContact;
const transport_1 = require("../../../transport");
async function addContact(index) {
    const body = {};
    const requestMethod = 'POST';
    const endpoint = '/api/1.0/address-book/add';
    const groupList = this.getNodeParameter('groups', index);
    const newGroupList = [];
    if (Array.isArray(groupList.groups) && groupList.groups.length > 0) {
        groupList.groups.forEach((value, index) => {
            newGroupList[index] = value.group;
        });
        body.groups = newGroupList;
    }
    body.data = {
        type: this.getNodeParameter('type', index),
        phone_mobile: this.getNodeParameter('phone_mobile', index),
        phone: this.getNodeParameter('phone', index),
        title_before: this.getNodeParameter('title_before', index),
        first_name: this.getNodeParameter('first_name', index),
        last_name: this.getNodeParameter('last_name', index),
        title_after: this.getNodeParameter('title_after', index),
        gender: this.getNodeParameter('gender', index),
        company_name: this.getNodeParameter('company_name', index),
        email: this.getNodeParameter('email', index),
        url: this.getNodeParameter('url', index),
        street1: this.getNodeParameter('street1', index),
        street2: this.getNodeParameter('street2', index),
        city: this.getNodeParameter('city', index),
        zip: this.getNodeParameter('zip', index),
        state: this.getNodeParameter('state', index),
        country: this.getNodeParameter('company_number', index),
        company_number: this.getNodeParameter('company_number', index),
        company_vat: this.getNodeParameter('company_vat', index),
        note: this.getNodeParameter('note', index),
        custom_field_0: this.getNodeParameter('custom_field_0', index),
        custom_field_1: this.getNodeParameter('custom_field_1', index),
        custom_field_2: this.getNodeParameter('custom_field_2', index),
        custom_field_3: this.getNodeParameter('custom_field_3', index),
        custom_field_4: this.getNodeParameter('custom_field_4', index),
        custom_field_5: this.getNodeParameter('custom_field_5', index),
        custom_field_6: this.getNodeParameter('custom_field_6', index),
        custom_field_7: this.getNodeParameter('custom_field_7', index),
        custom_field_8: this.getNodeParameter('custom_field_8', index),
        custom_field_9: this.getNodeParameter('custom_field_9', index),
    };
    const responseData = await transport_1.apiRequest.call(this, requestMethod, endpoint, body);
    return this.helpers.returnJsonArray(responseData);
}
//# sourceMappingURL=execute.js.map