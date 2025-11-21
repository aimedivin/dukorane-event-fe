import React from "react";
import Navbar from "../../../components/dashboard/eventowner/hero/Navbar"; // adjust path
import { Toaster } from "@/components/ui/sonner";

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main>{children}</main>
       <Toaster position="top-center" />
    </div>
  );
}
