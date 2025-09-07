import { z } from 'zod';

export const metricSchema = z.object({
  name: z.string(),
  before: z.union([z.string(), z.number()]).optional(),
  after: z.union([z.string(), z.number()]).optional(),
  note: z.string().optional(),
});

export const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  timeline: z.object({
    start: z.string(),
    end: z.string().optional(),
  }),
  stack: z.array(z.string()),
  role: z.string(),
  teamSize: z.number(),
  repo: z.string().optional(),
  demo: z.string().optional(),
  cover: z.string(),
  metrics: z.array(metricSchema).optional(),
  challenges: z.array(z.string()),
  decisions: z.array(z.string()),
  outcomes: z.array(z.string()),
});

export type Project = z.infer<typeof projectSchema>;
