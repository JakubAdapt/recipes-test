import { z } from 'zod'
import { assetSchema } from '@typings/models/asset.model'

export const recipeSchema = z.object({
  name: z.string(),
  slug: z.string(),
  ingredients: z.object({
    json: z.any(),
  }),
  instruction: z.object({
    json: z.any(),
  }),
  time: z.number().optional(),
  level: z.enum(['Average', 'Easy', 'Hard']).optional(),
  image: assetSchema.optional(),
})

export type RecipeType = z.infer<typeof recipeSchema>
