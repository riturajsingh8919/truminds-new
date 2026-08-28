"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  id: number;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
}

const SLIDES: SlideData[] = [
  {
    id: 0,
    eyebrow: "Global Clinical Contract Research Organization",
    title: "Contract Research Organization Partner for",
    titleHighlight: "All Your Services",
    description:
      "TruMinds delivers comprehensive Phase I–IV clinical trial management, biometric analytics, and regulatory submissions for pharmaceutical, biotech, and medical device innovators worldwide.",
    primaryCta: {
      label: "Explore Clinical Services",
      href: "/services",
    },
    secondaryCta: {
      label: "View Therapeutic Areas",
      href: "/therapeutic-areas",
    },
    imageSrc: "/images/hero/hero-cro.jpg",
    imageAlt:
      "Clinical research scientists analyzing clinical trial data on a tablet in a laboratory",
    imageCaption: "Phase I–IV Full-Service Trial Management",
  },
  {
    id: 1,
    eyebrow: "Intelligent Clinical Automation",
    title: "Accelerating Clinical Trials with",
    titleHighlight: "TruMinds AI & TruForm Suite",
    description:
      "Transforming study timelines through automated CDISC SDTM/ADaM mapping, generative AI protocol intelligence, and unified real-time electronic data capture.",
    primaryCta: {
      label: "Explore TruForm Platform",
      href: "/products/truform-platform",
    },
    secondaryCta: {
      label: "Discover AI Solutions",
      href: "/services/ai-solutions",
    },
    imageSrc: "/images/hero/hero-ai.jpg",
    imageAlt:
      "Biostatistician analyzing AI clinical trial data on modern multi-screen workstations",
    imageCaption: "Unified eClinical Platform & AI Workflows",
  },
  {
    id: 2,
    eyebrow: "Specialized Medical & Scientific Expertise",
    title: "Deep Clinical Domain Leadership Across",
    titleHighlight: "20 Therapeutic Specialties",
    description:
      "From pioneering oncology and cardiovascular treatments to complex neuroscience, immunology, and rare diseases, our dedicated scientific leads ensure protocol success.",
    primaryCta: {
      label: "Explore All 20 Areas",
      href: "/therapeutic-areas",
    },
    secondaryCta: {
      label: "Contact Clinical Team",
      href: "/contact-us",
    },
    imageSrc: "/images/hero/hero-therapeutic.jpg",
    imageAlt:
      "Multidisciplinary medical research committee reviewing clinical trial imaging scans",
    imageCaption: "Dedicated Medical & Scientific Directors",
  },
  {
    id: 3,
    eyebrow: "Flexible Global Resourcing Models",
    title: "Tailored Functional Service Provider &",
    titleHighlight: "Specialized Clinical Staffing",
    description:
      "Providing agile FSP partnerships across biometrics, medical writing, and regulatory affairs with top-tier clinical specialists across the US, Europe, and APAC.",
    primaryCta: {
      label: "Explore FSP Models",
      href: "/services/fsp-services",
    },
    secondaryCta: {
      label: "Staffing Solutions",
      href: "/services/staffing-solutions",
    },
    imageSrc: "/images/hero/hero-fsp.jpg",
    imageAlt:
      "Global clinical project directors and study coordinators collaborating in a boardroom",
    imageCaption: "Global Clinical Trial Teams & Resourcing",
  },
];

const AUTOPLAY_DURATION = 6000;

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Autoplay handler
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, currentSlide]);

  // Touch gesture handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const slide = SLIDES[currentSlide];

  return (
    <section
      className="relative bg-linear-to-b from-slate-100/90 via-slate-50 to-slate-100/60 border-b border-slate-200/80 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="TruMinds Clinical Highlights"
    >
      {/* Background architectural grid & subtle luxury glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-35" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Category / Sub-heading */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-1 bg-[#0068a5] rounded-full" />
              <p className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#0068a5]">
                {slide.eyebrow}
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight leading-[1.14]">
              {slide.title}{" "}
              <span className="text-[#004a98] block sm:inline">
                {slide.titleHighlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal max-w-xl">
              {slide.description}
            </p>

            {/* Highly Attractive Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href={slide.primaryCta.href}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-linear-to-r from-[#004a98] via-[#005ea6] to-[#0068a5] hover:from-[#003b7a] hover:via-[#004f8f] hover:to-[#005587] text-white font-bold text-sm tracking-wide shadow-md shadow-[#004a98]/25 hover:shadow-xl hover:shadow-[#004a98]/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer overflow-hidden"
              >
                <span>{slide.primaryCta.label}</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
              <Link
                href={slide.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/90 hover:bg-white text-slate-800 hover:text-[#004a98] font-bold text-sm border border-slate-300/80 hover:border-[#004a98]/40 shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>{slide.secondaryCta.label}</span>
              </Link>
            </div>

            {/* Clean, Minimal Slider Controls (Dots + Counter + Arrows) */}
            <div className="pt-6 sm:pt-8 flex items-center justify-between gap-4 border-t border-slate-200/70">
              {/* Progress Dots with Active Expansion */}
              <div className="flex items-center gap-2">
                {SLIDES.map((_, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "w-8 bg-[#004a98]"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  );
                })}
                <span className="text-xs font-mono font-semibold text-slate-400 ml-2">
                  0{currentSlide + 1} / 0{SLIDES.length}
                </span>
              </div>

              {/* Prev / Next Arrow Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Column with Framed Clinical Photography */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full rounded-3xl bg-white p-2.5 sm:p-3 shadow-xl border border-slate-200/90 ring-1 ring-black/5 relative overflow-hidden transition-all">
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  priority={currentSlide === 0}
                  className="object-cover transition-transform duration-700 hover:scale-103"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Elegant subtle bottom caption strip on photo */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-800 truncate">
                      {slide.imageCaption}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 shrink-0">
                    0{currentSlide + 1}/0{SLIDES.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
