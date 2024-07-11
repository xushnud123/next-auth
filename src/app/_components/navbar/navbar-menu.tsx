"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className={cn(
        "duration-20 relative h-max rounded-full border border-transparent px-4 py-2 transition-all",
        active === item && "border-black/10",
      )}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -5 }}
          animate={{ opacity: 1, scale: 1, y: -5 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 transform pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="overflow-hidden rounded-2xl border border-white/[0.2] shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="h-full w-max p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition}
        >
          {active === item && (
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 transform bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all  duration-200" />
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flex items-center justify-center space-x-4 rounded-full border border-white/[0.2] bg-slate-950 px-8 py-2 shadow-input"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link
      href={href}
      className="flex space-x-2 rounded-[16px] border border-transparent bg-transparent p-2 transition-all duration-200 hover:border-white/[0.2]
       hover:bg-slate-900 hover:backdrop-blur-lg"
    >
      <Image
        src={src}
        width={140}
        height={70}
        objectFit="cover"
        alt={title}
        className="h-[112px] flex-shrink-0 rounded-md object-cover shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-white">{title}</h4>
        <p className="max-w-[10rem] text-sm text-neutral-300">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-200 transition-all duration-200 hover:text-neutral-400"
    >
      {children}
    </Link>
  );
};
