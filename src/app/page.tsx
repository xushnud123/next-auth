import getSession from "@/lib/getSession";
import prisma from "@/lib/prisma";
import Link from "next/link";
import Hero from "./_components/hero/hero";
import Second from "./_components/second/second";

export default async function Home() {
  const users = await prisma.user.findMany();
  const session = await getSession();
  const user = session?.user;

  console.log(users);
  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <Hero />
      <Second />

      <h1 className="text-center text-4xl font-bold">Next-Auth V5 Tutorial</h1>
      <h2 className="text-center text-2xl font-semibold">Users</h2>
      <ul className="list-inside list-disc">
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`} className="hover:underline">
              {user.name || `User ${user.id}`}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
