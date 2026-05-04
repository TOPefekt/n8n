import { OneTimePasswordProperties } from '../../Interfaces';
import { viberObject } from './viberObject';

export const oneTimePasswordSendViberDescription: OneTimePasswordProperties = [
	{
		displayName: 'Phone Number',
		name: 'phone_number',
		type: 'string',
		default: '',
		required: true,
		description: 'Phone number of contact to be removed',
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
	},
	{
		displayName: 'Country',
		name: 'country',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
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
		displayName: 'Language',
		name: 'language',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
		options: [
			{ value: 'af', name: 'Afrikaans' },
			{ value: 'id', name: 'Bahasa Indonesia' },
			{ value: 'ms', name: 'Bahasa Melayu' },
			{ value: 'jv', name: 'Basa Jawa' },
			{ value: 'su', name: 'Basa Sunda' },
			{ value: 'mt', name: 'Bil-Malti' },
			{ value: 'bs', name: 'Bosanski' },
			{ value: 'ca', name: 'Català' },
			{ value: 'cs', name: 'Cesky' },
			{ value: 'ny', name: 'Chi-Chewa' },
			{ value: 'sn', name: 'chiShona' },
			{ value: 'co', name: 'Corsu' },
			{ value: 'cy', name: 'Cymraeg' },
			{ value: 'da', name: 'Dansk' },
			{ value: 'de', name: 'Deutsch' },
			{ value: 'et', name: 'Eesti' },
			{ value: 'en', name: 'English' },
			{ value: 'es', name: 'Español' },
			{ value: 'eo', name: 'Esperanto' },
			{ value: 'eu', name: 'Euskara' },
			{ value: 'fr', name: 'Français' },
			{ value: 'fy', name: 'Frysk' },
			{ value: 'ga', name: 'Gaeilge' },
			{ value: 'sm', name: 'Gagana Samoa' },
			{ value: 'gd', name: 'Gàidhlig' },
			{ value: 'gl', name: 'Galego' },
			{ value: 'hr', name: 'Hrvatski' },
			{ value: 'ig', name: 'Igbo' },
			{ value: 'xh', name: 'isiXhosa' },
			{ value: 'zu', name: 'isiZulu' },
			{ value: 'is', name: 'Íslenska' },
			{ value: 'it', name: 'Italiano' },
			{ value: 'rw', name: 'Kinyarwandi' },
			{ value: 'sw', name: 'Kiswahili' },
			{ value: 'ky', name: 'Kırgızca / Кыргызча' },
			{ value: 'ht', name: 'Krèyol Ayisyen' },
			{ value: 'ku', name: 'Kurdî' },
			{ value: 'lv', name: 'Latviešu' },
			{ value: 'lb', name: 'Lëtzebuergesch' },
			{ value: 'lt', name: 'Lietuvių' },
			{ value: 'hu', name: 'Magyar' },
			{ value: 'mg', name: 'Malagasy' },
			{ value: 'mi', name: 'Māori' },
			{ value: 'my', name: 'Myanmasa' },
			{ value: 'nl', name: 'Nederlands' },
			{ value: 'no', name: 'Norsk (Bokmål / Riksmål)' },
			{ value: 'pl', name: 'Polski' },
			{ value: 'pt', name: 'Português' },
			{ value: 'ro', name: 'Română' },
			{ value: 'st', name: 'Sesotho' },
			{ value: 'sq', name: 'Shqip' },
			{ value: 'sk', name: 'Slovenčina' },
			{ value: 'sl', name: 'Slovenščina' },
			{ value: 'so', name: 'Soomaaliga' },
			{ value: 'fi', name: 'Suomi' },
			{ value: 'sv', name: 'Svenska' },
			{ value: 'tt', name: 'Tatarça' },
			{ value: 'vi', name: 'Tiếng Việt' },
			{ value: 'tr', name: 'Türkçe' },
			{ value: 'ug', name: 'Uyƣurqə / ئۇيغۇرچە' },
			{ value: 'yo', name: 'Yorùbá' },
			{ value: 'el', name: 'Ελληνικά' },
			{ value: 'be', name: 'Беларуская' },
			{ value: 'bg', name: 'Български' },
			{ value: 'kk', name: 'Қазақша' },
			{ value: 'mk', name: 'Македонски' },
			{ value: 'mn', name: 'Монгол' },
			{ value: 'ru', name: 'Русский' },
			{ value: 'sr', name: 'Српски' },
			{ value: 'tg', name: 'Тоҷикӣ' },
			{ value: 'tk', name: 'Туркмен / تركمن' },
			{ value: 'uz', name: 'Ўзбек' },
			{ value: 'uk', name: 'Українська' },
			{ value: 'ka', name: 'ქართული' },
			{ value: 'hy', name: 'Հայերեն' },
			{ value: 'yi', name: 'ייִדיש' },
			{ value: 'he', name: 'עברית' },
			{ value: 'ur', name: 'اردو' },
			{ value: 'ar', name: 'العربية' },
			{ value: 'ps', name: 'پښتو' },
			{ value: 'fa', name: 'فارسی' },
			{ value: 'ha', name: 'هَوُسَ' },
			{ value: 'am', name: 'አማርኛ' },
			{ value: 'mr', name: 'मराठी' },
			{ value: 'sd', name: 'सिंधी / سنڌي' },
			{ value: 'hi', name: 'हिन्दी' },
			{ value: 'bn', name: 'বাংলা' },
			{ value: 'pa', name: 'ਪੰਜਾਬੀ / پنجابی' },
			{ value: 'gu', name: 'ગુજરાતી' },
			{ value: 'or', name: 'ଓଡ଼ିଆ' },
			{ value: 'ta', name: 'தமிழ்' },
			{ value: 'te', name: 'తెలుగు' },
			{ value: 'kn', name: 'ಕನ್ನಡ' },
			{ value: 'ml', name: 'മലയാളം' },
			{ value: 'si', name: 'සිංහල' },
			{ value: 'lo', name: 'ລາວ / Pha Xa Lao' },
			{ value: 'km', name: 'លភាសាខ្មែរ' },
			{ value: 'ko', name: '한국어' },
			{ value: 'zh', name: '中文' },
			{ value: 'ja', name: '日本語' },
		],
		default: 'cs',
		description:
			"Provide the recipients' numbers in an international format (with prefix, e.g. 44) or add the country code in ISO 3166-1 alpha-2 format (7820125799 + GB = 447820125799). See the country example request. If null, your set timezone will be used to fill the information",
	},
	{
		displayName: 'Code Type',
		name: 'code_type',
		type: 'options',
		description: 'Type of code. (string, int, or combined).',
		placeholder: 'Choose code type',
		default: 'int',
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
		options: [
			{
				name: 'Integer',
				value: 'int',
			},
			{
				name: 'String',
				value: 'string',
			},
			{
				name: 'Combined',
				value: 'combined',
			},
		],
	},
	{
		displayName: 'Code Length',
		name: 'code_length',
		type: 'number',
		default: 6,
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
	},
	{
		displayName: 'Request Quota Number',
		name: 'request_quota_number',
		type: 'number',
		default: 1,
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
	},
	{
		displayName: 'Request Quota Identification',
		name: 'request_quota_identification',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
	},
	{
		displayName: 'Trials Available Resend',
		name: 'trials_available_resend',
		type: 'number',
		default: null,
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
	},
	{
		displayName: 'Trials Available Verification',
		name: 'trials_available_verification',
		type: 'number',
		default: null,
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
	},
	{
		displayName: 'Daily Limit',
		name: 'daily_limit',
		type: 'number',
		default: null,
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
	},
	{
		displayName: 'Daily Limit Country',
		name: 'daily_limit_country',
		type: 'number',
		default: null,
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
	},
	{
		displayName: 'OTP Expiration',
		name: 'otp_expiration',
		type: 'number',
		default: 604800,
		displayOptions: {
			show: {
				operation: ['sendViber'],
				resource: ['oneTimePassword'],
			},
		},
	},
	...viberObject,
];
