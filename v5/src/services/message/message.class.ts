// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Message, MessageData, MessagePatch, MessageQuery } from './message.schema'

export type { Message, MessageData, MessagePatch, MessageQuery }

export interface MessageParams extends KnexAdapterParams<MessageQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class MessageService<ServiceParams extends Params = MessageParams> extends KnexService<
  Message,
  MessageData,
  MessageParams,
  MessagePatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'message'
  }
}
