import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    publishDate: z.date(),
    title: z.string(),
    excerpt: z.string(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'post': postCollection,
};