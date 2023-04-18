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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
const feathers_1 = require("@feathersjs/feathers");
const express_1 = __importStar(require("@feathersjs/express"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const configuration_1 = __importDefault(require("@feathersjs/configuration"));
const socketio_1 = __importDefault(require("@feathersjs/socketio"));
const configuration_2 = require("./configuration");
const logger_1 = require("./logger");
const log_error_1 = require("./hooks/log-error");
const sqlite_1 = require("./sqlite");
const authentication_1 = require("./authentication");
const index_1 = require("./services/index");
const channels_1 = require("./channels");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)((0, feathers_1.feathers)());
exports.app = app;
// Load app configuration
app.configure((0, configuration_1.default)(configuration_2.configurationValidator));
app.use((0, express_1.cors)());
app.use((0, express_1.json)());
app.use((0, express_1.urlencoded)({ extended: true }));
// Host the public folder
app.use('/', (0, express_1.serveStatic)(app.get('public')));
// Configure services and real-time functionality
app.configure((0, express_1.rest)());
app.configure((0, socketio_1.default)({
    cors: {
        origin: app.get('origins')
    }
}));
app.configure(sqlite_1.sqlite);
// all request should include the header "Auth-Demo", which value should include in keys defined in ../keys.g.js
app.use((req, res, next) => {
    console.log("req.headers['auth-demo']", req.headers['auth-demo']);
    // require the keys file
    const keysFile = path_1.default.join(__dirname, '..', 'keys.g.js');
    if (!fs_1.default.existsSync(keysFile)) {
        res.status(401).send('Unauthorized');
        return;
    }
    const keys = require(keysFile);
    if (!keys) {
        res.status(401).send('Unauthorized');
        return;
    }
    const authDemo = req.headers['auth-demo'];
    if (!authDemo) {
        res.status(401).send('Unauthorized');
        return;
    }
    if (!keys.includes(req.headers['auth-demo'])) {
        return res.status(403).json({
            name: 'Forbidden',
            message: 'You are not allowed to access this.',
            more: 'You need to set the [Auth-Demo] header',
            next: 'Contact the admin to get access or deploy your own. (https://github.com/Dahkenangnon)'
        });
    }
    next();
});
app.configure(authentication_1.authentication);
app.configure(index_1.services);
app.configure(channels_1.channels);
// Configure a middleware for 404s and the error handler
app.use((0, express_1.notFound)());
app.use((0, express_1.errorHandler)({ logger: logger_1.logger }));
// Register hooks that run on all service methods
app.hooks({
    around: {
        all: [log_error_1.logError]
    },
    before: {},
    after: {},
    error: {}
});
// Register application setup and teardown hooks here
app.hooks({
    setup: [],
    teardown: []
});
