import Link from "next/link";
import Image from "next/image";
import { Map, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staticContent } from "@/lib/data/staticContent";

// Server Component
export function Roadmap() {
  const { roadmap } = staticContent;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Geometric accent */}
      <div className="absolute top-0 right-[15%] w-px h-40 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="absolute top-20 right-[15%] w-20 h-px bg-gradient-to-r from-white/10 to-transparent" />

      <div className="max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-6">
                <Map size={14} className="text-white/40" />
                <span className="text-white/40 text-[12px] uppercase tracking-[0.2em] font-mono">
                  {roadmap.label}
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={50}>
              <h2 className="text-[40px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-white font-medium mb-6">
                {roadmap.headline}
                <br />
                <span className="text-white/40">{roadmap.headlineAccent}</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="text-white/50 text-[16px] md:text-[18px] leading-relaxed max-w-md mb-8">
                {roadmap.description}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={150}>
              <Link
                href={roadmap.cta.href}
                className="inline-flex items-center gap-2 bg-white text-[#0a0a0a] px-6 py-3 rounded-full text-[14px] font-medium hover:bg-white/90 transition-colors group"
              >
                {roadmap.cta.label}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right — Architectural visualization */}
          <ScrollReveal delay={150} direction="left">
            <div className="relative h-[320px] md:h-[400px]">
              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              
              {/* Roadmap structure SVG */}
              <Image
                src={roadmap.illustration}
                alt="Product roadmap visualization"
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Phase labels */}
              <div className="absolute bottom-4 left-4 text-white/30 text-[10px] font-mono">v1.0</div>
              <div className="absolute top-1/2 left-4 text-white/20 text-[10px] font-mono">v0.5</div>
              <div className="absolute top-8 left-4 text-white/15 text-[10px] font-mono">beta</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
