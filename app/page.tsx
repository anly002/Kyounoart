import AgeGate from "@/components/AgeGate";
import Hero from "@/components/Hero";
import YearNav from "@/components/YearNav";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <AgeGate />
      <main className="min-h-screen bg-white">
        <Hero />
        <YearNav />
        <Gallery />
        <footer className="border-t border-neutral-200 px-6 py-10 text-center text-xs tracking-widest text-neutral-400 uppercase">
          © {new Date().getFullYear()} Kyouno
        </footer>
      </main>
    </>
  );
}
