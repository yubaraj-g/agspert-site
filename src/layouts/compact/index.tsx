"use client";

import Footer from "../main/footer";
import Header from "../main/header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function CompactLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full">
      <Header />

      <div className="flex flex-col grow m-auto items-center justify-center text-center min-h-dvh">
        {children}
      </div>

      <Footer />
    </div>
  );
}
