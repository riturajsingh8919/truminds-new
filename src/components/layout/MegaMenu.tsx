"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { NavGroup } from "@/data/navigation";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

interface MegaMenuProps {
  group: NavGroup;
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ group, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  const isTherapeutic = group.title === "Therapeutic Areas";

  return (
    <div
      className="absolute top-full left-0 right-0 w-full pt-2 z-50 animate-mega-menu"
      role="menu"
    >
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 md:p-8 overflow-hidden">
        {/* Top Header Banner within Menu */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
              {group.title}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">•</span>
            <span className="text-xs text-slate-500 hidden sm:inline font-medium">
              {isTherapeutic
                ? "20 Specialized clinical trial & diagnostic domains"
                : "TruForm unified eClinical platform suite"}
            </span>
          </div>
          <Link
            href={group.slug}
            onClick={onClose}
            className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1.5 transition-colors group"
          >
            <span>Explore All {group.title}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mega Menu Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5">
          {/* Main Categories Columns */}
          <div
            className={`grid gap-6 ${
              isTherapeutic
                ? "lg:col-span-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
                : "lg:col-span-8 grid-cols-1 sm:grid-cols-3"
            }`}
          >
            {group.categories?.map((cat) => (
              <div key={cat.name} className="space-y-2.5">
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1.5">
                  {cat.name}
                </h4>

                <div className="space-y-1">
                  {cat.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={item.slug}
                      onClick={onClose}
                      className="group flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60"
                    >
                      <div className="p-1.5 rounded-lg bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                        <DynamicIcon name={item.iconName} className="w-4 h-4" />
                      </div>

                      <span className="text-[13px] font-semibold text-slate-800 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Spotlight Card */}
          <div className={isTherapeutic ? "lg:col-span-3" : "lg:col-span-4"}>
            {group.featured && (
              <div className="h-full bg-linear-to-br from-slate-900 via-[#003b7a] to-[#0068a5] rounded-2xl p-5 text-white flex flex-col justify-between shadow-lg relative overflow-hidden group">
                {/* Background decorative glow */}
                <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-400/30 transition-all" />

                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold text-cyan-200 border border-white/20">
                    <Sparkles className="w-3 h-3 text-cyan-300" />
                    <span>{group.featured.badge}</span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                    {group.featured.title}
                  </h3>

                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    {group.featured.description}
                  </p>

                  <div className="pt-2 space-y-1.5 text-xs text-slate-200 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>FDA, EMA & PMDA Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Dedicated Scientific Leads</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-4 mt-3 border-t border-white/15">
                  <Link
                    href={group.featured.slug}
                    onClick={onClose}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#004a98] font-bold text-xs hover:bg-slate-100 transition-all shadow-sm group/btn"
                  >
                    <span>{isTherapeutic ? "Explore Specialty" : "Learn More"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mega Menu Bottom Bar */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-slate-700">Need customized clinical support?</span>
            <span className="text-slate-400">Our subject matter experts are available across global trial zones.</span>
          </div>
          <Link
            href="/contact-us"
            onClick={onClose}
            className="font-bold text-primary hover:text-secondary inline-flex items-center gap-1"
          >
            <span>Consult an Expert</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
