"use client";

import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full z-0">
      <Header />

      <div className="flex flex-col grow gap-6">{children}</div>

      <Footer />
    </div>
  );
}
