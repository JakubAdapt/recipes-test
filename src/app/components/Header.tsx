import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-black text-white p-4 top-0 fixed w-full z-20">
      <Link href="/" className="text-2xl font-bold">
        Home
      </Link>
    </header>
  );
};
