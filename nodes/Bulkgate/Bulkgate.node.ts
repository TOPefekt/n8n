import {
	NodeConnectionTypes,
	type INodeType,
	type INodeTypeDescription,
	IExecuteFunctions,
	INodeExecutionData,
	ApplicationError,
} from 'n8n-workflow';

import * as addressBook from './resources/addressBook';
import * as advanced from './resources/advanced';
import * as blackList from './resources/blackList';
import * as shortener from './resources/shortener';
import * as oneTimePassword from './resources/oneTimePassword';
import * as other from './resources/other';

export class Bulkgate implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'BulkGate',
		name: 'bulkgate',
		icon: { light: 'file:bulkgate.svg', dark: 'file:bulkgate.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the BulkGate API',
		defaults: {
			name: 'BulkGate',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'bulkGateApi', required: true }],
		requestDefaults: {
			baseURL: 'https://portal.bulkgate.com/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Address Book',
						value: 'addressBook',
					},
					{
						name: 'Advanced',
						value: 'advanced',
					},
					{
						name: 'BlackList',
						value: 'blackList',
					},
					{
						name: 'One Time Password',
						value: 'oneTimePassword',
					},
					{
						name: 'Other',
						value: 'other',
					},
					{
						name: 'Shortener',
						value: 'shortener',
					},
				],
				default: 'addressBook',
			},
			...addressBook.description,
			...advanced.descriptions,
			...blackList.descriptions,
			...oneTimePassword.description,
			...shortener.descriptions,
			...other.descriptions,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const resource = this.getNodeParameter('resource', i) as string;

			let result: INodeExecutionData[];

			if (resource === 'addressBook') {
				result = await addressBook.execute.call(this, i);
			} else if (resource === 'advanced') {
				result = await advanced.execute.call(this, i);
			} else if (resource === 'blackList') {
				result = await blackList.execute.call(this, i);
			} else if (resource === 'shortener') {
				result = await shortener.execute.call(this, i);
			} else if (resource === 'oneTimePassword') {
				result = await oneTimePassword.execute.call(this, i);
			} else if (resource === 'other') {
				result = await other.execute.call(this, i);
			} else {
				throw new ApplicationError(`Unsupported resource: ${resource}`);
			}

			returnData.push(...result);
		}

		return [returnData];
	}
}
