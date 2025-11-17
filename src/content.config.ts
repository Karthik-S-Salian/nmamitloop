import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const notesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    branches: z.array(z.enum(["csf", "cs", "csc", "is", "ri", "me", "aids", "aiml", "cv", "ece", "ee", "cce"])),
    sem: z.number(),
    subject: z.string(),
    type: z.enum(["index", "text", "program"])
  }),
});

export const collections = {
  'notes': notesCollection,
};