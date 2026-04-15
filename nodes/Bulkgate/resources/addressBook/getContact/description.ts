import { AddressBookProperties } from '../../Interfaces';

export const addressBookGetContactDescription: AddressBookProperties = [
	{
		displayName: 'Phone Number',
		name: 'phone_number',
		type: 'string',
		default: '',
		required: true,
		description: 'Phone number to be looked up',
		displayOptions: {
			show: {
				operation: ['getContact'],
				resource: ['addressBook'],
			},
		},
	},
];
