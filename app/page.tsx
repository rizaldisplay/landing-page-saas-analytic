import Header from "@/components/Header";
import Hero from "@/components/ui/hero";
import Brand from "@/components/Brands";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Overview from "@/components/Overview";
import Review from "@/components/Review";
import Blog from "@/components/Blog";
import Cta from "@/components/ui/Cta";
import Footer from "@/components/Footer";
import Tawkto from "@/components/TawkTo";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Brand />
        <Features />
        <Process />
        <Overview />
        <Review />
        <Blog />
        <Cta />
        <Tawkto />
      </main>

      <Footer />
    </div>
  );
}
