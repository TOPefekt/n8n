"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressBookRemoveContactDescription = void 0;
exports.addressBookRemoveContactDescription = [
    {
        displayName: 'Phone Number',
        name: 'phone_number',
        type: 'string',
        default: '',
        description: 'Phone number of contact to be removed',
        displayOptions: {
            show: {
                operation: ['removeContact'],
                resource: ['addressBook'],
            },
        },
    },
];
//# sourceMappingURL=description.js.map