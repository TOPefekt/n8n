import { OneTimePasswordProperties } from '../../Interfaces';

export const smsObject: OneTimePasswordProperties = [
	{
		displayName: 'Sender ID',
		name: 'sender_id',
		type: 'options',
		placeholder: 'Choose Sender ID',
		default: 'gSystem',
		displayOptions: {
			show: {
				operation: ['sendSms'],
				resource: ['oneTimePassword'],
			},
		},
		options: [
			{
				name: 'gMobile',
				value: 'gMobile',
			},
			{
				name: 'gOwn',
				value: 'gOwn',
			},
			{
				name: 'gProfile',
				value: 'gProfile',
			},
			{
				name: 'gPush',
				value: 'gPush',
			},
			{
				name: 'gShort',
				value: 'gShort',
			},
			{
				name: 'gSystem',
				value: 'gSystem',
			},
			{
				name: 'gText',
				value: 'gText',
			},
		],
	},
	{
		displayName: 'Sender ID Value',
		name: 'sender_id_value',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['sendSms'],
				resource: ['oneTimePassword'],
			},
		},
	},
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		default: '',
		description: 'URL of a website that uses WebOTP for auto input of received code',
		displayOptions: {
			show: {
				operation: ['sendSms'],
				resource: ['oneTimePassword'],
			},
		},
	},
];
