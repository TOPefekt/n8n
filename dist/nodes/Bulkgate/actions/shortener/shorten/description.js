"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenerShortenDescription = void 0;
exports.shortenerShortenDescription = [
    {
        displayName: 'Target Url',
        name: 'target_url',
        type: 'string',
        default: '',
        description: 'URL to be shortened',
        displayOptions: {
            show: {
                operation: ['shorten'],
                resource: ['shortener'],
            },
        },
    },
    {
        displayName: 'Url Type',
        name: 'url_type',
        type: 'options',
        description: 'Domain of URL to be shortened (ur7.fr, u1.pm, ms6.fr, ms6.cz, msg.bg)',
        placeholder: 'Add Field',
        default: "u1.pm",
        displayOptions: {
            show: {
                operation: ['shorten'],
                resource: ['shortener'],
            },
        },
        options: [
            {
                name: 'ms6.cz',
                value: 'ms6.cz',
            },
            {
                name: 'ms6.fr',
                value: 'ms6.fr',
            },
            {
                name: 'msg.bg',
                value: 'msg.bg',
            },
            {
                name: 'u1.pm',
                value: 'u1.pm',
            },
            {
                name: 'ur7.fr',
                value: 'ur7.fr',
            },
        ],
    },
];
//# sourceMappingURL=description.js.map