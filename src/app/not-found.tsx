"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="space-y-3 px-3 py-10 text-center">
      <h1 className="text-4xl font-bold">Not Found</h1>
      <p className="text-muted-foreground">This page does not exist</p>
      <button
        className={cn(
          "relative mx-auto rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center tracking-[0.15px] text-white backdrop-blur-sm transition-all duration-200 hover:bg-emerald-300/15",
        )}
        onClick={() => router.push("/")}
      >
        Home
        <div className="absolute inset-x-0  -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      </button>
    </main>
  );
}
