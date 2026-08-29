"use client";

import React from "react";
import { Globe2, Award } from "lucide-react";

interface CareerOrganicImageProps {
  mainImageSrc?: string;
  mainImageAlt?: string;
}

export function CareerOrganicImage({
  mainImageSrc = "/images/career/career-hero.jpg",
  mainImageAlt = "TruMinds Clinical global talent and researchers",
}: CareerOrganicImageProps) {
  return (
    <div className="relative w-full max-w-130 sm:max-w-145 lg:max-w-155 mx-auto aspect-square flex items-center justify-center select-none py-4">
      {/* Background Multi-Layered Soft Ambient Glows */}
      <div className="absolute inset-4 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" />
      <div className="absolute -top-6 -left-6 w-52 h-52 bg-sky-200/30 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Top-Right Floating Global Presence Badge */}
      <div className="absolute -top-1 right-2 sm:top-2 sm:right-4 z-20 pointer-events-none animate-float-slow">
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/90 text-slate-800">
          <div className="p-2 rounded-xl bg-blue-50 text-[#004a98]">
            <Globe2 className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-mono font-bold uppercase text-slate-400">
              Global Footprint
            </p>
            <p className="text-xs font-extrabold text-slate-900">
              US • UK • EU • India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom-Left Floating Retention & Culture Badge */}
      <div className="absolute bottom-4 -left-2 sm:bottom-6 sm:left-2 z-20 pointer-events-none animate-float-reverse">
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/90 text-slate-800">
          <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-mono font-bold uppercase text-slate-400">
              Talent Culture
            </p>
            <p className="text-xs font-extrabold text-slate-900">
              Top Tier Retention & Growth
            </p>
          </div>
        </div>
      </div>

      {/* Main Hexa-Curved Shield Architectural Frame */}
      <div className="relative w-[90%] h-[90%] transition-transform duration-700 hover:scale-[1.015]">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Unique Asymmetric Hexa-Curved Dynamic Silhouette ClipPath */}
            <clipPath id="trumindsCareerShield">
              <path d="M 250,20 C 370,10 470,80 480,210 C 490,320 420,440 280,480 C 170,510 50,440 30,320 C 10,190 100,50 250,20 Z" />
            </clipPath>

            <linearGradient
              id="careerEmeraldRibbon"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#004a98" />
              <stop offset="50%" stopColor="#0068a5" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            <linearGradient
              id="careerCyanRibbon"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Masked Main Clinical Talent Image */}
          <g clipPath="url(#trumindsCareerShield)">
            <image
              href={mainImageSrc}
              x="0"
              y="0"
              width="500"
              height="500"
              preserveAspectRatio="xMidYMid slice"
              aria-label={mainImageAlt}
            />
          </g>

          {/* Sweeping Dynamic Ribbon Arcs */}
          <path
            d="M 40,320 C 90,440 240,495 380,445 C 450,420 485,340 475,250"
            fill="none"
            stroke="url(#careerEmeraldRibbon)"
            strokeWidth="11"
            strokeLinecap="round"
            className="drop-shadow-md"
          />

          <path
            d="M 25,230 C 35,130 110,45 230,22"
            fill="none"
            stroke="url(#careerCyanRibbon)"
            strokeWidth="8"
            strokeLinecap="round"
            className="drop-shadow-sm opacity-90"
          />
        </svg>
      </div>
    </div>
  );
}
