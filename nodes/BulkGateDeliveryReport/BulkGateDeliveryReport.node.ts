import {
	ApplicationError,
	IDataObject,
	IHookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
	NodeConnectionTypes,
} from 'n8n-workflow';

export class BulkGateDeliveryReport implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'BulkGate Delivery Report',
		name: 'bulkGateDeliveryReport',
		icon: { light: 'file:bulkgate.svg', dark: 'file:bulkgate.dark.svg' },
		group: ['trigger'],
		version: 1,
		description: 'Starts the workflow when BulkGate sends an event',
		defaults: {
			name: 'BulkGate Delivery Report',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'GET', // BulkGate DELIVERY_URL uses GET
				responseMode: 'onReceived',
				path: 'deliveryReport',
			},
		],
		properties: [],
		usableAsTool: true,
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				return true;
			},

			async create(this: IHookFunctions): Promise<boolean> {
				return true;
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				return true;
			},
		},
	};


	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {

		interface BulkGateDeliveryEvent extends IDataObject {
			status: string;
			smsID: string;
			price: string;
			date: string;
		}

		interface BulkGateIncomingEvent extends IDataObject {
			status: string;
			from: string;
			text: string;
		}

		type BulkGateEvent = BulkGateDeliveryEvent | BulkGateIncomingEvent;

		function isObject(value: unknown): value is Record<string, unknown> {
			return typeof value === "object" && value !== null && !Array.isArray(value);
		}

		function parseBody(rawBody: unknown): BulkGateEvent[] {
			let payload: unknown = rawBody;

			if (typeof payload === "string") {
				payload = JSON.parse(payload);
			}

			if (Array.isArray(payload)) {
				return payload.filter(isObject) as BulkGateEvent[];
			}

			if (isObject(payload)) {
				return [payload as BulkGateEvent];
			}

			throw new ApplicationError("Unsupported request body format");
		}

		const rawQuery = this.getQueryData();
		const events = parseBody(rawQuery);

		const items= events.map((event)=> {
			if ("smsID" in event) {
				return {
					type: "delivery",
					status: event.status,
					smsID: event.smsID,
					price: event.price,
					date: event.date,
				};
			}

			if ("from" in event && "text" in event) {
				return {
					type: "incoming",
					status: event.status,
					from: event.from,
					text: event.text,
				};
			}

			return {
				type: "unknown",
				...events,
			};
		});

		return {
			workflowData: [this.helpers.returnJsonArray(items)],
		};
	}
}
