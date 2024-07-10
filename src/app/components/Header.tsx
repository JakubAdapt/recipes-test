import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 top-0 fixed w-full z-10">
      <Link href="/" className="text-2xl font-bold">
        Home
      </Link>
    </header>
  );
};
