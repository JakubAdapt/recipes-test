import { getCategories } from '@services/getCategories'
import { getTags } from '@services/getTags'
import { SelectOption } from '@app/components/select'
import { Filters } from '@app/components/filters'

export const FiltersContainer = async () => {
  const categories = await getCategories()
  const tags = await getTags()

  let categoryOptions: SelectOption[] = []

  if (categories.isOk() && categories.value) {
    categoryOptions = categories.value.map(({ slug, title }) => ({
      value: slug,
      label: title,
    }))
  }

  let tagsOptions: SelectOption[] = []

  if (tags.isOk() && tags.value) {
    tagsOptions = tags.value.map(({ name }) => ({
      value: name,
      label: name,
    }))
  }

  const levelOptions: SelectOption[] = [
    { value: 'Easy', label: 'Easy' },
    { value: 'Average', label: 'Average' },
    { value: 'Hard', label: 'Hard' },
  ]

  return (
    <div className="items-baseline justify-between gap-3 space-y-4 px-4 sm:flex">
      <Filters {...{ categoryOptions, tagsOptions, levelOptions }} />
    </div>
  )
}
