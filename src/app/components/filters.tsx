import { getCategories } from '@services/getCategories'
import { getTags } from '@services/getTags'
import { LevelType } from '@typings/models/level.model'
import { TagType } from '@typings/models/tag.model'

type LevelOptions = {
  value: LevelType
  label: LevelType
}

type TagOptions = {
  value: TagType['name']
  label: TagType['name']
}

type Options = {
  value: string
  label: string
}

export const Filters = async () => {
  const categories = await getCategories()
  const tags = await getTags()

  let categoryOptions: Options[] = []

  if (categories.isOk() && categories.value) {
    categoryOptions = categories.value.map(({ slug, title }) => ({
      value: slug,
      label: title,
    }))
  }

  let tagsOptions: TagOptions[] = []

  if (tags.isOk() && tags.value) {
    tagsOptions = tags.value.map(({ name }) => ({
      value: name,
      label: name,
    }))
  }

  const levelOptions: LevelOptions[] = [
    { value: 'Easy', label: 'Easy' },
    { value: 'Average', label: 'Average' },
    { value: 'Hard', label: 'Hard' },
  ]

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="category" className="text-gray-700 block text-sm font-medium">
          Category
        </label>
        <select
          id="category"
          name="category"
          className="border-gray-300 mt-1 block w-full rounded-md py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">All</option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="tags" className="text-gray-700 block text-sm font-medium">
          Tags
        </label>
        <select
          id="tags"
          name="tags"
          className="border-gray-300 mt-1 block w-full rounded-md py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">All</option>
          {tagsOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="level" className="text-gray-700 block text-sm font-medium">
          Level
        </label>
        <select
          id="level"
          name="level"
          className="border-gray-300 mt-1 block w-full rounded-md py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">All</option>
          {levelOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
