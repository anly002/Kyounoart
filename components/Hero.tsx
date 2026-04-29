import Image from "next/image";

const SOCIALS = [
  {
    name: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="currentColor">
        <path d="M18.244 2H21l-6.52 7.45L22 22h-6.78l-4.79-6.27L4.8 22H2.04l6.99-7.99L2 2h6.93l4.33 5.73L18.244 2Zm-2.38 18.2h1.88L7.22 3.7H5.2L15.864 20.2Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
] as const;

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[60vh] w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/100825.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-[#7dd3b0]">Kyo</span>
          <span className="text-pink-200">uno</span>
        </h1>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.45em] sm:text-base md:text-lg">
          Illustration
        </p>

        <ul className="mt-10 flex items-center gap-8">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                aria-label={s.name}
                className="inline-flex items-center justify-center text-white/90 transition-colors hover:text-white"
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
