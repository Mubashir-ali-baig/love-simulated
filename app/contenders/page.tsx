"use client";

import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/bottom-navigation";
import ContenderCard from "@/components/contender-card";

export default function ContendersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const contestants = [
    { id: 1, name: "Ava", rating: 5.0, topMatch: "Ava", matchPercent: 92 },
    { id: 2, name: "Ava", rating: 4.8, topMatch: "Ava", matchPercent: 92 },
    { id: 3, name: "Ava", rating: 4.9, topMatch: "Ava", matchPercent: 92 },
    { id: 4, name: "Ava", rating: 4.7, topMatch: "Ava", matchPercent: 92 },
    { id: 5, name: "Ava", rating: 4.6, topMatch: "Ava", matchPercent: 92 },
    { id: 6, name: "Ava", rating: 4.5, topMatch: "Ava", matchPercent: 92 },
    { id: 7, name: "Ava", rating: 4.8, topMatch: "Ava", matchPercent: 92 },
    { id: 8, name: "Ava", rating: 4.9, topMatch: "Ava", matchPercent: 92 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      {/* Mobile Phone Frame */}
      <div className="relative">
        {/* Phone Outer Frame */}
        <div className="w-[390px] h-[844px] bg-black rounded-[60px] p-2 shadow-2xl">
          {/* Phone Inner Frame */}
          <div className="w-full h-full bg-gradient-to-b from-[#F4D2D7] via-[#F8E6E9] to-[#F4D2D7] rounded-[50px] overflow-hidden relative flex flex-col">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-8 pt-4 pb-2 text-sm font-semibold text-[#BA435F]">
              <span>11:41</span>
              <div className="flex items-center gap-1">
                <div className="flex items-end gap-0.5">
                  <div className="w-1 h-1 bg-[#BA435F]"></div>
                  <div className="w-1 h-2 bg-[#BA435F]"></div>
                  <div className="w-1 h-3 bg-[#BA435F]"></div>
                  <div className="w-1 h-4 bg-[#BA435F]"></div>
                </div>
                <svg className="w-4 h-3 ml-1" viewBox="0 0 16 12" fill="none">
                  <path
                    d="M8 10.5C8.3 10.5 8.5 10.7 8.5 11C8.5 11.3 8.3 11.5 8 11.5C7.7 11.5 7.5 11.3 7.5 11C7.5 10.7 7.7 10.5 8 10.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.5 8.5C6.4 7.6 7.2 7.2 8 7.2C8.8 7.2 9.6 7.6 10.5 8.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M3.5 6.5C5 5 6.5 4.5 8 4.5C9.5 4.5 11 5 12.5 6.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M1.5 4.5C3.5 2.5 5.7 1.8 8 1.8C10.3 1.8 12.5 2.5 14.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <div className="w-6 h-3 border border-[#BA435F] rounded-sm ml-1 relative">
                  <div className="w-full h-full bg-[#BA435F] rounded-sm"></div>
                  <div className="absolute -right-0.5 top-0.5 w-0.5 h-2 bg-[#BA435F] rounded-r-sm"></div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2">
              <div>
                <div
                  style={{
                    width: "181px",
                    height: "73px",
                  }}
                >
                  <h1
                    className="text-2xl font-normal text-[#BA435F] leading-tight"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Meet
                  </h1>
                  <h2
                    className="text-2xl font-normal text-[#BA435F] leading-tight mb-0"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    the Contestents
                  </h2>
                </div>
                <p className="text-[#BA435F] text-sm mt-1 mb-2">
                  {" "}
                  Find the perfect match{" "}
                </p>
              </div>
              <div
                className="flex items-center rounded-full px-3 shadow-lg border border-[#BA435F] mx-0 py-2 mt-[-30px]"
                style={{
                  width: "168.57px",
                  height: "44px",
                  backgroundColor: "#F0D1D8",
                }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background-Tbrj8wzQMubISuuNxPPJ9gYBSeDWKL.png"
                  alt="SMIRROR Token"
                  className="w-6 h-6 mr-2"
                />
                <span className="text-[#BA435F] whitespace-nowrap">
                  <span className="font-semibold text-base">1,000</span>
                  <span className="font-normal text-sm ml-1">SMIRROR</span>
                </span>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="px-8 mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#BA435F]/60 ml-[-16px]" />
                  <Input
                    placeholder="Search contenders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-[#F0C4C9]/30 border-[#BA435F] rounded-full placeholder:text-[#BA435F]/60 text-[#BA435F] ml-[-20px]"
                    style={{ width: "208px", height: "40px" }}
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#F0C4C9]/30 border-[#BA435F] text-[#BA435F] rounded-full hover:bg-[#F0C4C9]/50 flex items-center justify-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <Filter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#F0C4C9]/30 border-[#BA435F] text-[#BA435F] rounded-full hover:bg-[#F0C4C9]/50 flex items-center justify-center mr-[0] pr-[5px]"
                  style={{ width: "81.08px", height: "40px" }}
                >
                  Sort
                  <ChevronDown className="h-4 w-4 mr-0.5 ml-0.5" />
                </Button>
              </div>
            </div>

            {/* Contestants Grid - Scrollable */}
            <div
              className="flex-1 overflow-y-auto px-8 ml-[-16px] mr-[-16px]"
              style={{
                height: "calc(100% - 200px)",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitScrollbar: { display: "none" },
              }}
            >
              <div className="pb-20">
                {/* All contestants in 2-column grid */}
                <div className="grid grid-cols-2 gap-4">
                  {contestants.map((contestant) => (
                    <ContenderCard
                      key={contestant.id}
                      contestant={contestant}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <BottomNavigation activeTab="contenders" />

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
