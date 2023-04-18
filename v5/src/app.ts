// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
import { feathers } from '@feathersjs/feathers'
import express, {
  rest,
  json,
  urlencoded,
  cors,
  serveStatic,
  notFound,
  errorHandler
} from '@feathersjs/express'
import * as dotenv from 'dotenv'
dotenv.config()
import configuration from '@feathersjs/configuration'
import socketio from '@feathersjs/socketio'

import type { Application } from './declarations'
import { configurationValidator } from './configuration'
import { logger } from './logger'
import { logError } from './hooks/log-error'
import { sqlite } from './sqlite'
import { authentication } from './authentication'
import { services } from './services/index'
import { channels } from './channels'
import fs from 'fs'
import path from 'path'

const app: Application = express(feathers())

// Load app configuration
app.configure(configuration(configurationValidator))
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
// Host the public folder
app.use('/', serveStatic(app.get('public')))

// Configure services and real-time functionality
app.configure(rest())
app.configure(
  socketio({
    cors: {
      origin: app.get('origins')
    }
  })
)
app.configure(sqlite)


// all request should include the header "Auth-Demo", which value should include in keys defined in ../keys.g.js

app.use((req, res, next) => {

  console.log("req.headers['auth-demo']", req.headers['auth-demo'])
  // require the keys file
  const keysFile = path.join(__dirname, '..', 'keys.g.js');
  if (!fs.existsSync(keysFile)) {
    res.status(401).send('Unauthorized')
    return
  }
  const keys = require(keysFile)
  if (!keys) {
    res.status(401).send('Unauthorized')
    return
  }
  const authDemo = req.headers['auth-demo']
  if (!authDemo) {
    res.status(401).send('Unauthorized')
    return
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
})


app.configure(authentication)
app.configure(services)
app.configure(channels)

// Configure a middleware for 404s and the error handler
app.use(notFound())
app.use(errorHandler({ logger }))

// Register hooks that run on all service methods
app.hooks({
  around: {
    all: [logError]
  },
  before: {},
  after: {},
  error: {}
})
// Register application setup and teardown hooks here
app.hooks({
  setup: [],
  teardown: []
})

export { app }
