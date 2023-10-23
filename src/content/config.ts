import { z, defineCollection } from 'astro:content';

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description : z.string().optional(),
    branches: z.array(z.enum(["csf","cs","csc","is","ri","me","aids","aiml","cv","ece","ee"])),
    sem:z.number(),
    subject:z.string() 
  }),
});


export const collections = {
    'notes': notesCollection,
  };