import { OneTimePasswordProperties } from '../../Interfaces';

export const viberObject: OneTimePasswordProperties = [
	{
		displayName: 'Sender',
		name: 'sender',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
	},
	{
		displayName: 'Viber Expiration',
		name: 'viber_expiration',
		type: 'number',
		default: 60,
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
	},
];
