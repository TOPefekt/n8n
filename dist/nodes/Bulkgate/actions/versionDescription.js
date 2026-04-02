"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionDescription = void 0;
const advanced = __importStar(require("./advanced"));
const blackList = __importStar(require("./blackList"));
const addressBook = __importStar(require("./addressBook"));
const shortener = __importStar(require("./shortener"));
exports.versionDescription = {
    displayName: 'BulkGate',
    name: 'bulkgate',
    icon: 'file:bulkgate.svg',
    group: ['output'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Sends data to BulkGate',
    credentials: [
        {
            name: 'bulkgateNodeApi',
            required: true,
        },
    ],
    defaults: {
        name: 'BulkGate',
    },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
        {
            displayName: 'Resource',
            name: 'resource',
            type: 'options',
            noDataExpression: true,
            options: [
                {
                    name: 'Advanced',
                    value: 'advanced',
                },
                {
                    name: 'BlackList',
                    value: 'blackList',
                },
                {
                    name: 'AddressBook',
                    value: 'addressBook',
                },
                {
                    name: 'Shortener',
                    value: 'shortener',
                },
            ],
            default: 'advanced',
        },
        ...advanced.descriptions,
        ...blackList.descriptions,
        ...addressBook.descriptions,
        ...shortener.descriptions,
    ],
};
//# sourceMappingURL=versionDescription.js.map