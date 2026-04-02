"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blackListAddDescription = void 0;
exports.blackListAddDescription = [
    {
        displayName: 'Numbers',
        name: 'number',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add phone number',
        required: true,
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                operation: ['add'],
                resource: ['blackList'],
            },
        },
        options: [
            {
                name: 'numbers',
                displayName: 'Number',
                values: [
                    {
                        displayName: 'Phone Number',
                        name: 'phone_number',
                        type: 'string',
                        default: '',
                    },
                ],
            },
        ],
    },
    {
        displayName: 'Wallet',
        name: 'wallet',
        type: 'string',
        default: '',
        required: true,
        description: 'Wallet on which to blacklist numbers',
        displayOptions: {
            show: {
                operation: ['add'],
                resource: ['blackList'],
            },
        },
    },
    {
        displayName: 'Source ID',
        name: 'source_id',
        type: 'string',
        default: '',
        description: 'Identificator of group in blacklisted numbers',
        displayOptions: {
            show: {
                operation: ['add'],
                resource: ['blackList'],
            },
        },
    },
];
//# sourceMappingURL=description.js.map