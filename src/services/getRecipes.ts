import { contentFulClient } from '@services/contentful'
import { TypeRecipeSkeleton } from '@typings/contentful/generated-types'
import { EntryCollection } from 'contentful'

export type RecipeFields = EntryCollection<
  TypeRecipeSkeleton,
  'WITHOUT_UNRESOLVABLE_LINKS',
  string
>['items'][number]['fields']

export async function getRecipes(slug: string): Promise<RecipeFields>
export async function getRecipes(): Promise<RecipeFields[]>
export async function getRecipes(slug?: string): Promise<RecipeFields | RecipeFields[]> {
  const response = await contentFulClient.withoutUnresolvableLinks.getEntries<TypeRecipeSkeleton>({
    content_type: 'recipe',
    'fields.slug': slug,
    include: 2,
  })

  if (slug) {
    return response.items[0].fields
  }

  return response.items.map((item) => item.fields)
}
