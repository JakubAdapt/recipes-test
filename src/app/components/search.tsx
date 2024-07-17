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
        className="block w-full rounded-b border border-t-0 border-gray bg-black/80 p-2 text-white outline-0 backdrop-blur-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  )
}

export default Search
