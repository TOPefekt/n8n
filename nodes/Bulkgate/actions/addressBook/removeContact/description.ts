import { AddressBookProperties } from '../../Interfaces';

export const addressBookRemoveContactDescription: AddressBookProperties = [
	{
		displayName: 'Phone Number',
		name: 'phone_number',
		type: 'string',
		default: '',
		description: 'Phone number of contact to be removed',
		displayOptions: {
			show: {
				operation: ['removeContact'],
				resource: ['addressBook'],
			},
		},
	},
];
