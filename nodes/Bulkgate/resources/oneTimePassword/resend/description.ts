import { OneTimePasswordProperties } from '../../Interfaces';

export const oneTimePasswordResendDescription: OneTimePasswordProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'ID received by sending one time password',
		displayOptions: {
			show: {
				operation: ['resend'],
				resource: ['oneTimePassword'],
			},
		},
	},
];
