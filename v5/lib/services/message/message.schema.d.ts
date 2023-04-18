import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const messageSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    text: import("@sinclair/typebox").TString<string>;
}>;
export type Message = Static<typeof messageSchema>;
export declare const messageValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const messageResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    text: string;
}, HookContext>;
export declare const messageExternalResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    text: string;
}, HookContext>;
export declare const messageDataSchema: import("@sinclair/typebox").TObject<{
    text: import("@sinclair/typebox").TString<string>;
}>;
export type MessageData = Static<typeof messageDataSchema>;
export declare const messageDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const messageDataResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    text: string;
}, HookContext>;
export declare const messagePatchSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type MessagePatch = Static<typeof messagePatchSchema>;
export declare const messagePatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const messagePatchResolver: import("@feathersjs/schema").Resolver<{
    id: number;
    text: string;
}, HookContext>;
export declare const messageQueryProperties: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    text: import("@sinclair/typebox").TString<string>;
}>;
export declare const messageQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>>;
    $select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<("id" | "text")[]>>;
    $and: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
    }>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
                $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
            }>, import("@sinclair/typebox").TObject<never>]>]>>;
            text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
                $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            }>, import("@sinclair/typebox").TObject<never>]>]>>;
        }>>>;
    }>]>>>;
    $or: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
    }>>>>;
}>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    }>, import("@sinclair/typebox").TObject<never>]>]>>;
    text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>, import("@sinclair/typebox").TObject<never>]>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type MessageQuery = Static<typeof messageQuerySchema>;
export declare const messageQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const messageQueryResolver: import("@feathersjs/schema").Resolver<{
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        id?: number | undefined;
        text?: number | undefined;
    } | undefined;
    $select?: ("id" | "text")[] | undefined;
    $and?: ({
        id?: number | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: number | undefined;
            $gte?: number | undefined;
            $lt?: number | undefined;
            $lte?: number | undefined;
            $ne?: number | undefined;
            $in?: number[] | undefined;
            $nin?: number[] | undefined;
        } | undefined;
        text?: string | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
    } | {
        $or: {
            id?: number | {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
                $gt?: number | undefined;
                $gte?: number | undefined;
                $lt?: number | undefined;
                $lte?: number | undefined;
                $ne?: number | undefined;
                $in?: number[] | undefined;
                $nin?: number[] | undefined;
            } | undefined;
            text?: string | {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
                $gt?: string | undefined;
                $gte?: string | undefined;
                $lt?: string | undefined;
                $lte?: string | undefined;
                $ne?: string | undefined;
                $in?: string[] | undefined;
                $nin?: string[] | undefined;
            } | undefined;
        }[];
    })[] | undefined;
    $or?: {
        id?: number | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: number | undefined;
            $gte?: number | undefined;
            $lt?: number | undefined;
            $lte?: number | undefined;
            $ne?: number | undefined;
            $in?: number[] | undefined;
            $nin?: number[] | undefined;
        } | undefined;
        text?: string | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
    }[] | undefined;
    id?: number | {
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
    text?: string | {
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
} & {}, HookContext>;
