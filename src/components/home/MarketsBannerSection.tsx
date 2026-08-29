"use client";

import React from "react";
import {
  Pill,
  FlaskConical,
  Building2,
  Stethoscope,
  Microscope,
} from "lucide-react";

interface MarketCard {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  iconColor: string;
}

const MARKETS_LIST: MarketCard[] = [
  {
    id: "pharma",
    title: "Pharmaceutical",
    badge: "Phase I–IV",
    icon: Pill,
    iconColor: "text-[#004a98]",
  },
  {
    id: "biotech",
    title: "Biotechnology",
    badge: "Biologics & CGT",
    icon: FlaskConical,
    iconColor: "text-[#0068a5]",
  },
  {
    id: "cro",
    title: "CRO",
    badge: "FSP Pods",
    icon: Building2,
    iconColor: "text-indigo-700",
  },
  {
    id: "devices",
    title: "Medical Device",
    badge: "510(k) & PMA",
    icon: Stethoscope,
    iconColor: "text-teal-700",
  },
  {
    id: "diagnostics",
    title: "Medical Diagnostics",
    badge: "IVD & CDx",
    icon: Microscope,
    iconColor: "text-emerald-700",
  },
];

export function MarketsBannerSection() {
  // Duplicate list to achieve seamless infinite loop
  const marqueeItems = [...MARKETS_LIST, ...MARKETS_LIST, ...MARKETS_LIST];

  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Luxury Capsule Banner Container */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-linear-to-r from-[#004a98] via-[#0068a5] to-[#047857] shadow-xl overflow-hidden flex flex-col md:flex-row items-center min-h-24 sm:min-h-28 p-2 sm:p-3 border border-white/20">
          {/* Subtle Geometric Background Mesh */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px]" />

          {/* Left Fixed Title Area */}
          <div className="relative z-10 shrink-0 px-6 py-3 md:py-0 flex items-center justify-between w-full md:w-auto md:min-w-60 lg:min-w-72 md:border-r border-white/25">
            <div className="space-y-0.5">
              <span className="text-[10px] sm:text-[11px] font-mono font-extrabold uppercase tracking-widest text-sky-200 block">
                Target Sectors
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-none whitespace-nowrap">
                Markets We Serve
              </h3>
            </div>

            {/* Angled Decorative Divider Indicator on Desktop */}
            <div className="hidden md:flex items-center justify-center pl-4">
              <div className="w-2.5 h-2.5 rotate-45 bg-white/30 border-t-2 border-r-2 border-white" />
            </div>
          </div>

          {/* Right Infinite Auto-Scrolling Marquee Track with Pure Tailwind */}
          <div className="relative z-10 w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_20px,white_calc(100%-20px),transparent)] py-2">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-3.5 sm:gap-4.5 items-center">
              {marqueeItems.map((market, index) => {
                const Icon = market.icon;
                return (
                  <div
                    key={`${market.id}-${index}`}
                    className="relative shrink-0 bg-white hover:bg-slate-50 transition-transform duration-300 hover:scale-103 shadow-md rounded-xl sm:rounded-2xl p-3 sm:px-5 sm:py-3.5 flex items-center gap-3 sm:gap-3.5 border border-slate-100 min-w-44 sm:min-w-56 cursor-pointer select-none [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]"
                  >
                    {/* Icon Vessel */}
                    <div className="p-2 sm:p-2.5 rounded-xl bg-slate-100/90 text-slate-800 shrink-0 shadow-2xs">
                      <Icon
                        className={`w-5 h-5 sm:w-5.5 sm:h-5.5 ${market.iconColor} stroke-2`}
                      />
                    </div>

                    {/* Market Details */}
                    <div className="min-w-0 pr-2">
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight truncate">
                        {market.title}
                      </h4>
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 block leading-tight mt-0.5">
                        {market.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
