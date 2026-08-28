"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NAVIGATION_DATA, NavGroup } from "@/data/navigation";
import { DropdownMenu } from "./DropdownMenu";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll position for header shadow & elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close menus
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hover handlers with debounce for smooth transitions
  const handleMouseEnter = (groupTitle: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(groupTitle);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const closeAllMenus = () => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  };

  const activeMegaMenuGroup = NAVIGATION_DATA.find(
    (group) => group.type === "megamenu" && group.title === activeMenu
  );

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-40 w-full transition-all duration-300"
      >
        {/* Main Navigation Bar */}
        <nav
          className={`w-full transition-all duration-300 bg-white ${
            isScrolled
              ? "shadow-md border-b border-slate-200/80 py-3"
              : "border-b border-slate-100 py-4"
          }`}
          aria-label="Main Navigation"
        >
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="flex items-center justify-between gap-4">
              {/* Brand Logo - Increased size for desktop */}
              <div className="shrink-0 flex items-center">
                <Link
                  href="/"
                  onClick={closeAllMenus}
                  className="flex items-center gap-2 group transition-opacity hover:opacity-90"
                  aria-label="TruMinds Clinical Home"
                >
                  <Image
                    src="/logo.png"
                    alt="TruMinds Clinical Logo"
                    width={220}
                    height={60}
                    className="h-10 sm:h-11 md:h-12 lg:h-13 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Navigation Links (Visible on 1120px and above) */}
              <div className="hidden min-[1120px]:flex items-center space-x-0.5 xl:space-x-1">
                {NAVIGATION_DATA.map((group: NavGroup) => {
                  const hasDropdown = group.type === "dropdown";
                  const hasMegaMenu = group.type === "megamenu";
                  const isMenuOpen = activeMenu === group.title;
                  const isActiveRoute =
                    pathname === group.slug ||
                    (group.slug !== "/" && pathname.startsWith(group.slug));

                  if (!hasDropdown && !hasMegaMenu) {
                    return (
                      <Link
                        key={group.slug}
                        href={group.slug}
                        onClick={closeAllMenus}
                        className={`px-2.5 xl:px-3.5 py-2 rounded-lg text-[13.5px] xl:text-[15px] font-semibold transition-all ${
                          isActiveRoute
                            ? "text-primary bg-primary/8 font-bold"
                            : "text-slate-700 hover:text-primary hover:bg-slate-50"
                        }`}
                      >
                        {group.title}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={group.title}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(group.title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() =>
                          setActiveMenu(isMenuOpen ? null : group.title)
                        }
                        className={`flex items-center gap-1 px-2.5 xl:px-3.5 py-2 rounded-lg text-[13.5px] xl:text-[15px] font-semibold transition-all cursor-pointer ${
                          isMenuOpen || isActiveRoute
                            ? "text-primary bg-primary/8 font-bold"
                            : "text-slate-700 hover:text-primary hover:bg-slate-50"
                        }`}
                        aria-expanded={isMenuOpen}
                        aria-haspopup={hasMegaMenu ? "dialog" : "menu"}
                      >
                        <span>{group.title}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isMenuOpen ? "rotate-180 text-primary" : "text-slate-400"
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu Component for Services & Resources */}
                      {hasDropdown && (
                        <DropdownMenu
                          group={group}
                          isOpen={isMenuOpen}
                          onClose={() => setActiveMenu(null)}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Modern Staggered Mobile Menu Icon Button (Visible only on < 1120px) */}
              <div className="min-[1120px]:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-primary border border-slate-200/80 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 flex flex-col justify-center items-end gap-1.5 w-11 h-11 group shadow-2xs cursor-pointer"
                  aria-label="Open navigation menu"
                >
                  <span className="w-5 h-[2.5px] bg-slate-800 group-hover:bg-primary rounded-full transition-all"></span>
                  <span className="w-3.5 h-[2.5px] bg-[#0068a5] rounded-full transition-all group-hover:w-5"></span>
                  <span className="w-4.5 h-[2.5px] bg-slate-800 group-hover:bg-primary rounded-full transition-all"></span>
                </button>
              </div>
            </div>

            {/* Centered Container Mega Menu for Therapeutic Areas & Products */}
            {activeMegaMenuGroup && (
              <div
                onMouseEnter={() => handleMouseEnter(activeMegaMenuGroup.title)}
                onMouseLeave={handleMouseLeave}
              >
                <MegaMenu
                  group={activeMegaMenuGroup}
                  isOpen={Boolean(activeMegaMenuGroup)}
                  onClose={() => setActiveMenu(null)}
                />
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
