import { IDataObject, INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import { apiRequest } from '../../../transport';

export async function sendViber(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = '/api/1.0/otp/send';

	function omitEmpty<T extends Record<string, unknown>>(obj: T): Partial<T> {
		return Object.fromEntries(
			Object.entries(obj).filter(
				([, value]) => value !== '' && value !== null && value !== undefined,
			),
		) as Partial<T>;
	}

	const channels = {
		viber: {
			sender: this.getNodeParameter('sender', index) as string,
			expiration: this.getNodeParameter('viber_expiration', index) as string,
		},
	};

	body.number = this.getNodeParameter('phone_number', index);
	body.country = this.getNodeParameter('country', index);
	body.language = this.getNodeParameter('language', index);
	body.code_type = this.getNodeParameter('code_type', index);
	body.code_length = this.getNodeParameter('code_length', index);
	body.request_quota_number = this.getNodeParameter('request_quota_number', index);
	body.request_quota_identification = this.getNodeParameter('request_quota_identification', index);
	body.trials_available_resend = this.getNodeParameter('trials_available_resend', index);
	body.trials_available_verification = this.getNodeParameter('trials_available_verification',	index);
	body.daily_limit = this.getNodeParameter('daily_limit', index);
	body.daily_limit_country = this.getNodeParameter('daily_limit_country', index);
	body.expiration = this.getNodeParameter('opt_expiration', index);
	body.channel = omitEmpty(channels);

	const cleaned_body = omitEmpty(body);

	const responseData = await apiRequest.call(this, requestMethod, endpoint, cleaned_body);

	return this.helpers.returnJsonArray(responseData);
}
