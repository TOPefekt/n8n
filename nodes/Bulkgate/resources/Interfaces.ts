import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type BulkGateMap = {
	advanced: 'transactionalSMS' | 'transactionalViber' | 'promotionalSMS' | 'promotionalViber' | 'promotionalSMSDifferentText' | 'promotionalViberDifferentText';
	addressBook: 'addContact' | 'editContact' | 'removeContact' | 'getContact' | 'importContact';
	blackList: 'add' | 'check' | 'remove';
	shortener: 'shorten' | 'change' | 'remove';
	oneTimePassword: 'sendSms' | 'sendViber' | 'resend' | 'verify'
	other: 'checkCreditBalance' | 'checkDeliveryReport'
};

export type BulkGate = AllEntities<BulkGateMap>;

export type BulkGateAdvanced = Entity<BulkGateMap, 'advanced'>;
export type BulkGateAddressBook = Entity<BulkGateMap, 'addressBook'>;
export type BulkGateBlackList = Entity<BulkGateMap, 'blackList'>;
export type BulkGateShortener = Entity<BulkGateMap, 'shortener'>;
export type BulkGateOneTimePassword = Entity<BulkGateMap, 'oneTimePassword'>;
export type BulkGateOther = Entity<BulkGateMap, 'other'>;

export type AdvancedProperties = PropertiesOf<BulkGateAdvanced>;
export type AddressBookProperties = PropertiesOf<BulkGateAddressBook>;
export type BlackListProperties = PropertiesOf<BulkGateBlackList>;
export type ShortenerProperties = PropertiesOf<BulkGateShortener>;
export type OneTimePasswordProperties = PropertiesOf<BulkGateOneTimePassword>
export type OtherProperties = PropertiesOf<BulkGateOther>;

export interface IAttachment {
	fields: {
		item?: object[];
	};
	actions: {
		item?: object[];
	};
}
