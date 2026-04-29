import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[60vh] w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/100825.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-center blur-xs"
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]">
        <div className="relative px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7">
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 h-10 w-10 border-t-[5px] border-l-[5px] border-[#7dd3b0] sm:h-12 sm:w-12 md:h-14 md:w-14"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute right-0 bottom-0 h-10 w-10 border-r-[5px] border-b-[5px] border-pink-200 sm:h-12 sm:w-12 md:h-14 md:w-14"
          />
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-[#7dd3b0]">Kyo</span>
            <span className="text-pink-200">uno</span>
          </h1>
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.45em] sm:text-base md:text-lg">
          Illustration
        </p>

        <SocialLinks className="mt-10" />
      </div>
    </section>
  );
}
