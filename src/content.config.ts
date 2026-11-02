import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** One collection per language; a project has the same file name (= slug) in both. */
const projectCollection = (base: string) =>
  defineCollection({
    loader: glob({ pattern: '*.md', base }),
    schema: ({ image }) =>
      z.object({
        order: z.number(),
        title: z.string(),
        /** Italic line under the title on the project page. */
        kind: z.string(),
        /** Italic line under the title on the home page card. */
        summary: z.string(),
        /** Small caps label above the card image. */
        label: z.string(),
        /** First entry is the main category; all entries are matched by the home page filter. */
        categories: z.array(z.enum(['web', 'app', 'graphic'])).min(1),
        lead: z.string(),
        description: z.string(),
        client: z.string().optional(),
        context: z.string().optional(),
        year: z.string(),
        role: z.string(),
        tools: z.string(),
        url: z.url().optional(),
        cover: z.object({
          src: image(),
          /** Which part of the image the 4:5 card keeps (sharp gravity, e.g. "top", "left"). */
          position: z.string().default('centre'),
        }),
        gallery: z
          .array(
            z.object({
              src: image(),
              caption: z.string(),
              /**
               * The carousel frame is 2:1 and wider than most screenshots, so part of the height is cut.
               * `focus` picks the excerpt: 0 keeps the top, 100 the bottom, anything in between pans.
               */
              focus: z.number().min(0).max(100).default(0),
              /** `contain` shows the whole image on the frame's background — for phone screenshots. */
              fit: z.enum(['cover', 'contain']).default('cover'),
            }),
          )
          .min(1),
        credits: z.string().optional(),
        stats: z.array(z.object({ value: z.string(), label: z.string() })),
        quote: z.string(),
      }),
  });

export const collections = {
  projects: projectCollection('./src/content/projects'),
  projectsDe: projectCollection('./src/content/projects/de'),
};
