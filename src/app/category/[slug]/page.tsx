import ContentfulImage from '@app/components/ContentfulImage'
import RecipeCard from '@app/components/RecipeCard'
import { contentFulClient } from '@services/contentful'
import { getCategories } from '@services/getCategories'
import { PageParams } from '@typings/PageParams'
import { TypeRecipeSkeleton } from '@typings/contentful/generated-types/TypeRecipe'

async function getRecipesByCategory(category: string) {
  const res = await contentFulClient.withoutUnresolvableLinks.getEntries<TypeRecipeSkeleton>({
    content_type: 'recipe',
    'fields.category.sys.contentType.sys.id': 'category',
    'fields.category.fields.slug': category,
    include: 2,
  })

  return res.items
}

export default async function CategoryPage({ params }: PageParams) {
  const category = await getCategories(params.slug)
  const recipes = await getRecipesByCategory(params.slug)

  return (
    <div>
      {category.image && (
        <ContentfulImage
          alt={category.image.fields.title || ''}
          src={category.image.fields.file?.url || ''}
        />
      )}

      <h1 className="text-center">{category.title}</h1>

      <div className="space-y-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.sys.id} data={recipe.fields} />
        ))}
      </div>
    </div>
  )
}
