import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function importContact(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {
		groups: [],
		group_name: '',
		data: [],
	} as BulkGatePayload;

	const requestMethod = 'POST';
	const endpoint = '/api/1.0/address-book/import';

	function omitEmpty<T extends Record<string, unknown>>(obj: T): Partial<T> {
		return Object.fromEntries(
			Object.entries(obj).filter(
				([, value]) => value !== '' && value !== null && value !== undefined,
			),
		) as Partial<T>;
	}

	const groupList = this.getNodeParameter('groups', index) as { group: [] };
	const newGroupList: { [k: number]: number } = [];

	interface InputPayloadItem {
		type?: string;
		phone_mobile?: string;
		phone?: string;
		title_before?: string;
		first_name?: string;
		last_name?: string;
		title_after?: string;
		gender?: string;
		company_name?: string;
		email?: string;
		url?: string;
		street1?: string;
		street2?: string;
		city?: string;
		zip?: string;
		state?: string;
		country?: string;
		company_number?: string;
		company_vat?: string;
		note?: string;
	}

	interface BulkGatePayload extends IDataObject {
		groups?: { [p: number]: number };
		group_name?: string;
		data: Partial<InputPayloadItem>[];
	}

	interface InputPayload {
		contacts: InputPayloadItem[];
	}

	type groupType = {
		group_id: number;
	};

	if (Array.isArray(groupList.group) && groupList.group.length > 0) {
		groupList.group.forEach((value: groupType, index) => {
			newGroupList[index] = value.group_id;
		});
		body.groups = newGroupList;
	}

	if (this.getNodeParameter('group_name', index) as string !== '')
	{
		body.group_name = this.getNodeParameter('group_name', index) as string;
	}

	const messageList = this.getNodeParameter('data', index) as InputPayload;

	if (messageList.contacts.length > 0) {
		messageList.contacts.forEach((value: InputPayloadItem) => {
			const contact: Partial<InputPayloadItem> = {
				type: value.type,
				phone_mobile: value.phone_mobile,
				phone: value.phone,
				title_before: value.title_before,
				first_name: value.first_name,
				last_name: value.last_name,
				title_after: value.title_after,
				gender: value.gender,
				company_name: value.company_name,
				email: value.email,
				url: value.url,
				street1: value.street1,
				street2: value.street2,
				city: value.city,
				zip: value.zip,
				state: value.state,
				country: value.country,
				company_number: value.company_number,
				company_vat: value.company_vat,
				note: value.note,
			};

			const cleanedContact = omitEmpty(contact);

			body.data.push(cleanedContact);
		});
	}

	const cleaned_body = omitEmpty(body);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, cleaned_body);

	return this.helpers.returnJsonArray(responseData);
}
