import { defineCollection, z } from "astro:content";
import { file } from 'astro/loaders';

const skills = defineCollection({
  loader: file("src/data/skills.json"),
  schema: z.object({
      id: z.number(),
      isProject: z.boolean(),
      isApplication: z.boolean(),
      isTask: z.boolean(),
      headline: z.string(),
      description: z.string(),
    }),
});



// Skill -> Project, Application (Mobile App or Program), Task (Script or Task), Concept
// Tags -> Visual Computing, API, Database, Web, Mobile App, Machine Learning/AI, Authentication
// Tools -> MS Entra, Clerk, D365, CMSes?, Wordpress, VS, VS Code, XCode, Eclipse, Postman, Insomnia


export const collections = { skills };
