"use client";

import { ReactNode, memo } from "react";

interface PageWrapperProps {
    children: ReactNode;
}

// Static arrays defined outside component to prevent recreation on every render
const RULER_TICKS = Array.from({ length: 20 }, (_, i) => (i + 1) * 40);

function PageWrapperComponent({ children }: PageWrapperProps) {
    return (
        <div className="relative min-h-dvh">
            {/* Paper texture grain overlay */}
            <div
                className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Left side border with ruler ticks */}
            <div className="fixed left-0 top-0 bottom-0 w-[60px] hidden lg:flex flex-col justify-between pointer-events-none z-40 border-r border-white/[0.06]">
                <div className="flex flex-col items-end pr-2 pt-20 gap-[40px]">
                    {RULER_TICKS.map((tick, i) => (
                        <div key={i} className="flex items-center gap-1">
                            <span className="text-[8px] text-white/20 font-mono">
                                {tick}
                            </span>
                            <div className="w-2 h-px bg-white/20" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right side border with ruler ticks */}
            <div className="fixed right-0 top-0 bottom-0 w-[60px] hidden lg:flex flex-col justify-between pointer-events-none z-40 border-l border-white/[0.06]">
                <div className="flex flex-col items-start pl-2 pt-20 gap-[40px]">
                    {RULER_TICKS.map((tick, i) => (
                        <div key={i} className="flex items-center gap-1">
                            <div className="w-2 h-px bg-white/20" />
                            <span className="text-[8px] text-white/20 font-mono">
                                {tick}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vertical dashed grid lines */}
            <div
                className="pointer-events-none fixed inset-0 z-0 opacity-[0.04] hidden sm:block"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 119px,
            rgba(255,255,255,0.5) 119px,
            rgba(255,255,255,0.5) 120px
          )`,
                }}
            />

            {/* Horizontal grid lines */}
            <div
                className="pointer-events-none fixed inset-0 z-0 opacity-[0.02] hidden sm:block"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 39px,
            rgba(255,255,255,0.3) 39px,
            rgba(255,255,255,0.3) 40px
          )`,
                }}
            />

            {/* Main content */}
            <div className="relative z-10 lg:ml-[60px] lg:mr-[60px]">{children}</div>
        </div>
    );
}

export const PageWrapper = memo(PageWrapperComponent);
