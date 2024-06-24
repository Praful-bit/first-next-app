import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen flex-col p-24">
      <p className="text-xl pb-2">Welocme in Next js Project</p>
      <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert pb-2"
          width={100}
          height={24}
          priority
        />
        <p className="text-yellow-500"><Link href="/about">About-Us</Link></p>
        <p className="text-red-500 font-serif text-xl p-1"><Link href="/awesome">Awesome Page</Link></p>
        <p className="text-orange-500 font-serif text-xl p-1"><Link href="/blog">Blog</Link></p>
    </main>
  );
}
