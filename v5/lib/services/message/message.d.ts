import type { Application } from '../../declarations';
import { MessageService } from './message.class';
import { messagePath } from './message.shared';
export * from './message.class';
export * from './message.schema';
export declare const message: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [messagePath]: MessageService;
    }
}
