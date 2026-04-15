import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import * as addContact from '../../resources/addressBook/addContact';
import * as editContact from '../../resources/addressBook/editContact';
import * as removeContact from '../../resources/addressBook/removeContact';
import * as getContact from '../../resources/addressBook/getContact';
import * as importContact from '../../resources/addressBook/importContact'


export { addContact, editContact, removeContact, getContact, importContact };

const showOnlyForCompanies = {
	resource: ['addressBook'],
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCompanies,
		},
		options: [
			{
				name: 'Add Contact',
				value: 'addContact',
				description: 'Adds contact to BulkGate address book',
				action: 'Address book add contact',
				routing: {
					request: {
						method: 'POST',
						url: '/1.0/address-book/add',
					},
				},
			},
			{
				name: 'Edit Contact',
				value: 'editContact',
				description: 'Edits contact to BulkGate address book',
				action: 'Address book edit contact',
			},
			{
				name: 'Get Contact',
				value: 'getContact',
				description: 'Removes contact to BulkGate address book',
				action: 'Address book get contact',
				routing: {
					request: {
						method: 'POST',
						url: '/1.0/address-book/get',
					},
				},
			},
			{
				name: 'Import Contact',
				value: 'importContact',
				description: 'Import contacts to BulkGate address book',
				action: 'Address book import contact',
				routing: {
					request: {
						method: 'POST',
						url: '/1.0/address-book/import',
					},
				},
			},
			{
				name: 'Remove Contact',
				value: 'removeContact',
				description: 'Removes contact to BulkGate address book',
				action: 'Address book remove contact',
				routing: {
					request: {
						method: 'POST',
						url: '/1.0/address-book/remove',
					},
				},
			},
		],
		default: 'addContact',
	},
	...addContact.description,
	...editContact.description,
	...removeContact.description,
	...getContact.description,
	...importContact.description,
];

const operationHandlers = {
	create: addContact.execute,
	update: editContact.execute,
	removeContact: removeContact.execute,
	get: getContact.execute,
	import: importContact.execute,
} as const;


export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]>
{
		const operation = this.getNodeParameter('operation', index) as keyof typeof operationHandlers;

		const handler = operationHandlers[operation];

		if (!handler)
		{
			throw new Error(`Unsupported contact operation: ${operation}`);
		}

		return await handler.call(this, index);
}
