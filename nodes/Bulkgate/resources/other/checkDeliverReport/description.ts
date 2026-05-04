import { OtherProperties } from '../../Interfaces';

export const checkDeliveryReportDescription: OtherProperties = [
	{
		displayName: 'Message ID',
		name: 'message_id',
		type: 'string',
		default: '',
		required: true,
		description: 'Message ID is a unique identifier of particular message. It is generated after sending the message.',
		displayOptions: {
			show: {
				operation: ['checkDeliveryReport'],
				resource: ['other'],
			},
		},
	},
];
