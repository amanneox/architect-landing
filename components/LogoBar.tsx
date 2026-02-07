import { ScrollReveal } from "@/components/ScrollReveal";
import { staticContent } from "@/lib/data/staticContent";

// Server Component
export function LogoBar() {
  const { logoBar } = staticContent;

  return (
    <section className="py-12 px-6 border-y border-white/[0.06] bg-[#080808]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="text-center text-white/30 text-[12px] uppercase tracking-[0.2em] font-mono mb-8">
            {logoBar.label}
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logoBar.partners.map((partner) => (
              <div
                key={partner.name}
                className="text-white/20 hover:text-white/40 transition-colors text-[14px] font-medium"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
