"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  FolderOpen,
} from "lucide-react";
import { NAVIGATION_DATA, NavGroup } from "@/data/navigation";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedSubCategories, setExpandedSubCategories] = useState<Record<string, boolean>>({});

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setExpandedSections({});
    setExpandedSubCategories({});
    onClose();
  };

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleSubCategory = (catName: string) => {
    setExpandedSubCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 min-[1120px]:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl flex flex-col z-10 animate-drawer overflow-hidden border-l border-slate-200">
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-white sticky top-0 z-20">
          <Link href="/" onClick={handleClose} className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="TruMinds Clinical"
              width={150}
              height={42}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Close mobile menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-4 py-3 space-y-1.5 pb-8">
          {NAVIGATION_DATA.map((group: NavGroup) => {
            const hasSubmenu = group.type === "dropdown" || group.type === "megamenu";
            const isExpanded = expandedSections[group.title];

            if (!hasSubmenu) {
              if (group.slug === "/contact-us") {
                return (
                  <Link
                    key={group.slug}
                    href={group.slug}
                    onClick={handleClose}
                    className="group/mobcontact mt-3 flex items-center justify-between py-3.5 px-4 rounded-none bg-linear-to-r from-[#004a98] via-[#005ea6] to-[#0068a5] text-white font-extrabold text-sm shadow-md shadow-[#004a98]/20 active:scale-[0.98] transition-all"
                  >
                    <span>{group.title}</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover/mobcontact:translate-x-1 group-hover/mobcontact:-rotate-45 transition-transform" />
                  </Link>
                );
              }

              return (
                <Link
                  key={group.slug}
                  href={group.slug}
                  onClick={handleClose}
                  className="flex items-center justify-between py-3 px-3.5 rounded-xl text-slate-800 font-semibold text-sm hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <span>{group.title}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>
              );
            }

            return (
              <div key={group.title} className="rounded-xl overflow-hidden bg-slate-50/50 border border-slate-100">
                {/* Top Level Accordion Trigger */}
                <button
                  onClick={() => toggleSection(group.title)}
                  className={`w-full flex items-center justify-between py-3 px-3.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer ${
                    isExpanded
                      ? "bg-primary text-white"
                      : "text-slate-800 hover:bg-slate-100/70"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{group.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-white" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Submenu Content */}
                {isExpanded && (
                  <div className="p-2.5 space-y-2 bg-white animate-dropdown border-t border-slate-100">
                    {/* View All Header Link */}
                    <Link
                      href={group.slug}
                      onClick={handleClose}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-primary/5 text-xs font-bold text-primary hover:bg-primary/10 transition-colors"
                    >
                      <span>Explore All {group.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {/* Standard Dropdown Items (Services / Resources) */}
                    {group.items && (
                      <div className="space-y-1 pt-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.slug}
                            href={item.slug}
                            onClick={handleClose}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="p-1.5 rounded-lg bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                              <DynamicIcon name={item.iconName} className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-semibold text-slate-800 group-hover:text-primary transition-colors">
                              {item.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Mega Menu Categories (Therapeutic Areas & Products) - Closed by default */}
                    {group.categories && (
                      <div className="space-y-2 pt-1">
                        {group.categories.map((cat) => {
                          const isCatOpen = !!expandedSubCategories[cat.name]; // Closed by default
                          return (
                            <div key={cat.name} className="rounded-xl border border-slate-200/70 overflow-hidden bg-slate-50/40">
                              {/* Category Header Button (Clickable to open category) */}
                              <button
                                onClick={() => toggleSubCategory(cat.name)}
                                className={`w-full flex items-center justify-between py-2.5 px-3 text-xs font-bold transition-colors cursor-pointer ${
                                  isCatOpen
                                    ? "bg-primary/10 text-primary"
                                    : "text-slate-700 hover:bg-slate-100"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <FolderOpen className={`w-3.5 h-3.5 ${isCatOpen ? "text-primary" : "text-slate-400"}`} />
                                  <span>{cat.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-semibold text-slate-400 bg-white px-1.5 py-0.5 rounded-md border border-slate-200">
                                    {cat.items.length}
                                  </span>
                                  <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                      isCatOpen ? "rotate-180 text-primary" : "text-slate-400"
                                    }`}
                                  />
                                </div>
                              </button>

                              {/* Items inside this Category */}
                              {isCatOpen && (
                                <div className="p-2 space-y-1 bg-white border-t border-slate-100 animate-dropdown">
                                  {cat.items.map((item) => (
                                    <Link
                                      key={item.slug}
                                      href={item.slug}
                                      onClick={handleClose}
                                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-700 hover:text-primary transition-colors"
                                    >
                                      <div className="p-1 rounded-md bg-primary-light text-primary shrink-0">
                                        <DynamicIcon
                                          name={item.iconName}
                                          className="w-3.5 h-3.5"
                                        />
                                      </div>
                                      <span className="truncate">{item.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
