import { z } from "zod";
export declare const userInputSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const contentInputSchema: z.ZodObject<{
    link: z.ZodOptional<z.ZodString>;
    linkIMG: z.ZodOptional<z.ZodString>;
    desc: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    userId: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=schemas.d.ts.map