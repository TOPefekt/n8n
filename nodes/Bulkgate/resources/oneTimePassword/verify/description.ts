import { OneTimePasswordProperties } from '../../Interfaces';

export const oneTimePasswordVerifyDescription: OneTimePasswordProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'ID received by sending one time password',
		displayOptions: {
			show: {
				operation: ['verify'],
				resource: ['oneTimePassword'],
			},
		},
	},
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		default: '',
		required: true,
		description: 'Code to be verified',
		displayOptions: {
			show: {
				operation: ['verify'],
				resource: ['oneTimePassword'],
			},
		},
	},
];
