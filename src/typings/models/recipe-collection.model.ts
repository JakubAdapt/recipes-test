import { z } from 'zod'
import { assetSchema } from '@typings/models/asset.model'

export const recipeCollectionSchema = z.object({
  name: z.string(),
  slug: z.string(),
  time: z.number().optional().nullable(),
  level: z.enum(['Average', 'Easy', 'Hard']).optional().nullable(),
  image: assetSchema.optional(),
})

export type RecipeCollectionType = z.infer<typeof recipeCollectionSchema>
