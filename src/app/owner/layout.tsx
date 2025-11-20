import React from "react";
import Navbar from "../../components/dashboard/eventowner/dashboardpage/Navbar"; // adjust path

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
