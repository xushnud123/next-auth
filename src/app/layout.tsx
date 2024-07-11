import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { NavbarDemo } from "./_components/navbar/navbar";
import { cn } from "@/lib/utils";
import Sign from "@/components/Sign";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Next-Auth V5 Tutorial",
    absolute: "Next-Auth V5 tutorial",
  },
  description:
    "Learn how to use Auth.js v5 in Next.js with custom roles, caching, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("hello");
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-slate-950 !pt-[80px]")}>
        <NavbarDemo>{<Sign />}</NavbarDemo>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
