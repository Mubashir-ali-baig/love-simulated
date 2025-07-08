"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/bottom-navigation";
import StatusBar from "@/components/status-bar";

export default function VotePage() {
  const [activeTab, setActiveTab] = useState("Vote");

  const topPredictors = [
    { rank: 1, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 2, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 3, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 4, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 5, name: "PredictionKing", streak: 5, points: 12500 },
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
            <StatusBar />

            {/* Header */}
            <div className="px-4 py-2">
              <div className="flex items-center justify-between mb-2">
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
                    Vote &
                  </h1>
                  <h2
                    className="text-2xl font-normal text-[#BA435F] leading-tight mb-0"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Leaderboard
                  </h2>
                </div>
                <div
                  className="flex items-center rounded-full px-3 shadow-lg border border-[#BA435F] mx-0 py-2"
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
              <p className="text-[#BA435F] text-sm">
                Stake $MIRROR on your predictions and vote for your favorite
                couples
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="px-8 mb-4">
              <div className="flex bg-[#F0C4C9]/30 rounded-xl p-1">
                {["Vote", "Leaderboard"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-[#BA435F] text-white"
                        : "text-[#BA435F] hover:text-[#8F5260]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content - Scrollable */}
            <div
              className="flex-1 overflow-y-auto px-8"
              style={{
                height: "calc(100% - 200px)",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitScrollbar: { display: "none" },
              }}
            >
              {activeTab === "Vote" && (
                <div className="space-y-6 pb-20">
                  {/* Current Voting */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-[#BA435F] font-bold text-xl">
                        Current Voting
                      </h3>
                      <div className="flex items-center text-[#8F5260]">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">Ends in 5 hours</span>
                      </div>
                    </div>

                    <div className="bg-[#F0C4C9]/30 rounded-xl overflow-hidden shadow-lg mb-4 border border-[#BA435F]">
                      <div className="relative h-48">
                        <img
                          src="/placeholder.svg?height=192&width=350"
                          alt="Peter and Alisha"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                              <img
                                src="/placeholder.svg?height=40&width=40"
                                alt="Peter"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                              <img
                                src="/placeholder.svg?height=40&width=40"
                                alt="Alisha"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-white font-bold text-lg drop-shadow-lg">
                              Peter and Alisha
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#BA435F] text-sm">
                            Current votes: 1,250
                          </span>
                          <span className="text-[#BA435F] text-sm font-medium">
                            42%
                          </span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                          <div
                            className="bg-[#BA435F] h-2 rounded-full"
                            style={{ width: "42%" }}
                          ></div>
                        </div>

                        <div className="flex justify-between mb-4">
                          <div>
                            <p className="text-[#BA435F] text-sm font-medium">
                              Current Date Spot
                            </p>
                            <p className="text-[#BA435F] font-bold">
                              Beach Sunset
                            </p>
                          </div>
                          <div>
                            <p className="text-[#BA435F] text-sm font-medium">
                              Upgrade To
                            </p>
                            <p className="text-[#BA435F] font-bold">
                              Luxury Yacht Cruise
                            </p>
                          </div>
                        </div>

                        <Button className="w-full bg-[#BA435F] hover:bg-[#8F5260] text-white font-semibold py-3 rounded-xl">
                          Vote for 50 SMIRROR
                        </Button>
                      </div>
                    </div>

                    {/* Additional voting card */}
                    <div className="bg-[#F0C4C9]/30 rounded-xl overflow-hidden shadow-lg border border-[#BA435F]">
                      <div className="h-32 bg-gradient-to-br from-[#F4D2D7] to-[#F8E6E9]"></div>
                      <div className="p-4">
                        <h4 className="text-[#BA435F] font-bold mb-2">
                          Next Couple Vote
                        </h4>
                        <p className="text-[#8F5260] text-sm">Coming soon...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Leaderboard" && (
                <div className="space-y-6 pb-20">
                  {/* Top Predictors */}
                  <div className="bg-[#F0C4C9]/30 rounded-xl p-4 border border-[#BA435F]">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-[#BA435F] rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">🏆</span>
                      </div>
                      <h3 className="text-[#BA435F] font-bold text-xl">
                        Top Predictors
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {topPredictors.map((predictor) => (
                        <div
                          key={predictor.rank}
                          className="flex items-center justify-between bg-white/80 rounded-lg p-3"
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#BA435F] rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">
                                {predictor.rank}
                              </span>
                            </div>
                            <div className="w-8 h-8 bg-gray-400 rounded-full mr-3"></div>
                            <div>
                              <p className="text-[#BA435F] font-medium">
                                {predictor.name}
                              </p>
                              <p className="text-[#8F5260] text-xs">
                                {predictor.streak} win streak 🔥
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-[#BA435F] font-bold">
                              {predictor.points.toLocaleString()}
                            </p>
                            <p className="text-[#8F5260] text-xs">SMIRROR</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-[#BA435F] hover:bg-[#8F5260] text-white font-semibold py-3 rounded-xl mt-4">
                      View Full Rankings
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Navigation */}
            <BottomNavigation activeTab="vote" />

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
