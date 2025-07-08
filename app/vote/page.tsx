"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/bottom-navigation";
import VotingCard from "@/components/voting-card";

export default function VotePage() {
  const [activeTab, setActiveTab] = useState("Vote");

  const votingData = [
    {
      coupleImage: "/placeholder.svg?height=192&width=350",
      person1Image: "/placeholder.svg?height=40&width=40",
      person2Image: "/placeholder.svg?height=40&width=40",
      coupleName: "Peter and Alisha",
      currentVotes: 1250,
      percentage: 42,
      currentDateSpot: "Beach Sunset",
      upgradeTo: "Luxury Yacht Cruise",
      voteCost: 50,
    },
    {
      coupleImage: "/placeholder.svg?height=192&width=350",
      person1Image: "/placeholder.svg?height=40&width=40",
      person2Image: "/placeholder.svg?height=40&width=40",
      coupleName: "Peter and Alisha",
      currentVotes: 1250,
      percentage: 42,
      currentDateSpot: "Beach Sunset",
      upgradeTo: "Luxury Yacht Cruise",
      voteCost: 50,
    },
    {
      coupleImage: "/placeholder.svg?height=192&width=350",
      person1Image: "/placeholder.svg?height=40&width=40",
      person2Image: "/placeholder.svg?height=40&width=40",
      coupleName: "Peter and Alisha",
      currentVotes: 1250,
      percentage: 42,
      currentDateSpot: "Beach Sunset",
      upgradeTo: "Luxury Yacht Cruise",
      voteCost: 50,
    },
    {
      coupleImage: "/placeholder.svg?height=192&width=350",
      person1Image: "/placeholder.svg?height=40&width=40",
      person2Image: "/placeholder.svg?height=40&width=40",
      coupleName: "Peter and Alisha",
      currentVotes: 1250,
      percentage: 42,
      currentDateSpot: "Beach Sunset",
      upgradeTo: "Luxury Yacht Cruise",
      voteCost: 50,
    },
  ];

  const topPredictors = [
    { rank: 1, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 2, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 3, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 4, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 5, name: "PredictionKing", streak: 5, points: 12500 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[390px] min-h-screen bg-gradient-to-b from-[#F4D2D7] via-[#F8E6E9] to-[#F4D2D7] overflow-hidden relative flex flex-col">
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
            Stake $MIRROR on your predictions and vote for your favorite couples
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-4 flex justify-center">
          <div
            className="flex bg-[#F0C4C9]/30 p-1 border border-[#BA435F]"
            style={{
              borderRadius: "9999px",
              width: "350px",
              height: "40px",
            }}
          >
            {["Vote", "Leaderboard"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-4 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-[#BA435F] text-white"
                    : "text-[#BA435F] hover:text-[#8F5260]"
                }`}
                style={
                  activeTab === tab
                    ? {
                        borderRadius: "9999px",
                        width: "161px",
                        height: "32px",
                      }
                    : { borderRadius: "9999px" }
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content - Scrollable */}
        <div
          className="flex-1 overflow-y-auto px-4 scrollbar-hide"
          style={
            {
              height: "calc(100% - 200px)",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            } as React.CSSProperties
          }
        >
          {activeTab === "Vote" && (
            <div className="space-y-6 pb-20">
              {/* Current Voting */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-[#BA435F] font-semibold text-lg"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Current Voting
                  </h3>
                  <div className="flex items-center text-[#8F5260]">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">Ends in 5 hours</span>
                  </div>
                </div>

                {votingData.map((vote, index) => (
                  <VotingCard
                    key={index}
                    coupleImage={vote.coupleImage}
                    person1Image={vote.person1Image}
                    person2Image={vote.person2Image}
                    coupleName={vote.coupleName}
                    currentVotes={vote.currentVotes}
                    percentage={vote.percentage}
                    currentDateSpot={vote.currentDateSpot}
                    upgradeTo={vote.upgradeTo}
                    voteCost={vote.voteCost}
                  />
                ))}
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
  );
}
