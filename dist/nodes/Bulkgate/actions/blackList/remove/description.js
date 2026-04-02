"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blackListRemoveDescription = void 0;
exports.blackListRemoveDescription = [
    {
        displayName: 'Number',
        name: 'number',
        type: 'string',
        default: '',
        description: 'Number to be removed from blacklist. Use either this or source_id.',
        displayOptions: {
            show: {
                operation: ['remove'],
                resource: ['blackList'],
            },
        },
    },
    {
        displayName: 'Source ID',
        name: 'source_id',
        type: 'string',
        default: '',
        description: 'Identificator of group in blacklisted numbers. Use either this or wallet_id.',
        displayOptions: {
            show: {
                operation: ['remove'],
                resource: ['blackList'],
            },
        },
    },
    {
        displayName: 'Wallet',
        name: 'wallet',
        type: 'string',
        default: '',
        description: 'Wallet from which to remove blacklisted numbers',
        displayOptions: {
            show: {
                operation: ['remove'],
                resource: ['blackList'],
            },
        },
    },
];
//# sourceMappingURL=description.js.map