import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageWrapper } from "@/components/PageWrapper";
import { BuildLogClient } from "./BuildLogClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Log — Architect",
  description: "Changelog and deployment history for the Architect platform.",
};

export default function BuildLogPage() {
  return (
    <PageWrapper>
      <div className="min-h-dvh bg-[#080808]">
        <Header />
        <BuildLogClient />
        <Footer />
      </div>
    </PageWrapper>
  );
}
