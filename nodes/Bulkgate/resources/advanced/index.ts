import * as transactionalSMS from './transactionalSMS';
import * as transactionalViber from './transactionalViber';
import * as promotionalSMS from './promotionalSMS';
import * as promotionalViber from "./promotionalViber";
import * as promotionalSMSDifferentText from './promotionalSMSDifferentText';
import * as promotionalViberDifferentText from './promotionalViberDifferentText';
import { type IExecuteFunctions, type INodeExecutionData, INodeProperties } from 'n8n-workflow';

export { transactionalSMS, transactionalViber, promotionalSMS, promotionalViber };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['advanced'],
			},
		},
		options: [
			{
				name: 'Promotional SMS',
				value: 'promotionalSMS',
				description: 'Send promotional message via SMS',
				action: 'Send single promotional message via SMS',
			},
			{
				name: 'Promotional SMS Different Text',
				value: 'promotionalSMSDifferentText',
				description: 'Send promotional message via SMS',
				action: 'Send multiple promotional messages via SMS',
			},
			{
				name: 'Promotional Viber',
				value: 'promotionalViber',
				description: 'Send promotional message via Viber',
				action: 'Send single promotional message via viber',
			},
			{
				name: 'Promotional Viber Different Text',
				value: 'promotionalViberDifferentText',
				description: 'Send promotional message via Viber',
				action: 'Send multiple promotional messages via viber ',
			},
			{
				name: 'Transactional SMS',
				value: 'transactionalSMS',
				description: 'Send transactional message via SMS',
				action: 'Send transactional message via SMS',
			},
			{
				name: 'Transactional Viber',
				value: 'transactionalViber',
				description: 'Send transactional message via Viber',
				action: 'Send transactional message via viber',
			},
		],
		default: 'transactionalSMS',
	},

	...transactionalSMS.description,
	...transactionalViber.description,
	...promotionalSMS.description,
	...promotionalViber.description,
	...promotionalSMSDifferentText.description,
	...promotionalViberDifferentText.description,
];

const operationHandlers = {
	transactionalSMS: transactionalSMS.execute,
	transactionalViber: transactionalViber.execute,
	promotionalSMS: promotionalSMS.execute,
	promotionalViber: promotionalViber.execute,
	promotionalSMSDifferentText: promotionalSMSDifferentText.execute,
	promotionalViberDifferentText: promotionalViberDifferentText.execute,
} as const;

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('operation', index) as keyof typeof operationHandlers;

	const handler = operationHandlers[operation];

	if (!handler) {
		throw new Error(`Unsupported advanced API operation: ${operation}`);
	}

	return await handler.call(this, index);
}
