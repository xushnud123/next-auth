import Image from "next/image";
import { FC } from "react";

interface SecondProps {}

const Second: FC<SecondProps> = ({}) => {
  return (
    <div className="my-[60px] w-full">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-10 rounded-2xl border border-white/[0.2] bg-slate-900/20 px-10 py-12 backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/50 hover:backdrop-blur-2xl">
        <div>
          <h1 className=" text-7xl font-normal leading-[90px] text-white">
            Lenovo <br />
            <span className="font-bold">IdeaPad</span> GX120
          </h1>
          <button className="group relative mt-6 inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline  shadow-2xl shadow-zinc-900">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-2 ring-1 ring-white/10 ">
              <span className="text-base font-medium">{`Tailwind Connect`}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>
        <div>
          <Image
            src="/images/shop43-el-slide-product1 1 2.png"
            className="h-auto w-full"
            width={500}
            height={450}
            alt="Lenovo IdeaPad GX120"
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
