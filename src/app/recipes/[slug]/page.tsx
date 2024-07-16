import ContentfulImage from '@app/components/ContentfulImage'
import { PageParams } from '@typings/PageParams'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getRecipes } from '@services/getRecipes'

export default async function RecipePage({ params }: PageParams) {
  const recipe = await getRecipes(params.slug)

  return (
    <div className="relative h-screen bg-black">
      {/* Image container */}
      <div className="absolute top-0 h-3/5 w-full">
        {recipe.image && (
          <ContentfulImage
            alt={recipe.image.fields.title || ''}
            src={recipe.image.fields.file?.url || ''}
            priority
          />
        )}

        {/* Custom gradient overlay */}
        <div className="via-black/10 absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex justify-center">
        <div className="mt-[300px] w-11/12 space-y-4 rounded-t-xl bg-white p-5 text-black shadow-lg">
          <h1 className="text-xl font-semibold">{recipe.name}</h1>

          <p className="flex justify-between text-green">
            <span>{recipe.level}</span>
            <span>{recipe.time} minutes</span>
          </p>

          <div className="contentful-document">{documentToReactComponents(recipe.ingredients)}</div>

          <div className="contentful-document">{documentToReactComponents(recipe.instruction)}</div>
        </div>
      </div>
    </div>
  )
}
