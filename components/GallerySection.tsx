"use client";

import type { Artwork, Year } from "@/data/artworks";
import Masonry from "./Masonry";

type Props = {
  year: Year;
  artworks: Artwork[];
  onOpen: (artwork: Artwork) => void;
};

export default function GallerySection({ year, artworks, onOpen }: Props) {
  return (
    <section
      id={`y-${year}`}
      className="scroll-mt-24 w-full px-6 py-20 sm:px-10 md:py-28"
    >
      <header className="mb-10 flex items-baseline gap-5">
        <h2 className="font-[family-name:var(--font-display)] text-5xl font-black tracking-tight text-neutral-700 sm:text-6xl md:text-7xl">
          {year}
        </h2>
        <span className="text-sm tracking-widest text-neutral-400 uppercase">
          {artworks.length}{" "}
          {artworks.length === 1 ? "work" : "works"}
        </span>
      </header>

      {artworks.length === 0 ? (
        <p className="py-14 text-center text-sm tracking-[0.4em] text-neutral-400 uppercase">
          Coming soon
        </p>
      ) : (
        <Masonry items={artworks} onOpen={onOpen} />
      )}
    </section>
  );
}
