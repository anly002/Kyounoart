"use client";

import Image from "next/image";
import type { Artwork } from "@/data/artworks";

type Props = {
  artwork: Artwork;
  onOpen: () => void;
};

export default function ArtworkCard({ artwork, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${artwork.title}`}
      className="block w-full cursor-pointer overflow-hidden bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
    >
      <Image
        src={artwork.image}
        alt={artwork.title}
        width={artwork.width}
        height={artwork.height}
        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="h-auto w-full"
      />
    </button>
  );
}
