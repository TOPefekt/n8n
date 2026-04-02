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
exports.descriptions = exports.change = exports.remove = exports.shorten = void 0;
const shorten = __importStar(require("./shorten"));
exports.shorten = shorten;
const remove = __importStar(require("./remove"));
exports.remove = remove;
const change = __importStar(require("./change"));
exports.change = change;
exports.descriptions = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['shortener'],
            },
        },
        options: [
            {
                name: 'Shorten',
                value: 'shorten',
                description: 'This action is used to shorten URL, for later use in BulkGate Portal',
                action: 'Shortener shorten',
            },
            {
                name: 'Edit',
                value: 'change',
                description: 'This action is used to modify shortened URL, for future use in BulkGate Portal',
                action: 'Shortener change',
            },
            {
                name: 'Remove',
                value: 'remove',
                description: 'This action is used for removal of shortened URL from BulkGate Portal',
                action: 'Shortener remove',
            },
        ],
        default: 'shorten',
    },
    ...shorten.description,
    ...remove.description,
    ...change.description,
];
//# sourceMappingURL=index.js.map