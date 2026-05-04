import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import * as addContact from '../../resources/addressBook/add';
import * as editContact from '../../resources/addressBook/edit';
import * as removeContact from '../../resources/addressBook/remove';
import * as getContact from '../../resources/addressBook/get';
import * as importContact from '../../resources/addressBook/import'


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
			},
			{
				name: 'Import Contact',
				value: 'importContact',
				description: 'Import contacts to BulkGate address book',
				action: 'Address book import contact',
			},
			{
				name: 'Remove Contact',
				value: 'removeContact',
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
	...importContact.description,
];

const operationHandlers = {
	addContact: addContact.execute,
	editContact: editContact.execute,
	removeContact: removeContact.execute,
	getContact: getContact.execute,
	importContact: importContact.execute,
} as const;


export async function execute(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]>
{
		const operation = this.getNodeParameter('operation', index) as keyof typeof operationHandlers;

		//throw new Error(`Unsupported contact operation: ${JSON.stringify(operationHandlers)}`);

		const handler = operationHandlers[operation];

		if (!handler)
		{
			throw new Error(`Unsupported address book operation: ${operation}`);
		}

		return await handler.call(this, index);
}
