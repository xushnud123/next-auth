import { FC } from "react";
import { SparklesCore } from "./sparkles-core";
import Image from "next/image";
import { FlipWords } from "./flip-words";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="h-[calc(100vh_-_200px)] w-full">
      <div className="mx-auto box-border flex max-w-[1200px] flex-col items-center justify-center overflow-hidden rounded-md bg-slate-950 px-[10px] pt-[100px]">
        <h1 className="relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-9xl">
          Nout Home
        </h1>
        <div className="relative h-40 w-[40rem]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>

      <div className="mt-20 flex items-center justify-center px-4">
        <div className="mx-auto text-4xl font-normal text-neutral-400">
          Barcha Turdagi notebooklar
          <FlipWords
            words={["MacBook", "Aser", "Asus", "Lenovo", "HP", "Victus"]}
          />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Hero;
