"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Zap,
  GraduationCap,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { CareerOrganicImage } from "./CareerOrganicImage";

export function CareerSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
      {/* Background Soft Architectural Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-125 h-125 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-sky-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Bespoke Graphical Frame with Floating Badges */}
          <div className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1">
            <CareerOrganicImage
              mainImageSrc="/images/career/career-hero.jpg"
              mainImageAlt="Global clinical data scientists and researchers at TruMinds Clinical"
            />
          </div>

          {/* Right Column: Crisp, High-Impact Narrative & Culture Perks */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 order-1 lg:order-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-1 bg-[#0068a5] rounded-full" />
              <p className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#0068a5] font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                06 / Life & Careers at TruMinds
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Build the Future of{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#004a98] via-[#0068a5] to-emerald-600">
                Clinical Innovation
              </span>
            </h2>

            {/* Crisp Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Join a world-class team of biostatisticians, data scientists, and clinical operations leaders pioneering breakthrough therapies. We combine scientific excellence with an empowering, high-growth culture.
            </p>

            {/* 3 Graphical Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              {/* Perk 1 */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#004a98]/30 transition-all group">
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#004a98] w-fit mb-2.5 transition-transform group-hover:scale-110">
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-extrabold text-slate-900 mb-0.5">
                  Global Mobility
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  US, UK, Europe, India & remote hybrid flexibility.
                </p>
              </div>

              {/* Perk 2 */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#004a98]/30 transition-all group">
                <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-700 w-fit mb-2.5 transition-transform group-hover:scale-110">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-extrabold text-slate-900 mb-0.5">
                  AI & Automation
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Work with proprietary TruForm™ AI suites.
                </p>
              </div>

              {/* Perk 3 */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#004a98]/30 transition-all group">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 w-fit mb-2.5 transition-transform group-hover:scale-110">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-extrabold text-slate-900 mb-0.5">
                  Rapid Growth
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Mentorship, leadership paths & certifications.
                </p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Link
                href="/careers"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-[#004a98] hover:bg-[#003b7a] text-white font-extrabold text-sm shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Explore Open Opportunities</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#004a98] font-bold text-sm border border-slate-200 shadow-2xs hover:shadow-md transition-all cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-[#0068a5]" />
                <span>Join Talent Network</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
