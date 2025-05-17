import Header from "@/components/Header";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden dark:bg-black">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
