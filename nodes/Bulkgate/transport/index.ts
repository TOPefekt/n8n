import {
	IDataObject,
	IHttpRequestMethods,
	IHttpRequestOptions,
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
} from 'n8n-workflow';


/**
 * Make an API request to BulkGate
 */
export async function apiRequest(
		this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
		method: IHttpRequestMethods,
		endpoint: string,
		body: IDataObject = {},
) {

		if (typeof body === 'object' && body !== null) {
			const credentials = (await this.getCredentials('bulkGateApi')) as IDataObject;
			body.application_id = credentials.application_id;
			body.application_token = credentials.application_token;
			body.application_product = "n8n";
		}

		const options: IHttpRequestOptions = {
			method: method,
			body: {
				...body,
			},
			url: `https://portal.bulkgate.com${endpoint}`,
			headers: {
				'content-type': 'application/json; charset=utf-8',
			},
		};

		return this.helpers.httpRequestWithAuthentication.call(this, 'bulkGateApi', options);
}

export async function apiRequestAllItems(
		this: IExecuteFunctions | ILoadOptionsFunctions,
		method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD',
		endpoint: string,
		body: IDataObject = {},
		query: IDataObject = {},)
{
		const returnData: IDataObject[] = [];

		let responseData;
		query.page = 0;
		query.per_page = 100;

		do
		{
			responseData = await apiRequest.call(this, method, endpoint, body);
			query.page++;
			returnData.push.apply(returnData, responseData);
		} while (responseData.length !== 0);

		return returnData;
}
