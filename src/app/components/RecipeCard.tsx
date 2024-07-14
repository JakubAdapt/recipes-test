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
      <div className="flex w-full gap-2 p-5">
        <div className="h-24 w-1/3">
          {image && (
            <ContentfulImage alt={image.fields.title || ''} src={image.fields.file?.url || ''} />
          )}
        </div>
        <div className="flex w-2/3 flex-col justify-between">
          <h2 className="text-lg">{name}</h2>

          <div className="flex gap-2 text-sm">
            <span>{level}</span>
            <span>{time} mins</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
