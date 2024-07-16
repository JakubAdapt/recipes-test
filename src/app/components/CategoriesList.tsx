import ContentfulImage from '@app/components/ContentfulImage'
import { getCategories } from '@services/getCategories'
import Link from 'next/link'

const CategoriesList = async () => {
  const categories = await getCategories()

  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {categories.map((category, index) => (
        <Link
          href={`category/${category.slug}`}
          key={index}
          className="block w-full rounded-md bg-gray pb-6 text-white"
        >
          {category.image && (
            <ContentfulImage
              alt={category.image.fields.title || ''}
              src={category.image.fields.file?.url || ''}
              className="rounded-t-md"
            />
          )}

          <p className="text-center">{category.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default CategoriesList
