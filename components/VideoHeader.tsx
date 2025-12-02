"use client";
import { useEffect, useState, useRef } from "react";

export default function VideoHeader({ onSkip }: { onSkip?: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      onSkip?.();
    }, 400); // fade-in na 0.4 seconde

    return () => clearTimeout(timeout);
  }, [onSkip]);

  return (
    <div
      className={`
        relative w-full h-screen overflow-hidden transition-opacity duration-1000
        ${fadeOut ? "opacity-45" : "opacity-100"}
      `}
    >
      <video
        ref={videoRef}
        src="/coralynn-header.mp4"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
