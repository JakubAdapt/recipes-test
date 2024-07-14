'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'

export const Header = () => {
  const router = useRouter()

  return (
    <header className="fixed top-0 z-20 flex w-full items-center justify-between bg-black p-4 text-white">
      <ArrowLeftIcon onClick={() => router.back()} className="h-6 w-6">
        Back
      </ArrowLeftIcon>

      <Link href="/" className="text-2xl font-bold">
        Home
      </Link>

      <MagnifyingGlassIcon className="h-6 w-6" />
    </header>
  )
}
