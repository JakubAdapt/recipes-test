import { z } from 'zod'
import { heroSchema } from '@typings/models/hero.model'

export const pageSchema = z.object({
  slug: z.string(),
  hero: heroSchema,
})

export type PageType = z.infer<typeof pageSchema>
