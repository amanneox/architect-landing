"use client";

import { useState, useCallback, memo } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  GitBranch, 
  GitCommit,
  ChevronRight,
  ChevronDown,
  Github,
  ExternalLink,
  RotateCcw
} from "lucide-react";
import { buildRuns, type BuildRun, type BuildStep } from "@/lib/data/buildRuns";

// Memoized status icon components to prevent re-renders
const StatusIcon = memo(function StatusIcon({ status }: { status: BuildRun["status"] }) {
  switch (status) {
    case "success":
      return <CheckCircle2 size={18} className="text-emerald-400" />;
    case "failure":
      return <XCircle size={18} className="text-red-400" />;
    case "running":
      return <RotateCcw size={18} className="text-amber-400 animate-spin" />;
    default:
      return <Clock size={18} className="text-white/30" />;
  }
});

const StepStatusIcon = memo(function StepStatusIcon({ status }: { status: BuildStep["status"] }) {
  switch (status) {
    case "success":
      return <CheckCircle2 size={14} className="text-emerald-400" />;
    case "failure":
      return <XCircle size={14} className="text-red-400" />;
    case "running":
      return <RotateCcw size={14} className="text-amber-400 animate-spin" />;
    case "skipped":
      return <span className="text-white/30 text-[10px]">—</span>;
    default:
      return <Clock size={14} className="text-white/30" />;
  }
});

// Memoized step item to prevent re-renders when parent updates
const StepItem = memo(function StepItem({ step, index }: { step: BuildStep; index: number }) {
  const [showLogs, setShowLogs] = useState(false);
  
  const toggleLogs = useCallback(() => {
    setShowLogs(prev => !prev);
  }, []);
  
  return (
    <div className="bg-[#080808]">
      <button
        onClick={toggleLogs}
        className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-white/[0.02] transition-colors text-left"
      >
        <div className="w-5 flex justify-center">
          <StepStatusIcon status={step.status} />
        </div>
        
        {showLogs ? (
          <ChevronDown size={14} className="text-white/30 shrink-0" />
        ) : (
          <ChevronRight size={14} className="text-white/30 shrink-0" />
        )}
        
        <span className="text-white/70 text-[13px] flex-1">{step.name}</span>
        <span className="text-white/40 text-[12px] font-mono">{step.duration}</span>
      </button>
      
      {/* Logs */}
      {showLogs && step.logs.length > 0 && (
        <div className="px-4 pb-3">
          <div className="bg-[#0d0d0d] rounded border border-white/[0.06] p-3 font-mono text-[11px] leading-relaxed overflow-x-auto">
            {step.logs.map((log, i) => (
              <div key={i} className="flex">
                <span className="text-white/20 select-none w-8 shrink-0 text-right pr-3">
                  {i + 1}
                </span>
                <span 
                  className={`
                    ${log.startsWith("✓") || log.startsWith("✅") ? "text-emerald-400" : ""}
                    ${log.startsWith("✗") || log.startsWith("FAIL") ? "text-red-400" : ""}
                    ${log.startsWith(">") || log.startsWith("$") ? "text-amber-400/70" : ""}
                    ${log.startsWith("info") ? "text-blue-400/70" : ""}
                    ${log.startsWith("PASS") ? "text-emerald-400/70" : ""}
                    ${log.startsWith("FAIL") ? "text-red-400/70" : ""}
                    ${log.startsWith("●") ? "text-red-400" : ""}
                    ${log.startsWith(">") && log.includes("|") ? "text-white/50" : "text-white/60"}
                  `}
                >
                  {log}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

// Memoized build run item
interface BuildRunItemProps {
  run: BuildRun;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

const BuildRunItem = memo(function BuildRunItem({ run, isExpanded, onToggle }: BuildRunItemProps) {
  const handleToggle = useCallback(() => {
    onToggle(run.id);
  }, [onToggle, run.id]);

  return (
    <div className="border border-white/[0.06] rounded-lg overflow-hidden bg-[#0a0a0a]">
      {/* Header */}
      <button
        onClick={handleToggle}
        className="w-full px-4 py-3 flex items-center gap-4 hover:bg-white/[0.02] transition-colors text-left"
      >
        {isExpanded ? (
          <ChevronDown size={18} className="text-white/40 shrink-0" />
        ) : (
          <ChevronRight size={18} className="text-white/40 shrink-0" />
        )}
        
        <StatusIcon status={run.status} />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-white font-medium text-[14px] truncate">
              {run.commit.message}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[12px] text-white/40">
            <span className="flex items-center gap-1">
              <GitBranch size={12} />
              {run.branch}
            </span>
            <span className="flex items-center gap-1">
              <GitCommit size={12} />
              {run.commit.sha}
            </span>
            <span>by {run.commit.author}</span>
          </div>
        </div>
        
        <div className="text-right shrink-0">
          <div className="text-white/60 text-[12px] font-mono">{run.duration}</div>
          <div className="text-white/30 text-[11px]">{run.startedAt}</div>
        </div>
      </button>
      
      {/* Expanded Content */}
      {isExpanded && run.steps.length > 0 && (
        <div className="border-t border-white/[0.06]">
          <div className="divide-y divide-white/[0.04]">
            {run.steps.map((step, index) => (
              <StepItem key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export function BuildLogClient() {
  const [expandedRun, setExpandedRun] = useState<string | null>("build-001");

  // Memoized toggle handler to prevent recreating on each render
  const handleToggle = useCallback((id: string) => {
    setExpandedRun(prev => prev === id ? null : id);
  }, []);

  // Calculate stats once
  const stats = {
    successful: buildRuns.filter(r => r.status === "success").length,
    failed: buildRuns.filter(r => r.status === "failure").length,
  };

  return (
    <main className="pt-32 pb-20 px-6 relative overflow-hidden min-h-screen bg-[#080808]">
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

      <div className="max-w-[1000px] mx-auto relative">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-white/40 text-[12px] uppercase tracking-[0.2em] font-mono">
              Build Log
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <h1 className="text-[48px] md:text-[64px] lg:text-[72px] leading-[0.95] tracking-[-0.03em] text-white font-medium mb-6">
            Deployment
            <br />
            <span className="text-white/40">history</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-white/50 text-[18px] md:text-[20px] leading-relaxed max-w-xl mb-10">
            Track every deployment, view build logs, and monitor the health of the platform.
          </p>
        </ScrollReveal>

        {/* Stats Bar */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white/60 text-[13px]">
                <span className="text-white font-medium">{stats.successful}</span> successful
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-white/60 text-[13px]">
                <span className="text-white font-medium">{stats.failed}</span> failed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-white/40" />
              <span className="text-white/60 text-[13px]">
                Last deploy <span className="text-white">2 hours ago</span>
              </span>
            </div>
            <a 
              href="https://github.com/architect-team/design-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors ml-auto text-[13px]"
            >
              <Github size={14} />
              View on GitHub
              <ExternalLink size={12} />
            </a>
          </div>
        </ScrollReveal>

        {/* Build Runs List */}
        <ScrollReveal delay={200}>
          <div className="space-y-3">
            {buildRuns.map((run) => (
              <BuildRunItem
                key={run.id}
                run={run}
                isExpanded={expandedRun === run.id}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Load More */}
        <ScrollReveal delay={250}>
          <div className="mt-8 text-center">
            <button className="text-white/40 text-[13px] hover:text-white/70 transition-colors">
              Load older builds →
            </button>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
