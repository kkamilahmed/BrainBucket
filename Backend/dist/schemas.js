import { z } from "zod";
export const userInputSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(10, "Username must be at most 10 characters")
        .regex(/^[A-Za-z]+$/, "Username must contain only letters"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be at most 20 characters")
        .refine((val) => /[a-z]/.test(val) &&
        /[A-Z]/.test(val) &&
        /[0-9]/.test(val) &&
        /[^A-Za-z0-9]/.test(val), {
        message: "Password must contain uppercase, lowercase, number, and special character",
    }),
});
export const contentInputSchema = z.object({
    link: z.string().url("Must be a valid URL"),
    type: z.enum(["article", "video", "image", "note"]),
    title: z.string().min(1, "Title is required"),
    tags: z.array(z.string().regex(/^[a-f\d]{24}$/i, "Invalid tag ID")),
});
//# sourceMappingURL=schemas.js.map