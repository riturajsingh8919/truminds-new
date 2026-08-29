import React from "react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { MetricsSection } from "@/components/home/MetricsSection";

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
    </div>
  );
}
