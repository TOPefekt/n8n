import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function transactionalSMS(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/api/2.0/advanced/transactional';

	const variables = this.getNodeParameter('variables', index) as {variable_values: []};
	const newVariable: {[k: string]: string} = {};

	type variableType = {
		name: string;
		value: string;
	};

	body.number = this.getNodeParameter('number', index) as string;
	//body.text = this.getNodeParameter('text', index) as string;

	if (Array.isArray(variables.variable_values) && variables.variable_values.length > 0) {
		variables.variable_values.forEach((value: variableType) => {
			newVariable[value.name] = value.value;
		});
		body.variables = newVariable;
	}
	body.country = this.getNodeParameter('country', index) as string;
	body.schedule = this.getNodeParameter('schedule', index) as string;
	body.duplicates_check = this.getNodeParameter('duplicates_check', index) as string;

	body.channel = {
		sms: {
			text: this.getNodeParameter('text', index) as string,
			sender_id: this.getNodeParameter('sender_id', index) as string,
			sender_id_value: this.getNodeParameter('sender_id_value', index) as string,
			unicode: this.getNodeParameter('unicode', index) as string,
		},
	};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray(responseData);
}
