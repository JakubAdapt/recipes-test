'use-client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const Search = () => {
  const router = useRouter()
  const [text, setText] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/recipes?search=${text}`)
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search recipes..."
        className="block w-full rounded-md border-0 p-1 text-orange"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  )
}

export default Search
