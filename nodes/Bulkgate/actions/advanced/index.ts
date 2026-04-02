import * as transactionalSMS from './transactionalSMS';
import * as transactionalViber from './transactionalViber';
import * as promotionalSMS from './promotionalSMS';
import * as promotionalViber from "./promotionalViber";
import { INodeProperties } from 'n8n-workflow';

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
				name: 'Transactional SMS',
				value: 'transactionalSMS',
				description: 'Send transactional message via SMS',
				action: 'Send SMS',
			},
			{
				name: 'Transactional Viber',
				value: 'transactionalViber',
				description: 'Send transactional message via Viber',
				action: 'Send viber',
			},
			{
				name: 'Promotional SMS',
				value: 'promotionalSMS',
				description: 'Send promotional message via SMS',
				action: 'Send bulk SMS',
			},
			{
				name: 'Promotional Viber',
				value: 'promotionalViber',
				description: 'Send promotional message via Viber',
				action: 'Send bulk viber',
			},
		],
		default: 'transactionalSMS',
	},

	...transactionalSMS.description,
	...transactionalViber.description,
	...promotionalSMS.description,
	...promotionalViber.description,
];
