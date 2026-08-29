import React from "react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { TherapeuticAreasSection } from "@/components/home/TherapeuticAreasSection";
import { MarketsBannerSection } from "@/components/home/MarketsBannerSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Dynamic Light-Themed Hero Slider */}
      <HeroSlider />

      {/* About Us Company Section with Fluid Organic Mask */}
      <AboutSection />

      {/* Comprehensive Services & Delivery Models Section */}
      <ServicesSection />

      {/* Impact & Key Capabilities Metrics Section (User Reference Design) */}
      <MetricsSection />

      {/* Luxury Curated Therapeutic Areas Section */}
      <TherapeuticAreasSection />

      {/* Infinite Auto-Scrolling Markets We Serve Banner */}
      <MarketsBannerSection />
    </div>
  );
}
