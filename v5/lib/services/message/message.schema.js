"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageQueryResolver = exports.messageQueryValidator = exports.messageQuerySchema = exports.messageQueryProperties = exports.messagePatchResolver = exports.messagePatchValidator = exports.messagePatchSchema = exports.messageDataResolver = exports.messageDataValidator = exports.messageDataSchema = exports.messageExternalResolver = exports.messageResolver = exports.messageValidator = exports.messageSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.messageSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'Message', additionalProperties: false });
exports.messageValidator = (0, typebox_1.getValidator)(exports.messageSchema, validators_1.dataValidator);
exports.messageResolver = (0, schema_1.resolve)({});
exports.messageExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.messageDataSchema = typebox_1.Type.Pick(exports.messageSchema, ['text'], {
    $id: 'MessageData'
});
exports.messageDataValidator = (0, typebox_1.getValidator)(exports.messageDataSchema, validators_1.dataValidator);
exports.messageDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.messagePatchSchema = typebox_1.Type.Partial(exports.messageSchema, {
    $id: 'MessagePatch'
});
exports.messagePatchValidator = (0, typebox_1.getValidator)(exports.messagePatchSchema, validators_1.dataValidator);
exports.messagePatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.messageQueryProperties = typebox_1.Type.Pick(exports.messageSchema, ['id', 'text']);
exports.messageQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.messageQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.messageQueryValidator = (0, typebox_1.getValidator)(exports.messageQuerySchema, validators_1.queryValidator);
exports.messageQueryResolver = (0, schema_1.resolve)({});
