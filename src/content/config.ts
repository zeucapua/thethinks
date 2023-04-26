import { z, defineCollection } from "astro:content";


const post_collection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
})

const tutorial_collection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
})

export const collections = { 
  'posts': post_collection, 
  'tutorials': tutorial_collection 
}

