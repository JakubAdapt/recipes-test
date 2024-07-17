'use-client'

import { useState } from 'react'

const Search = () => {
  const [text, setText] = useState('')

  return (
    <div className="">
      <input
        type="text"
        placeholder="Search recipes..."
        className="block w-full rounded-md border-0 p-1 text-orange"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default Search
