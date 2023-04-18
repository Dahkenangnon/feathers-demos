"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const message_1 = require("./message/message");
const users_1 = require("./users/users");
const services = (app) => {
    app.configure(message_1.message);
    app.configure(users_1.user);
    // All services will be registered here
};
exports.services = services;
