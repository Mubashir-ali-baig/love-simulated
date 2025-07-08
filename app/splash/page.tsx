"use client"

import { useEffect, useState } from "react"

export default function SplashPage() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")

  useEffect(() => {
    // Animate progress bar over 4 seconds
    const duration = 4000 // 4 seconds
    const interval = 50 // Update every 50ms
    const increment = (100 / duration) * interval

    const loadingMessages = [
      "Initializing...",
      "Loading interface...",
      "Connecting to Black Mirror...",
      "Almost ready...",
      "Welcome",
    ]

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment

        // Update loading text based on progress
        if (newProgress >= 80) {
          setLoadingText(loadingMessages[4])
        } else if (newProgress >= 60) {
          setLoadingText(loadingMessages[3])
        } else if (newProgress >= 40) {
          setLoadingText(loadingMessages[2])
        } else if (newProgress >= 20) {
          setLoadingText(loadingMessages[1])
        } else {
          setLoadingText(loadingMessages[0])
        }

        if (newProgress >= 100) {
          clearInterval(timer)
          // Navigate to signup page after loading completes
          setTimeout(() => {
            window.location.href = "/signup"
          }, 500)
          return 100
        }
        return newProgress
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      {/* Mobile Phone Frame */}
      <div className="relative">
        {/* Phone Outer Frame */}
        <div className="w-[390px] h-[844px] bg-black rounded-[60px] p-2 shadow-2xl">
          {/* Phone Inner Frame */}
          <div className="w-full h-full bg-white rounded-[50px] overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-8 pt-4 pb-2 text-sm font-semibold text-gray-800">
              <span>11:41</span>
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-1 h-3 bg-gray-600 rounded-full"></div>
                </div>
                <svg className="w-6 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48L5.5 12l-.35-.95zM6.5 8.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                    fill="currentColor"
                  />
                </svg>
                <div className="w-6 h-3 bg-gray-800 rounded ml-1"></div>
              </div>
            </div>

            {/* Main Splash Content */}
            <div className="flex flex-col items-center justify-center h-full relative">
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
                  <p className="text-white text-lg font-medium tracking-wide drop-shadow-lg">{loadingText}</p>
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
                  <span className="text-white/80 text-sm font-mono drop-shadow-lg">{Math.round(progress)}%</span>
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
