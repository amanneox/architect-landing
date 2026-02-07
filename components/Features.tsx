"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useCallback } from "react";
import { FileText, Shapes, ArrowUpRight, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useSetHoveredFeature } from "@/lib/stores";
import { staticContent } from "@/lib/data/staticContent";

// Type definitions
interface FeatureCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link: {
    label: string;
    href: string;
    icon: string;
  };
}

interface MiniFeature {
  label: string;
  description: string;
}

const iconMap: Record<string, LucideIcon> = {
  "file-text": FileText,
  "shapes": Shapes,
};

// Memoized feature card to prevent unnecessary re-renders
interface FeatureCardProps {
  card: FeatureCard;
  index: number;
  onHover: (id: string | null) => void;
}

const FeatureCard = memo(function FeatureCard({
  card,
  index,
  onHover,
}: FeatureCardProps) {
  const Icon = iconMap[card.link.icon];

  const handleMouseEnter = useCallback(() => {
    onHover(card.id);
  }, [onHover, card.id]);

  const handleMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

  return (
    <ScrollReveal delay={index * 150}>
      <div 
        className="group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#0f0f0f] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-white font-medium text-[16px] mb-2">
              {card.title}
            </h3>
            <p className="text-white/40 text-[14px] leading-relaxed mb-3 max-w-sm">
              {card.description}
            </p>
          </div>
          <Link
            href={card.link.href}
            className="flex items-center gap-1 text-white/50 text-[13px] hover:text-white/80 transition-colors shrink-0 ml-4"
          >
            {Icon && <Icon size={14} />}
            {card.link.label}
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
});

// Memoized mini feature
interface MiniFeatureProps {
  feature: MiniFeature;
  onHover: (id: string | null) => void;
}

const MiniFeature = memo(function MiniFeature({
  feature,
  onHover,
}: MiniFeatureProps) {
  const handleMouseEnter = useCallback(() => {
    onHover(feature.label);
  }, [onHover, feature.label]);

  const handleMouseLeave = useCallback(() => {
    onHover(null);
  }, [onHover]);

  return (
    <div 
      className="group cursor-default"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-white/70 text-[14px] font-medium group-hover:text-white transition-colors">
          {feature.label}
        </span>
        <ArrowUpRight size={12} className="text-white/20 group-hover:text-white/50 transition-colors" />
      </div>
      <p className="text-white/30 text-[12px]">{feature.description}</p>
    </div>
  );
});

function FeaturesComponent() {
  const setHoveredFeature = useSetHoveredFeature();
  const { features } = staticContent;

  const handleHover = useCallback((id: string | null) => {
    setHoveredFeature(id);
  }, [setHoveredFeature]);

  return (
    <section className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 border border-white/10 bg-[#0a0a0a] rotate-45 -translate-y-1/2" />

      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-white/40 text-[12px] uppercase tracking-[0.2em] font-mono">
              {features.label}
            </span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {(features.cards as unknown as FeatureCard[]).map((card, index) => (
            <FeatureCard 
              key={card.id} 
              card={card} 
              index={index}
              onHover={handleHover}
            />
          ))}
        </div>
        
        <ScrollReveal delay={200}>
          <div className="mt-16 pt-16 border-t border-white/[0.06]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {(features.miniFeatures as unknown as MiniFeature[]).map((feature) => (
                <MiniFeature 
                  key={feature.label} 
                  feature={feature}
                  onHover={handleHover}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export const Features = memo(FeaturesComponent);
