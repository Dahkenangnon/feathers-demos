const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');
// eslint-disable-next-line no-unused-vars
process.env['NODE_CONFIG'] = require('./utils/custom-config.js');
const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const authentication = require('./authentication');

const app = express(feathers());

// eslint-disable-next-line no-unused-vars
//var config = require('config');
// Load app configuration
app.configure(configuration());

console.log(app.get('port'))

// Enable security, CORS, compression, favicon and body parsing
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

// All request need to have the "Auth-Demo" header set
app.use((req, res, next) => {
  const keys = app.get('authentication').apiKey.allowed;
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

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);
app.use((req, res, next) => {
  res.status(404).json({
    "feathers": "^4.5.16",
    "flutter_feathers": "4.x.y",
    "repository": "Dahkenangnon/feathers/4",
  });
});
// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
