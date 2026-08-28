import React from "react";
import * as LucideIcons from "lucide-react";

interface DynamicIconProps extends LucideIcons.LucideProps {
  name?: string;
  className?: string;
  size?: number | string;
}

export function DynamicIcon({ name, className = "w-5 h-5", size, ...props }: DynamicIconProps) {
  if (!name) {
    return <LucideIcons.CircleDot className={className} size={size} {...props} />;
  }

  // Look up icon from lucide safely
  const iconsMap = LucideIcons as unknown as Record<string, React.ComponentType<LucideIcons.LucideProps>>;
  const IconComponent = iconsMap[name];

  if (!IconComponent) {
    return <LucideIcons.Sparkles className={className} size={size} {...props} />;
  }

  return <IconComponent className={className} size={size} {...props} />;
}
