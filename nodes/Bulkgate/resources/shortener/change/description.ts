import { ShortenerProperties } from '../../Interfaces';

export const shortenerChangeDescription: ShortenerProperties = [
	{
		displayName: 'Short Url',
		name: 'short_url',
		type: 'string',
		default: '',

		description: 'Abbreviated URL to be changed',
		displayOptions: {
			show: {
				operation: ['change'],
				resource: ['shortener'],
			},
		},
	},
	{
		displayName: 'Target Url',
		name: 'target_url',
		type: 'string',
		default: '',

		description: 'New URL',
		displayOptions: {
			show: {
				operation: ['change'],
				resource: ['shortener'],
			},
		},
	},
];
