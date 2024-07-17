import ContentfulImage from '@app/components/contentful-image'
import { PageParams } from '@typings/PageParams'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getRecipe } from '@services/getRecipe'
import clsx from 'clsx'

export default async function RecipePage({ params }: PageParams) {
  const recipe = await getRecipe(params.slug)
  const { time, level } = recipe

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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex justify-center">
        <div className="mt-[300px] w-11/12 space-y-4 rounded-t-xl bg-white p-5 text-black shadow-lg">
          <h1 className="text-xl font-semibold">{recipe.name}</h1>

          <p className="flex justify-between text-green">
            <span
              className={clsx('', {
                'text-green': level === 'Easy',
                'text-gray': level === 'Average',
                'text-orange': level === 'Hard',
              })}
            >
              {level}
            </span>
            {time && (
              <span
                className={clsx('', {
                  'text-green': time <= 30,
                  'text-gray': time > 30 && time <= 60,
                  'text-orange': time > 60,
                })}
              >
                {time} minutes
              </span>
            )}
          </p>

          <div className="contentful-document">{documentToReactComponents(recipe.ingredients)}</div>

          <div className="contentful-document">{documentToReactComponents(recipe.instruction)}</div>
        </div>
      </div>
    </div>
  )
}
