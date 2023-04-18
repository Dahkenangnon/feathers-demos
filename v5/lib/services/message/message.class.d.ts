import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Message, MessageData, MessagePatch, MessageQuery } from './message.schema';
export type { Message, MessageData, MessagePatch, MessageQuery };
export interface MessageParams extends KnexAdapterParams<MessageQuery> {
}
export declare class MessageService<ServiceParams extends Params = MessageParams> extends KnexService<Message, MessageData, MessageParams, MessagePatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
