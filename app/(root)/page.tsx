// app/(root)/page.tsx

"use client";

import { useState } from "react";
import VideoHeader from "@/components/VideoHeader";
import HeroText from "@/components/HeroText";
import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/ProductCarousel";

export default function HomePage() {
  const [showHeroText, setShowHeroText] = useState(false);

  return (
    <>
      <main className="relative w-full h-screen overflow-hidden">
        <Navbar />
        <VideoHeader onSkip={() => setShowHeroText(true)} />
        <div className="absolute inset-0 flex items-end pb-10 px-10 pointer-events-none">
          <HeroText shouldShow={showHeroText} />
        </div>
      </main>
      <ProductCarousel />
    </>
  );
}
