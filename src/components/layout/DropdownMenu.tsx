"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { NavGroup } from "@/data/navigation";
import { DynamicIcon } from "@/components/ui/DynamicIcon";

interface DropdownMenuProps {
  group: NavGroup;
  isOpen: boolean;
  onClose: () => void;
}

export function DropdownMenu({ group, isOpen, onClose }: DropdownMenuProps) {
  if (!isOpen || !group.items) return null;

  return (
    <div
      className="absolute top-full left-0 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 animate-dropdown"
      role="menu"
    >
      {/* Item List */}
      <div className="space-y-1">
        {group.items.map((item) => (
          <Link
            key={item.slug}
            href={item.slug}
            onClick={onClose}
            className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 rounded-lg bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-2xs shrink-0">
                <DynamicIcon name={item.iconName} className="w-4 h-4" />
              </div>

              <span className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors truncate">
                {item.title}
              </span>
            </div>

            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 opacity-0 group-hover:opacity-100" />
          </Link>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-1.5 pt-2 border-t border-slate-100 px-2 flex items-center justify-between">
        <Link
          href={group.slug}
          onClick={onClose}
          className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1 group transition-colors"
        >
          <span>View All {group.title}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
