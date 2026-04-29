# n8n-nodes-bulkgate

This is an n8n community node. It lets you use BulkGate in your n8n workflows.

BulkGate is the multichannel messaging platform for successful business communication
Connect with your customers anywhere in the world with BulkGate. Engage and interact with them via SMS gateway, Viber, and other solutions.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations


- [AddressBook](https://help.bulkgate.com/docs/en/http-address-book-get.html)
    - Add contact
    - Edit contact
    - Get contact
    - Import contacts
    - Remove contact
- [BlackList](https://help.bulkgate.com/docs/en/http-black-list-is-black-listed.html)
  - Add contact to blacklist
  - Check whether contact is in blacklist
  - Remove contact from blacklist
- [Advanced Messaging](https://help.bulkgate.com/docs/en/http-advanced-transactional-v2.html)
  - Send Transactional SMS
  - Send Transactional Viber
  - Send Promotional SMS
  - Send Promotional SMS (Different text for each phone number)
  - Send Promotional Viber
  - Send Promotional Viber (Different text for each phone number)
- [One Time Password](https://help.bulkgate.com/docs/en/http-one-time-password-send.html)
  - Send OTP via SMS
  - Send OTP via Viber
  - Resend OTP
  - Verify OTP
- [URL Shortener](https://help.bulkgate.com/docs/en/http-shortener-shorten.html)
  - Shorten URL
  - Change shortened URL
  - Remove shortened URL
- Other
  - [Check credit balance on your account](https://help.bulkgate.com/docs/en/http-advanced-check-credit-balance.html)
  - Check delivery report by given message_ID


## Credentials

User needs to create an account on [BulkGate portal](https://portal.bulkgate.com/) and navigate to [Modules & APIs](https://portal.bulkgate.com/application/) section. There find n8n module, click it and then click "Create API".
There you will find your "application_id" and your "application_token".
For more information go [here](https://help.bulkgate.com/docs/en/api-administration.html)

## Compatibility

This module has been developed on node version 22

## Usage

- Webhook setup
  - When setting up webhook to receive delivery reports you have to navigate to [BulkGate portal](https://portal.bulkgate.com/) and to the [Modules & APIs](https://portal.bulkgate.com/application/) section. Click on your created n8n api and scroll down to Webhook section.
  - Once you are there click "Configure" button and paste your webhook into the field.
  - If you are using "Send Delivery Report" trigger click save.
  - If you are using "Send Bulk Delivery Report" trigger check option "Bulk DLRs - bulk request" then save.
  - DO NOT CHECK "Report only when error occurs".

- Delivery Reports
  - If you wish to filter delivery reports by contents or type visit our [Delivery report documentation](https://help.bulkgate.com/docs/en/http-low-level-api-delivery-confirmations-and-incoming-sms.html) describing specifics.
  - Bulk Reports are explained here [Bulk Delivery Reports](https://help.bulkgate.com/docs/en/http-api-bulk-delivery-confirmations-and-incoming-sms.html)    

- API limits
  - Your setup API can also be limited by number of messages, or by country. For more information go to [API Limits](https://help.bulkgate.com/docs/en/api-limits.html)

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [BulkGate documentation](https://help.bulkgate.com/en/)
