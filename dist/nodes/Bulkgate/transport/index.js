"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRequest = apiRequest;
exports.apiRequestAllItems = apiRequestAllItems;
async function apiRequest(method, endpoint, body = {}) {
    const options = {
        method,
        body,
        url: `https://portal.bulkgate.com${endpoint}`,
        headers: {
            'content-type': 'application/json; charset=utf-8',
        },
    };
    return this.helpers.httpRequestWithAuthentication.call(this, 'bulkgateNodeApi', options);
}
async function apiRequestAllItems(method, endpoint, body = {}, query = {}) {
    const returnData = [];
    let responseData;
    query.page = 0;
    query.per_page = 100;
    do {
        responseData = await apiRequest.call(this, method, endpoint, body);
        query.page++;
        returnData.push.apply(returnData, responseData);
    } while (responseData.length !== 0);
    return returnData;
}
//# sourceMappingURL=index.js.map