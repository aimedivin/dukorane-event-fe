"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { UserMenuProps, UserMenuItem } from "../types/types";
import { useUser } from "@/hooks/useUser";

const UserMenu = ({ isOpen, onToggle }: UserMenuProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useUser();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onToggle();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  if (!user) return null;

  // Menu items for logged-in user
  const menuItems: UserMenuItem[] = [
    { name: "My Profile", href: "/profile", icon: "fas fa-user" },
    { name: "Settings", href: "/settings", icon: "fas fa-cog" },
    {
      name: "Help & Support",
      href: "/support",
      icon: "fas fa-question-circle",
    },
    { name: "Sign out", icon: "fas fa-sign-out-alt", action: logout },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar & Username */}
      <button
        className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        onClick={onToggle}
        aria-label="User menu"
        aria-expanded={isOpen}
      >
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <span className="ml-2 text-gray-700 font-medium hidden md:block">
          {user.name}
        </span>
        <i className="fas fa-chevron-down ml-1 text-gray-500 text-xs"></i>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {menuItems.map((item: UserMenuItem) =>
              item.action ? (
                <button
                  key={item.name}
                  onClick={() => {
                    item.action?.();
                    onToggle();
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <i className={`${item.icon} mr-2`}></i>
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href!}
                  onClick={onToggle}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  items-center"
                >
                  <i className={`${item.icon} mr-2`}></i>
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
