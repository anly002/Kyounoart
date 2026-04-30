"use client";

import { useEffect, useState } from "react";
import { YEARS, type Year } from "@/data/artworks";

const ORDERED_YEARS: Year[] = [...YEARS].reverse();

export default function YearNav() {
  const [active, setActive] = useState<Year>(ORDERED_YEARS[0]);

  useEffect(() => {
    const compute = () => {
      const sections = ORDERED_YEARS.map((y) => ({
        y,
        el: document.getElementById(`y-${y}`),
      }))
        .filter((s): s is { y: Year; el: HTMLElement } => s.el !== null)
        .map((s) => ({
          y: s.y,
          top: s.el.getBoundingClientRect().top + window.scrollY,
        }))
        .sort((a, b) => a.top - b.top);

      if (sections.length === 0) return;

      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      if (scrollY + viewportH >= docH - 4) {
        setActive(sections[sections.length - 1].y);
        return;
      }

      const line = scrollY + viewportH * 0.3;
      let current = sections[0].y;
      for (const s of sections) {
        if (s.top <= line) current = s.y;
      }
      setActive(current);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <nav
      aria-label="Years"
      className="sticky top-0 z-30 border-b border-neutral-200/70 bg-white/85 backdrop-blur"
    >
      <ul className="group/nav mx-auto flex max-w-5xl items-center justify-center gap-8 px-6 py-4 text-sm tracking-wide text-neutral-500">
        {ORDERED_YEARS.map((year) => {
          const isActive = year === active;
          return (
            <li key={year}>
              <a
                href={`#y-${year}`}
                className={
                  "group/item relative inline-block py-1 font-[family-name:var(--font-display)] font-semibold transition-colors hover:text-neutral-700 " +
                  (isActive ? "text-neutral-700" : "")
                }
              >
                {year}
                <span
                  aria-hidden
                  className={
                    "pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-current transition-transform duration-300 ease-out group-hover/item:!scale-x-100 " +
                    (isActive
                      ? "scale-x-100 group-has-[a:hover]/nav:scale-x-0"
                      : "scale-x-0")
                  }
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
