import { defineCollection, reference } from 'astro:content'
import { z } from 'astro/zod'

const openSourceProjectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string().datetime(),
    description: z.string(),
    title: z.string(),
  }),
})

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
    /**
     * Social media links. My thought is a person might use them to vette us.
     * They are optional, so you can choose to share what you want
     */
    github: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
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
  openSourceProjects: openSourceProjectsCollection,
  posts: postsCollection,
  services: servicesCollection,
  team: teamCollection,
  technologies: technologiesCollection,
}
