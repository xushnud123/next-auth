"use client";
import { toast, useToast } from "@/components/ui/use-toast";
import { computers } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface ProductsProps {}

export const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const Products: FC<ProductsProps> = ({}) => {
  const [active, setActive] = useState<string>("All");
  const [sort, setSort] = useState<typeof computers>(computers);
  const { toast } = useToast();
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const uniqFilterKeys = [
    "All",
    ...new Set(computers.map((item) => item.manufacturer)),
  ];

  useEffect(() => {
    const newSort = computers.filter(
      (item) => item.manufacturer === active || active === "All",
    );

    setSort(newSort);
  }, [active]);

  return (
    <div className="my-[60px] block">
      <div className="max-auto max-w-[1200px]">
        <h2 className="text-center text-[36px] leading-normal text-white">
          Products
        </h2>

        <div className="mt-10 flex items-center justify-center gap-3">
          {uniqFilterKeys.map((item, index) => (
            <button
              key={item}
              className={cn(
                "duration-20 relative h-max rounded-full border border-white/[0.2] px-5 py-2 text-white transition-all",
                "hover:bg-emerald-300/10",
                active === item && "bg-emerald-300/10",
              )}
              onClick={() => setActive(item)}
            >
              <span>{item}</span>

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
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-3 py-10">
          <AnimatePresence>
            {sort.map((item, idx) => (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                layout
                key={item.model}
                className="group relative block  h-full  w-full p-3"
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 block h-full w-full rounded-3xl bg-slate-800/[0.8]"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <div
                  className={cn(
                    "relative z-20 h-full w-full overflow-hidden rounded-[20px] border border-white/[0.2] bg-slate-950  text-white backdrop-blur-lg",
                  )}
                >
                  <div className="relative h-[180px] w-full rounded-[0_0_20px_20px] bg-transparent">
                    <Image
                      src="/images/png-transparent-mac-book-pro-macbook-desktop-macos-sierra-macbook-pro-13inch-color-flower-desktop-wallpaper-removebg-preview.png"
                      alt={item.model}
                      width={280}
                      height={180}
                      objectFit="cover"
                      className=" h-full w-full rounded-[0_0_20px_20px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 px-3 py-5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[16px] font-medium text-white/60">
                        Brand:&nbsp;
                        <span className="text-white">{item.manufacturer}</span>
                      </h4>
                      <h5 className="text-[14px] font-medium text-white/60">
                        Model:&nbsp;
                        <span className="text-white">{item.model}</span>
                      </h5>
                    </div>
                    <p className="text-[14px] font-normal text-white/60">
                      Description:{" "}
                      <span className="text-white">
                        {item.features.reduce(
                          (a, b, idx) => `${a}${idx !== 0 ? "," : ""} ${b}`,
                          "",
                        )}
                      </span>
                    </p>
                    <h2 className="mt-2 text-[18px] font-medium text-white/80">
                      Price:&nbsp;
                      <span className="text-white">{item.price}$</span>
                    </h2>
                    <button
                      className={cn(
                        "group relative h-max rounded-full border border-white/[0.2] px-5 py-2 text-white transition-all duration-200",
                        "mt-3 hover:bg-emerald-300/10",
                      )}
                      onClick={() =>
                        toast({
                          description: "Savatga saqlandi",
                        })
                      }
                    >
                      <span>Savatga saqlash</span>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={transition}
                      >
                        <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 transform bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-all duration-200  group-hover:opacity-100" />
                      </motion.div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
