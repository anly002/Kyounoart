export type Year = 2023 | 2024 | 2025 | 2026;

export type Artwork = {
  title: string;
  image: string;
  year: Year;
  width: number;
  height: number;
};

export const YEARS: readonly Year[] = [2023, 2024, 2025, 2026] as const;

export const artworksByYear: Record<Year, Artwork[]> = {
  2023: [
    {
      title: "Untitled",
      image: "/images/artworks/2023/120623.jpg",
      year: 2023,
      width: 1200,
      height: 1600,
    },
  ],
  2024: [
    {
      title: "Untitled",
      image: "/images/artworks/2024/021524v2.jpg",
      year: 2024,
      width: 1200,
      height: 1600,
    },
    {
      title: "Untitled",
      image: "/images/artworks/2024/100724.jpg",
      year: 2024,
      width: 1200,
      height: 1600,
    },
  ],
  2025: [],
  2026: [
    {
      title: "Daki",
      image: "/images/artworks/2026/Daki041026.jpg",
      year: 2026,
      width: 1200,
      height: 1600,
    },
    {
      title: "Marin",
      image: "/images/artworks/2026/marin042826.jpg",
      year: 2026,
      width: 1200,
      height: 1600,
    },
    {
      title: "Meimei",
      image: "/images/artworks/2026/meimei041426.jpg",
      year: 2026,
      width: 1200,
      height: 1600,
    },
    {
      title: "Uro",
      image: "/images/artworks/2026/uro033126.jpg",
      year: 2026,
      width: 1200,
      height: 1600,
    },
    {
      title: "Yorozu",
      image: "/images/artworks/2026/yorozu041826.jpg",
      year: 2026,
      width: 1200,
      height: 1600,
    },
    {
      title: "Yuta",
      image: "/images/artworks/2026/yuta041326.jpg",
      year: 2026,
      width: 1200,
      height: 1600,
    },
  ],
};

export type FlatArtwork = Artwork & { id: string };

export function getFlatArtworks(): FlatArtwork[] {
  const out: FlatArtwork[] = [];
  for (const year of YEARS) {
    for (const a of artworksByYear[year]) {
      out.push({ ...a, id: `${year}-${a.image}` });
    }
  }
  return out;
}
