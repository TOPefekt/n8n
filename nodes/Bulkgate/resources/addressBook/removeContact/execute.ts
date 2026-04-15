import {
	IDataObject,
	INodeExecutionData,
	IExecuteFunctions,
} from 'n8n-workflow';

import { apiRequest } from '../../../transport';


export async function removeContact(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = '/api/1.0/address-book/remove';

	body.phone_number = this.getNodeParameter('phone_number', index);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray(responseData);
}
