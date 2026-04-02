import { BlackListProperties } from '../../Interfaces';

export const blackListRemoveDescription: BlackListProperties = [
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		default: '',

		description: 'Number to be removed from blacklist. Use either this or source_id.',
		displayOptions: {
			show: {
				operation: ['remove'],
				resource: ['blackList'],
			},
		},
	},
	{
		displayName: 'Source ID',
		name: 'source_id',
		type: 'string',
		default: '',
		description: 'Identificator of group in blacklisted numbers. Use either this or wallet_id.',
		displayOptions: {
			show: {
				operation: ['remove'],
				resource: ['blackList'],
			},
		},
	},
	{
		displayName: 'Wallet',
		name: 'wallet',
		type: 'string',
		default: '',
		description: 'Wallet from which to remove blacklisted numbers',
		displayOptions: {
			show: {
				operation: ['remove'],
				resource: ['blackList'],
			},
		},
	},
];
