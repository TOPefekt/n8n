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
		displayName: 'Unicode',
		name: 'unicode',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['sendSms'],
				resource: ['oneTimePassword'],
			},
		},
		options: [
			{
				name: 'Yes',
				value: 'yes',
			},
			{
				name: 'No',
				value: 'no',
			},
		],
		default: 'no',
		description: 'Yes for Unicode SMS, no for 7bit SMS',
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
