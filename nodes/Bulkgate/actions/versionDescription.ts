/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import { INodeTypeDescription } from 'n8n-workflow';
import * as advanced from './advanced';
import * as blackList from './blackList';
import * as addressBook from './addressBook';
import * as shortener from './shortener';


export const versionDescription: INodeTypeDescription = {
	displayName: 'BulkGate',
	name: 'bulkgate',
	icon: 'file:bulkgate.svg',
	group: ['output'],
	version: 1,
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Sends data to BulkGate',
	credentials: [
		{
			name: 'bulkgateNodeApi',
			required: true,
		},
	],
	defaults: {
		name: 'BulkGate',
	},
	inputs: ['main'],
	outputs: ['main'],
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Advanced',
					value: 'advanced',
				},
				{
					name: 'BlackList',
					value: 'blackList',
				},
				{
					name: 'AddressBook',
					value: 'addressBook',
				},
				{
					name: 'Shortener',
					value: 'shortener',
				},
			],
			default: 'advanced',
		},
		...advanced.descriptions,
		...blackList.descriptions,
		...addressBook.descriptions,
		...shortener.descriptions,
	],
};
