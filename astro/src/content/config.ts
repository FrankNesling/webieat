import { defineCollection, z } from "astro:content";
import { file } from 'astro/loaders';

const skills = defineCollection({
  loader: file("src/data/skills.json"),
  schema: z.object({
      id: z.number(),
      headline: z.string(),
      description: z.string(),
    }),
});

export const collections = { skills };
