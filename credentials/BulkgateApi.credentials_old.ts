import type {
	IAuthenticateGeneric, Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BulkgateApi implements ICredentialType {
	name = 'bulkgateApi';

	displayName = 'Bulkgate API';
	icon: Icon = { light: 'file:../icons/bulkgate.svg', dark: 'file:../icons/bulkgate_dark.svg' };
	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-bulkgate?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://portal.bulkgate.com/api',
			url: '/v1/user',
		},
	};
}
