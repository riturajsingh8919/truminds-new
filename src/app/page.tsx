import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Users,
  CheckCircle2,
  Globe2,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-linear-to-b from-slate-50 via-white to-slate-50 border-b border-slate-100">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full container h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] right-[5%] w-112.5 h-112.5 bg-sky-200/40 rounded-full blur-3xl" />
          <div className="absolute top-[20%] left-[5%] w-95 h-95 bg-blue-100/60 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Service Global CRO & TruForm eClinical Suite</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Accelerating Clinical Trials with{" "}
              <span className="bg-linear-to-r from-[#0068a5] via-[#004a98] to-[#002f6c] bg-clip-text text-transparent">
                Data Precision & AI Intelligence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              TruMinds Clinical delivers end-to-end trial management across 20
              specialized therapeutic areas, powered by our proprietary TruForm
              Platform and next-generation clinical data automation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/products/truform-platform"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-[#004a98] to-[#0068a5] text-white font-bold text-sm shadow-md hover:shadow-lg hover:from-[#003b7a] hover:to-[#005587] transition-all group"
              >
                <span>Explore TruForm Platform</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/therapeutic-areas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-sm shadow-xs hover:bg-slate-50 transition-all"
              >
                <span>Therapeutic Areas (20)</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>FDA & EMA Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>CDISC SDTM & ADaM Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>21 CFR Part 11 & GAMP 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Key Value Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#004a98]">
                20+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                Therapeutic Specialties
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0068a5]">
                12+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                TruForm eClinical Modules
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#004a98]">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                Regulatory Audit Pass Rate
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0068a5]">
                Global
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                US • Europe • APAC Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                End-to-End Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Clinical Services & AI Intelligence
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1.5"
            >
              <span>View all 4 service models</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-xs border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                CRO Services
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Complete trial management from protocol design and site
                activation to regulatory submission.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-xs border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                TruMinds AI Solutions
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Generative AI and automated clinical document generation for
                protocol, CSR, and data querying.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-xs border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                FSP Services
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Flexible functional service provider models for biostatistics,
                data management, and medical writing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-xs border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Staffing Solutions
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Expert clinical research associates, study coordinators, and
                project managers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimal preview */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 text-center text-xs text-slate-400 space-y-4">
          <p>
            © {new Date().getFullYear()} TruMinds Clinical. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-slate-300 font-medium">
            <Link href="/about-us" className="hover:text-white">
              About Us
            </Link>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/therapeutic-areas" className="hover:text-white">
              Therapeutic Areas
            </Link>
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <Link href="/giving-back" className="hover:text-white">
              Giving Back
            </Link>
            <Link href="/resources" className="hover:text-white">
              Resources
            </Link>
            <Link href="/careers" className="hover:text-white">
              Careers
            </Link>
            <Link href="/contact-us" className="hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
