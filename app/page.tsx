import AgeGate from "@/components/AgeGate";
import Hero from "@/components/Hero";
import YearNav from "@/components/YearNav";
import Gallery from "@/components/Gallery";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <AgeGate />
      <main className="min-h-screen bg-white">
        <Hero />
        <YearNav />
        <Gallery />
        <footer className="border-t border-neutral-200 px-6 py-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
            <SocialLinks
              iconClassName="h-5 w-5"
              linkClassName="text-neutral-500 hover:text-neutral-900"
              gapClassName="gap-7"
            />
            <p className="text-xs tracking-widest text-neutral-400 uppercase">
              © {new Date().getFullYear()} Kyouno
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
