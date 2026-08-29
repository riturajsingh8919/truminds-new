import React from "react";
import Link from "next/link";
import { HeroSlider } from "@/components/home/HeroSlider";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Dynamic Light-Themed Hero Slider */}
      <HeroSlider />

      {/* About Us Company Section with Fluid Organic Mask */}
      <AboutSection />

      {/* Comprehensive Services & Delivery Models Section */}
      <ServicesSection />

      {/* Footer minimal preview */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 text-center text-xs text-slate-400 space-y-4">
          <p>
            © {new Date().getFullYear()} TruMinds Clinical. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300 font-medium">
            <Link
              href="/about-us"
              className="hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/therapeutic-areas"
              className="hover:text-white transition-colors"
            >
              Therapeutic Areas
            </Link>
            <Link
              href="/products"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              href="/giving-back"
              className="hover:text-white transition-colors"
            >
              Giving Back
            </Link>
            <Link
              href="/resources"
              className="hover:text-white transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/careers"
              className="hover:text-white transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
