"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Database,
  Cpu,
  LayoutDashboard,
  Smartphone,
  GitBranch,
  Table,
  Radio,
  Lock,
  FileCheck,
  SlidersHorizontal,
  Gavel,
} from "lucide-react";

interface ProductCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  accentColor: string;
  dashColor: string;
  waveStart: string;
  waveMid: string;
  waveEnd: string;
  waveSoft: string;
}

const PRODUCTS_DATA: ProductCard[] = [
  {
    id: "edc",
    title: "TruForm™ EDC",
    subtitle: "Capture. Validate. Accelerate.",
    description:
      "Next-generation Electronic Data Capture engineered with configurable eCRFs, metadata-driven study startup, dynamic edit checks, and rapid database lock.",
    href: "/products/truform-edc",
    icon: Database,
    iconBg: "bg-sky-50",
    iconColor: "text-[#0068a5]",
    accentColor: "text-[#0068a5]",
    dashColor: "#0068a5",
    waveStart: "#0284c7",
    waveMid: "#38bdf8",
    waveEnd: "#7dd3fc",
    waveSoft: "#e0f2fe",
  },
  {
    id: "sdtm",
    title: "TruForm™ SDTM",
    subtitle: "AI-Powered CDISC Transformation.",
    description:
      "Automates raw clinical data conversion directly into CDISC SDTM 3.3 datasets with full audit traceability, reusable mapping rules, and FDA submission readiness.",
    href: "/products/truform-sdtm",
    icon: Cpu,
    iconBg: "bg-blue-50",
    iconColor: "text-[#004a98]",
    accentColor: "text-[#004a98]",
    dashColor: "#004a98",
    waveStart: "#004a98",
    waveMid: "#2563eb",
    waveEnd: "#60a5fa",
    waveSoft: "#dbeafe",
  },
  {
    id: "adam",
    title: "TruForm™ ADaM",
    subtitle: "Intelligent Analysis Automation.",
    description:
      "Transforms SDTM datasets into analysis-ready ADaM datasets (ADSL, ADAE, ADLB) through reusable programming standards, AI derivations, and Define-XML validation.",
    href: "/products/truform-adam",
    icon: GitBranch,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    accentColor: "text-indigo-600",
    dashColor: "#4f46e5",
    waveStart: "#4338ca",
    waveMid: "#6366f1",
    waveEnd: "#a5b4fc",
    waveSoft: "#e0e7ff",
  },
  {
    id: "tlf",
    title: "TruForm™ TLF",
    subtitle: "Automated Statistical Reporting.",
    description:
      "AI-driven statistical reporting automating production of publication-ready CSR Tables, Listings, and Figures supporting SAS®, R, and hybrid biometrics environments.",
    href: "/products/truform-tlf",
    icon: Table,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    accentColor: "text-teal-600",
    dashColor: "#0d9488",
    waveStart: "#0f766e",
    waveMid: "#14b8a6",
    waveEnd: "#5eead4",
    waveSoft: "#ccfbf1",
  },
  {
    id: "ctms",
    title: "TruForm™ CTMS",
    subtitle: "Global Multi-Site Command.",
    description:
      "Operational command center unifying site activation, subject enrollment heatmaps, investigator budgets, monitoring visits, and real-time trial governance.",
    href: "/products/truform-ctms",
    icon: LayoutDashboard,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accentColor: "text-amber-600",
    dashColor: "#d97706",
    waveStart: "#ea580c",
    waveMid: "#f59e0b",
    waveEnd: "#fde68a",
    waveSoft: "#fef3c7",
  },
  {
    id: "rtsm",
    title: "TruForm™ RTSM",
    subtitle: "Intelligent Randomization & Supply.",
    description:
      "Automates patient randomization, treatment assignment, adaptive trial unblinding, and algorithmic IP depot shipment forecasting across global participating sites.",
    href: "/products/truform-rtsm",
    icon: Radio,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accentColor: "text-emerald-600",
    dashColor: "#059669",
    waveStart: "#047857",
    waveMid: "#10b981",
    waveEnd: "#6ee7b7",
    waveSoft: "#d1fae5",
  },
  {
    id: "epro",
    title: "TruForm™ ePRO",
    subtitle: "Decentralized Patient Voice.",
    description:
      "Direct-to-patient digital interface supporting multilingual eDiaries, wearable biometric telemetry streaming, scheduled reminders, and offline symptom capture.",
    href: "/products/truform-epro",
    icon: Smartphone,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    accentColor: "text-purple-600",
    dashColor: "#9333ea",
    waveStart: "#7e22ce",
    waveMid: "#a855f7",
    waveEnd: "#d8b4fe",
    waveSoft: "#f3e8ff",
  },
  {
    id: "docuvault",
    title: "TruForm™ DocuVault",
    subtitle: "Enterprise eTMF & Governance.",
    description:
      "Centralized Electronic Trial Master File platform with AI document classification, electronic signatures, completeness metrics, and continuous audit readiness.",
    href: "/products/truform-docuvault",
    icon: Lock,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    accentColor: "text-rose-600",
    dashColor: "#e11d48",
    waveStart: "#be123c",
    waveMid: "#f43f5e",
    waveEnd: "#fda4af",
    waveSoft: "#ffe4e6",
  },
  {
    id: "econsent",
    title: "TruForm™ eConsent",
    subtitle: "Digital Patient Onboarding.",
    description:
      "Interactive multimedia informed consent with patient educational videos, remote electronic signing, automated version re-consenting, and complete audit trails.",
    href: "/products/truform-econsent",
    icon: FileCheck,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    accentColor: "text-cyan-700",
    dashColor: "#0891b2",
    waveStart: "#0e7490",
    waveMid: "#06b6d4",
    waveEnd: "#67e8f9",
    waveSoft: "#cffafe",
  },
  {
    id: "rbqm",
    title: "TruForm™ RBQM",
    subtitle: "Risk-Based Quality AI.",
    description:
      "Continuous statistical monitoring evaluating Key Risk Indicators (KRIs), KPIs, and protocol deviations to identify and mitigate trial risks proactively (ICH E6(R3)).",
    href: "/products/truform-rbqm",
    icon: SlidersHorizontal,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-700",
    accentColor: "text-yellow-700",
    dashColor: "#ca8a04",
    waveStart: "#b45309",
    waveMid: "#eab308",
    waveEnd: "#fef08a",
    waveSoft: "#fef9c3",
  },
  {
    id: "adjudication",
    title: "TruForm™ Adjudication",
    subtitle: "Independent Endpoint Committee.",
    description:
      "Secure platform enabling independent Clinical Event Committees (CEC) to review, evaluate, and adjudicate suspected endpoint events with blinded consensus workflows.",
    href: "/products/truform-adjudication",
    icon: Gavel,
    iconBg: "bg-fuchsia-50",
    iconColor: "text-fuchsia-700",
    accentColor: "text-fuchsia-700",
    dashColor: "#a21caf",
    waveStart: "#86198f",
    waveMid: "#d946ef",
    waveEnd: "#f0abfc",
    waveSoft: "#fae8ff",
  },
];

export function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const total = PRODUCTS_DATA.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState<number>(390);

  // Measure card width dynamically for responsive sliding
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setCardWidth(310);
      } else if (window.innerWidth < 1024) {
        setCardWidth(360);
      } else {
        setCardWidth(390);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance loop with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Tripled list for seamless infinite wrap
  const extendedProducts = [
    ...PRODUCTS_DATA,
    ...PRODUCTS_DATA,
    ...PRODUCTS_DATA,
  ];
  // Base offset index to always stay in middle copy
  const activeOffset = total + currentIndex;
  const gap = 28; // 28px gap between cards

  const trackOffset = -activeOffset * (cardWidth + gap);

  return (
    <section
      className="relative py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Subtle Architectural Glows */}
      <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3.5">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-8 h-1 bg-[#0068a5] rounded-full" />
            <p className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#0068a5] font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              04 / Proprietary Technology Platforms
            </p>
            <span className="w-8 h-1 bg-[#0068a5] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            TruForm™ Clinical{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#004a98] via-[#0068a5] to-cyan-600">
              Technology Ecosystem
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Explore TruMinds Clinical&apos;s unified portfolio of
            next-generation software engines engineered to accelerate data
            capture, automate CDISC biometrics, and govern global trials.
          </p>
        </div>

        {/* Carousel Sliding Arena */}
        <div className="relative w-full overflow-hidden py-6">
          {/* Navigation Controls on Left & Right */}
          <button
            onClick={handlePrev}
            aria-label="Previous Product"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl hover:shadow-2xl flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#004a98] hover:border-[#004a98] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.25]" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Product"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl hover:shadow-2xl flex items-center justify-center text-slate-700 hover:text-white hover:bg-[#004a98] hover:border-[#004a98] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.25]" />
          </button>

          {/* Smooth Sliding Viewport Track */}
          <div
            ref={containerRef}
            className="w-full flex justify-center items-center overflow-visible"
          >
            <div
              className="flex items-center gap-7 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] py-4"
              style={{
                transform: `translateX(calc(${trackOffset}px + 50% - ${cardWidth / 2}px))`,
              }}
            >
              {extendedProducts.map((product, idx) => {
                const Icon = product.icon;
                const isActive = idx === activeOffset;
                const isAdjacent = Math.abs(idx - activeOffset) === 1;

                return (
                  <div
                    key={`${product.id}-${idx}`}
                    style={{ width: `${cardWidth}px` }}
                    className={`shrink-0 group relative rounded-[36px] bg-white border transition-all duration-500 flex flex-col justify-between overflow-hidden select-none hover:-translate-y-2 ${
                      isActive
                        ? "scale-105 shadow-[0_25px_60px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.14)] z-20 border-slate-200 opacity-100 min-h-125 sm:min-h-135"
                        : isAdjacent
                          ? "scale-95 opacity-85 hover:opacity-100 shadow-md hover:shadow-xl border-slate-200/80 min-h-120 sm:min-h-130"
                          : "scale-90 opacity-40 shadow-xs border-slate-200/60 min-h-115 sm:min-h-125"
                    }`}
                  >
                    {/* Card Content Top Body */}
                    <div className="pt-9 sm:pt-11 px-7 sm:px-8 pb-4 flex flex-col items-center text-center space-y-3.5">
                      {/* Glowing Illustrated Icon Vessel with Micro-Hover Effects */}
                      <div className="relative mb-1">
                        <div className="w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-radial from-slate-50 via-slate-100/60 to-white flex items-center justify-center shadow-inner border border-slate-100 group-hover:border-slate-200 transition-all duration-300">
                          <div
                            className={`p-3.5 sm:p-4 rounded-full ${product.iconBg} shadow-xs transition-transform duration-300 group-hover:scale-110`}
                          >
                            <Icon
                              className={`w-8 h-8 sm:w-8.5 sm:h-8.5 ${product.iconColor} stroke-2`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Product Title */}
                      <h3 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-slate-950 transition-colors">
                        {product.title}
                      </h3>

                      {/* Colored Subtitle Tagline with Expanding Accent Dash on Hover */}
                      <div className="space-y-2 flex flex-col items-center">
                        <p
                          className={`text-sm sm:text-base font-bold ${product.accentColor} tracking-tight`}
                        >
                          {product.subtitle}
                        </p>
                        <div
                          className="w-10 group-hover:w-16 h-1 rounded-full transition-all duration-300"
                          style={{ backgroundColor: product.dashColor }}
                        />
                      </div>

                      {/* Narrative Description */}
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal pt-1 max-w-xs line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Bottom Fluid Layered Organic Wave Footer */}
                    <div className="relative w-full mt-auto">
                      <svg
                        className="w-full h-32 sm:h-34 block"
                        viewBox="0 0 320 130"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          {/* Layer 1 Soft Pastel Gradient */}
                          <linearGradient
                            id={`wave-soft-${product.id}-${idx}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor={product.waveSoft}
                              stopOpacity="0.85"
                            />
                            <stop
                              offset="100%"
                              stopColor={product.waveEnd}
                              stopOpacity="0.55"
                            />
                          </linearGradient>

                          {/* Layer 2 Main Vibrant Gradient */}
                          <linearGradient
                            id={`wave-main-${product.id}-${idx}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor={product.waveStart}
                              stopOpacity="0.88"
                            />
                            <stop
                              offset="50%"
                              stopColor={product.waveMid}
                              stopOpacity="0.92"
                            />
                            <stop
                              offset="100%"
                              stopColor={product.waveEnd}
                              stopOpacity="0.98"
                            />
                          </linearGradient>
                        </defs>

                        {/* Layer 1 Soft Background Wave Curve */}
                        <path
                          d="M0,40 C70,75 140,15 210,50 C265,75 295,30 320,55 L320,130 L0,130 Z"
                          fill={`url(#wave-soft-${product.id}-${idx})`}
                        />

                        {/* Layer 2 Main Foreground Wave Curve */}
                        <path
                          d="M0,65 C80,30 150,95 220,50 C270,20 300,70 320,50 L320,130 L0,130 Z"
                          fill={`url(#wave-main-${product.id}-${idx})`}
                        />
                      </svg>

                      {/* Centered Floating Circular Action Button linking to product page */}
                      <Link
                        href={product.href}
                        aria-label={`Go to ${product.title} page`}
                        className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl hover:shadow-2xl flex items-center justify-center text-slate-800 hover:scale-115 active:scale-95 transition-all duration-300 group/btn border border-slate-100 z-10 cursor-pointer"
                      >
                        <ArrowRight
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${product.iconColor} transition-transform duration-300 group-hover/btn:translate-x-1`}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
            {PRODUCTS_DATA.map((product, idx) => (
              <button
                key={product.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 bg-[#004a98] shadow-xs"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
