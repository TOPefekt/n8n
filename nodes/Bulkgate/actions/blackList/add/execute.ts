import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function add(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/api/1.0/black-list/add';

	const numberList = this.getNodeParameter('number', index) as {numbers: []};
	const newNumberList: {[k: number]: string} = [];

	type numberType = {
		phone_number: string;
	};

	if (Array.isArray(numberList.numbers) && numberList.numbers.length > 0) {
		numberList.numbers.forEach((value: numberType, index) => {
			newNumberList[index] = value.phone_number;
		});
		body.numbers = newNumberList;
	}

	body.wallet = this.getNodeParameter('wallet', index) as string;
	body.source_id = this.getNodeParameter('source_id', index) as string;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray(responseData);
}
