"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Workflow, Stethoscope } from "lucide-react";
import { AboutOrganicImage } from "./AboutOrganicImage";

export function AboutSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100 overflow-hidden">
      {/* Background Soft Architectural Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-1 bg-[#0068a5] rounded-full" />
              <p className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#0068a5]">
                About TruMinds Clinical
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight leading-[1.16]">
              A Trusted Partner in{" "}
              <span className="text-[#004a98]">Clinical Research</span> & Trial
              Acceleration
            </h2>

            {/* Lead Narrative */}
            <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal">
              TruMinds Clinical is a global Contract Research Organization
              (CRO), Functional Service Provider (FSP), and Clinical Staffing
              partner supporting pharmaceutical, biotechnology, medical device,
              and diagnostic innovators worldwide.
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-slate-50 transition-colors">
                <div className="p-2 rounded-xl bg-[#004a98]/10 text-[#004a98] shrink-0 mt-0.5">
                  <Workflow className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    TruForm AI Automation
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Automated SDTM/ADaM datasets and TLF generation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-slate-50 transition-colors">
                <div className="p-2 rounded-xl bg-[#0068a5]/10 text-[#0068a5] shrink-0 mt-0.5">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    20 Therapeutic Domains
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Specialized oncology, CNS, and cardiovascular teams.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/about-us"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-linear-to-r from-[#004a98] via-[#005ea6] to-[#0068a5] hover:from-[#003b7a] hover:via-[#004f8f] hover:to-[#005587] text-white font-bold text-sm tracking-wide shadow-md shadow-[#004a98]/25 hover:shadow-xl hover:shadow-[#004a98]/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Read Our Full Story</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 hover:text-[#004a98] font-bold text-sm border border-slate-300/80 hover:border-[#004a98]/40 shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Connect With Leadership</span>
              </Link>
            </div>
          </div>

          {/* Right Fluid Organic Masked Image Column */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <AboutOrganicImage
              mainImageSrc="/images/about/about-overview.jpg"
              mainImageAlt="TruMinds Clinical global research leadership and scientists"
              secondaryImageSrc="/images/hero/hero-cro.jpg"
              secondaryImageAlt="Clinical research laboratory testing"
            />
          </div>
        </div>

        {/* Markets We Serve Summary Strip */}
        <div className="mt-14 pt-10 border-t border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/60 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#004a98] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Pharmaceutical
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/60 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0068a5] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Biotechnology
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/60 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#004a98] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Medical Device & Diagnostics
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/60 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0068a5] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Contract Research (CROs)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
