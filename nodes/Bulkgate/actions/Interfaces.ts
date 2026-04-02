import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type BulkGateMap = {
	advanced: 'transactionalSMS' | 'transactionalViber' | 'promotionalSMS' | 'promotionalViber';
	addressBook: 'addContact' | 'editContact' | 'removeContact' | 'getContact';
	blackList: 'add' | 'check' | 'remove';
	shortener: 'shorten' | 'change' | 'remove';
};

export type BulkGate = AllEntities<BulkGateMap>;

export type BulkGateAdvanced = Entity<BulkGateMap, 'advanced'>;
export type BulkGateAddressBook = Entity<BulkGateMap, 'addressBook'>;
export type BulkGateBlackList = Entity<BulkGateMap, 'blackList'>;
export type BulkGateShortener = Entity<BulkGateMap, 'shortener'>;

export type AdvancedProperties = PropertiesOf<BulkGateAdvanced>;
export type AddressBookProperties = PropertiesOf<BulkGateAddressBook>;
export type BlackListProperties = PropertiesOf<BulkGateBlackList>;
export type ShortenerProperties = PropertiesOf<BulkGateShortener>;

export interface IAttachment {
	fields: {
		item?: object[];
	};
	actions: {
		item?: object[];
	};
}
