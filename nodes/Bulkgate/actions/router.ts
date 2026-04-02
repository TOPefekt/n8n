import { INodeExecutionData, IExecuteFunctions } from 'n8n-workflow';

import * as advanced from './advanced';
import * as blackList from './blackList';
import * as addressBook from './addressBook';
import * as shorten from './shortener';
import { BulkGate } from './Interfaces';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<BulkGate>('resource', i);
		const operation = this.getNodeParameter('operation', i);

		const bulkgateTmp = {
			resource,
			operation,
		} as BulkGate;

		try {
			if (bulkgateTmp.resource === 'advanced') {
				operationResult.push(...(await advanced[bulkgateTmp.operation].execute.call(this, i)));
			}
			else if (bulkgateTmp.resource === 'blackList') {
				operationResult.push(...(await blackList[bulkgateTmp.operation].execute.call(this, i)));
			}
			else if (bulkgateTmp.resource === 'addressBook') {
				operationResult.push(...(await addressBook[bulkgateTmp.operation].execute.call(this, i)));
			}
			else if (bulkgateTmp.resource === 'shortener') {
				operationResult.push(...(await shorten[bulkgateTmp.operation].execute.call(this, i)));
			}
		} catch (err) {
			if (this.continueOnFail()) {
				operationResult.push({ json: this.getInputData(i)[0].json, error: err });
			} else {
				if (err.context) err.context.itemIndex = i;
				throw err;
			}
		}
	}

	return [operationResult];
}
