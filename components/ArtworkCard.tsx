"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Artwork } from "@/data/artworks";

type Props = {
  artwork: Artwork;
  onOpen: () => void;
};

export default function ArtworkCard({ artwork, onOpen }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      aria-label={`Open ${artwork.title}`}
      className={
        "block w-full cursor-pointer overflow-hidden bg-neutral-50 transition-[opacity,transform] duration-700 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 " +
        (revealed
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0")
      }
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
