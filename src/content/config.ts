import { z, defineCollection } from "astro:content";

const blogsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publish_date: z.string().transform((str : string) => new Date(str))
  }),
});

export const collections = {
  'blogs': blogsCollection
}
