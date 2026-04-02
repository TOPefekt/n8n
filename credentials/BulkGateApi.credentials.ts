import type {
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BulkGateApi implements ICredentialType {
	name = 'bulkgateNodeApi';
	displayName = 'BulkGate Node API';
	icon: Icon = { light: 'file:../icons/bulkgate.svg', dark: 'file:../icons/bulkgate_dark.svg' };
	documentationUrl = 'https://help.bulkgate.com/';
	properties: INodeProperties[] = [
		{
			displayName: 'Application id',
			name: 'application_id',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Application token',
			name: 'application_token',
			type: 'string',
			default: '',
			typeOptions: { password: true },
		},
	];
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://portal.bulkgate.com',
			url: '/api/2.0/advanced/info',
		},
	};
}
