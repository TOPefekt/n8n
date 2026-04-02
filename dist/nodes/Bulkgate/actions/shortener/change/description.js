"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenerChangeDescription = void 0;
exports.shortenerChangeDescription = [
    {
        displayName: 'Short Url',
        name: 'short_url',
        type: 'string',
        default: '',
        description: 'Abbreviated URL to be changed',
        displayOptions: {
            show: {
                operation: ['change'],
                resource: ['shortener'],
            },
        },
    },
    {
        displayName: 'Target Url',
        name: 'target_url',
        type: 'string',
        default: '',
        description: 'New URL',
        displayOptions: {
            show: {
                operation: ['change'],
                resource: ['shortener'],
            },
        },
    },
];
//# sourceMappingURL=description.js.map