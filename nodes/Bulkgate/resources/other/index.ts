import type { INodeProperties, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import * as checkCreditBalance from '../../resources/other/checkCreditBalance';
import * as checkDeliveryReport from '../../resources/other/checkDeliverReport';

export { checkCreditBalance, checkDeliveryReport };

const showOnlyForCompanies = {
	resource: ['other'],
};

export const descriptions: INodeProperties[] = [
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
				name: 'Check Credit Balance',
				value: 'checkCreditBalance',
				description: 'Checks state of your account balance',
				action: 'Check credit balance',
			},
			{
				name: 'Check Delivery Report',
				value: 'checkDeliveryReport',
				description: 'Checks delivery report of given message ID',
				action: 'Check delivery report',
			},
		],
		default: 'checkCreditBalance',
	},
	...checkDeliveryReport.description,
];

const operationHandlers = {
	checkCreditBalance: checkCreditBalance.execute,
	checkDeliveryReport: checkDeliveryReport.execute,
} as const;

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('operation', index) as keyof typeof operationHandlers;

	const handler = operationHandlers[operation];

	if (!handler) {
		throw new Error(`Unsupported operation: ${operation}`);
	}

	return await handler.call(this, index);
}
