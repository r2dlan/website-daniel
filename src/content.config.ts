import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    topics: z.array(z.string()).default([]),
    language: z.enum(["de", "en"]),
    translationKey: z.string().optional(),
    featured: z.boolean().default(false),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = {
  projects,
};
