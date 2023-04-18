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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const message_schema_1 = require("./message.schema");
const message_class_1 = require("./message.class");
const message_shared_1 = require("./message.shared");
__exportStar(require("./message.class"), exports);
__exportStar(require("./message.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const message = (app) => {
    // Register our service on the Feathers application
    app.use(message_shared_1.messagePath, new message_class_1.MessageService((0, message_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: message_shared_1.messageMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(message_shared_1.messagePath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(message_schema_1.messageExternalResolver),
                schema_1.hooks.resolveResult(message_schema_1.messageResolver)
            ]
        },
        before: {
            all: [schema_1.hooks.validateQuery(message_schema_1.messageQueryValidator), schema_1.hooks.resolveQuery(message_schema_1.messageQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(message_schema_1.messageDataValidator), schema_1.hooks.resolveData(message_schema_1.messageDataResolver)],
            patch: [schema_1.hooks.validateData(message_schema_1.messagePatchValidator), schema_1.hooks.resolveData(message_schema_1.messagePatchResolver)],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.message = message;
