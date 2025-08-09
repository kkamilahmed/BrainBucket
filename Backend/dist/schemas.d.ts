import { z } from "zod";
export declare const userInputSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const contentInputSchema: z.ZodObject<{
    link: z.ZodString;
    type: z.ZodEnum<{
        image: "image";
        video: "video";
        article: "article";
        note: "note";
    }>;
    title: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=schemas.d.ts.map