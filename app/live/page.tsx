"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import BottomNavigation from "@/components/bottom-navigation";

export default function LivePage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[390px] min-h-screen bg-gradient-to-b from-[#F4D2D7] via-[#F8E6E9] to-[#F4D2D7] overflow-hidden relative flex flex-col">
        {/* Live Video Section */}
        <div className="relative">
          {/* Top Half - Ava */}
          <div
            className="relative bg-gray-200 overflow-hidden"
            style={{ height: "270px" }}
          >
            <img
              src="/live_1.png"
              alt="Ava"
              className="w-full h-full object-cover"
              style={{ width: "480px", height: "270px" }}
            />

            {/* Live Text - Top Left */}
            <div className="absolute top-4 left-4">
              <h1 className="text-white text-2xl font-bold">Live</h1>
            </div>

            {/* Live Badge and Watching Count - Top Right */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-2">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  LIVE
                </div>
                <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  1,243 watching
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Half - Noah */}
          <div
            className="relative bg-gray-300 overflow-hidden"
            style={{ height: "262px" }}
          >
            <img
              src="/live_2.png"
              alt="Noah"
              className="w-full h-full object-cover"
              style={{ width: "497.08px", height: "262px" }}
            />

            {/* Sponsored Overlay */}
            <div className="absolute bottom-4 right-4">
              <div className="bg-[#BA435F] text-white px-4 py-2 rounded-full text-sm font-medium">
                ABSOLUT SPONSORED
              </div>
            </div>
          </div>
        </div>

        {/* Episode Information */}
        <div className="bg-[#F4D2D7] p-6 space-y-4">
          {/* Episode Title */}
          <div className="flex items-start space-x-3">
            <div className="text-3xl">🎬</div>
            <div>
              <h2 className="text-[#BA435F] text-xl font-bold leading-tight">
                Episode 5: The Real Test Begins
              </h2>
            </div>
          </div>

          {/* Episode Description */}
          <div className="space-y-3">
            <p className="text-[#BA435F] text-base leading-relaxed">
              Tonight, Ava and Noah meet in person for the first time after
              their digital twins sparked waves of chemistry during that
              unforgettable beach sunset date.
            </p>
            <p className="text-[#BA435F] text-base leading-relaxed">
              But will the human vibes match the algorithm's prediction? Tune in
              to watch real emotions, raw reactions – and rate the real
              connection.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation activeTab="live" />

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-40"></div>
      </div>
    </div>
  );
}
