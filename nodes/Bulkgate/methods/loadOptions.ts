import {
	ILoadOptionsFunctions,
	INodePropertyOptions,
	NodeOperationError,
} from 'n8n-workflow';

import { apiRequest } from '../transport';

// Get all the available channels
export async function getChannels(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const endpoint = 'channels';
	const responseData = await apiRequest.call(this, 'GET', endpoint, {});

	if (responseData === undefined) {
		throw new NodeOperationError(this.getNode(), 'No data got returned');
	}

	const returnData: INodePropertyOptions[] = [];

	return returnData;
}
