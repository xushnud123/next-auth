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
        "relative mx-auto rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center tracking-[0.15px] text-white backdrop-blur-sm transition-all duration-200 hover:bg-emerald-300/15",
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

      <div className="absolute inset-x-0  -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
    </div>
  );
}
