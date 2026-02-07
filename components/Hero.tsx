import Link from "next/link";
import Image from "next/image";
import { Compass } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { staticContent } from "@/lib/data/staticContent";

// Server Component - uses static content, no client state
export function Hero() {
  const { hero, brand } = staticContent;

  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Corner decorations */}
      <div className="absolute top-32 left-6 w-16 h-16 border-l border-t border-white/10" />
      <div className="absolute top-32 right-6 w-16 h-16 border-r border-t border-white/10" />

      <div className="max-w-[1200px] mx-auto relative">
        {/* Label */}
        <ScrollReveal delay={0}>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-white/40 text-[12px] uppercase tracking-[0.2em] font-mono">
              {hero.label}
            </span>
          </div>
        </ScrollReveal>

        {/* Hero Text */}
        <ScrollReveal delay={50}>
          <div className="mb-8 max-w-4xl">
            <h1 className="text-[48px] md:text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.03em] text-white font-medium">
              {hero.headline}
              <br />
              <span className="text-white/40">{hero.headlineAccent}</span>
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-white/50 text-[18px] md:text-[20px] leading-relaxed max-w-xl mb-10">
            {hero.description}
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap items-center gap-4 mb-20">
            <Link
              href={hero.primaryCta.href}
              className="bg-white text-[#0a0a0a] px-6 py-3 rounded-full text-[14px] font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
            >
              <Compass size={16} />
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="text-white/40 text-[14px] hover:text-white/70 transition-colors flex items-center gap-2 group"
            >
              {hero.secondaryCta.label}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Hero Visual */}
        <ScrollReveal delay={200}>
          <div className="relative w-full">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/[0.08] bg-gradient-to-b from-[#111] to-[#0a0a0a]">
              {/* Blueprint grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              
              {/* Architectural wireframe */}
              <Image
                src="/images/illustrations/hero-wireframe.svg"
                alt="Architectural wireframe"
                fill
                className="object-cover opacity-80"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              
              {/* Floating UI elements */}
              <div className="absolute top-6 right-6 bg-[#111]/80 backdrop-blur border border-white/[0.08] rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white/60 text-[11px] font-mono uppercase">Layers</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-white/20" />
                    <div className="w-20 h-2 bg-white/10 rounded" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-white/10" />
                    <div className="w-16 h-2 bg-white/10 rounded" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-white/5" />
                    <div className="w-24 h-2 bg-white/10 rounded" />
                  </div>
                </div>
              </div>
              
              {/* Measurement badge */}
              <div className="absolute bottom-6 left-6 bg-[#111]/80 backdrop-blur border border-white/[0.08] rounded-lg px-3 py-2">
                <span className="text-white/60 text-[11px] font-mono">1:100 Scale</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
