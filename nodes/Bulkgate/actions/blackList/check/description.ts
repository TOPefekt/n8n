import { BlackListProperties } from '../../Interfaces';

export const blackListCheckDescription: BlackListProperties = [
	{
		displayName: 'Numbers',
		name: 'number',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add phone number',
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				operation: ['check'],
				resource: ['blackList'],
			},
		},
		options: [
			{
				name: 'numbers',
				displayName: 'Number',
				values: [
					{
						displayName: 'Phone Number',
						name: 'phone_number',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
	{
		displayName: 'Wallet',
		name: 'wallet',
		type: 'string',
		default: '',
		required: true,
		description: 'Wallet on which to blacklist numbers',
		displayOptions: {
			show: {
				operation: ['check'],
				resource: ['blackList'],
			},
		},
	},
];
