// app/(root)/page.tsx

import VideoHeader from "@/components/VideoHeader";
import HeroText from "@/components/HeroText";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Navbar />
      <VideoHeader />
      <div className="absolute inset-0 flex items-center px-10">
        <HeroText />
      </div>
    </main>
  );
}
