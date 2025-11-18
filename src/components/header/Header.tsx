import React from "react";
import { Button } from "../ui/button";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-foreground hover:text-primary transition-colors"
          >
            Overview
          </a>

          <a
            href="#how-it-works"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Browser Services
          </a>
          <a
            href="#how-it-works"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Events
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="default">
            <Link href={"/auth/login"}>Sign In</Link>
          </Button>
          <Button
            className="bg-primary-gradient text-white hover:opacity-90"
            size="default"
            asChild
          >
            <Link href={"/auth/signup"}>Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
