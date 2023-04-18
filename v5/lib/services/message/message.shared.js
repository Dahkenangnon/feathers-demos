"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageClient = exports.messageMethods = exports.messagePath = void 0;
exports.messagePath = 'message';
exports.messageMethods = ['find', 'get', 'create', 'patch', 'remove'];
const messageClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.messagePath, connection.service(exports.messagePath), {
        methods: exports.messageMethods
    });
};
exports.messageClient = messageClient;
