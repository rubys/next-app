import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <h1 className="text-2xl">Welcome to your Next.js app!</h1>
      <Image
        className="relative"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <Image
        className="relative"
        src="/flydotio.svg"
        alt="Fly.io Logo"
        width={180}
        height={163}
        priority
      />
    </main>
  );
}
