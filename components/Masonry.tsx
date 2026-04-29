"use client";

import { useEffect, useState } from "react";
import type { Artwork } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";

type Props = {
  items: Artwork[];
  onOpen: (artwork: Artwork) => void;
};

function getColumnCount(width: number): number {
  if (width >= 1280) return 4;
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

function distribute(items: Artwork[], cols: number): Artwork[][] {
  const columns: Artwork[][] = Array.from({ length: cols }, () => []);
  const heights = new Array(cols).fill(0);
  for (const item of items) {
    const ratio = item.height / item.width;
    let minIdx = 0;
    for (let i = 1; i < cols; i++) {
      if (heights[i] < heights[minIdx]) minIdx = i;
    }
    columns[minIdx].push(item);
    heights[minIdx] += ratio;
  }
  return columns;
}

export default function Masonry({ items, onOpen }: Props) {
  const [cols, setCols] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const compute = () => setCols(getColumnCount(window.innerWidth));
    compute();
    setMounted(true);
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const columnCount = mounted ? cols : 1;
  const columns = distribute(items, columnCount);

  return (
    <div className="flex w-full gap-4">
      {columns.map((col, i) => (
        <div key={i} className="flex flex-1 flex-col gap-4">
          {col.map((art) => (
            <ArtworkCard
              key={art.image}
              artwork={art}
              onOpen={() => onOpen(art)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
