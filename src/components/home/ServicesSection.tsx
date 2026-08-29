"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe2,
  Sparkles,
  Layers,
  Users,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface ServicePanel {
  id: string;
  number: string;
  tabTitle: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  icon: React.ElementType;
  stats: {
    value: string;
    label: string;
  };
  keyPills: string[];
}

const SERVICES_PANELS: ServicePanel[] = [
  {
    id: "cro",
    number: "01",
    tabTitle: "Contract Research (CRO)",
    title: "Full-Service Phase I–IV Trial Delivery",
    badge: "Full-Service CRO",
    tagline: "End-to-End Operational Excellence",
    description:
      "Comprehensive clinical management spanning protocol design, site activation, risk-based monitoring (RBM), pharmacovigilance, and global health authority submissions worldwide.",
    imageSrc: "/images/services/service-cro.jpg",
    imageAlt:
      "Clinical operations managers and investigators reviewing study progress",
    href: "/services/cro",
    icon: Globe2,
    stats: {
      value: "100%",
      label: "ICH-GCP & FDA Compliance",
    },
    keyPills: [
      "Site Feasibility & Startup",
      "Risk-Based Monitoring (RBM)",
      "24/7 Pharmacovigilance",
      "FDA / EMA Submission Ready",
    ],
  },
  {
    id: "ai",
    number: "02",
    tabTitle: "TruMinds AI & TruForm",
    title: "Accelerated Clinical Data Automation",
    badge: "Proprietary AI Platform",
    tagline: "Generative AI & Data Pipelines",
    description:
      "Automated CDISC SDTM and ADaM conversions, instant TLF generation, and Generative AI protocol authoring designed to compress database lock timelines by up to 70%.",
    imageSrc: "/images/services/service-ai.jpg",
    imageAlt:
      "Clinical AI engineer analyzing automated CDISC datasets and models",
    href: "/services/ai-solutions",
    icon: Sparkles,
    stats: {
      value: "70%",
      label: "Faster SDTM Mapping",
    },
    keyPills: [
      "Automated SDTM / ADaM",
      "Instant TLF Generation",
      "GenAI Protocol Authoring",
      "Predictive Site Feasibility",
    ],
  },
  {
    id: "fsp",
    number: "03",
    tabTitle: "Functional Provider (FSP)",
    title: "Scalable Functional Resourcing Pods",
    badge: "FSP + CRO Hybrid",
    tagline: "Agile Modular Partnerships",
    description:
      "Flexible hybrid engagement models giving sponsors dedicated biostatistics, clinical data management, medical writing, and safety teams with complete operational control.",
    imageSrc: "/images/services/service-fsp.jpg",
    imageAlt:
      "Biostatistics and medical writing team collaborating in research center",
    href: "/services/fsp-services",
    icon: Layers,
    stats: {
      value: "Flexible",
      label: "Modular Resource Pods",
    },
    keyPills: [
      "Dedicated Biometrics Pods",
      "Data Management & EDC",
      "Medical Writing Strategy",
      "Elastic Resource Scaling",
    ],
  },
  {
    id: "staffing",
    number: "04",
    tabTitle: "Clinical Staffing",
    title: "Specialized Clinical Domain Talent",
    badge: "Global Resourcing",
    tagline: "Pre-Vetted Clinical Specialists",
    description:
      "Connecting sponsors and CROs with experienced Clinical Research Associates (CRAs), medical monitors, biostatisticians, and project directors across US, Europe, and APAC.",
    imageSrc: "/images/services/service-staffing.jpg",
    imageAlt:
      "Senior CRA and lead physician discussing clinical trial monitoring",
    href: "/services/staffing-solutions",
    icon: Users,
    stats: {
      value: "Global",
      label: "US • Europe • APAC Reach",
    },
    keyPills: [
      "Experienced Field & Remote CRAs",
      "Medical Monitors & Directors",
      "Biostatisticians & Programmers",
      "Rapid 14-Day Deployment",
    ],
  },
];

export function ServicesSection() {
  const [activePanelId, setActivePanelId] = useState<string>("cro");
  const activeService =
    SERVICES_PANELS.find((p) => p.id === activePanelId) || SERVICES_PANELS[0];

  return (
    <section className="relative py-10 bg-linear-to-b from-slate-100/95 via-sky-50/40 to-slate-100/80 border-b border-slate-200/80 overflow-hidden">
      {/* Subtle Architectural Dot Mesh */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-35" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-1 bg-[#0068a5] rounded-full" />
              <p className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#0068a5]">
                Services & Delivery Models
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
              Four Pillars of{" "}
              <span className="text-[#004a98]">Clinical Excellence</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Tailored engagement models delivering scientific rigor,
              operational agility, and proprietary AI automation across the
              trial lifecycle.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 hover:text-[#004a98] font-bold text-xs sm:text-sm border border-slate-300/80 shadow-2xs hover:shadow-xs transition-all shrink-0 self-start md:self-auto"
          >
            <span>Explore All Services</span>
            <div className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-[#004a98] group-hover:text-white flex items-center justify-center transition-all">
              <ChevronRight className="w-3 h-3" />
            </div>
          </Link>
        </div>

        {/* Mobile Tab Switcher (<1024px) */}
        <div className="lg:hidden grid grid-cols-2 gap-2 mb-6">
          {SERVICES_PANELS.map((panel) => {
            const Icon = panel.icon;
            const isActive = panel.id === activePanelId;
            return (
              <button
                key={panel.id}
                onClick={() => setActivePanelId(panel.id)}
                className={`p-3 rounded-2xl border flex items-center gap-2.5 transition-all text-left cursor-pointer ${
                  isActive
                    ? "bg-[#004a98] text-white border-[#004a98] shadow-md"
                    : "bg-white text-slate-700 border-slate-200"
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-[#004a98]"}`}
                />
                <span className="text-xs font-bold truncate">
                  {panel.tabTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Desktop Expanding Horizontal Panels (>=1024px) */}
        <div className="hidden lg:flex gap-3.5 h-140 w-full mb-6">
          {SERVICES_PANELS.map((panel) => {
            const Icon = panel.icon;
            const isActive = panel.id === activePanelId;

            return (
              <div
                key={panel.id}
                onClick={() => setActivePanelId(panel.id)}
                onMouseEnter={() => setActivePanelId(panel.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-[flex] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] border ${
                  isActive
                    ? "flex-[4.5] bg-white border-slate-300/90 shadow-xl ring-1 ring-black/5 p-6 xl:p-8"
                    : "flex-[0.9] bg-slate-900 border-slate-200/80 hover:border-slate-400 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Inactive Collapsed Panel Pillar */}
                {!isActive && (
                  <div className="relative w-full h-full overflow-hidden rounded-2xl flex flex-col justify-between items-center p-5 select-none">
                    {/* Background Preview Image */}
                    <Image
                      src={panel.imageSrc}
                      alt={panel.imageAlt}
                      fill
                      className="object-cover opacity-60 grayscale-30 hover:grayscale-0 hover:opacity-85 transition-all duration-500"
                      sizes="20vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/60 to-slate-900/40" />

                    <div className="relative z-10 w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="relative z-10 [writing-mode:vertical-rl] rotate-180 text-white font-bold text-xs xl:text-sm tracking-widest uppercase flex items-center gap-3">
                      <span>{panel.tabTitle}</span>
                      <span className="w-6 h-0.5 bg-white/70" />
                    </div>

                    <span className="relative z-10 font-mono text-sm font-extrabold text-white">
                      {panel.number}
                    </span>
                  </div>
                )}

                {/* Active Expanded Panel: Clean 2-Column Showcase */}
                {isActive && (
                  <div className="w-full h-full grid grid-cols-12 gap-6 xl:gap-8 items-center animate-panel-fade">
                    {/* Left Column: Clear Text & Narrative */}
                    <div className="col-span-6 flex flex-col justify-between h-full space-y-4 py-2">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-[#004a98]/10 text-[#004a98]">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0068a5] font-mono">
                            {panel.number} / {panel.badge}
                          </span>
                        </div>

                        <h3 className="text-2xl xl:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                          {panel.title}
                        </h3>

                        <p className="text-xs xl:text-sm text-slate-600 leading-relaxed font-normal">
                          {panel.description}
                        </p>
                      </div>

                      {/* Key Capabilities */}
                      <div className="grid grid-cols-1 gap-2 pt-1">
                        {panel.keyPills.map((pill, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-800"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{pill}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action CTA */}
                      <div className="pt-2">
                        <Link
                          href={panel.href}
                          className="group/btn inline-flex items-center gap-3 px-7 py-3 rounded-xl bg-linear-to-r from-[#004a98] to-[#0068a5] hover:from-[#003b7a] hover:to-[#005587] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-102 transition-all cursor-pointer"
                        >
                          <span>Discover Full {panel.tabTitle}</span>
                          <div className="w-5 h-5 rounded-full bg-white/20 group-hover/btn:bg-white/30 group-hover/btn:translate-x-1 flex items-center justify-center transition-all">
                            <ArrowRight className="w-3 h-3 text-white" />
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: 100% Crisp, Bright, Framed Photography */}
                    <div className="col-span-6 h-full relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group/img">
                      <Image
                        src={panel.imageSrc}
                        alt={panel.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/img:scale-103"
                        sizes="(max-width: 1280px) 40vw, 30vw"
                      />

                      {/* Floating Glass Metric Badge at Bottom */}
                      <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold text-[#004a98] font-mono">
                            {panel.stats.value}
                          </span>
                          <span className="text-xs font-bold text-slate-800">
                            {panel.stats.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Detail Card Display (<1024px) */}
        <div className="lg:hidden rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl p-5 sm:p-6 flex flex-col gap-5">
          {/* 100% Bright Crisp Image at Top */}
          <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-slate-100">
            <Image
              src={activeService.imageSrc}
              alt={activeService.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-200/80 shadow-xs text-xs font-bold text-[#004a98]">
              {activeService.badge}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {activeService.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {activeService.description}
            </p>
          </div>

          <div className="space-y-2">
            {activeService.keyPills.map((pill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-800"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{pill}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href={activeService.href}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#004a98] text-white font-bold text-xs shadow-md"
            >
              <span>Learn More About {activeService.tabTitle}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
