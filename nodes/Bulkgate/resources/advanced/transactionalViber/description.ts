import { AdvancedProperties } from '../../Interfaces';

export const advancedTransactionalViberDescription: AdvancedProperties = [
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		default: '',
		required: true,
		description: 'Recipient number',
		displayOptions: {
			show: {
				operation: ['transactionalViber'],
				resource: ['advanced'],
			},
		},
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		required: true,
		description:
			'Text of SMS message (max. 612 characters, or 268 characters if Unicode is used), UTF-8 encoding. It is possible to add variables to the template from the variables array (another parameter) Hello &lt;first_name&gt; &lt;last_name&gt; ....',
		displayOptions: {
			show: {
				operation: ['transactionalViber'],
				resource: ['advanced'],
			},
		},
	},
	{
		displayName: 'Variables',
		name: 'variables',
		placeholder: 'Add variables',
		type: 'fixedCollection',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				operation: ['transactionalViber'],
				resource: ['advanced'],
			},
		},
		options: [
			{
				name: 'variable_values',
				displayName: 'Variable Values',
				values: [
					{
						displayName: 'Variable Name',
						name: 'name',
						type: 'string',
						default: 'first_name',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
	{
		displayName: 'Country',
		name: 'country',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['transactionalViber'],
				resource: ['advanced'],
			},
		},
		options: [
			{
				name: 'Afghanistan',
				value: 'AF',
			},
			{
				name: 'Aland Islands',
				value: 'AX',
			},
			{
				name: 'Albania',
				value: 'AL',
			},
			{
				name: 'Algeria',
				value: 'DZ',
			},
			{
				name: 'American Samoa',
				value: 'AS',
			},
			{
				name: 'AndorrA',
				value: 'AD',
			},
			{
				name: 'Angola',
				value: 'AO',
			},
			{
				name: 'Anguilla',
				value: 'AI',
			},
			{
				name: 'Antarctica',
				value: 'AQ',
			},
			{
				name: 'Antigua and Barbuda',
				value: 'AG',
			},
			{
				name: 'Argentina',
				value: 'AR',
			},
			{
				name: 'Armenia',
				value: 'AM',
			},
			{
				name: 'Aruba',
				value: 'AW',
			},
			{
				name: 'Australia',
				value: 'AU',
			},
			{
				name: 'Austria',
				value: 'AT',
			},
			{
				name: 'Azerbaijan',
				value: 'AZ',
			},
			{
				name: 'Bahamas',
				value: 'BS',
			},
			{
				name: 'Bahrain',
				value: 'BH',
			},
			{
				name: 'Bangladesh',
				value: 'BD',
			},
			{
				name: 'Barbados',
				value: 'BB',
			},
			{
				name: 'Belarus',
				value: 'BY',
			},
			{
				name: 'Belgium',
				value: 'BE',
			},
			{
				name: 'Belize',
				value: 'BZ',
			},
			{
				name: 'Benin',
				value: 'BJ',
			},
			{
				name: 'Bermuda',
				value: 'BM',
			},
			{
				name: 'Bhutan',
				value: 'BT',
			},
			{
				name: 'Bolivia',
				value: 'BO',
			},
			{
				name: 'Bosnia and Herzegovina',
				value: 'BA',
			},
			{
				name: 'Botswana',
				value: 'BW',
			},
			{
				name: 'Bouvet Island',
				value: 'BV',
			},
			{
				name: 'Brazil',
				value: 'BR',
			},
			{
				name: 'British Indian Ocean Territory',
				value: 'IO',
			},
			{
				name: 'Brunei Darussalam',
				value: 'BN',
			},
			{
				name: 'Bulgaria',
				value: 'BG',
			},
			{
				name: 'Burkina Faso',
				value: 'BF',
			},
			{
				name: 'Burundi',
				value: 'BI',
			},
			{
				name: 'Cambodia',
				value: 'KH',
			},
			{
				name: 'Cameroon',
				value: 'CM',
			},
			{
				name: 'Canada',
				value: 'CA',
			},
			{
				name: 'Cape Verde',
				value: 'CV',
			},
			{
				name: 'Cayman Islands',
				value: 'KY',
			},
			{
				name: 'Central African Republic',
				value: 'CF',
			},
			{
				name: 'Chad',
				value: 'TD',
			},
			{
				name: 'Chile',
				value: 'CL',
			},
			{
				name: 'China',
				value: 'CN',
			},
			{
				name: 'Christmas Island',
				value: 'CX',
			},
			{
				name: 'Cocos (Keeling) Islands',
				value: 'CC',
			},
			{
				name: 'Colombia',
				value: 'CO',
			},
			{
				name: 'Comoros',
				value: 'KM',
			},
			{
				name: 'Congo',
				value: 'CG',
			},
			{
				name: 'Congo, Democratic Republic',
				value: 'CD',
			},
			{
				name: 'Cook Islands',
				value: 'CK',
			},
			{
				name: 'Costa Rica',
				value: 'CR',
			},
			{
				name: "Cote D'Ivoire",
				value: 'CI',
			},
			{
				name: 'Croatia',
				value: 'HR',
			},
			{
				name: 'Cuba',
				value: 'CU',
			},
			{
				name: 'Cyprus',
				value: 'CY',
			},
			{
				name: 'Czech Republic',
				value: 'CZ',
			},
			{
				name: 'Denmark',
				value: 'DK',
			},
			{
				name: 'Djibouti',
				value: 'DJ',
			},
			{
				name: 'Dominica',
				value: 'DM',
			},
			{
				name: 'Dominican Republic',
				value: 'DO',
			},
			{
				name: 'Ecuador',
				value: 'EC',
			},
			{
				name: 'Egypt',
				value: 'EG',
			},
			{
				name: 'El Salvador',
				value: 'SV',
			},
			{
				name: 'Equatorial Guinea',
				value: 'GQ',
			},
			{
				name: 'Eritrea',
				value: 'ER',
			},
			{
				name: 'Estonia',
				value: 'EE',
			},
			{
				name: 'Ethiopia',
				value: 'ET',
			},
			{
				name: 'Falkland Islands (Malvinas)',
				value: 'FK',
			},
			{
				name: 'Faroe Islands',
				value: 'FO',
			},
			{
				name: 'Fiji',
				value: 'FJ',
			},
			{
				name: 'Finland',
				value: 'FI',
			},
			{
				name: 'France',
				value: 'FR',
			},
			{
				name: 'French Guiana',
				value: 'GF',
			},
			{
				name: 'French Polynesia',
				value: 'PF',
			},
			{
				name: 'French Southern Territories',
				value: 'TF',
			},
			{
				name: 'Gabon',
				value: 'GA',
			},
			{
				name: 'Gambia',
				value: 'GM',
			},
			{
				name: 'Georgia',
				value: 'GE',
			},
			{
				name: 'Germany',
				value: 'DE',
			},
			{
				name: 'Ghana',
				value: 'GH',
			},
			{
				name: 'Gibraltar',
				value: 'GI',
			},
			{
				name: 'Greece',
				value: 'GR',
			},
			{
				name: 'Greenland',
				value: 'GL',
			},
			{
				name: 'Grenada',
				value: 'GD',
			},
			{
				name: 'Guadeloupe',
				value: 'GP',
			},
			{
				name: 'Guam',
				value: 'GU',
			},
			{
				name: 'Guatemala',
				value: 'GT',
			},
			{
				name: 'Guernsey',
				value: 'GG',
			},
			{
				name: 'Guinea',
				value: 'GN',
			},
			{
				name: 'Guinea-Bissau',
				value: 'GW',
			},
			{
				name: 'Guyana',
				value: 'GY',
			},
			{
				name: 'Haiti',
				value: 'HT',
			},
			{
				name: 'Heard Island and Mcdonald Islands',
				value: 'HM',
			},
			{
				name: 'Holy See (Vatican City State)',
				value: 'VA',
			},
			{
				name: 'Honduras',
				value: 'HN',
			},
			{
				name: 'Hong Kong',
				value: 'HK',
			},
			{
				name: 'Hungary',
				value: 'HU',
			},
			{
				name: 'Iceland',
				value: 'IS',
			},
			{
				name: 'India',
				value: 'IN',
			},
			{
				name: 'Indonesia',
				value: 'ID',
			},
			{
				name: 'Iran',
				value: 'IR',
			},
			{
				name: 'Iraq',
				value: 'IQ',
			},
			{
				name: 'Ireland',
				value: 'IE',
			},
			{
				name: 'Isle of Man',
				value: 'IM',
			},
			{
				name: 'Israel',
				value: 'IL',
			},
			{
				name: 'Italy',
				value: 'IT',
			},
			{
				name: 'Jamaica',
				value: 'JM',
			},
			{
				name: 'Japan',
				value: 'JP',
			},
			{
				name: 'Jersey',
				value: 'JE',
			},
			{
				name: 'Jordan',
				value: 'JO',
			},
			{
				name: 'Kazakhstan',
				value: 'KZ',
			},
			{
				name: 'Kenya',
				value: 'KE',
			},
			{
				name: 'Kiribati',
				value: 'KI',
			},
			{
				name: 'Korea (North)',
				value: 'KP',
			},
			{
				name: 'Korea (South)',
				value: 'KR',
			},
			{
				name: 'Kosovo',
				value: 'XK',
			},
			{
				name: 'Kuwait',
				value: 'KW',
			},
			{
				name: 'Kyrgyzstan',
				value: 'KG',
			},
			{
				name: 'Laos',
				value: 'LA',
			},
			{
				name: 'Latvia',
				value: 'LV',
			},
			{
				name: 'Lebanon',
				value: 'LB',
			},
			{
				name: 'Lesotho',
				value: 'LS',
			},
			{
				name: 'Liberia',
				value: 'LR',
			},
			{
				name: 'Libyan Arab Jamahiriya',
				value: 'LY',
			},
			{
				name: 'Liechtenstein',
				value: 'LI',
			},
			{
				name: 'Lithuania',
				value: 'LT',
			},
			{
				name: 'Luxembourg',
				value: 'LU',
			},
			{
				name: 'Macao',
				value: 'MO',
			},
			{
				name: 'Macedonia',
				value: 'MK',
			},
			{
				name: 'Madagascar',
				value: 'MG',
			},
			{
				name: 'Malawi',
				value: 'MW',
			},
			{
				name: 'Malaysia',
				value: 'MY',
			},
			{
				name: 'Maldives',
				value: 'MV',
			},
			{
				name: 'Mali',
				value: 'ML',
			},
			{
				name: 'Malta',
				value: 'MT',
			},
			{
				name: 'Marshall Islands',
				value: 'MH',
			},
			{
				name: 'Martinique',
				value: 'MQ',
			},
			{
				name: 'Mauritania',
				value: 'MR',
			},
			{
				name: 'Mauritius',
				value: 'MU',
			},
			{
				name: 'Mayotte',
				value: 'YT',
			},
			{
				name: 'Mexico',
				value: 'MX',
			},
			{
				name: 'Micronesia',
				value: 'FM',
			},
			{
				name: 'Moldova',
				value: 'MD',
			},
			{
				name: 'Monaco',
				value: 'MC',
			},
			{
				name: 'Mongolia',
				value: 'MN',
			},
			{
				name: 'Montenegro',
				value: 'ME',
			},
			{
				name: 'Montserrat',
				value: 'MS',
			},
			{
				name: 'Morocco',
				value: 'MA',
			},
			{
				name: 'Mozambique',
				value: 'MZ',
			},
			{
				name: 'Myanmar',
				value: 'MM',
			},
			{
				name: 'Namibia',
				value: 'NA',
			},
			{
				name: 'Nauru',
				value: 'NR',
			},
			{
				name: 'Nepal',
				value: 'NP',
			},
			{
				name: 'Netherlands',
				value: 'NL',
			},
			{
				name: 'Netherlands Antilles',
				value: 'AN',
			},
			{
				name: 'New Caledonia',
				value: 'NC',
			},
			{
				name: 'New Zealand',
				value: 'NZ',
			},
			{
				name: 'Nicaragua',
				value: 'NI',
			},
			{
				name: 'Niger',
				value: 'NE',
			},
			{
				name: 'Nigeria',
				value: 'NG',
			},
			{
				name: 'Niue',
				value: 'NU',
			},
			{
				name: 'Norfolk Island',
				value: 'NF',
			},
			{
				name: 'Northern Mariana Islands',
				value: 'MP',
			},
			{
				name: 'Norway',
				value: 'NO',
			},
			{
				name: 'Oman',
				value: 'OM',
			},
			{
				name: 'Pakistan',
				value: 'PK',
			},
			{
				name: 'Palau',
				value: 'PW',
			},
			{
				name: 'Palestinian Territory, Occupied',
				value: 'PS',
			},
			{
				name: 'Panama',
				value: 'PA',
			},
			{
				name: 'Papua New Guinea',
				value: 'PG',
			},
			{
				name: 'Paraguay',
				value: 'PY',
			},
			{
				name: 'Peru',
				value: 'PE',
			},
			{
				name: 'Philippines',
				value: 'PH',
			},
			{
				name: 'Pitcairn',
				value: 'PN',
			},
			{
				name: 'Poland',
				value: 'PL',
			},
			{
				name: 'Portugal',
				value: 'PT',
			},
			{
				name: 'Puerto Rico',
				value: 'PR',
			},
			{
				name: 'Qatar',
				value: 'QA',
			},
			{
				name: 'Reunion',
				value: 'RE',
			},
			{
				name: 'Romania',
				value: 'RO',
			},
			{
				name: 'Russian Federation',
				value: 'RU',
			},
			{
				name: 'RWANDA',
				value: 'RW',
			},
			{
				name: 'Saint Helena',
				value: 'SH',
			},
			{
				name: 'Saint Kitts and Nevis',
				value: 'KN',
			},
			{
				name: 'Saint Lucia',
				value: 'LC',
			},
			{
				name: 'Saint Pierre and Miquelon',
				value: 'PM',
			},
			{
				name: 'Saint Vincent and the Grenadines',
				value: 'VC',
			},
			{
				name: 'Samoa',
				value: 'WS',
			},
			{
				name: 'San Marino',
				value: 'SM',
			},
			{
				name: 'Sao Tome and Principe',
				value: 'ST',
			},
			{
				name: 'Saudi Arabia',
				value: 'SA',
			},
			{
				name: 'Senegal',
				value: 'SN',
			},
			{
				name: 'Serbia',
				value: 'RS',
			},
			{
				name: 'Seychelles',
				value: 'SC',
			},
			{
				name: 'Sierra Leone',
				value: 'SL',
			},
			{
				name: 'Singapore',
				value: 'SG',
			},
			{
				name: 'Slovakia',
				value: 'SK',
			},
			{
				name: 'Slovenia',
				value: 'SI',
			},
			{
				name: 'Solomon Islands',
				value: 'SB',
			},
			{
				name: 'Somalia',
				value: 'SO',
			},
			{
				name: 'South Africa',
				value: 'ZA',
			},
			{
				name: 'South Georgia and the South Sandwich Islands',
				value: 'GS',
			},
			{
				name: 'Spain',
				value: 'ES',
			},
			{
				name: 'Sri Lanka',
				value: 'LK',
			},
			{
				name: 'Sudan',
				value: 'SD',
			},
			{
				name: 'Surilabel',
				value: 'SR',
			},
			{
				name: 'Svalbard and Jan Mayen',
				value: 'SJ',
			},
			{
				name: 'Swaziland',
				value: 'SZ',
			},
			{
				name: 'Sweden',
				value: 'SE',
			},
			{
				name: 'Switzerland',
				value: 'CH',
			},
			{
				name: 'Syrian Arab Republic',
				value: 'SY',
			},
			{
				name: 'Taiwan, Province of China',
				value: 'TW',
			},
			{
				name: 'Tajikistan',
				value: 'TJ',
			},
			{
				name: 'Tanzania',
				value: 'TZ',
			},
			{
				name: 'Thailand',
				value: 'TH',
			},
			{
				name: 'Timor-Leste',
				value: 'TL',
			},
			{
				name: 'Togo',
				value: 'TG',
			},
			{
				name: 'Tokelau',
				value: 'TK',
			},
			{
				name: 'Tonga',
				value: 'TO',
			},
			{
				name: 'Trinidad and Tobago',
				value: 'TT',
			},
			{
				name: 'Tunisia',
				value: 'TN',
			},
			{
				name: 'Turkey',
				value: 'TR',
			},
			{
				name: 'Turkmenistan',
				value: 'TM',
			},
			{
				name: 'Turks and Caicos Islands',
				value: 'TC',
			},
			{
				name: 'Tuvalu',
				value: 'TV',
			},
			{
				name: 'Uganda',
				value: 'UG',
			},
			{
				name: 'Ukraine',
				value: 'UA',
			},
			{
				name: 'United Arab Emirates',
				value: 'AE',
			},
			{
				name: 'United Kingdom',
				value: 'GB',
			},
			{
				name: 'United States',
				value: 'US',
			},
			{
				name: 'United States Minor Outlying Islands',
				value: 'UM',
			},
			{
				name: 'Uruguay',
				value: 'UY',
			},
			{
				name: 'Uzbekistan',
				value: 'UZ',
			},
			{
				name: 'Vanuatu',
				value: 'VU',
			},
			{
				name: 'Venezuela',
				value: 'VE',
			},
			{
				name: 'Viet Nam',
				value: 'VN',
			},
			{
				name: 'Virgin Islands, British',
				value: 'VG',
			},
			{
				name: 'Virgin Islands, U.S.',
				value: 'VI',
			},
			{
				name: 'Wallis and Futuna',
				value: 'WF',
			},
			{
				name: 'Western Sahara',
				value: 'EH',
			},
			{
				name: 'Yemen',
				value: 'YE',
			},
			{
				name: 'Zambia',
				value: 'ZM',
			},
			{
				name: 'Zimbabwe',
				value: 'ZW',
			},
		],
		default: 'CZ',
		description:
			"Provide the recipients' numbers in an international format (with prefix, e.g. 44) or add the country code in ISO 3166-1 alpha-2 format (7820125799 + GB = 447820125799). See the country example request. If null, your set timezone will be used to fill the information",
	},
	{
		displayName: 'Sender',
		name: 'sender',
		type: 'string',
		default: '',
		description:
			'Sender value - gOwn (e.g. "420 777 777 777"), gText (e.g. "BulkGate"), gProfile (e.g. "423"), gMobile or gPush (KEY)',
		displayOptions: {
			show: {
				operation: ['transactionalViber'],
				resource: ['advanced'],
			},
		},
	},
	{
		displayName: 'Expiration',
		name: 'expiration',
		type: 'number',
		default: 120,
		description: 'Time limit after which alternative channel will be used',
		displayOptions: {
			show: {
				operation: ['transactionalViber'],
				resource: ['advanced'],
			},
		},
	},
	{
		displayName: 'Use Template',
		name: 'use_template',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['transactionalViber'],
				resource: ['advanced'],
			},
		},
		options: [
			{
				name: 'Yes',
				value: true,
			},
			{
				name: 'No',
				value: false,
			},
		],
		default: false,
		description: 'Parameter used in Belarus, Ukraine and Russia. In order to send SMS for price of Transactional SMS a preaproved template must be used, otherwise SMS will be send for price of Promotional SMS.',
	},
	{
		displayName: 'Schedule',
		name: 'schedule',
		type: 'string',
		default: '',
		description: 'Schedule the sending time and date in unix timestamp, or ISO 8601',
		displayOptions: {
			show: {
				operation: ['transactionalViber'],
				resource: ['advanced'],
			},
		},
	},
	{
		displayName: 'Duplicates Check',
		name: 'duplicates_check',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['transactionalViber'],
				resource: ['advanced'],
			},
		},
		options: [
			{
				name: 'On',
				value: 'on',
			},
			{
				name: 'Off',
				value: 'off',
			},
		],
		default: 'off',
		description:
			'Select on to prevent sending duplicate messages to the same phone number. Messages with the same text sent to the same number will be removed if there is a time interval shorter than 5 minutes. If off no duplicates will be removed.',
	},
];
