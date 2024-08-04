import { getContentfulClient } from './contentful/contentful-client'
import { err, ok, ResultAsync } from 'neverthrow'
import { z } from 'zod'
import { recipeCollectionSchema } from '@typings/models/recipe-collection.model'
import intoError from '@utils/intoError'

export async function getRecipes(name?: string) {
  const recipeCollectionResponse = await ResultAsync.fromPromise(
    getContentfulClient()
      .getRecipeCollection({ name })
      .then((response) => {
        if (!response.recipeCollection || response.recipeCollection?.items?.length === 0) {
          return null
        }
        return z.array(recipeCollectionSchema).parse(response.recipeCollection?.items)
      }),
    (error) => intoError(error, 'Failed to get recipe collection')
  )

  if (recipeCollectionResponse.isErr()) {
    return err(recipeCollectionResponse.error)
  }

  return ok(recipeCollectionResponse.value)
}
