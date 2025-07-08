"use client"

import { useState } from "react"
import { ArrowLeft, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import BottomNavigation from "@/components/bottom-navigation"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://love-simula...")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
            <div className="flex items-center px-8 py-4">
              <Link href="/dashboard" className="mr-4">
                <ArrowLeft className="h-6 w-6 text-rose-800" />
              </Link>
              <h1 className="text-2xl font-bold text-rose-800">My Profile</h1>
            </div>

            {/* Main Content - Scrollable */}
            <div className="flex-1 overflow-y-auto" style={{ height: "calc(100% - 140px)" }}>
              {/* Profile Card */}
              <div className="mx-8 mb-6">
                <div className="bg-rose-600 rounded-xl p-6 text-white">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-20 h-20 bg-blue-500 rounded-full mb-3 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Alex Morgan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-bold">Alex Morgan</h2>
                    <p className="text-rose-200">@alexmorgan</p>
                    <div className="flex items-center mt-2 bg-rose-500 px-3 py-1 rounded-full">
                      <span className="text-yellow-300 mr-1">⭐</span>
                      <span className="text-sm font-medium">Level 4 Predictor</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-rose-200">1000 SMIRROR</span>
                      <span className="text-rose-200">Level 5 in 35%</span>
                    </div>
                    <div className="w-full bg-rose-500 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="text-center">
                      <p className="text-rose-200 text-sm">SMIRROR Spent</p>
                      <p className="text-xl font-bold">3750</p>
                    </div>
                    <div className="text-center">
                      <p className="text-rose-200 text-sm">SMIRROR Earned</p>
                      <p className="text-xl font-bold">3750</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Invite Friends Section */}
              <div className="mx-8 mb-6">
                <div className="bg-pink-100/50 rounded-xl p-4 border border-rose-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-rose-800 font-semibold">Invite Friends</span>
                    </div>
                    <div className="bg-purple-200 px-3 py-1 rounded-full">
                      <span className="text-purple-700 text-sm font-medium">+100 SMIRROR</span>
                    </div>
                  </div>

                  <p className="text-rose-700 text-sm mb-4">
                    Invite friends to join Love, Simulated and earn SMIRROR for each friend who signs up!
                  </p>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex-1 bg-white/80 rounded-lg px-3 py-2 border border-rose-300">
                      <span className="text-rose-600 text-sm">https://love-simula...</span>
                    </div>
                    <Button
                      onClick={handleCopyLink}
                      className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg"
                    >
                      {copied ? "Copied!" : "Copy Link"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm">3 friends joined</div>
                    <div className="text-rose-600 text-sm font-medium">+300 SMIRROR earned</div>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="mx-8 mb-6">
                <div className="flex bg-pink-100/50 rounded-xl p-1">
                  {["Overview", "History", "Buy Points"].map((tab) => (
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

              {/* Tab Content */}
              <div className="mx-8 mb-6">
                {activeTab === "Overview" && (
                  <div className="bg-pink-100/50 rounded-xl p-4 border border-rose-300">
                    <h3 className="text-rose-800 font-semibold mb-3">Recent Activity</h3>
                    <div className="space-y-2">
                      <p className="text-rose-700 text-sm">• Voted on Peter & Alisha (+50 SMIRROR)</p>
                      <p className="text-rose-700 text-sm">• Predicted Emma's next move (+25 SMIRROR)</p>
                      <p className="text-rose-700 text-sm">• Invited friend Sarah (+100 SMIRROR)</p>
                      <p className="text-rose-700 text-sm">• Completed daily challenge (+75 SMIRROR)</p>
                    </div>
                  </div>
                )}

                {activeTab === "History" && (
                  <div className="bg-pink-100/50 rounded-xl p-4 border border-rose-300">
                    <h3 className="text-rose-800 font-semibold mb-3">Transaction History</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-rose-700 text-sm">Vote: Peter & Alisha</span>
                        <span className="text-green-600 text-sm font-medium">+50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-rose-700 text-sm">Prediction: Emma's choice</span>
                        <span className="text-green-600 text-sm font-medium">+25</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-rose-700 text-sm">Friend referral</span>
                        <span className="text-green-600 text-sm font-medium">+100</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Buy Points" && (
                  <div className="bg-pink-100/50 rounded-xl p-4 border border-rose-300">
                    <h3 className="text-rose-800 font-semibold mb-3">Purchase SMIRROR</h3>
                    <div className="space-y-3">
                      <div className="bg-white/80 rounded-lg p-3 border border-rose-300">
                        <div className="flex justify-between items-center">
                          <span className="text-rose-700 font-medium">500 SMIRROR</span>
                          <span className="text-rose-800 font-bold">$4.99</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3 border border-rose-300">
                        <div className="flex justify-between items-center">
                          <span className="text-rose-700 font-medium">1,200 SMIRROR</span>
                          <span className="text-rose-800 font-bold">$9.99</span>
                        </div>
                      </div>
                      <div className="bg-white/80 rounded-lg p-3 border border-rose-300">
                        <div className="flex justify-between items-center">
                          <span className="text-rose-700 font-medium">2,500 SMIRROR</span>
                          <span className="text-rose-800 font-bold">$19.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom padding */}
              <div className="h-20"></div>
            </div>

            {/* Bottom Navigation */}
            <BottomNavigation activeTab="profile" />

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
