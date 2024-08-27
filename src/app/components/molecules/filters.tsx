'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import { Select, SelectOption } from '@app/components/atoms/select'

type Props = {
  categoryOptions: SelectOption[]
  tagsOptions: SelectOption[]
  levelOptions: SelectOption[]
}

export const Filters = ({ categoryOptions, tagsOptions, levelOptions }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const onSetFilter = (type: 'category' | 'tag' | 'level', event: SelectOption | null) => {
    const params = new URLSearchParams(searchParams.toString())

    if (event?.value) {
      params.set(type, event.value)
    } else {
      params.delete(type)
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  const getDefaultValue = (type: 'category' | 'tag' | 'level', options: SelectOption[]) => {
    const value = searchParams.get(type)

    return options.find((option) => option.value === value) || null
  }

  return (
    <>
      <Select
        options={categoryOptions}
        label={'Category'}
        handleOnChange={(e) => onSetFilter('category', e)}
        value={getDefaultValue('category', categoryOptions)}
      />

      <Select
        options={tagsOptions}
        label={'Tags'}
        handleOnChange={(e) => onSetFilter('tag', e)}
        value={getDefaultValue('tag', tagsOptions)}
      />

      <Select
        options={levelOptions}
        label={'Level'}
        handleOnChange={(e) => onSetFilter('level', e)}
        value={getDefaultValue('level', levelOptions)}
      />
    </>
  )
}
