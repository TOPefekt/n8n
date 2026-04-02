import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function promotionalViber(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/api/2.0/advanced/promotional';

	const numberList = this.getNodeParameter('number', index) as {numbers: []};
	const newNumberList: {[k: number]: string} = [];

	type numberType = {
		phone_number: string;
	};

	body.number = this.getNodeParameter('number', index) as {numbers: []};

	if (Array.isArray(numberList.numbers) && numberList.numbers.length > 0) {
		numberList.numbers.forEach((value: numberType, index) => {
			newNumberList[index] = value.phone_number;
		});
		body.number = newNumberList;
	}

	body.country = this.getNodeParameter('country', index) as string;
	body.schedule = this.getNodeParameter('schedule', index) as string;
	body.duplicates_check = this.getNodeParameter('duplicates_check', index) as string;

	body.channel = {
		viber: {
			text: this.getNodeParameter('text', index) as string,
			sender: this.getNodeParameter('sender', index) as string,
			expiration: this.getNodeParameter('expiration', index) as string,
			button: {
				caption: this.getNodeParameter('caption', index) as string,
				url: this.getNodeParameter('url', index) as string,
			},
		},
	};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray(responseData);
}
