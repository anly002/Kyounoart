"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Artwork } from "@/data/artworks";

type Props = {
  artwork: Artwork;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ artwork, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={artwork.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/90"
    >
      <Image
        src={artwork.image}
        alt={artwork.title}
        width={artwork.width}
        height={artwork.height}
        sizes="100vh"
        priority
        onClick={(e) => e.stopPropagation()}
        className="h-screen w-auto max-w-none cursor-default"
      />
    </div>
  );
}
