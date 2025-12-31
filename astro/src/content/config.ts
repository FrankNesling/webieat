import { defineCollection, z } from "astro:content";
import { file } from 'astro/loaders';

const skills = defineCollection({
  loader: file("src/data/skills.json"),
  schema: z.object({
    id: z.number(),
    isProject: z.boolean(),
    isApplication: z.boolean(),
    isTask: z.boolean(),
    professionell: z.boolean(),
    languages: z.array(z.string()),
    frameworks: z.array(z.string()),
    tags: z.array(z.string()),
    tools: z.array(z.string()),
    topic: z.string(),
    description: z.string(),
    url: z.string(),
    logo: z.string()
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
  }),
})



// Skill -> Project, Application (Mobile App or Program), Task (Script or Task), Concept
// Tags -> Visual Computing, API, Database, Desktop Program, Game, Web, Mobile App, Cloud Application, Machine Learning/AI, Network, Computer Graphics, Parallel Programming, DevOps, Data science, Compiler, Algorithms
// Tools -> MS Entra, Clerk, D365, CMSes?, Wordpress, VS, VS Code, XCode, Eclipse, Postman, Insomnia

// Tool "types" will be specified in the filter list of the index page, no other need
// Tool types -> IDE, Authentication, Networking, Versioning, Hosting, Database, CRM, CMS, Project management, Automation, Webdevelopment, Containerazation

// somewhere I need to specify I am familiar with all Windows, MacOS and Linxu (Ubuntu, Fedora)

export const collections = { skills, blog };
