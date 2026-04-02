"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressBookGetContactDescription = void 0;
exports.addressBookGetContactDescription = [
    {
        displayName: 'Phone Number',
        name: 'phone_number',
        type: 'string',
        default: '',
        required: true,
        description: 'Phone number to be looked up',
        displayOptions: {
            show: {
                operation: ['getContact'],
                resource: ['addressBook'],
            },
        },
    },
];
//# sourceMappingURL=description.js.map