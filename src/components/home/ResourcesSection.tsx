"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  MapPin,
  BookOpenText,
  CalendarDays,
  Video,
  ArrowUpRight,
} from "lucide-react";

interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  href: string;
  image: string;
}

interface EventItem {
  id: string;
  name: string;
  category: string;
  month: string;
  days: string;
  year: string;
  location: string;
  role: string;
  topic: string;
  href: string;
  isVirtual?: boolean;
}

const BLOGS_DATA: BlogArticle[] = [
  {
    id: "fda-ai-guidance",
    title: "FDA & EMA Guidance on AI and Machine Learning in Clinical Trials",
    excerpt:
      "Analyzing latest regulatory frameworks for artificial intelligence in clinical data management, automated biometrics derivations, and 21 CFR Part 11 audit integrity.",
    category: "Regulatory Affairs",
    readTime: "5 min read",
    date: "Aug 2026",
    href: "/resources/blogs",
    image: "/images/resources/blog-ai-fda.jpg",
  },
  {
    id: "sdtm-adam-automation",
    title: "Accelerating Database Lock: 70% Time Reduction in SDTM & ADaM",
    excerpt:
      "How intelligent metadata-driven automation eliminates repetitive clinical programming without compromising CDISC 3.3 validation.",
    category: "Biometrics & CDISC",
    readTime: "4 min read",
    date: "Jul 2026",
    href: "/resources/blogs",
    image: "/images/resources/blog-cdisc-sdtm.jpg",
  },
  {
    id: "rbqm-ich-e6r3",
    title: "Risk-Based Quality Management (RBQM) Under ICH E6(R3) Guidelines",
    excerpt:
      "Proactive centralized monitoring, Key Risk Indicators (KRIs), and real-time mitigation strategies for multicenter global trials.",
    category: "Clinical Operations",
    readTime: "6 min read",
    date: "Jul 2026",
    href: "/resources/blogs",
    image: "/images/resources/blog-rbqm.jpg",
  },
];

const EVENTS_DATA: EventItem[] = [
  {
    id: "dia-2026",
    name: "DIA Global Annual Meeting 2026",
    category: "Global Conference",
    month: "JUN",
    days: "15-19",
    year: "2026",
    location: "San Diego Convention Center, CA",
    role: "Speaker & Exhibitor • Booth #412",
    topic: "Next-Generation AI Biometrics & Automated CDISC Pipelines",
    href: "/resources/events",
  },
  {
    id: "scope-summit",
    name: "SCOPE Summit for Clinical Operations",
    category: "Industry Summit",
    month: "FEB",
    days: "08-11",
    year: "2026",
    location: "Orlando, FL, USA",
    role: "Panel: AI in EDC & Trial Governance",
    topic: "Hybrid FSP+CRO Delivery Models & Decentralized Trial Logistics",
    href: "/resources/events",
  },
  {
    id: "phuse-eu",
    name: "PHUSE & CDISC European Interchange",
    category: "Technical Symposium",
    month: "OCT",
    days: "12-15",
    year: "2026",
    location: "Frankfurt, Germany & Virtual",
    role: "Workshop: Automated CSR TLFs",
    topic: "Automated Statistical Tables, Listings & Figures in SAS® and R",
    href: "/resources/events",
  },
  {
    id: "etmf-webinar",
    name: "AI-Driven eTMF Inspection Readiness Masterclass",
    category: "Virtual Masterclass",
    month: "LIVE",
    days: "STREAM",
    year: "2026",
    location: "Global Virtual Broadcast",
    role: "Complimentary Masterclass",
    topic: "Continuous DIA TMF Reference Model Audit Readiness with AI",
    href: "/resources/events",
    isVirtual: true,
  },
];

export function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<"blogs" | "events">("blogs");

  return (
    <section className="relative py-24 sm:py-32 bg-[#f8fafc]/50 border-b border-slate-200/80 overflow-hidden">
      {/* Background Subtle Architectural Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div className="max-w-3xl space-y-3.5">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-1 bg-[#0068a5] rounded-full" />
              <p className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#0068a5] font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                05 / Knowledge & Industry Forum
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Clinical Intelligence &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#004a98] via-[#0068a5] to-cyan-600">
                Global Events
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Explore regulatory analysis, breakthrough trial technologies, and
              meet TruMinds Clinical leadership at major international
              symposiums.
            </p>
          </div>

          {/* Luxury Segmented View Switcher Pill */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm shrink-0">
            <button
              onClick={() => setActiveTab("blogs")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                activeTab === "blogs"
                  ? "bg-[#004a98] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <BookOpenText className="w-4 h-4" />
              <span>Articles & Insights</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                  activeTab === "blogs"
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                3
              </span>
            </button>

            <button
              onClick={() => setActiveTab("events")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                activeTab === "events"
                  ? "bg-[#004a98] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <CalendarDays className="w-4 h-4" />
              <span>Upcoming Events</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                  activeTab === "events"
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                4
              </span>
            </button>
          </div>
        </div>

        {/* TAB 1: Ultra-Clean Magazine-Style Blog Cards */}
        {activeTab === "blogs" && (
          <div className="transition-opacity duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {BLOGS_DATA.map((blog) => (
                <Link
                  key={blog.id}
                  href={blog.href}
                  className="group rounded-4xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:border-[#004a98]/40 ring-1 ring-slate-100/80 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-2.5"
                >
                  <div>
                    {/* Visual Preview Image */}
                    <div className="relative w-full h-56 sm:h-60 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-108"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />

                      {/* Floating Category Pill */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-mono font-extrabold text-[#004a98] shadow-xs">
                          {blog.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                        <span className="flex items-center gap-1.5 text-slate-200">
                          <Clock className="w-3.5 h-3.5" />
                          {blog.readTime}
                        </span>
                        <span className="text-slate-300">{blog.date}</span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-7 sm:p-8 space-y-3">
                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#004a98] transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="px-7 sm:px-8 pb-7 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-extrabold text-[#0068a5] group-hover:text-[#004a98]">
                    <span>Read Full Article</span>
                    <div className="w-9 h-9 rounded-full bg-sky-50 group-hover:bg-[#004a98] group-hover:text-white flex items-center justify-center shadow-xs border border-sky-100 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Ultra-Premium Event Horizon Grid */}
        {activeTab === "events" && (
          <div className="transition-opacity duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {EVENTS_DATA.map((event) => (
                <div
                  key={event.id}
                  className="group relative rounded-4xl bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:border-[#004a98]/40 ring-1 ring-slate-100/80 transition-all duration-500 p-7 sm:p-9 flex flex-col justify-between space-y-6 hover:-translate-y-2.5"
                >
                  <div className="space-y-5">
                    {/* Top Date Chip & Category Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {/* Architectural Calendar Date Badge */}
                        <div className="w-16 h-18 rounded-2xl bg-slate-950 text-white flex flex-col items-center justify-center shrink-0 border border-slate-800 shadow-md">
                          <span className="text-[10px] font-mono font-extrabold tracking-widest text-cyan-400 uppercase leading-none">
                            {event.month}
                          </span>
                          <span className="text-lg font-extrabold tracking-tight leading-none mt-1">
                            {event.days}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400 leading-none mt-0.5">
                            {event.year}
                          </span>
                        </div>

                        <div>
                          <span className="text-[11px] font-mono font-extrabold text-[#0068a5] bg-sky-50 px-2.5 py-1 rounded-md">
                            {event.category}
                          </span>
                          <p className="text-xs font-mono font-bold text-slate-500 flex items-center gap-1.5 mt-2">
                            {event.isVirtual ? (
                              <Video className="w-3.5 h-3.5 text-cyan-600" />
                            ) : (
                              <MapPin className="w-3.5 h-3.5 text-[#0068a5]" />
                            )}
                            {event.location}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md shrink-0">
                        {event.role}
                      </span>
                    </div>

                    {/* Event Title & Topic */}
                    <div className="space-y-2 pt-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#004a98] transition-colors">
                        {event.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        <strong className="text-slate-900 font-semibold">
                          Featured Session:
                        </strong>{" "}
                        {event.topic}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      TruMinds Scientific Delegation
                    </span>

                    <Link
                      href={event.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-[#004a98] text-white text-xs font-mono font-extrabold shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <span>
                        {event.isVirtual
                          ? "Register for Stream"
                          : "Schedule Meeting"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
