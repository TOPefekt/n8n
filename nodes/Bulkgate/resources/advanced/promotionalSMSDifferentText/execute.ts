import { INodeExecutionData, IExecuteFunctions, IDataObject } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function promotionalSMSDifferentText(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {
		tag: '',
		messages: [],
	} as BulkGatePayload;

	const requestMethod = 'POST';
	const endpoint = '/api/1.0/integration/promotional';

	function omitEmpty<T extends Record<string, unknown>>(obj: T): Partial<T> {
		return Object.fromEntries(
			Object.entries(obj).filter(
				([, value]) => value !== '' && value !== null && value !== undefined,
			),
		) as Partial<T>;
	}

	type VariableMap = Record<string, string>;

	interface SmsChannel extends IDataObject {
		sender_id: string;
		sender_id_value: string;
		unicode: boolean;
		text: string;
		variables: VariableMap;
	}

	interface MessageChannels extends IDataObject {
		sms: SmsChannel;
	}

	interface MessageItem extends IDataObject {
		primary_channel: 'sms' | 'viber';
		phone_number: string;
		country: string;
		channels: MessageChannels;
	}

	interface BulkGatePayload extends IDataObject{
		tag: string;
		messages: MessageItem[];
	}

	interface inputPayloadItem {
		phone_number: string;
		text: string;
		country: string;
		sender_id: string;
		sender_id_value: string;
		unicode: boolean;
		schedule: string;
		variables: VariablesUiValue;
		duplicates_check: string;
	}

	interface inputPayload {
		messages: inputPayloadItem[];
	}

	interface VariableUiRow {
		name: string;
		value: string;
	}

	interface VariablesUiValue extends IDataObject {
		variable?: VariableUiRow[];
	}

	function mapVariablesUiToObject(input: VariablesUiValue | undefined): VariableMap {
		const rows = input?.variable ?? [];

		return Object.fromEntries(
			rows.filter((row) => row.name?.trim() !== '').map((row) => [row.name, row.value]),
		);
	}

	const messageList = this.getNodeParameter('messages', index) as inputPayload;

	body.tag = this.getNodeParameter('tag', index) as string;

	if (messageList.messages.length > 0) {
			messageList.messages.forEach((value: inputPayloadItem) => {

			const sms_variables = mapVariablesUiToObject(value.variables);

			const sender_id = value.sender_id;

			const channel = {
				sms: {
					text: value.text,
					sender_id: sender_id,
					sender_id_value:
						sender_id !== 'gSystem' && sender_id !== 'gShort'
							? value.sender_id_value
							: null,
					unicode: value.unicode,
					variables: sms_variables,
				},
			} as MessageChannels;

			const cleaned_sms_channel = omitEmpty(channel.sms);

			const message = {
				primary_channel: 'sms',
				phone_number: value.phone_number,
				country: value.country,
				channels: { sms: cleaned_sms_channel },
			} as unknown;

			body.messages.push(message as MessageItem);
		});
	}

	//throw new Error(`Parse: ${JSON.stringify(body)}`);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray(responseData);
}
