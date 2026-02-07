import { ScrollReveal } from "@/components/ScrollReveal";
import { staticContent } from "@/lib/data/staticContent";

// Server Component
export function Quote() {
  const { quote } = staticContent;

  return (
    <section className="py-24 px-6 relative">
      {/* Horizontal divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 border border-white/10 bg-[#0a0a0a] rotate-45 -translate-y-1/2" />

      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-white/40 text-[12px] uppercase tracking-[0.2em] font-mono">
              {quote.label}
            </span>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl">
          <ScrollReveal delay={100}>
            <blockquote className="text-[24px] md:text-[32px] lg:text-[40px] leading-[1.3] tracking-[-0.02em] text-white/80 font-light mb-8">
              {quote.text}
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white/60 text-[12px] font-medium">A</span>
              </div>
              <div>
                <p className="text-white font-medium text-[14px]">{quote.author.name}</p>
                <p className="text-white/40 text-[13px]">{quote.author.title}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
