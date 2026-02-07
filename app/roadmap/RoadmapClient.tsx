"use client";

import { useContent } from "@/lib/stores";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import { Map, ArrowRight } from "lucide-react";



const statusBadge: Record<string, string> = {
  completed: "text-emerald-400/80 border-emerald-400/20 bg-emerald-400/5",
  "in-progress": "text-amber-400/80 border-amber-400/20 bg-amber-400/5",
  planned: "text-white/40 border-white/10 bg-white/[0.02]",
};

export function RoadmapClient() {
  const { roadmapPage } = useContent();

  return (
    <main className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-32 left-6 w-24 h-24 border-l border-t border-white/10" />
      <div className="absolute top-32 right-6 w-24 h-24 border-r border-t border-white/10" />

      <div className="max-w-[1200px] mx-auto relative">
        {/* Hero Section */}
        <div className="mb-24 max-w-3xl">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-8">
              <Map size={14} className="text-white/40" />
              <span className="text-white/40 text-[12px] uppercase tracking-[0.2em] font-mono">
                {roadmapPage.label}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <h1 className="text-[48px] md:text-[64px] lg:text-[80px] leading-[0.95] tracking-[-0.03em] text-white font-medium mb-6">
              {roadmapPage.headline}
              <br />
              <span className="text-white/40">{roadmapPage.headlineAccent}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-white/50 text-[18px] md:text-[20px] leading-relaxed">
              {roadmapPage.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Phases - Clean Layout */}
        <div className="space-y-32">
          {roadmapPage.phases.map((phase, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={phase.id} className="relative">
                {/* Phase Number Indicator */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[64px] md:text-[80px] font-medium text-white/[0.04] leading-none">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>

                {/* Content */}
                <div className={`md:grid md:grid-cols-2 md:gap-16 ${isEven ? "" : "md:direction-rtl"}`}>
                  {/* Text Side */}
                  <div className={isEven ? "md:pr-8" : "md:col-start-2 md:pl-8"}>
                    <ScrollReveal delay={index * 50}>
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? "" : "md:justify-end"}`}>
                        <span className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider border ${statusBadge[phase.status]}`}>
                          {phase.status === "completed" ? "Completed" : phase.status === "in-progress" ? "In Progress" : "Planned"}
                        </span>
                        <span className="text-white/30 text-[13px] font-mono">{phase.date}</span>
                      </div>
                      
                      <h2 className="text-[32px] md:text-[40px] font-medium text-white mb-4 tracking-tight">
                        {phase.name}
                      </h2>
                      
                      <p className="text-white/50 text-[16px] leading-relaxed mb-8">
                        {phase.description}
                      </p>

                      {/* Features Grid */}
                      {phase.features && (
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                          {phase.features.map((feature) => (
                            <div key={feature.id} className={isEven ? "" : "md:text-right"}>
                              <p className="text-[14px] text-white/80 font-medium mb-1">
                                {feature.title}
                              </p>
                              {feature.description && (
                                <p className="text-[13px] text-white/40 leading-snug">
                                  {feature.description}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </ScrollReveal>
                  </div>

                  {/* Illustration Side */}
                  <div className={`mt-10 md:mt-0 ${isEven ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}>
                    <ScrollReveal delay={index * 50 + 100} direction={isEven ? "left" : "right"}>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08] bg-[#0a0a0a]">
                        {/* Blueprint grid overlay */}
                        <div
                          className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        />
                        
                        <div className="absolute inset-6">
                          <Image
                            src={phase.illustration}
                            alt={`${phase.name} phase illustration`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        
                        {/* Phase badge */}
                        <div className="absolute bottom-4 left-4 bg-[#111]/80 backdrop-blur border border-white/[0.08] rounded-lg px-3 py-2">
                          <span className="text-white/50 text-[11px] font-mono">PHASE 0{index + 1}</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <ScrollReveal delay={200}>
          <div className="mt-32 pt-16 border-t border-white/[0.06]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[28px] md:text-[32px] text-white font-medium mb-4">
                  What&apos;s next?
                </h2>
                <p className="text-white/50 text-[16px] leading-relaxed mb-6">
                  Beyond the core platform, we&apos;re exploring AI-assisted design, 
                  generative layouts, and real-time collaboration at scale. 
                  The blueprint is just the beginning.
                </p>
                <a
                  href={roadmapPage.cta.href}
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white text-[14px] transition-colors group"
                >
                  {roadmapPage.cta.label}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              {/* Decorative Blueprint Element */}
              <div className="relative h-[200px] border border-white/[0.06] rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                {/* Abstract lines representing future */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                  <line x1="50" y1="150" x2="350" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <line x1="50" y1="150" x2="50" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <line x1="350" y1="150" x2="350" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <line x1="50" y1="50" x2="150" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <line x1="150" y1="50" x2="200" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 2"/>
                  <line x1="350" y1="30" x2="250" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  <line x1="250" y1="30" x2="200" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 2"/>
                  <circle cx="200" cy="80" r="4" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <text x="200" y="100" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="10" textAnchor="middle">?</text>
                </svg>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
