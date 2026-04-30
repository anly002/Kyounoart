"use client";

import { useMemo, useState } from "react";
import {
  YEARS,
  artworksByYear,
  type Artwork,
  type FlatArtwork,
} from "@/data/artworks";
import GallerySection from "./GallerySection";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const orderedYears = useMemo(() => [...YEARS].reverse(), []);

  const flat = useMemo<FlatArtwork[]>(() => {
    const out: FlatArtwork[] = [];
    for (const year of orderedYears) {
      for (const a of artworksByYear[year]) {
        out.push({ ...a, id: `${year}-${a.image}` });
      }
    }
    return out;
  }, [orderedYears]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openByArtwork = (artwork: Artwork) => {
    const idx = flat.findIndex(
      (a) => a.image === artwork.image && a.year === artwork.year,
    );
    if (idx !== -1) setActiveIndex(idx);
  };

  const close = () => setActiveIndex(null);
  const goPrev = () =>
    setActiveIndex((i) =>
      i === null ? i : (i - 1 + flat.length) % flat.length,
    );
  const goNext = () =>
    setActiveIndex((i) => (i === null ? i : (i + 1) % flat.length));

  return (
    <>
      {orderedYears.map((year) => (
        <GallerySection
          key={year}
          year={year}
          artworks={artworksByYear[year]}
          onOpen={openByArtwork}
        />
      ))}

      {activeIndex !== null && (
        <Lightbox
          artwork={flat[activeIndex]}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
