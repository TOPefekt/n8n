import { ShortenerProperties } from '../../Interfaces';

export const shortenerRemoveDescription: ShortenerProperties = [
	{
		displayName: 'Short URL',
		name: 'short_url',
		type: 'string',
		default: '',
		required: true,
		description: 'Shortened URL to be removed',
		displayOptions: {
			show: {
				operation: ['remove'],
				resource: ['shortener'],
			},
		},
	},
];
