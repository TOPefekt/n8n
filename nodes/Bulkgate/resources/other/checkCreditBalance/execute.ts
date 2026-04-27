import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function check(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = '/api/2.0/advanced/info';


	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray(responseData);
}
