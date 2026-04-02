import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function change(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/api/1.0/shortener/change';

	body.short_url = this.getNodeParameter('short_url', index) as string;
	body.target_url = this.getNodeParameter('target_url', index) as string;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray(responseData);
}
