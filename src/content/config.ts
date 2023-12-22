import { defineCollection } from "astro/content/runtime";
import { z } from "astro/zod";

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  services: servicesCollection,
};
