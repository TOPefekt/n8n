import type {
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	IAuthenticateGeneric,
} from 'n8n-workflow';

export class BulkGateApi implements ICredentialType {
	name = 'bulkGateApi';
	displayName = 'BulkGate Node API';
	icon: Icon = { light: 'file:../icons/bulkgate.svg', dark: 'file:../icons/bulkgate_dark.svg' };
	documentationUrl = 'https://help.bulkgate.com/';

	properties: INodeProperties[] = [
		{
			displayName: 'Application ID',
			name: 'application_id',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Application Token',
			name: 'application_token',
			type: 'string',
			default: '',
			typeOptions: { password: true },
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			body: {
				application_id: '={{$credentials.application_id}}',
				application_token: '={{$credentials.application_token}}',
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://portal.bulkgate.com',
			url: '/api/2.0/advanced/info',
			method: 'POST',
		},
	};
}
