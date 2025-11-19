"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { NavigationItem } from "./types/types";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import NotificationDialog from "./NotificationDialog";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation: NavigationItem[] = [
    { name: "Dashboard", href: "/" },
    { name: "My Events", href: "/events" },
    { name: "Browse Services", href: "/services" },
    { name: "Service Providers", href: "/providers" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
  ];

  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <i className="fas fa-glass-cheers text-secondary text-2xl mr-2"></i>
              <span className="text-radiant-r from-primary to-secondary font-bold text-xl">
                Dukorane Events
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item: NavigationItem) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center"
              >
                <i className={`${item.icon} mr-1`}></i>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <div className="flex items-center space-x-4">
                <NotificationDialog />
              </div>
            </div>

            {/* User Menu */}
            <UserMenu
              isOpen={menuOpen}
              onToggle={() => setMenuOpen(!menuOpen)}
            />

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} navigation={navigation} />
    </nav>
  );
};

export default Navbar;
