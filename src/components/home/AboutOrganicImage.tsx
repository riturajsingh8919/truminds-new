"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface AboutOrganicImageProps {
  mainImageSrc: string;
  mainImageAlt: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
}

export function AboutOrganicImage({
  mainImageSrc,
  mainImageAlt,
  secondaryImageSrc = "/images/hero/hero-cro.jpg",
  secondaryImageAlt = "Clinical trial research data analysis",
}: AboutOrganicImageProps) {
  return (
    <div className="relative w-full max-w-130 sm:max-w-145 lg:max-w-160 mx-auto aspect-square flex items-center justify-center select-none py-4">
      {/* Background Multi-Layered Soft Ambient Glows */}
      <div className="absolute inset-2 bg-sky-200/40 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" />
      <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* Top-Left Floating Brand Crescent (Slow Smooth Loop Animation) */}
      <div className="absolute top-0 left-2 sm:top-2 sm:left-4 w-16 h-16 sm:w-20 sm:h-20 -z-5 pointer-events-none animate-float-slow">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-[#0068a5] drop-shadow-md"
          fill="currentColor"
        >
          <path d="M 60,10 C 25,10 5,35 5,65 C 5,75 8,85 12,92 C 18,65 42,42 75,38 C 85,37 92,38 95,40 C 90,22 76,10 60,10 Z" />
        </svg>
      </div>

      {/* Top-Right Floating Sparkle Particle (Slow Smooth Floating Loop) */}
      <div className="absolute top-6 right-8 sm:top-8 sm:right-12 z-20 pointer-events-none animate-float-reverse">
        <div className="p-2 sm:p-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-slate-200/80 text-[#0068a5]">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Bottom-Right Floating Fluid Droplet (Slow Reverse Float Loop) */}
      <div className="absolute -bottom-2 right-2 sm:bottom-0 sm:right-4 w-18 h-18 sm:w-22 sm:h-22 z-20 pointer-events-none animate-float-reverse">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-[#004a98] drop-shadow-lg"
          fill="currentColor"
        >
          <path d="M 50,5 C 55,25 75,45 85,65 C 95,85 75,100 50,95 C 25,90 20,70 35,50 C 45,35 48,20 50,5 Z" />
        </svg>
      </div>

      {/* Subtle Floating Star Icon on Left */}
      <div className="absolute bottom-16 -left-2 sm:bottom-20 sm:left-0 z-20 pointer-events-none animate-float-slow">
        <div className="w-3.5 h-3.5 rounded-full bg-cyan-400/80 blur-[1px] ring-4 ring-white shadow-sm" />
      </div>

      {/* Main Organic Masked Image Frame */}
      <div className="relative w-[92%] h-[92%] transition-transform duration-700 hover:scale-[1.015]">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ultra-Smooth Organic Silhouette ClipPath */}
            <clipPath id="trumindsOrganicBlob">
              <path d="M 170,25 C 310,5 440,70 470,190 C 495,290 460,400 370,460 C 270,515 130,480 60,390 C -5,300 10,180 65,95 C 95,50 130,30 170,25 Z" />
            </clipPath>
          </defs>

          {/* Masked Main Clinical Image */}
          <g clipPath="url(#trumindsOrganicBlob)">
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

          {/* Flowing Organic Blue Contour Line Ribbon (From User Reference 1) */}
          <path
            d="M 45,280 C 100,290 200,320 250,260 C 310,190 410,230 475,210"
            fill="none"
            stroke="#0068a5"
            strokeWidth="11"
            strokeLinecap="round"
            className="drop-shadow-sm"
          />

          <path
            d="M 460,180 C 490,270 465,370 385,440"
            fill="none"
            stroke="#004a98"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>

        {/* Overlapping Focus Lens Circle (From User Reference 2) */}
        <div className="absolute -bottom-1 left-4 sm:bottom-2 sm:left-6 w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-[7px] border-white shadow-2xl z-10 transition-transform duration-500 hover:scale-105 group/lens">
          <Image
            src={secondaryImageSrc}
            alt={secondaryImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 180px, 220px"
          />
          {/* Subtle overlay gradient & Badge */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-0 right-0 text-center">
            <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider bg-slate-900/85 px-3 py-1 rounded-full border border-white/20 shadow-md">
              Phase I–IV CRO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
