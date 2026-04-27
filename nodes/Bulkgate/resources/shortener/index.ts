import * as shorten from './shorten';
import * as remove from './remove';
import * as change from './change';

import { type IExecuteFunctions, type INodeExecutionData, INodeProperties } from 'n8n-workflow';

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

const operationHandlers = {
	shorten: shorten.execute,
	remove: remove.execute,
	change: change.execute,
} as const;

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]>
{
	const operation = this.getNodeParameter('operation', index) as keyof typeof operationHandlers;

	const handler = operationHandlers[operation];

	if (!handler)
	{
		throw new Error(`Unsupported shortener operation: ${operation}`);
	}

	return await handler.call(this, index);
}
