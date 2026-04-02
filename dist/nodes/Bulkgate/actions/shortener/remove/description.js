"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenerRemoveDescription = void 0;
exports.shortenerRemoveDescription = [
    {
        displayName: 'Short',
        name: 'short_url',
        type: 'string',
        default: '',
        required: true,
        description: 'Shortened URL to be removed',
        displayOptions: {
            show: {
                operation: ['remove'],
                resource: ['shortener'],
            },
        },
    },
];
//# sourceMappingURL=description.js.map