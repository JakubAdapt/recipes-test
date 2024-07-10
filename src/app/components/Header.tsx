import Link from 'next/link'

export const Header = () => {
  return (
    <header className="fixed top-0 z-20 w-full bg-black p-4 text-white">
      <Link href="/" className="text-2xl font-bold">
        Home
      </Link>
    </header>
  )
}
