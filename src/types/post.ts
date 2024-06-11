import { z } from "zod";

export const FormSchema = z.object({
  title: z.string(),
  content: z.string(),
  slug: z.string().optional().nullable().default(null),
  isPublished: z.boolean(),
});

export type FormType = z.infer<typeof FormSchema>;
