import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Layers,
  Users,
  Globe2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { AboutSection } from "@/components/home/AboutSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Dynamic Light-Themed Hero Slider */}
      <HeroSlider />

      {/* About Us Company Section */}
      <AboutSection />

      {/* Trust & Key Metrics Strip */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#004a98]">
                20+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                Therapeutic Specialties
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Cross-domain oncology, CNS, and rare disease expertise.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0068a5]">
                12+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                TruForm Platform Modules
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Integrated EDC, SDTM, ADaM, RTSM & ePRO suite.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#004a98]">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                Compliance Standards
              </div>
              <p className="text-xs text-slate-500 mt-1">
                FDA, EMA, PMDA, GCP & 21 CFR Part 11 ready.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0068a5]">
                Global
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                Trial Delivery Footprint
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Operations across North America, Europe, and APAC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Clinical Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#0068a5] rounded-full" />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0068a5]">
                  End-to-End Capabilities
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Clinical Services & AI Intelligence
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold text-[#004a98] hover:text-[#0068a5] flex items-center gap-1.5 transition-colors group"
            >
              <span>Explore all service models</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0068a5]/10 text-[#0068a5] flex items-center justify-center mb-4 group-hover:bg-[#0068a5] group-hover:text-white transition-colors">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  CRO Services
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Comprehensive trial management from protocol design and site activation to biometrics and regulatory submission.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <Link
                  href="/services/cro"
                  className="text-xs font-semibold text-[#004a98] flex items-center gap-1 hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#004a98]/10 text-[#004a98] flex items-center justify-center mb-4 group-hover:bg-[#004a98] group-hover:text-white transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  TruMinds AI Solutions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Generative AI and automated document generation for protocols, clinical study reports (CSR), and intelligent trial queries.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <Link
                  href="/services/ai-solutions"
                  className="text-xs font-semibold text-[#004a98] flex items-center gap-1 hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0068a5]/10 text-[#0068a5] flex items-center justify-center mb-4 group-hover:bg-[#0068a5] group-hover:text-white transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  FSP Services
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Agile functional service provider models for biostatistics, clinical data management, medical writing, and safety.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <Link
                  href="/services/fsp-services"
                  className="text-xs font-semibold text-[#004a98] flex items-center gap-1 hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#004a98]/10 text-[#004a98] flex items-center justify-center mb-4 group-hover:bg-[#004a98] group-hover:text-white transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Staffing Solutions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Expert clinical research associates (CRAs), medical monitors, data managers, and project leaders across global markets.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <Link
                  href="/services/staffing-solutions"
                  className="text-xs font-semibold text-[#004a98] flex items-center gap-1 hover:underline"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimal preview */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container text-center text-xs text-slate-400 space-y-4">
          <p>
            © {new Date().getFullYear()} TruMinds Clinical. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300 font-medium">
            <Link href="/about-us" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/therapeutic-areas" className="hover:text-white transition-colors">
              Therapeutic Areas
            </Link>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/giving-back" className="hover:text-white transition-colors">
              Giving Back
            </Link>
            <Link href="/resources" className="hover:text-white transition-colors">
              Resources
            </Link>
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
