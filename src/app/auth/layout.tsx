import Logo from "@/components/header/Logo";
import { Suspense } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Logo className="fixed top-5 left-5" />
      <Suspense fallback={<div />}>{children}</Suspense>
    </main>
  );
}
