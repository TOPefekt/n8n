import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import * as sendSms from '../../resources/oneTimePassword/sendSMS';
import * as sendViber from '../../resources/oneTimePassword/sendViber';
import * as verify from '../../resources/oneTimePassword/verify';
import * as resend from '../../resources/oneTimePassword/resend';


export { sendSms, sendViber, verify, resend };

const showOnlyForCompanies = {
	resource: ['oneTimePassword'],
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
				name: 'Send OPT via SMS',
				value: 'sendSms',
				description: 'Sends one time password via SMS message',
				action: 'Send OTP via SMS',
				routing: {
					request: {
						method: 'POST',
						url: '/1.0/otp/send',
					},
				},
			},
			{
				name: 'Send OTP via Viber',
				value: 'sendViber',
				description: 'Sends one time password via Viber message',
				action: 'Send OTP via viber',
				routing: {
					request: {
						method: 'POST',
						url: '/1.0/otp/send',
					},
				},
			},
			{
				name: 'Verify',
				value: 'verify',
				description: 'Verifies the code send by BulkGate',
				action: 'Verify OTP',
				routing: {
					request: {
						method: 'POST',
						url: '/1.0/otp/verify',
					},
				},
			},
			{
				name: 'Resend',
				value: 'resend',
				description: 'Resends one time password',
				action: 'Resend OTP',
				routing: {
					request: {
						method: 'POST',
						url: '/1.0/otp/resend',
					},
				},
			},
		],
		default: 'sendSms',
	},
	...sendSms.description,
	...sendViber.description,
	...verify.description,
	...resend.description,
];

const operationHandlers = {
	sendSms: sendSms.execute,
	sendViber: sendViber.execute,
	verify: verify.execute,
	resend: resend.execute,
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
