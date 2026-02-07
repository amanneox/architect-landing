import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageWrapper } from "@/components/PageWrapper";
import { RoadmapClient } from "./RoadmapClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap — Architect",
  description: "See what we're building next. The future of architectural design tools, planned with precision.",
};

export default function RoadmapPage() {
  return (
    <PageWrapper>
      <div className="min-h-dvh bg-[#080808]">
        <Header />
        <RoadmapClient />
        <Footer />
      </div>
    </PageWrapper>
  );
}
