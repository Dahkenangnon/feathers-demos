import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Message, MessageData, MessagePatch, MessageQuery, MessageService } from './message.class';
export type { Message, MessageData, MessagePatch, MessageQuery };
export type MessageClientService = Pick<MessageService<Params<MessageQuery>>, (typeof messageMethods)[number]>;
export declare const messagePath = "message";
export declare const messageMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const messageClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [messagePath]: MessageClientService;
    }
}
