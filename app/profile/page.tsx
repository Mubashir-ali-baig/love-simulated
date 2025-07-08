"use client";

import { useState } from "react";
import { ArrowLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BottomNavigation from "@/components/bottom-navigation";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://love-simula...");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F0D1D8] flex flex-col relative">
      {/* Status Bar */}
      <div
        className="flex items-center justify-between px-6 pt-4 pb-2 text-sm font-semibold text-[#BA435F]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <span>11:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-[#BA435F] rounded-full"></div>
            <div className="w-1 h-3 bg-[#BA435F] rounded-full"></div>
            <div className="w-1 h-3 bg-[#BA435F] rounded-full"></div>
            <div className="w-1 h-3 bg-[#8F5260] rounded-full"></div>
          </div>
          <svg className="w-6 h-4 ml-1" viewBox="0 0 24 24" fill="none">
            <path
              d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48L5.5 12l-.35-.95zM6.5 8.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
              fill="currentColor"
            />
          </svg>
          <div className="w-6 h-3 bg-[#BA435F] rounded ml-1"></div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center px-6 py-4">
        <Link href="/dashboard" className="mr-4">
          <div className="w-10 h-10 bg-[#EABDC7]/60 rounded-xl flex items-center justify-center border border-[#BA435F]/30">
            <ArrowLeft className="h-5 w-5 text-[#BA435F]" />
          </div>
        </Link>
        <h1
          className="text-2xl font-bold text-[#BA435F]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          My Profile
        </h1>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Profile Card */}
        <div className="mx-6 mb-6">
          <div className="bg-[#BA435F] rounded-2xl p-6 text-white shadow-lg">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full mb-3 overflow-hidden border-2 border-white/30">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Alex Morgan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className="text-xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Alex Morgan
              </h2>
              <p
                className="text-white/80"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                @alexmorgan
              </p>
              <div className="flex items-center mt-3 bg-[#FFE5A3] px-4 py-2 rounded-full">
                <span className="text-yellow-600 mr-2">⭐</span>
                <span
                  className="text-sm font-medium text-[#8F5260]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Level 4 Predictor
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-yellow-300 mr-2">🪙</span>
                  <span
                    className="text-white font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    1000 SMIRROR
                  </span>
                </div>
                <span
                  className="text-white/90 text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Level 5 in 35%
                </span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-3">
                <div
                  className="bg-white h-3 rounded-full transition-all duration-300"
                  style={{ width: "35%" }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="text-center">
                <p
                  className="text-white/80 text-sm mb-1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  SMIRROR Spent
                </p>
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  3750
                </p>
              </div>
              <div className="text-center">
                <p
                  className="text-white/80 text-sm mb-1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  SMIRROR Earned
                </p>
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  3750
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Invite Friends Section */}
        <div className="mx-6 mb-6">
          <div className="bg-[#EABDC7]/30 rounded-2xl p-5 border border-[#BA435F]/20 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#BA435F] rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span
                  className="text-[#BA435F] font-semibold text-lg"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Invite Friends
                </span>
              </div>
              <div className="bg-[#C084A8] px-4 py-2 rounded-full">
                <span
                  className="text-white text-sm font-medium"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  +100 SMIRROR
                </span>
              </div>
            </div>

            <p
              className="text-[#8F5260] text-sm mb-5 leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Invite friends to join Love, Simulated and earn SMIRROR for each
              friend who signs up!
            </p>

            <div className="flex items-center space-x-3 mb-5">
              <div className="flex-1 bg-white/60 rounded-xl px-4 py-3 border border-[#BA435F]/20">
                <span
                  className="text-[#8F5260] text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  https://love-simula...
                </span>
              </div>
              <Button
                onClick={handleCopyLink}
                className="bg-[#BA435F] hover:bg-[#8F5260] text-white px-6 py-3 rounded-xl font-medium transition-colors"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {copied ? "Copied!" : "Copy Link"}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div
                className="bg-[#BA435F] text-white px-4 py-2 rounded-full text-sm font-medium"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                3 friends joined
              </div>
              <div
                className="text-[#BA435F] text-sm font-medium"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                +300 SMIRROR earned
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mx-6 mb-6">
          <div className="flex bg-[#EABDC7]/40 rounded-2xl p-1 border border-[#BA435F]/20">
            {["Overview", "History", "Buy Points"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#BA435F] text-white shadow-sm"
                    : "text-[#8F5260] hover:text-[#BA435F] hover:bg-white/30"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mx-6 mb-6">
          {activeTab === "Overview" && (
            <div className="bg-[#EABDC7]/30 rounded-2xl p-5 border border-[#BA435F]/20 shadow-sm">
              <h3
                className="text-[#BA435F] font-semibold mb-4 text-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Recent Activity
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <p
                    className="text-[#8F5260] text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    • Voted on Peter & Alisha
                  </p>
                  <span
                    className="text-green-600 text-sm font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    +50 SMIRROR
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <p
                    className="text-[#8F5260] text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    • Predicted Emma's next move
                  </p>
                  <span
                    className="text-green-600 text-sm font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    +25 SMIRROR
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <p
                    className="text-[#8F5260] text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    • Invited friend Sarah
                  </p>
                  <span
                    className="text-green-600 text-sm font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    +100 SMIRROR
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <p
                    className="text-[#8F5260] text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    • Completed daily challenge
                  </p>
                  <span
                    className="text-green-600 text-sm font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    +75 SMIRROR
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "History" && (
            <div className="bg-[#EABDC7]/30 rounded-2xl p-5 border border-[#BA435F]/20 shadow-sm">
              <h3
                className="text-[#BA435F] font-semibold mb-4 text-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Transaction History
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[#BA435F]/10">
                  <span
                    className="text-[#8F5260] text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Vote: Peter & Alisha
                  </span>
                  <span
                    className="text-green-600 text-sm font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    +50
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#BA435F]/10">
                  <span
                    className="text-[#8F5260] text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Prediction: Emma's choice
                  </span>
                  <span
                    className="text-green-600 text-sm font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    +25
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span
                    className="text-[#8F5260] text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Friend referral
                  </span>
                  <span
                    className="text-green-600 text-sm font-medium"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    +100
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Buy Points" && (
            <div className="bg-[#EABDC7]/30 rounded-2xl p-5 border border-[#BA435F]/20 shadow-sm">
              <h3
                className="text-[#BA435F] font-semibold mb-4 text-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Purchase SMIRROR
              </h3>
              <div className="space-y-4">
                <div className="bg-white/60 rounded-xl p-4 border border-[#BA435F]/20 hover:border-[#BA435F]/40 transition-colors">
                  <div className="flex justify-between items-center">
                    <span
                      className="text-[#8F5260] font-medium"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      500 SMIRROR
                    </span>
                    <span
                      className="text-[#BA435F] font-bold text-lg"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      $4.99
                    </span>
                  </div>
                </div>
                <div className="bg-white/60 rounded-xl p-4 border border-[#BA435F]/20 hover:border-[#BA435F]/40 transition-colors">
                  <div className="flex justify-between items-center">
                    <span
                      className="text-[#8F5260] font-medium"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      1,200 SMIRROR
                    </span>
                    <span
                      className="text-[#BA435F] font-bold text-lg"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      $9.99
                    </span>
                  </div>
                </div>
                <div className="bg-white/60 rounded-xl p-4 border border-[#BA435F]/20 hover:border-[#BA435F]/40 transition-colors">
                  <div className="flex justify-between items-center">
                    <span
                      className="text-[#8F5260] font-medium"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      2,500 SMIRROR
                    </span>
                    <span
                      className="text-[#BA435F] font-bold text-lg"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      $19.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="profile" />
    </div>
  );
}
