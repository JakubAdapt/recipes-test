import Link from 'next/link'
import ContentfulImage from '@app/components/ContentfulImage'
import type { RecipeFields } from '@services/getRecipes'

type Props = {
  data: RecipeFields
}

const RecipeCard = ({ data }: Props) => {
  const { image, name, level, time, slug } = data

  return (
    <Link href={`/recipes/${slug}`} className="block">
      <div className="relative rounded-lg">
        <div className="w-full">
          {image && (
            <ContentfulImage
              alt={image.fields.title || ''}
              src={image.fields.file?.url || ''}
              className="rounded-lg"
            />
          )}
        </div>

        <div className="bg-black/50 absolute bottom-0 left-0 right-0 flex justify-between rounded-b-lg px-2 py-1 text-white backdrop-blur-sm">
          <h2 className="text-lg">{name}</h2>

          <div className="flex flex-col space-y-1 text-sm">
            <span>{time} min</span>
            <span>{level}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
