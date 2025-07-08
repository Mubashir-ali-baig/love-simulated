"use client";

import { useEffect, useState } from "react";

export default function SplashPage() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  useEffect(() => {
    // Animate progress bar over 4 seconds
    const duration = 4000; // 4 seconds
    const interval = 50; // Update every 50ms
    const increment = (100 / duration) * interval;

    const loadingMessages = [
      "Initializing...",
      "Loading interface...",
      "Connecting to Black Mirror...",
      "Almost ready...",
      "Welcome",
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;

        // Update loading text based on progress
        if (newProgress >= 80) {
          setLoadingText(loadingMessages[4]);
        } else if (newProgress >= 60) {
          setLoadingText(loadingMessages[3]);
        } else if (newProgress >= 40) {
          setLoadingText(loadingMessages[2]);
        } else if (newProgress >= 20) {
          setLoadingText(loadingMessages[1]);
        } else {
          setLoadingText(loadingMessages[0]);
        }

        if (newProgress >= 100) {
          clearInterval(timer);
          // Navigate to signup page after loading completes
          setTimeout(() => {
            window.location.href = "/signup";
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[390px] min-h-screen bg-white overflow-hidden relative">
        {/* Main Splash Content */}
        <div className="flex flex-col items-center justify-center min-h-screen relative">
          {/* Black Mirror Character Image */}
          <div className="absolute inset-0">
            <img
              src="/black-mirror-splash.png"
              alt="Black Mirror"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>

          {/* Loading Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 z-10">
            {/* Loading Text */}
            <div className="mb-6">
              <p className="text-white text-lg font-medium tracking-wide drop-shadow-lg">
                {loadingText}
              </p>
            </div>

            {/* Loading Bar */}
            <div className="w-64 bg-black/30 rounded-full h-2 backdrop-blur-sm border border-white/20">
              <div
                className="bg-gradient-to-r from-pink-500 to-rose-600 h-2 rounded-full transition-all duration-100 ease-out shadow-lg"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Loading Percentage */}
            <div className="mt-4">
              <span className="text-white/80 text-sm font-mono drop-shadow-lg">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
      </div>
    </div>
  );
}
