import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("text-lg font-bold txt-primary-gradient", className)}>
      <Link href="/">Dukorane Events</Link>
    </div>
  );
};

export default Logo;
``