import { z, defineCollection } from "astro:content";


const post_collection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    draft: z.boolean(),
  }),
})

const tutorial_collection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    draft: z.boolean(),
  }),
})

export const collections = { 
  'post': post_collection, 
  'tutorial': tutorial_collection 
}

