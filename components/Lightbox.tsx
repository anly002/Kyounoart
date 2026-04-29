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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
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
        className="absolute left-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:left-6"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
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
        className="absolute right-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[88vh] max-w-[92vw] items-center justify-center"
      >
        <Image
          src={artwork.image}
          alt={artwork.title}
          width={artwork.width}
          height={artwork.height}
          sizes="92vw"
          priority
          className="h-auto max-h-[88vh] w-auto max-w-[92vw] object-contain"
        />
      </div>
    </div>
  );
}
