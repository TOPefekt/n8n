import { INodeProperties } from 'n8n-workflow';
import * as addContact from "./addContact";
import * as editContact from './editContact';
import * as removeContact from './removeContact';
import * as getContact from './getContact';

export { addContact, editContact, removeContact, getContact };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['addressBook'],
			},
		},
		options: [
			{
				name: 'Add Contact',
				value: 'addContact',
				description: 'Adds contact to BulkGate address book',
				action: 'Address book add contact',
			},
			{
				name: 'Edit Contact',
				value: 'editContact',
				description: 'Edits contact to BulkGate address book',
				action: 'Address book edit contact',
			},
			{
				name: 'Remove Contact',
				value: 'removeContact',
				description: 'Removes contact to BulkGate address book',
				action: 'Address book remove contact',
			},
			{
				name: 'Get Contact',
				value: 'getContact',
				description: 'Removes contact to BulkGate address book',
				action: 'Address book remove contact',
			},
		],
		default: 'addContact',
	},
	...addContact.description,
	...editContact.description,
	...removeContact.description,
	...getContact.description,
];
