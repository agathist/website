import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string().datetime(),
    description: z.string().optional(),
    title: z.string(),
  }),
})

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    published: z.boolean().default(false),
  }),
})

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    imgUrl: z.string().optional(),
    order: z.number(),
    published: z.boolean().default(false),
  }),
})

export const collections = {
  posts: postsCollection,
  services: servicesCollection,
  team: teamCollection,
}
