import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['AI Engineering', 'KI-Strategie', 'Tools & Stacks', 'Build in Public', 'Compliance']),
    readingTime: z.string(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog-en' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['AI Engineering', 'AI Strategy', 'Tools & Stacks', 'Build in Public', 'Compliance']),
    readingTime: z.string(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const glossar = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ki-glossar' }),
  schema: z.object({
    term: z.string(),
    abbr: z.string().optional(),
    tldr: z.string(),
    letter: z.string(),
    category: z.string().optional(),
    related: z.array(z.string()).default([]),
  }),
});

const glossaryEn = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossary-en' }),
  schema: z.object({
    term: z.string(),
    abbr: z.string().optional(),
    tldr: z.string(),
    letter: z.string(),
    category: z.string().optional(),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, blogEn, glossar, glossaryEn };
