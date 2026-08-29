"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Dna,
  Brain,
  HeartPulse,
  Flame,
} from "lucide-react";

interface TherapeuticDomain {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  icon: React.ElementType;
  milestoneStat: {
    value: string;
    label: string;
  };
}

const THERAPEUTIC_DOMAINS: TherapeuticDomain[] = [
  {
    id: "oncology",
    number: "01",
    name: "Oncology & Immuno-Oncology",
    shortDescription:
      "Solid tumors, hematologic malignancies, ADCs, CAR-T, and biomarker-driven protocols.",
    imageSrc: "/images/therapeutic/therapeutic-oncology.jpg",
    imageAlt:
      "Oncology researchers analyzing immunotherapy response data on digital holographic screens",
    href: "/therapeutic-areas/oncology",
    icon: Flame,
    milestoneStat: {
      value: "60+",
      label: "Phase I–IV Oncology Trials Managed",
    },
  },
  {
    id: "cns",
    number: "02",
    name: "Neurology & Central Nervous System",
    shortDescription:
      "Alzheimer's, Parkinson's, ALS, neuroinflammation, epilepsy, and rare neuropathies.",
    imageSrc: "/images/therapeutic/therapeutic-cns.jpg",
    imageAlt:
      "Neurologists evaluating 3D holographic brain connectivity scans and cognitive assessments",
    href: "/therapeutic-areas/cns",
    icon: Brain,
    milestoneStat: {
      value: "94%",
      label: "Patient Retention in CNS Cohorts",
    },
  },
  {
    id: "cardio",
    number: "03",
    name: "Cardiovascular & Metabolic Diseases",
    shortDescription:
      "Heart failure, MACE endpoints, Type 2 diabetes, NASH/MASH, and lipid disorders.",
    imageSrc: "/images/therapeutic/therapeutic-cardio.jpg",
    imageAlt:
      "Cardiovascular investigators analyzing real-time cardiac telemetry and hemodynamics",
    href: "/therapeutic-areas/cardiovascular",
    icon: HeartPulse,
    milestoneStat: {
      value: "Real-Time",
      label: "Continuous Safety & DSMB Oversight",
    },
  },
  {
    id: "rare",
    number: "04",
    name: "Rare Diseases & Gene Therapies",
    shortDescription:
      "Orphan indications, AAV gene replacement, CRISPR editing, and pediatric trials.",
    imageSrc: "/images/therapeutic/therapeutic-rare.jpg",
    imageAlt:
      "Biopharma cleanroom scientists working with gene therapy vectors and cryogenic storage",
    href: "/therapeutic-areas/rare-diseases",
    icon: Dna,
    milestoneStat: {
      value: "FDA",
      label: "Fast-Track & Orphan Experience",
    },
  },
];

export function TherapeuticAreasSection() {
  const [activeDomainId, setActiveDomainId] = useState<string>("oncology");
  const activeIndex = Math.max(
    0,
    THERAPEUTIC_DOMAINS.findIndex((d) => d.id === activeDomainId),
  );

  const activeDomain =
    THERAPEUTIC_DOMAINS[activeIndex] || THERAPEUTIC_DOMAINS[0];
  const ActiveIcon = activeDomain.icon;

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
      {/* Background Architectural Subtle Glows */}
      <div className="absolute top-1/4 right-0 w-125 h-125 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-112.5 h-112.5 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl space-y-3.5">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-1 bg-[#0068a5] rounded-full" />
              <p className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#0068a5] font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                03 / Scientific Domains
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight leading-[1.16]">
              Precision Science Across{" "}
              <span className="text-[#004a98]">High-Complexity</span> Disease
              Biology
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Deep clinical expertise, biomarker-driven protocols, and global
              investigator networks spanning 20+ specialized therapeutic
              disciplines.
            </p>
          </div>

          <Link
            href="/therapeutic-areas"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 hover:text-[#004a98] font-bold text-xs sm:text-sm border border-slate-300/80 shadow-2xs hover:shadow-xs transition-all shrink-0 self-start md:self-auto"
          >
            <span>Explore All 20+ Domains</span>
            <div className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-[#004a98] group-hover:text-white flex items-center justify-center transition-all">
              <ChevronRight className="w-3 h-3" />
            </div>
          </Link>
        </div>

        {/* Desktop Split-Screen Interactive Stage (>=1024px) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Tactical Editorial Curator (5 of 12 columns) */}
          <div className="col-span-5 flex flex-col justify-between space-y-3.5">
            <div className="space-y-3">
              {THERAPEUTIC_DOMAINS.map((domain) => {
                const Icon = domain.icon;
                const isActive = domain.id === activeDomainId;

                return (
                  <div
                    key={domain.id}
                    onClick={() => setActiveDomainId(domain.id)}
                    onMouseEnter={() => setActiveDomainId(domain.id)}
                    className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isActive
                        ? "bg-white border-[#004a98] shadow-lg ring-2 ring-[#004a98]/20 -translate-y-0.5"
                        : "bg-white hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs"
                    }`}
                  >
                    {/* Left Brand Accent Bar for Active State */}
                    {isActive && (
                      <span className="absolute left-0 top-3 bottom-3 w-1.5 bg-linear-to-b from-[#004a98] to-[#0068a5] rounded-r-full" />
                    )}

                    <div className="flex items-start gap-4">
                      <div
                        className={`p-2.5 rounded-xl shrink-0 transition-all ${
                          isActive
                            ? "bg-[#004a98] text-white shadow-xs"
                            : "bg-slate-100 text-slate-600 group-hover:text-[#004a98]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-mono font-extrabold uppercase text-[#0068a5]">
                            {domain.number}
                          </span>
                          {isActive && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
                              Active Domain
                            </span>
                          )}
                        </div>

                        <h3
                          className={`text-base font-bold tracking-tight transition-colors ${
                            isActive ? "text-[#004a98]" : "text-slate-900"
                          }`}
                        >
                          {domain.name}
                        </h3>

                        <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-2">
                          {domain.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Global Domain Summary Strip */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <Sparkles className="w-4 h-4 text-[#004a98]" />
                <span>20+ Additional Specialized Clinical Disciplines</span>
              </div>
              <Link
                href="/therapeutic-areas"
                className="text-xs font-bold text-[#004a98] hover:underline flex items-center gap-1"
              >
                <span>View Full List</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right Column: 100% Open Continuous Filmstrip Slider (7 of 12 columns) */}
          <div className="col-span-7 relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-2xl flex flex-col justify-between p-6 sm:p-8 min-h-145">
            {/* Continuous Hardware-Accelerated Sliding Track (Zero White Flash) */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
              <div
                className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {THERAPEUTIC_DOMAINS.map((domain) => (
                  <div
                    key={domain.id}
                    className="relative w-full h-full shrink-0 overflow-hidden"
                  >
                    <Image
                      src={domain.imageSrc}
                      alt={domain.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 55vw, 45vw"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle Gradient Rim to ensure text/buttons pop with high contrast */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-slate-950/30 z-1 pointer-events-none" />

            {/* Top Floating Domain Badges with Non-Overlapping Responsive Layout */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 w-full">
              <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-slate-200/80 shadow-md">
                <ActiveIcon className="w-4 h-4 text-[#004a98] shrink-0" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 font-mono truncate max-w-50 sm:max-w-none">
                  {activeDomain.number} / {activeDomain.name}
                </span>
              </div>

              <div className="bg-slate-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 text-xs font-bold text-white shadow-md flex items-center gap-2 shrink-0">
                <span className="text-emerald-400 font-mono font-extrabold text-sm">
                  {activeDomain.milestoneStat.value}
                </span>
                <span className="text-slate-200 text-[11px] hidden xl:inline">
                  {activeDomain.milestoneStat.label}
                </span>
              </div>
            </div>

            {/* Bottom Highly Clickable Action Bar */}
            <div className="relative z-10 flex items-center justify-between gap-4 pt-4">
              <Link
                href={activeDomain.href}
                className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-linear-to-r from-[#004a98] via-[#005ea6] to-[#0068a5] hover:from-[#003b7a] hover:via-[#004f8f] hover:to-[#005587] text-white font-extrabold text-xs sm:text-sm shadow-2xl shadow-black/40 hover:shadow-[#004a98]/50 hover:scale-103 active:scale-98 transition-all duration-300 border border-white/25 cursor-pointer"
              >
                <span>Explore {activeDomain.name} Trials</span>
                <div className="w-6 h-6 rounded-full bg-white/20 group-hover/btn:bg-white text-white group-hover/btn:text-[#004a98] flex items-center justify-center transition-all duration-300 shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </div>
              </Link>

              <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ICH-GCP & Protocol Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Tactile Card Carousel (<1024px) */}
        <div className="lg:hidden space-y-4">
          {/* Mobile Tab Switcher */}
          <div className="grid grid-cols-2 gap-2">
            {THERAPEUTIC_DOMAINS.map((domain) => {
              const Icon = domain.icon;
              const isActive = domain.id === activeDomainId;
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`p-3 rounded-2xl border flex items-center gap-2 transition-all text-left cursor-pointer ${
                    isActive
                      ? "bg-[#004a98] text-white border-[#004a98] shadow-md"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? "text-white" : "text-[#004a98]"
                    }`}
                  />
                  <span className="text-xs font-bold truncate">
                    {domain.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Mobile Card with Continuous Sliding Track */}
          <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl p-5 flex flex-col gap-4">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-100 bg-slate-950">
              <div
                className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {THERAPEUTIC_DOMAINS.map((domain) => (
                  <div
                    key={domain.id}
                    className="relative w-full h-full shrink-0 overflow-hidden"
                  >
                    <Image
                      src={domain.imageSrc}
                      alt={domain.imageAlt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-200/80 shadow-xs text-xs font-bold text-[#004a98]">
                {activeDomain.name}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {activeDomain.shortDescription}
            </p>

            <div className="pt-1">
              <Link
                href={activeDomain.href}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-linear-to-r from-[#004a98] to-[#0068a5] text-white font-bold text-xs shadow-md"
              >
                <span>Discover Full {activeDomain.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
