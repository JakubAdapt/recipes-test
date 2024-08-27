'use-client'

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

export type ClickOutsideEvent = MouseEvent | TouchEvent | FocusEvent

type Props = {
  handleClickOutside: (event: ClickOutsideEvent) => void
}

const Search = ({ handleClickOutside }: Props) => {
  const ref = useRef(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const [text, setText] = useState(searchParams.get('search') || '')

  useOnClickOutside(ref, (event) => handleClickOutside(event))

  const handleParamsChange = (newText: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (newText) {
      params.set('search', newText)
    } else {
      params.delete('search')
    }

    router.push(`/recipes?${params.toString()}`)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleParamsChange(text)
  }

  const handleClear = () => {
    setText('')
    handleParamsChange('')
  }

  // if recipes page useDebounce TODO

  return (
    <form className="relative" onSubmit={handleSubmit} ref={ref}>
      <input
        autoFocus
        type="text"
        placeholder="Search recipes..."
        className="block w-full border-b border-gray bg-black/80 px-10 py-3 text-white outline-0 backdrop-blur-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <MagnifyingGlassIcon width={20} className="absolute left-2 top-[14px]" fill="#747474" />

      <XMarkIcon
        onClick={handleClear}
        width={24}
        className="absolute right-2 top-3 cursor-pointer"
        fill="#747474"
      />
    </form>
  )
}

export default Search
