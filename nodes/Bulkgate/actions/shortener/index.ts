import * as shorten from './shorten';
import * as remove from './remove';
import * as change from './change';

import { INodeProperties } from 'n8n-workflow';

export { shorten, remove, change };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['shortener'],
			},
		},
		options: [
			{
				name: 'Shorten',
				value: 'shorten',
				description: 'This action is used to shorten URL, for later use in BulkGate Portal',
				action: 'Shortener shorten',
			},
			{
				name: 'Edit',
				value: 'change',
				description: 'This action is used to modify shortened URL, for future use in BulkGate Portal',
				action: 'Shortener change',
			},
			{
				name: 'Remove',
				value: 'remove',
				description: 'This action is used for removal of shortened URL from BulkGate Portal',
				action: 'Shortener remove',
			},
		],
		default: 'shorten',
	},

	...shorten.description,
	...remove.description,
	...change.description,
];
