import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function promotionalViberDifferentText(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {
		tag: '',
		messages: [],
	} as BulkGatePayload;

	const requestMethod = 'POST';
	const endpoint = '/api/1.0/integration/promotional';

	type VariableMap = Record<string, string>;

	interface ViberChannel extends IDataObject {
		sender: string;
		expiration: number;
		button_caption: string;
		button_url: string;
		image: string;
		image_zoom: boolean;
		text: string;
		variables: VariableMap;
	}

	interface MessageChannels extends IDataObject {
		viber: ViberChannel;
	}

	interface MessageItem extends IDataObject {
		primary_channel: 'sms' | 'viber';
		phone_number: string;
		country: string;
		channels: MessageChannels;
	}

	interface BulkGatePayload extends IDataObject {
		tag: string;
		messages: MessageItem[];
	}

	interface inputPayloadItem {
		phone_number: string;
		country: string;
		sender: string;
		expiration: number;
		button_caption: string;
		button_url: string;
		image: string;
		image_zoom: boolean;
		text: string;
		//variables: VariablesUiValue;
	}

	interface inputPayload {
		messages: inputPayloadItem[];
	}
/*
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
	}*/


	const messageList = this.getNodeParameter('messages', index) as inputPayload;

	body.tag = this.getNodeParameter('tag', index) as string;

	if (messageList.messages.length > 0) {
		messageList.messages.forEach((value: inputPayloadItem) => {

			//const viber_variables = mapVariablesUiToObject(value.variables);

			const channel = {
				viber: {
					text: value.text,
					sender: value.sender,
					expiration: value.expiration,
					button_caption: value.button_caption,
					button_url: value.button_url,
					image: value.image,
					image_zoom: value.image_zoom,
				//	variables: viber_variables,
				},
			} as MessageChannels;

			const message = {
				primary_channel: 'viber',
				phone_number: value.phone_number,
				country: value.country,
				channels: channel,
			} as unknown;

			body.messages.push(message as MessageItem);
		});
	}

	//throw new Error(`Parse: ${JSON.stringify(body)}`);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray(responseData);
}
