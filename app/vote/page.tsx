"use client"

import { useState } from "react"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import BottomNavigation from "@/components/bottom-navigation"

export default function VotePage() {
  const [activeTab, setActiveTab] = useState("Vote")

  const topPredictors = [
    { rank: 1, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 2, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 3, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 4, name: "PredictionKing", streak: 5, points: 12500 },
    { rank: 5, name: "PredictionKing", streak: 5, points: 12500 },
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      {/* Mobile Phone Frame */}
      <div className="relative">
        {/* Phone Outer Frame */}
        <div className="w-[390px] h-[844px] bg-black rounded-[60px] p-2 shadow-2xl">
          {/* Phone Inner Frame */}
          <div className="w-full h-full bg-gradient-to-br from-pink-200 via-pink-300 to-rose-400 rounded-[50px] overflow-hidden relative flex flex-col">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-8 pt-4 pb-2 text-sm font-semibold text-rose-800">
              <span>11:41</span>
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-rose-800 rounded-full"></div>
                  <div className="w-1 h-3 bg-rose-800 rounded-full"></div>
                  <div className="w-1 h-3 bg-rose-800 rounded-full"></div>
                  <div className="w-1 h-3 bg-rose-600 rounded-full"></div>
                </div>
                <svg className="w-6 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48L5.5 12l-.35-.95zM6.5 8.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                    fill="currentColor"
                  />
                </svg>
                <div className="w-6 h-3 bg-rose-800 rounded ml-1"></div>
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-8 py-4">
              <div>
                <h1 className="text-3xl font-bold text-rose-800">Vote &</h1>
                <h2 className="text-3xl font-bold text-rose-800">Leaderboard</h2>
                <p className="text-rose-700 mt-1">
                  {activeTab === "Vote"
                    ? "Stake SMIRROR on your predictions and vote for your favorite couples"
                    : "Stake SMIRROR on your predictions and vote for your favorite couples"}
                </p>
              </div>
              <div className="flex items-center bg-white/80 rounded-full px-4 py-2 shadow-lg">
                <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="text-rose-700 font-semibold">1,000 SMIRROR</span>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="px-8 mb-4">
              <div className="flex bg-pink-100/50 rounded-xl p-1">
                {["Vote", "Leaderboard"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab ? "bg-rose-600 text-white" : "text-rose-700 hover:text-rose-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content - Scrollable */}
            <div className="flex-1 overflow-y-auto px-8" style={{ height: "calc(100% - 200px)" }}>
              {activeTab === "Vote" && (
                <div className="space-y-6 pb-20">
                  {/* Current Voting */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-rose-800 font-bold text-xl">Current Voting</h3>
                      <div className="flex items-center text-rose-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">Ends in 5 hours</span>
                      </div>
                    </div>

                    <div className="bg-white/80 rounded-xl overflow-hidden shadow-lg mb-4">
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
                            <span className="text-white font-bold text-lg drop-shadow-lg">Peter and Alisha</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-rose-700 text-sm">Current votes: 1,250</span>
                          <span className="text-rose-700 text-sm font-medium">42%</span>
                        </div>
                        <div className="w-full bg-rose-200 rounded-full h-2 mb-4">
                          <div className="bg-rose-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                        </div>

                        <div className="flex justify-between mb-4">
                          <div>
                            <p className="text-rose-700 text-sm font-medium">Current Date Spot</p>
                            <p className="text-rose-800 font-bold">Beach Sunset</p>
                          </div>
                          <div>
                            <p className="text-rose-700 text-sm font-medium">Upgrade To</p>
                            <p className="text-rose-800 font-bold">Luxury Yacht Cruise</p>
                          </div>
                        </div>

                        <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-xl">
                          Vote for 50 SMIRROR
                        </Button>
                      </div>
                    </div>

                    {/* Additional voting card */}
                    <div className="bg-white/80 rounded-xl overflow-hidden shadow-lg">
                      <div className="h-32 bg-gradient-to-br from-blue-200 to-blue-400"></div>
                      <div className="p-4">
                        <h4 className="text-rose-800 font-bold mb-2">Next Couple Vote</h4>
                        <p className="text-rose-700 text-sm">Coming soon...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Leaderboard" && (
                <div className="space-y-6 pb-20">
                  {/* Top Predictors */}
                  <div className="bg-pink-100/50 rounded-xl p-4 border border-rose-300">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">🏆</span>
                      </div>
                      <h3 className="text-rose-800 font-bold text-xl">Top Predictors</h3>
                    </div>

                    <div className="space-y-3">
                      {topPredictors.map((predictor) => (
                        <div
                          key={predictor.rank}
                          className="flex items-center justify-between bg-white/80 rounded-lg p-3"
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">{predictor.rank}</span>
                            </div>
                            <div className="w-8 h-8 bg-gray-400 rounded-full mr-3"></div>
                            <div>
                              <p className="text-rose-800 font-medium">{predictor.name}</p>
                              <p className="text-rose-600 text-xs">{predictor.streak} win streak 🔥</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-rose-800 font-bold">{predictor.points.toLocaleString()}</p>
                            <p className="text-rose-600 text-xs">SMIRROR</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-xl mt-4">
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
  )
}
