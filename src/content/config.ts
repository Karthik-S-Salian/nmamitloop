import { z, defineCollection } from 'astro:content';

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description : z.string().optional(),
    branches: z.array(z.enum(["csf","cs","csc","is","ri","me","aids","aiml","cv","ece","ee","cce"])),
    sem:z.number(),
    subject:z.string(),
    type:z.enum(["index","text","program"])
  }),
});


export const collections = {
    'notes': notesCollection,
  };