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
exports.descriptions = exports.getContact = exports.removeContact = exports.editContact = exports.addContact = void 0;
const addContact = __importStar(require("./addContact"));
exports.addContact = addContact;
const editContact = __importStar(require("./editContact"));
exports.editContact = editContact;
const removeContact = __importStar(require("./removeContact"));
exports.removeContact = removeContact;
const getContact = __importStar(require("./getContact"));
exports.getContact = getContact;
exports.descriptions = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['addressBook'],
            },
        },
        options: [
            {
                name: 'Add Contact',
                value: 'addContact',
                description: 'Adds contact to BulkGate address book',
                action: 'Address book add contact',
            },
            {
                name: 'Edit Contact',
                value: 'editContact',
                description: 'Edits contact to BulkGate address book',
                action: 'Address book edit contact',
            },
            {
                name: 'Remove Contact',
                value: 'removeContact',
                description: 'Removes contact to BulkGate address book',
                action: 'Address book remove contact',
            },
            {
                name: 'Get Contact',
                value: 'getContact',
                description: 'Removes contact to BulkGate address book',
                action: 'Address book remove contact',
            },
        ],
        default: 'addContact',
    },
    ...addContact.description,
    ...editContact.description,
    ...removeContact.description,
    ...getContact.description,
];
//# sourceMappingURL=index.js.map