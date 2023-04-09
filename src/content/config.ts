import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    date: z.date().or(z.null()),
    draft: z.boolean().optional(),
    excerpt: z.string().or(z.null()).optional(),
    promoted: z.boolean().optional(),
    title: z.string(),
    tweets: z.boolean().optional(),
  }),
});

const talkCollection = defineCollection({
  schema: z.object({
    description: z.string(),
    events: z.array(z.object({
      date: z.string(),
      location: z.string().optional(),
      name: z.string(),
      online: z.boolean().optional(),
    })),
    title: z.string(),
    // TODO: add SpeakerDeck
    // TODO: add Video
  }),
});

export const collections = {
  blog: blogCollection,
  talk: talkCollection,
};
