import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Roadmap } from "@/components/Roadmap";
import { Quote } from "@/components/Quote";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-dvh flow-root bg-[#080808]">
        <Header />
        <Hero />
        <LogoBar />
        <Roadmap />
        <Quote />
        <Features />
        <Footer />
      </main>
    </PageWrapper>
  );
}
