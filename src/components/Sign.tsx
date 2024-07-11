"use server";
import { signIn } from "@/auth";
import UserButton from "./UserButton";
import getSession from "@/lib/getSession";
import { cn } from "@/lib/utils";

export default async function NavBar() {
  const session = await getSession();
  const user = session?.user;

  return user ? (
    <UserButton user={user} />
  ) : (
    <div
      className={cn(
        " group relative cursor-pointer rounded-full border border-transparent px-4 py-2 text-white transition-all duration-200",
        "hover:border-black/10",
      )}
    >
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
        className="h-full w-full"
      >
        <button type="submit" className="h-full w-full">
          Sign In
        </button>
      </form>

      <span className=" absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0  transition-all duration-200 group-hover:opacity-100" />
    </div>
  );
}
