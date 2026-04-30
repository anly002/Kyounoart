"use client";

import { useState } from "react";
import {
  YEARS,
  artworksByYear,
  getFlatArtworks,
  type Artwork,
} from "@/data/artworks";
import GallerySection from "./GallerySection";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const flat = getFlatArtworks();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openByArtwork = (artwork: Artwork) => {
    const idx = flat.findIndex(
      (a) => a.image === artwork.image && a.year === artwork.year,
    );
    if (idx !== -1) setActiveIndex(idx);
  };

  const close = () => setActiveIndex(null);
  const goOlder = () =>
    setActiveIndex((i) => (i === null ? i : (i - 1 + flat.length) % flat.length));
  const goNewer = () =>
    setActiveIndex((i) => (i === null ? i : (i + 1) % flat.length));

  const orderedYears = [...YEARS].reverse();

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
          onOlder={goOlder}
          onNewer={goNewer}
        />
      )}
    </>
  );
}
