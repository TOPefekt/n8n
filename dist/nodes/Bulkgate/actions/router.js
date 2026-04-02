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
exports.router = router;
const advanced = __importStar(require("./advanced"));
const blackList = __importStar(require("./blackList"));
const addressBook = __importStar(require("./addressBook"));
const shorten = __importStar(require("./shortener"));
async function router() {
    const items = this.getInputData();
    const operationResult = [];
    for (let i = 0; i < items.length; i++) {
        const resource = this.getNodeParameter('resource', i);
        const operation = this.getNodeParameter('operation', i);
        const bulkgateTmp = {
            resource,
            operation,
        };
        try {
            if (bulkgateTmp.resource === 'advanced') {
                operationResult.push(...(await advanced[bulkgateTmp.operation].execute.call(this, i)));
            }
            else if (bulkgateTmp.resource === 'blackList') {
                operationResult.push(...(await blackList[bulkgateTmp.operation].execute.call(this, i)));
            }
            else if (bulkgateTmp.resource === 'addressBook') {
                operationResult.push(...(await addressBook[bulkgateTmp.operation].execute.call(this, i)));
            }
            else if (bulkgateTmp.resource === 'shortener') {
                operationResult.push(...(await shorten[bulkgateTmp.operation].execute.call(this, i)));
            }
        }
        catch (err) {
            if (this.continueOnFail()) {
                operationResult.push({ json: this.getInputData(i)[0].json, error: err });
            }
            else {
                if (err.context)
                    err.context.itemIndex = i;
                throw err;
            }
        }
    }
    return [operationResult];
}
//# sourceMappingURL=router.js.map