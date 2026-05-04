import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function addContact(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;

	const requestMethod = 'POST';
	const endpoint = '/api/1.0/address-book/add';

	const groupList = this.getNodeParameter('groups', index) as {groups: []};
	const newGroupList: {[k: number]: string} = [];

	type groupType = {
		group: string;
	};

	if (Array.isArray(groupList.groups) && groupList.groups.length > 0) {
		groupList.groups.forEach((value: groupType, index) => {
			newGroupList[index] = value.group;
		});
		body.groups = newGroupList;
	}

	body.data = {
		type: this.getNodeParameter('type', index) as string,
		phone_mobile: this.getNodeParameter('phone_mobile', index) as string,
		phone: this.getNodeParameter('phone', index) as string,
		title_before: this.getNodeParameter('title_before', index) as string,
		first_name: this.getNodeParameter('first_name', index) as string,
		last_name: this.getNodeParameter('last_name', index) as string,
		title_after: this.getNodeParameter('title_after', index) as string,
		gender: this.getNodeParameter('gender', index) as string,
		company_name: this.getNodeParameter('company_name', index) as string,
		email: this.getNodeParameter('email', index) as string,
		url: this.getNodeParameter('url', index) as string,
		street1: this.getNodeParameter('street1', index) as string,
		street2: this.getNodeParameter('street2', index) as string,
		city: this.getNodeParameter('city', index) as string,
		zip: this.getNodeParameter('zip', index) as string,
		state: this.getNodeParameter('state', index) as string,
		country: this.getNodeParameter('country', index) as string,
		company_number: this.getNodeParameter('company_number', index) as string,
		company_vat: this.getNodeParameter('company_vat', index) as string,
		note: this.getNodeParameter('note', index) as string,
		custom_field_0: this.getNodeParameter('custom_field_0', index) as string,
		custom_field_1: this.getNodeParameter('custom_field_1', index) as string,
		custom_field_2: this.getNodeParameter('custom_field_2', index) as string,
		custom_field_3: this.getNodeParameter('custom_field_3', index) as string,
		custom_field_4: this.getNodeParameter('custom_field_4', index) as string,
		custom_field_5: this.getNodeParameter('custom_field_5', index) as string,
		custom_field_6: this.getNodeParameter('custom_field_6', index) as string,
		custom_field_7: this.getNodeParameter('custom_field_7', index) as string,
		custom_field_8: this.getNodeParameter('custom_field_8', index) as string,
		custom_field_9: this.getNodeParameter('custom_field_9', index) as string,
	};

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray(responseData);
}
