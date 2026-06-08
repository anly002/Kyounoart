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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/90 px-4 py-6 [animation:fade-in_180ms_ease-out] sm:px-6 sm:py-8 md:py-12"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 cursor-pointer text-white/70 transition-colors duration-150 hover:text-white sm:top-6 sm:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M6 6 18 18M18 6 6 18" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className="absolute left-2 z-10 cursor-pointer text-white/70 transition-colors duration-150 hover:text-white sm:left-6"
      >
        <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="m15 6-6 6 6 6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className="absolute right-2 z-10 cursor-pointer text-white/70 transition-colors duration-150 hover:text-white sm:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>

      <Image
        key={artwork.image}
        src={artwork.image}
        alt={artwork.title}
        width={artwork.width}
        height={artwork.height}
        sizes="90vh"
        priority
        onClick={(e) => e.stopPropagation()}
        className="h-full w-auto max-w-none cursor-default object-contain [animation:pop-in_260ms_ease-out]"
      />
    </div>
  );
}
