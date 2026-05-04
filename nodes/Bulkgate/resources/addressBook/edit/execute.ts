import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function editContact(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/api/1.0/address-book/edit';

	body.phone_number = this.getNodeParameter('phone_number', index) as string;

	body.data = {
		type: this.getNodeParameter('type', index) ? this.getNodeParameter('type', index) as string : null,
		phone_mobile: this.getNodeParameter('phone_mobile', index) ? this.getNodeParameter('phone_mobile', index) as string : null,
		phone: this.getNodeParameter('phone', index) ? this.getNodeParameter('phone', index) as string : null,
		title_before: this.getNodeParameter('title_before', index) ? this.getNodeParameter('title_before', index) as string : null,
		first_name: this.getNodeParameter('first_name', index) ? this.getNodeParameter('first_name', index) as string : null,
		last_name: this.getNodeParameter('last_name', index) ? this.getNodeParameter('last_name', index) as string : null,
		title_after: this.getNodeParameter('title_after', index) ? this.getNodeParameter('title_after', index) as string : null,
		gender: this.getNodeParameter('gender', index) ? this.getNodeParameter('gender', index) as string : null,
		company_name: this.getNodeParameter('company_name', index) ? this.getNodeParameter('company_name', index) as string : null,
		email: this.getNodeParameter('email', index) ? this.getNodeParameter('email', index) as string : null,
		url: this.getNodeParameter('url', index) ? this.getNodeParameter('url', index) as string : null,
		street1: this.getNodeParameter('street1', index) ? this.getNodeParameter('street1', index) as string : null,
		street2: this.getNodeParameter('street2', index) ? this.getNodeParameter('street2', index) as string : null,
		city: this.getNodeParameter('city', index) ? this.getNodeParameter('city', index) as string : null,
		zip: this.getNodeParameter('zip', index) ? this.getNodeParameter('zip', index) as string : null,
		state: this.getNodeParameter('state', index) ? this.getNodeParameter('state', index) as string : null,
		country: this.getNodeParameter('country', index) ? this.getNodeParameter('country', index) as string : null,
		company_number: this.getNodeParameter('company_number', index) ? this.getNodeParameter('company_number', index) as string : null,
		company_vat: this.getNodeParameter('company_vat', index) ? this.getNodeParameter('company_vat', index) as string : null,
		note: this.getNodeParameter('note', index) ? this.getNodeParameter('note', index) as string : null,
		custom_field_0: this.getNodeParameter('custom_field_0', index) ? this.getNodeParameter('custom_field_0', index) as string : null,
		custom_field_1: this.getNodeParameter('custom_field_1', index) ? this.getNodeParameter('custom_field_1', index) as string : null,
		custom_field_2: this.getNodeParameter('custom_field_2', index) ? this.getNodeParameter('custom_field_2', index) as string : null,
		custom_field_3: this.getNodeParameter('custom_field_3', index) ? this.getNodeParameter('custom_field_3', index) as string : null,
		custom_field_4: this.getNodeParameter('custom_field_4', index) ? this.getNodeParameter('custom_field_4', index) as string : null,
		custom_field_5: this.getNodeParameter('custom_field_5', index) ? this.getNodeParameter('custom_field_5', index) as string : null,
		custom_field_6: this.getNodeParameter('custom_field_6', index) ? this.getNodeParameter('custom_field_6', index) as string : null,
		custom_field_7: this.getNodeParameter('custom_field_7', index) ? this.getNodeParameter('custom_field_7', index) as string : null,
		custom_field_8: this.getNodeParameter('custom_field_8', index) ? this.getNodeParameter('custom_field_8', index) as string : null,
		custom_field_9: this.getNodeParameter('custom_field_9', index) ? this.getNodeParameter('custom_field_9', index) as string : null,
	};

	body.data = Object.fromEntries(Object.entries(body.data).filter(([, v]) => v != null));

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray(responseData);
}
