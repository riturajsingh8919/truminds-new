"use client";

import React from "react";
import {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Globe2,
  Workflow,
  Layers,
} from "lucide-react";

interface MetricCardItem {
  id: string;
  metric: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  borderColor: string;
  textColor: string;
  hoverBg: string;
  accentBarColor: string;
  dotPosition: "top-right" | "bottom-right";
}

const METRIC_ITEMS: MetricCardItem[] = [
  {
    id: "therapeutic",
    metric: "20+",
    label: "Therapeutic Specializations",
    sublabel:
      "Specialized oncology, neuroscience, cardiovascular, and rare diseases",
    icon: Stethoscope,
    borderColor: "border-emerald-500",
    textColor: "text-emerald-500",
    hoverBg: "group-hover:bg-emerald-50",
    accentBarColor: "bg-emerald-500",
    dotPosition: "top-right",
  },
  {
    id: "speed",
    metric: "70%",
    label: "Faster TLF & Data Mapping",
    sublabel:
      "Automated SDTM, ADaM, and table generation powered by TruForm AI",
    icon: Sparkles,
    borderColor: "border-blue-600",
    textColor: "text-blue-600",
    hoverBg: "group-hover:bg-blue-50",
    accentBarColor: "bg-blue-600",
    dotPosition: "bottom-right",
  },
  {
    id: "compliance",
    metric: "100%",
    label: "Global Regulatory Compliance",
    sublabel: "Full adherence to FDA, EMA, PMDA, ICH-GCP, and 21 CFR Part 11",
    icon: ShieldCheck,
    borderColor: "border-orange-500",
    textColor: "text-orange-500",
    hoverBg: "group-hover:bg-orange-50",
    accentBarColor: "bg-orange-500",
    dotPosition: "top-right",
  },
  {
    id: "phases",
    metric: "Phase I–IV",
    label: "Full-Service CRO Capabilities",
    sublabel:
      "Comprehensive study execution from protocol startup to submission",
    icon: Globe2,
    borderColor: "border-emerald-500",
    textColor: "text-emerald-500",
    hoverBg: "group-hover:bg-emerald-50",
    accentBarColor: "bg-emerald-500",
    dotPosition: "top-right",
  },
  {
    id: "modules",
    metric: "12+",
    label: "Integrated TruForm Modules",
    sublabel: "Unified EDC, SDTM, ADaM, RTSM, ePRO, and AI document authoring",
    icon: Workflow,
    borderColor: "border-blue-600",
    textColor: "text-blue-600",
    hoverBg: "group-hover:bg-blue-50",
    accentBarColor: "bg-blue-600",
    dotPosition: "bottom-right",
  },
  {
    id: "footprint",
    metric: "Global",
    label: "Operational Delivery Footprint",
    sublabel:
      "Strategic hubs in US (Dallas, TX), Canada, UK, Europe, and India",
    icon: Layers,
    borderColor: "border-orange-500",
    textColor: "text-orange-500",
    hoverBg: "group-hover:bg-orange-50",
    accentBarColor: "bg-orange-500",
    dotPosition: "top-right",
  },
];

export function MetricsSection() {
  return (
    <section className="relative py-10 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Centered Headline with Pill Badge */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.2]">
            Delivering Global Clinical Research & AI Automation with{" "}
            <span className="text-[#004a98]">Uncompromising Quality</span>
          </h2>

          {/* Centered Pill Badge */}
          <div className="inline-flex items-center justify-center pt-1">
            <span className="px-5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[#0068a5] text-xs font-extrabold uppercase tracking-wider shadow-2xs">
              Why Choose TruMinds
            </span>
          </div>
        </div>

        {/* 6-Card Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {METRIC_ITEMS.map((item) => {
            const Icon = item.icon;
            const isTopRightDot = item.dotPosition === "top-right";

            return (
              <div key={item.id} className="relative group">
                {/* Overlapping Mint Dot Grid Matrix with Hover Parallax Shift */}
                <div
                  className={`absolute w-20 h-20 pointer-events-none z-0 opacity-40 group-hover:opacity-85 transition-all duration-500 ${
                    isTopRightDot
                      ? "-top-4 -right-4 group-hover:translate-x-1 group-hover:-translate-y-1"
                      : "-bottom-4 -right-4 group-hover:translate-x-1 group-hover:translate-y-1"
                  }`}
                >
                  <svg
                    width="72"
                    height="72"
                    fill="currentColor"
                    className="text-emerald-400"
                  >
                    <pattern
                      id={`mesh-pattern-${item.id}`}
                      x="0"
                      y="0"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="1.5" />
                    </pattern>
                    <rect
                      width="72"
                      height="72"
                      fill={`url(#mesh-pattern-${item.id})`}
                    />
                  </svg>
                </div>

                {/* Main Elevated White Card with Multi-Property Hover Interaction */}
                <div className="relative z-10 rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,74,152,0.09)] hover:border-slate-300 transition-all duration-500 hover:-translate-y-1.5 flex items-center gap-6 min-h-38.75 overflow-hidden">
                  {/* Left Organic Leaf Icon Box with outline, smooth rotation & soft fill on hover */}
                  <div
                    className={`w-16 h-16 sm:w-18 sm:h-18 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm bg-white border-2 ${item.borderColor} ${item.textColor} ${item.hoverBg} flex items-center justify-center shrink-0 shadow-2xs transition-all duration-500 group-hover:scale-108 group-hover:-rotate-3`}
                  >
                    <Icon className="w-8 h-8 stroke-[1.75]" />
                  </div>

                  {/* Centered Metric Number & Label */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-1.5 min-w-0">
                    <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-none group-hover:text-[#004a98] transition-colors duration-300 font-sans">
                      {item.metric}
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
                      {item.label}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug font-normal line-clamp-2">
                      {item.sublabel}
                    </p>
                  </div>

                  {/* Subtle Expanding Bottom Accent Line on Hover */}
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.75 w-24 ${item.accentBarColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
