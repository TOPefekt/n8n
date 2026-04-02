import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function remove(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/api/1.0/black-list/remove';

	const phoneNumber = this.getNodeParameter('number', index) as string;
	const sourceId = this.getNodeParameter('source_id', index) as string;

	if (phoneNumber)
	{
		body.number = phoneNumber;
	}
	else if (sourceId)
	{
		body.source_id = sourceId;
	}

	body.wallet = this.getNodeParameter('wallet', index) as string;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray(responseData);
}
