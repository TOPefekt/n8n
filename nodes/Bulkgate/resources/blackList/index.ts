import * as add from './add';
import * as check from './check';
import * as remove from './remove';

import { type IExecuteFunctions, type INodeExecutionData, INodeProperties } from 'n8n-workflow';

export { add, check, remove };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['blackList'],
			},
		},
		options: [
			{
				name: 'Black List Numbers',
				value: 'add',
				action: 'Black list number',
			},
			{
				name: 'Is Number Blacklisted',
				value: 'check',
				description: 'Check numbers inclusion in blacklist',
				action: 'Check if number is blacklisted',
			},
			{
				name: 'Remove Number From Blacklist',
				value: 'remove',
				description: 'Removes number from blacklist',
				action: 'Remove number',
			},
		],
		default: 'add',
	},

	...add.description,
	...check.description,
	...remove.description,
];

const operationHandlers = {
	add: add.execute,
	check: check.execute,
	remove: remove.execute,
} as const;

export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]>
{
	const operation = this.getNodeParameter('operation', index) as keyof typeof operationHandlers;

	const handler = operationHandlers[operation];

	if (!handler) {
		throw new Error(`Unsupported blacklist operation: ${operation}`);
	}

	return await handler.call(this, index);
}
