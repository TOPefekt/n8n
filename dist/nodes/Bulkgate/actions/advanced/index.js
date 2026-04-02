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
exports.descriptions = exports.promotionalViber = exports.promotionalSMS = exports.transactionalViber = exports.transactionalSMS = void 0;
const transactionalSMS = __importStar(require("./transactionalSMS"));
exports.transactionalSMS = transactionalSMS;
const transactionalViber = __importStar(require("./transactionalViber"));
exports.transactionalViber = transactionalViber;
const promotionalSMS = __importStar(require("./promotionalSMS"));
exports.promotionalSMS = promotionalSMS;
const promotionalViber = __importStar(require("./promotionalViber"));
exports.promotionalViber = promotionalViber;
exports.descriptions = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['advanced'],
            },
        },
        options: [
            {
                name: 'Transactional SMS',
                value: 'transactionalSMS',
                description: 'Send transactional message via SMS',
                action: 'Send SMS',
            },
            {
                name: 'Transactional Viber',
                value: 'transactionalViber',
                description: 'Send transactional message via Viber',
                action: 'Send viber',
            },
            {
                name: 'Promotional SMS',
                value: 'promotionalSMS',
                description: 'Send promotional message via SMS',
                action: 'Send bulk SMS',
            },
            {
                name: 'Promotional Viber',
                value: 'promotionalViber',
                description: 'Send promotional message via Viber',
                action: 'Send bulk viber',
            },
        ],
        default: 'transactionalSMS',
    },
    ...transactionalSMS.description,
    ...transactionalViber.description,
    ...promotionalSMS.description,
    ...promotionalViber.description,
];
//# sourceMappingURL=index.js.map