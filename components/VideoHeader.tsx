"use client";
import { useEffect, useState } from "react";

export default function VideoHeader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
    }, 4000); // fade-out na 4 seconden (laatste seconde is fade)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`
        relative w-full h-screen overflow-hidden transition-opacity duration-1000
        ${fadeOut ? "opacity-55" : "opacity-100"}
      `}
    >
      <video
        src="/coralynn-header.mp4"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* jouw hero content */}
      </div>
    </div>
  );
}
