import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function transactionalSMS(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/api/2.0/advanced/transactional';

	function omitEmpty<T extends Record<string, unknown>>(obj: T): Partial<T> {
		return Object.fromEntries(
			Object.entries(obj).filter(
				([, value]) => value !== '' && value !== null && value !== undefined,
			),
		) as Partial<T>;
	}

	const variables = this.getNodeParameter('variables', index) as {variable_values: []};
	const newVariable: {[k: string]: string} = {};

	type variableType = {
		name: string;
		value: string;
	};

	body.number = this.getNodeParameter('number', index) as string;

	if (Array.isArray(variables.variable_values) && variables.variable_values.length > 0) {
		variables.variable_values.forEach((value: variableType) => {
			newVariable[value.name] = value.value;
		});
		body.variables = newVariable;
	}
	body.country = this.getNodeParameter('country', index) as string;
	body.schedule = this.getNodeParameter('schedule', index) as string;
	body.duplicates_check = this.getNodeParameter('duplicates_check', index) as string;

	const sender_id = this.getNodeParameter('sender_id', index) as string;

	const channel = {
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

	body.channel = { sms: omitEmpty(channel.sms)};

	const cleaned_body = omitEmpty(body);

	//throw new Error(`Parse: ${JSON.stringify(cleaned_body)}`);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, cleaned_body);

	return this.helpers.returnJsonArray(responseData);
}
