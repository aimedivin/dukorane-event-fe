"use client";

import { useState } from "react";
import Link from "next/link";

import { NavigationItem } from "./types";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);

  const navigation: NavigationItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: "fas fa-home" },
    { name: "My Events", href: "/events", icon: "fas fa-calendar-alt" },
    { name: "Browse Services", href: "/services", icon: "fas fa-search" },
    { name: "Service Providers", href: "/providers", icon: "fas fa-users" },
    { name: "How It Works", href: "/how-it-works", icon: "fas fa-info-circle" },
    { name: "About", href: "/about", icon: "fas fa-address-card" },
  ];

  const handleUserMenuToggle = (): void => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center">
              <i className="fas fa-glass-cheers text-secondary text-2xl mr-2"></i>
              <span className="text-primary font-bold text-xl">
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

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                className="text-gray-600 hover:text-primary p-2 rounded-full transition duration-300"
                aria-label="Notifications"
              >
                <i className="fas fa-bell text-lg"></i>
                <span className="absolute top-0 right-0 bg-secondary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>

            {/* User Menu */}
            <UserMenu isOpen={isUserMenuOpen} onToggle={handleUserMenuToggle} />

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className="fas fa-bars"></i>
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
