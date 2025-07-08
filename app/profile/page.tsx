"use client";

import { useState } from "react";
import { ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BottomNavigation from "@/components/bottom-navigation";
import StatusBar from "@/components/status-bar";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://love-simula...");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            <div className="flex items-center px-8 py-4">
              <Link href="/dashboard" className="mr-4">
                <ArrowLeft className="h-6 w-6 text-[#BA435F]" />
              </Link>
              <h1 className="text-2xl font-bold text-[#BA435F]">My Profile</h1>
            </div>

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
              {/* Profile Components Wrapper */}
              <div className="mx-4">
                {/* Profile Card */}
                <div className="mb-6">
                  <div className="bg-[#BA435F] rounded-xl p-6 text-white">
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-20 h-20 bg-blue-500 rounded-full mb-3 overflow-hidden">
                        <img
                          src="/Alex Morgan.png"
                          alt="Alex Morgan"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-normal">Alex Morgan</h2>
                        <p className="text-pink-200">@alexmorgan</p>
                        <div
                          className="flex items-center mt-2 bg-white/20 px-3 py-1 rounded-full w-full"
                          style={{ height: "19.99px" }}
                        >
                          <img
                            src="/star.png"
                            alt="star"
                            className="mr-1"
                            style={{ width: "10px", height: "9.54px" }}
                          />
                          <span className="text-sm font-medium">
                            Level 4 Predictor
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-pink-200">
                          <img
                            src="/SMIRROR_yellow.png"
                            alt="SMIRROR"
                            className="mr-1"
                            style={{ width: "16px", height: "16px" }}
                          />
                          <span>1000 SMIRROR</span>
                        </div>
                        <span className="text-pink-200">Level 5 in 65%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-white rounded-full"
                          style={{ width: "65%", height: "7.99px" }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between mb-2">
                      <div
                        className="text-center bg-white/10 rounded-lg flex flex-col justify-center items-center py-4 px-3"
                        style={{ width: "145px" }}
                      >
                        <p className="text-pink-200 text-sm">SMIRROR Spent</p>
                        <p className="text-xl font-bold">3750</p>
                      </div>
                      <div
                        className="text-center bg-white/10 rounded-lg flex flex-col justify-center items-center py-4 px-3"
                        style={{ width: "145px" }}
                      >
                        <p className="text-pink-200 text-sm">SMIRROR Earned</p>
                        <p className="text-xl font-bold">3750</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Invite Friends Section */}
                <div className="mb-6">
                  <div className="bg-[#F0C4C9]/30 rounded-xl p-4 border border-[#BA435F]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#BA435F] rounded-full flex items-center justify-center mr-3">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-[#BA435F] font-semibold">
                          Invite Friends
                        </span>
                      </div>
                      <div className="bg-purple-200 px-3 py-1 rounded-full">
                        <span className="text-purple-700 text-sm font-medium">
                          +100 SMIRROR
                        </span>
                      </div>
                    </div>

                    <p className="text-[#BA435F] text-sm mb-4">
                      Invite friends to join Love, Simulated and earn SMIRROR
                      for each friend who signs up!
                    </p>

                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex-1 bg-white/80 rounded-lg px-3 py-2 border border-[#BA435F]">
                        <span className="text-[#BA435F] text-sm">
                          https://love-simula...
                        </span>
                      </div>
                      <Button
                        onClick={handleCopyLink}
                        className="bg-[#BA435F] hover:bg-[#8F5260] text-white px-4 py-2 rounded-lg"
                      >
                        {copied ? "Copied!" : "Copy Link"}
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="bg-[#BA435F] text-white px-3 py-1 rounded-full text-sm">
                        3 friends joined
                      </div>
                      <div className="text-[#BA435F] text-sm font-medium">
                        +300 SMIRROR earned
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="mb-6">
                  <div className="flex bg-[#F0C4C9]/30 rounded-xl p-1">
                    {["Overview", "History", "Buy Points"].map((tab) => (
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

                {/* Tab Content */}
                <div className="mb-6">
                  {activeTab === "Overview" && (
                    <div className="bg-[#F0C4C9]/30 rounded-xl p-4 border border-[#BA435F]">
                      <h3 className="text-[#BA435F] font-semibold mb-3">
                        Recent Activity
                      </h3>
                      <div className="space-y-2">
                        <p className="text-[#BA435F] text-sm">
                          • Voted on Peter & Alisha (+50 SMIRROR)
                        </p>
                        <p className="text-[#BA435F] text-sm">
                          • Predicted Emma's next move (+25 SMIRROR)
                        </p>
                        <p className="text-[#BA435F] text-sm">
                          • Invited friend Sarah (+100 SMIRROR)
                        </p>
                        <p className="text-[#BA435F] text-sm">
                          • Completed daily challenge (+75 SMIRROR)
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "History" && (
                    <div className="bg-[#F0C4C9]/30 rounded-xl p-4 border border-[#BA435F]">
                      <h3 className="text-[#BA435F] font-semibold mb-3">
                        Transaction History
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[#BA435F] text-sm">
                            Vote: Peter & Alisha
                          </span>
                          <span className="text-green-600 text-sm font-medium">
                            +50
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#BA435F] text-sm">
                            Prediction: Emma's choice
                          </span>
                          <span className="text-green-600 text-sm font-medium">
                            +25
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#BA435F] text-sm">
                            Friend referral
                          </span>
                          <span className="text-green-600 text-sm font-medium">
                            +100
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "Buy Points" && (
                    <div className="bg-[#F0C4C9]/30 rounded-xl p-4 border border-[#BA435F]">
                      <h3 className="text-[#BA435F] font-semibold mb-3">
                        Purchase SMIRROR
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-white/80 rounded-lg p-3 border border-[#BA435F]">
                          <div className="flex justify-between items-center">
                            <span className="text-[#BA435F] font-medium">
                              500 SMIRROR
                            </span>
                            <span className="text-[#BA435F] font-bold">
                              $4.99
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-3 border border-[#BA435F]">
                          <div className="flex justify-between items-center">
                            <span className="text-[#BA435F] font-medium">
                              1,200 SMIRROR
                            </span>
                            <span className="text-[#BA435F] font-bold">
                              $9.99
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/80 rounded-lg p-3 border border-[#BA435F]">
                          <div className="flex justify-between items-center">
                            <span className="text-[#BA435F] font-medium">
                              2,500 SMIRROR
                            </span>
                            <span className="text-[#BA435F] font-bold">
                              $19.99
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
  );
}
