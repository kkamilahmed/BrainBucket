import { Schema, Types } from "mongoose";
export declare const userModel: import("mongoose").Model<{
    password: string;
    username?: string | null;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    password: string;
    username?: string | null;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    password: string;
    username?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    password: string;
    username?: string | null;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    password: string;
    username?: string | null;
}>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
    password: string;
    username?: string | null;
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const contentModel: import("mongoose").Model<{
    title: string;
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    desc?: string | null;
    link?: string | null;
    linkIMG?: string | null;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    title: string;
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    desc?: string | null;
    link?: string | null;
    linkIMG?: string | null;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    title: string;
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    desc?: string | null;
    link?: string | null;
    linkIMG?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    title: string;
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    desc?: string | null;
    link?: string | null;
    linkIMG?: string | null;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    title: string;
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    desc?: string | null;
    link?: string | null;
    linkIMG?: string | null;
}>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
    title: string;
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    desc?: string | null;
    link?: string | null;
    linkIMG?: string | null;
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const linkModel: import("mongoose").Model<{
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
}>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
    userId: {
        prototype?: Types.ObjectId | null;
        cacheHexString?: unknown;
        generate?: {} | null;
        createFromTime?: {} | null;
        createFromHexString?: {} | null;
        createFromBase64?: {} | null;
        isValid?: {} | null;
    };
    hash: string;
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=db.d.ts.map