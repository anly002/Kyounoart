"use client";

import type { Artwork } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";

type Props = {
  items: Artwork[];
  onOpen: (artwork: Artwork) => void;
};

export default function Masonry({ items, onOpen }: Props) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((art) => (
        <ArtworkCard
          key={art.image}
          artwork={art}
          onOpen={() => onOpen(art)}
        />
      ))}
    </div>
  );
}
