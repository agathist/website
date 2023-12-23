import { defineCollection } from "astro/content/runtime";
import { z } from "astro/zod";

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    published: z.boolean(),
  }),
});

const teamCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    imgUrl: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  services: servicesCollection,
  team: teamCollection,
};
