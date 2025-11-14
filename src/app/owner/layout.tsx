import React from "react";
import Navbar from "../../components/dashboard/eventowner/Navbar"; // adjust path

export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
