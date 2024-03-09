import { defineCollection, reference } from 'astro:content'
import { z } from 'astro/zod'

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string().datetime(),
    description: z.string().optional(),
    title: z.string(),
    author: reference('team'),
  }),
})

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().default(Infinity),
    published: z.boolean().default(false),
  }),
})

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    email: z.string().optional(),
    imgUrl: z.string().optional(),
    order: z.number().default(Infinity),
    published: z.boolean().default(false),
  }),
})

const technologiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    /**
     * Should match a filename in ./src/icons without the extension
     */
    iconName: z.string(),
    order: z.number().default(Infinity),
    published: z.boolean().default(false),
  }),
})

export const collections = {
  posts: postsCollection,
  services: servicesCollection,
  team: teamCollection,
  technologies: technologiesCollection,
}
