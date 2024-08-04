import { z } from 'zod'
import { assetSchema } from '@typings/models/asset.model'

export const recipeCollectionSchema = z.object({
  name: z.string(),
  slug: z.string(),
  time: z.number().optional(),
  level: z.enum(['Average', 'Easy', 'Hard']).optional(),
  image: assetSchema.optional(),
})

export type RecipeCollectionType = z.infer<typeof recipeCollectionSchema>
