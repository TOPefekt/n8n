import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function promotionalSMS(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/api/2.0/advanced/promotional';

	type numberType = {
		phone_number: string;
	};

	function omitEmpty<T extends Record<string, unknown>>(obj: T): Partial<T> {
		return Object.fromEntries(
			Object.entries(obj).filter(
				([, value]) => value !== '' && value !== null && value !== undefined,
			),
		) as Partial<T>;
	}

	const numberList = this.getNodeParameter('number', index) as {numbers: []};
	const newNumberList: {[k: number]: string} = [];

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

	const sender_id = this.getNodeParameter('sender_id', index) as string;

	const channels = {
		sms: {
			text: this.getNodeParameter('text', index) as string,
			sender_id: sender_id,
			sender_id_value:
				sender_id !== 'gSystem' && sender_id !== 'gShort'
					? (this.getNodeParameter('sender_id_value', index) as string)
					: null,
			unicode: this.getNodeParameter('unicode', index) as string,
		},
	};

	body.channel = omitEmpty(channels);

	const cleaned_body = omitEmpty(body);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, cleaned_body);

	return this.helpers.returnJsonArray(responseData);
}
