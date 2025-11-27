"use client";
import { useEffect, useState, useRef } from "react";

export default function VideoHeader({ onSkip }: { onSkip?: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setShowButton(false);
      onSkip?.();
    }, 3400); // fade-in na 3.4 seconde

    return () => clearTimeout(timeout);
  }, [onSkip]);

  const handleSkip = () => {
    // Trigger hero text animatie meteen
    onSkip?.();

    setFadeOut(true);
    setShowButton(false);

    if (videoRef.current && videoRef.current.duration) {
      // Skip direct zonder te wachten, naar 0.8 seconde voor het einde
      videoRef.current.currentTime = videoRef.current.duration - 0.8;
    }
  };

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

      {/* Skip Intro Button */}
      {showButton && (
        <button
          onClick={handleSkip}
          className="absolute bottom-10 right-10 z-20 group pointer-events-auto"
        >
          <span className="text-white text-lg tracking-wide">Skip Intro</span>
          <div className="h-[1px] bg-white mt-1 w-0 group-hover:w-full transition-all duration-300 ease-out"></div>
        </button>
      )}
    </div>
  );
}
