"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium !leading-[1.25] tracking-tight text-transparent md:text-7xl "
      >
        Bizdan{" "}
        <span className="rounded-lg bg-emerald-300/20 px-3 text-white backdrop-blur-lg">
          sifatli
        </span>
        ,
        <span className="rounded-lg bg-emerald-300/20 px-3 text-white backdrop-blur-lg">
          arzon
        </span>
        &nbsp;hamda <br />
        <span className="rounded-lg bg-emerald-300/20 px-3 text-white backdrop-blur-lg">
          muddatli to&apos;lov
        </span>
        &nbsp;evaziga xaridingizni amalga oshirish imkoniyati mavjud
      </motion.h1>
    </LampContainer>
  );
}
