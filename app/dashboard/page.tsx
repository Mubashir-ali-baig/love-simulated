"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import BottomNavigation from "@/components/bottom-navigation";

export default function DashboardPage() {
  const [highlightsExpanded, setHighlightsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const confessions = [
    { id: 1, name: "Peter", image: "/Ava.png" },
    { id: 2, name: "Jenisha", image: "/Ava.png" },
    { id: 3, name: "Alisha", image: "/Ava.png" },
    { id: 4, name: "Melisha", image: "/Ava.png" },
    { id: 5, name: "John", image: "/Ava.png" },
    { id: 6, name: "John", image: "/Ava.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[390px] min-h-screen bg-gradient-to-b from-[#F4D2D7] via-[#F8E6E9] to-[#F4D2D7] overflow-hidden relative flex flex-col">
        {/* Main Content - Scrollable */}
        <div
          className="flex-1 overflow-y-auto"
          style={{
            height: "calc(100% - 140px)",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitScrollbar: { display: "none" },
          }}
        >
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
                  Daily
                </h1>
                <h2
                  className="text-2xl font-normal text-[#BA435F] leading-tight"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Heat Check
                </h2>
              </div>
            </div>
            <div
              className="flex items-center rounded-full px-3 py-2 shadow-lg border border-[#BA435F] mx-0"
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

          {/* Promotional Banner */}
          <div className="px-4 mb-8">
            <div className="bg-[#F0C4C9]/30 border border-[#BA435F] rounded-xl px-3 py-2 w-full max-w-[353px]">
              <p className="text-[#BA435F] text-sm mb-1">
                Which couples clicked? Who ghosted who?
              </p>
              <p className="text-[#BA435F] text-sm font-semibold">
                Get the full download.
              </p>
            </div>
          </div>

          {/* Black Mirror Character Image with Today's Highlights Card */}
          <div className="px-4 mb-8">
            <div className="bg-white/80 rounded-xl overflow-hidden shadow-lg border border-[#BA435F]">
              {/* Image Section */}
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banner-r5ykGbNon0gLnRIGnYfXfpUqlxQ74w.png"
                  alt="Banner"
                  className="w-full object-fill pb-0 h-[270px]"
                />
              </div>

              {/* Today's Highlights Section */}
              <div className="bg-[#F0C4C9]/60 p-4 my-[-33px] py-[46px] pb-[60px] pt-[25px]">
                <button
                  onClick={() => setHighlightsExpanded(!highlightsExpanded)}
                  className="flex items-center justify-between w-full mb-3"
                >
                  <div className="flex items-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background%20%281%29-yTUMuHi7STXQrYMvmbwF3fbNcmJj8b.png"
                      alt="Highlights icon"
                      className="w-8 h-8 mr-3"
                    />
                    <span className="text-[#BA435F] font-semibold text-lg">
                      Today's Highlights
                    </span>
                  </div>
                  {highlightsExpanded ? (
                    <ChevronDown className="h-5 w-5 text-[#BA435F]" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-[#BA435F]" />
                  )}
                </button>

                <div className="text-[#BA435F] text-sm leading-relaxed">
                  <p className="mb-3">
                    Day 5: Ava & Noah's chemistry soars, Emma & Jackson bond
                    over cooking disasters, Sophia & Liam hit a rough patch.
                  </p>
                  <div className="flex items-center text-[#BA435F]">
                    <span className="mr-2">Prediction markets now open</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newest Confessions */}
          <div className="mb-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <h3
                className="text-2xl font-bold text-[#BA435F]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Newest Confessions
              </h3>
              <button className="flex items-center text-[#BA435F] font-medium">
                <span className="mr-1">View All</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Horizontally Scrollable Confessions */}
            <div
              className="overflow-x-auto"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitScrollbar: { display: "none" },
              }}
            >
              <div className="flex space-x-4 pl-4 pr-4 pb-2">
                {confessions.map((confession) => (
                  <div
                    key={confession.id}
                    className="flex-shrink-0 text-center"
                  >
                    <div className="w-16 h-16 rounded-full mb-2 overflow-hidden shadow-lg relative border-4 border-[#BA435F]">
                      <img
                        src={confession.image || "/placeholder.svg"}
                        alt={confession.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[#BA435F] text-xs font-medium">
                      {confession.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tab List Component */}
          <div className="px-4 mb-6">
            <div className="bg-[#F0C4C9]/50 rounded-full p-1 border border-[#BA435F]">
              <div className="flex">
                {["All", "1-on-1", "Group"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-[#BA435F] text-white"
                        : "text-[#BA435F] hover:text-[#BA435F]/80"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Date Card Component */}
          <div className="px-4 mb-6">
            <div className="bg-white/90 rounded-xl overflow-hidden shadow-lg border border-[#BA435F]">
              {/* Beach Sunset Image with Overlays */}
              <div className="relative h-48">
                {/* Background Beach Image */}
                <img
                  src="/image1.png"
                  alt="Beach Sunset Date"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Image */}
                <img
                  src="/Overlay.png"
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
                />

                {/* Date Type Tag */}
                <div className="absolute top-3 left-3 bg-[#BA435F] text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                  1-on-1 Date
                </div>

                {/* Timestamp */}
                <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-xs flex items-center z-10">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  2 hours ago
                </div>

                {/* Profile Info Overlay */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-8 flex items-center bg-[#F0C4C9]/70 rounded-xl p-3 border border-[#BA435F] z-30 shadow-xl backdrop-blur-md"
                  style={{ width: "278px", height: "80px" }}
                >
                  <div className="flex-shrink-0 w-14 h-14 mr-3 rounded-full overflow-hidden">
                    <img
                      src="/image2.png"
                      alt="Peter and Alisha"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#BA435F] font-semibold">
                      Peter and Alisha
                    </h4>
                    <p className="text-[#BA435F] text-sm">1st Date</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 bg-[#F0D1D8]">
                <h3
                  className="text-[#BA435F] mb-3 mt-9 font-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Beach Sunset Date
                </h3>

                {/* Profile Initials */}
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      P
                    </div>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      A
                    </div>
                  </div>
                  <span
                    className="text-[#BA435F]"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      fontFamily: "Grift",
                    }}
                  >
                    Peter • Alisha
                  </span>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#BA435F] "
                      style={{ fontSize: "12px" }}
                    >
                      Trust
                    </span>
                    <div className="w-32 h-2 bg-[#F0C4C9] rounded-full">
                      <div
                        className="bg-[#BA435F] h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#BA435F] "
                      style={{ fontSize: "12px" }}
                    >
                      Flirtation
                    </span>
                    <div className="w-32 h-2 bg-[#F0C4C9] rounded-full">
                      <div
                        className="bg-[#BA435F] h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#BA435F] "
                      style={{ fontSize: "12px" }}
                    >
                      Awkwardness
                    </span>
                    <div className="w-32 h-2 bg-[#F0C4C9] rounded-full">
                      <div
                        className="bg-[#BA435F] h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Match Score */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#BA435F]/20">
                  <span
                    className="text-[#BA435F] "
                    style={{ fontSize: "14px" }}
                  >
                    Match Score
                  </span>
                  <span
                    className="text-[#BA435F] text-2xl mr-[50px]"
                    style={{ fontSize: "18px" }}
                  >
                    96%
                  </span>
                </div>

                {/* Social Rating, Rate This Date, and Share Button - Wrapped Section */}
                <div
                  className="mx-4 p-4 pt-4 ml-[-16px] mr-[-16px] mb-[-16px] mt-[-16px] rounded-none"
                  style={{ backgroundColor: "#EABDC7" }}
                >
                  {/* Social Rating */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#BA435F] text-lg font-semibold">
                        Social Rating
                      </span>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-5 h-5 text-[#BA435F] fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-[#BA435F] font-semibold">
                          5.0
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rate This Date */}
                  <div className="text-center mb-4">
                    <div className="flex justify-center items-center space-x-2 mb-2">
                      <p className="text-[#BA435F] text-sm">Rate this date:</p>
                      <p className="text-[#BA435F] text-xs flex items-center">
                        <img
                          src="/smirror-coin-icon.png"
                          alt="SMIRROR"
                          className="w-4 h-4 mr-1"
                        />
                        Earn SMIRROR
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} className="mx-1">
                          <svg
                            className="w-6 h-6 text-[#BA435F] stroke-current fill-none hover:fill-current transition-colors"
                            viewBox="0 0 20 20"
                          >
                            <path
                              strokeWidth="1"
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Share Button */}
                  <div className="text-center">
                    <button className="flex items-center justify-center mx-auto text-[#BA435F] font-medium">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Date Card Component */}
          <div className="px-4 mb-6">
            <div className="bg-white/90 rounded-xl overflow-hidden shadow-lg border border-[#BA435F]">
              {/* Beach Sunset Image with Overlays */}
              <div className="relative h-48">
                {/* Background Beach Image */}
                <img
                  src="/image1.png"
                  alt="Beach Sunset Date"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Image */}
                <img
                  src="/Overlay.png"
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
                />

                {/* Date Type Tag */}
                <div className="absolute top-3 left-3 bg-[#BA435F] text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                  1-on-1 Date
                </div>

                {/* Timestamp */}
                <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-xs flex items-center z-10">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  2 hours ago
                </div>

                {/* Profile Info Overlay */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-8 flex items-center bg-[#F0C4C9]/70 rounded-xl p-3 border border-[#BA435F] z-30 shadow-xl backdrop-blur-md"
                  style={{ width: "278px", height: "80px" }}
                >
                  <div className="flex-shrink-0 w-14 h-14 mr-3 rounded-full overflow-hidden">
                    <img
                      src="/image2.png"
                      alt="Peter and Alisha"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#BA435F] font-semibold">
                      Peter and Alisha
                    </h4>
                    <p className="text-[#BA435F] text-sm">1st Date</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 bg-[#F0D1D8]">
                <h3
                  className="text-[#BA435F] mb-3 mt-9 font-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Beach Sunset Date
                </h3>

                {/* Profile Initials */}
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      P
                    </div>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      A
                    </div>
                  </div>
                  <span
                    className="text-[#BA435F]"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      fontFamily: "Grift",
                    }}
                  >
                    Peter • Alisha
                  </span>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#BA435F] "
                      style={{ fontSize: "12px" }}
                    >
                      Trust
                    </span>
                    <div className="w-32 h-2 bg-[#F0C4C9] rounded-full">
                      <div
                        className="bg-[#BA435F] h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#BA435F] "
                      style={{ fontSize: "12px" }}
                    >
                      Flirtation
                    </span>
                    <div className="w-32 h-2 bg-[#F0C4C9] rounded-full">
                      <div
                        className="bg-[#BA435F] h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#BA435F] "
                      style={{ fontSize: "12px" }}
                    >
                      Awkwardness
                    </span>
                    <div className="w-32 h-2 bg-[#F0C4C9] rounded-full">
                      <div
                        className="bg-[#BA435F] h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Match Score */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#BA435F]/20">
                  <span
                    className="text-[#BA435F] "
                    style={{ fontSize: "14px" }}
                  >
                    Match Score
                  </span>
                  <span
                    className="text-[#BA435F] text-2xl mr-[50px]"
                    style={{ fontSize: "18px" }}
                  >
                    96%
                  </span>
                </div>

                {/* Social Rating, Rate This Date, and Share Button - Wrapped Section */}
                <div
                  className="mx-4 p-4 pt-4 ml-[-16px] mr-[-16px] mb-[-16px] mt-[-16px] rounded-none"
                  style={{ backgroundColor: "#EABDC7" }}
                >
                  {/* Social Rating */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#BA435F] text-lg font-semibold">
                        Social Rating
                      </span>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-5 h-5 text-[#BA435F] fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-[#BA435F] font-semibold">
                          5.0
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rate This Date */}
                  <div className="text-center mb-4">
                    <div className="flex justify-center items-center space-x-2 mb-2">
                      <p className="text-[#BA435F] text-sm">Rate this date:</p>
                      <p className="text-[#BA435F] text-xs flex items-center">
                        <img
                          src="/smirror-coin-icon.png"
                          alt="SMIRROR"
                          className="w-4 h-4 mr-1"
                        />
                        Earn SMIRROR
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} className="mx-1">
                          <svg
                            className="w-6 h-6 text-[#BA435F] stroke-current fill-none hover:fill-current transition-colors"
                            viewBox="0 0 20 20"
                          >
                            <path
                              strokeWidth="1"
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Share Button */}
                  <div className="text-center">
                    <button className="flex items-center justify-center mx-auto text-[#BA435F] font-medium">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Date Card Component */}
          <div className="px-4 mb-6">
            <div className="bg-white/90 rounded-xl overflow-hidden shadow-lg border border-[#BA435F]">
              {/* Beach Sunset Image with Overlays */}
              <div className="relative h-48">
                {/* Background Beach Image */}
                <img
                  src="/image1.png"
                  alt="Beach Sunset Date"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Image */}
                <img
                  src="/Overlay.png"
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
                />

                {/* Date Type Tag */}
                <div className="absolute top-3 left-3 bg-[#BA435F] text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                  1-on-1 Date
                </div>

                {/* Timestamp */}
                <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-xs flex items-center z-10">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  2 hours ago
                </div>

                {/* Profile Info Overlay */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-8 flex items-center bg-[#F0C4C9]/70 rounded-xl p-3 border border-[#BA435F] z-30 shadow-xl backdrop-blur-md"
                  style={{ width: "278px", height: "80px" }}
                >
                  <div className="flex-shrink-0 w-14 h-14 mr-3 rounded-full overflow-hidden">
                    <img
                      src="/image2.png"
                      alt="Peter and Alisha"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#BA435F] font-semibold">
                      Peter and Alisha
                    </h4>
                    <p className="text-[#BA435F] text-sm">1st Date</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 bg-[#F0D1D8]">
                <h3
                  className="text-[#BA435F] mb-3 mt-9 font-semibold"
                  style={{ fontSize: "18px" }}
                >
                  Beach Sunset Date
                </h3>

                {/* Profile Initials */}
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      P
                    </div>
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      A
                    </div>
                  </div>
                  <span
                    className="text-[#BA435F]"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      fontFamily: "Grift",
                    }}
                  >
                    Peter • Alisha
                  </span>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#BA435F] "
                      style={{ fontSize: "12px" }}
                    >
                      Trust
                    </span>
                    <div className="w-32 h-2 bg-[#F0C4C9] rounded-full">
                      <div
                        className="bg-[#BA435F] h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#BA435F] "
                      style={{ fontSize: "12px" }}
                    >
                      Flirtation
                    </span>
                    <div className="w-32 h-2 bg-[#F0C4C9] rounded-full">
                      <div
                        className="bg-[#BA435F] h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[#BA435F] "
                      style={{ fontSize: "12px" }}
                    >
                      Awkwardness
                    </span>
                    <div className="w-32 h-2 bg-[#F0C4C9] rounded-full">
                      <div
                        className="bg-[#BA435F] h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Match Score */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#BA435F]/20">
                  <span
                    className="text-[#BA435F] "
                    style={{ fontSize: "14px" }}
                  >
                    Match Score
                  </span>
                  <span
                    className="text-[#BA435F] text-2xl mr-[50px]"
                    style={{ fontSize: "18px" }}
                  >
                    96%
                  </span>
                </div>

                {/* Social Rating, Rate This Date, and Share Button - Wrapped Section */}
                <div
                  className="mx-4 p-4 pt-4 ml-[-16px] mr-[-16px] mb-[-16px] mt-[-16px] rounded-none"
                  style={{ backgroundColor: "#EABDC7" }}
                >
                  {/* Social Rating */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#BA435F] text-lg font-semibold">
                        Social Rating
                      </span>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-5 h-5 text-[#BA435F] fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-[#BA435F] font-semibold">
                          5.0
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rate This Date */}
                  <div className="text-center mb-4">
                    <div className="flex justify-center items-center space-x-2 mb-2">
                      <p className="text-[#BA435F] text-sm">Rate this date:</p>
                      <p className="text-[#BA435F] text-xs flex items-center">
                        <img
                          src="/smirror-coin-icon.png"
                          alt="SMIRROR"
                          className="w-4 h-4 mr-1"
                        />
                        Earn SMIRROR
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} className="mx-1">
                          <svg
                            className="w-6 h-6 text-[#BA435F] stroke-current fill-none hover:fill-current transition-colors"
                            viewBox="0 0 20 20"
                          >
                            <path
                              strokeWidth="1"
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Share Button */}
                  <div className="text-center">
                    <button className="flex items-center justify-center mx-auto text-[#BA435F] font-medium">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom padding to ensure content doesn't get hidden behind navigation */}
          <div className="h-20"></div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation activeTab="home" />

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
      </div>
    </div>
  );
}
