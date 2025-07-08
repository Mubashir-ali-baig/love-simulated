"use client";

import { Home } from "lucide-react";
import Link from "next/link";

interface BottomNavigationProps {
  activeTab: "home" | "contenders" | "live" | "vote" | "profile";
}

export default function BottomNavigation({ activeTab }: BottomNavigationProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#F0D1D8] backdrop-blur-sm border-t border-rose-300 z-50">
      <div className="flex items-center justify-around py-3">
        <Link
          href="/dashboard"
          className="flex flex-col items-center space-y-1"
        >
          <Home
            className={`h-6 w-6 ${activeTab === "home" ? "text-[#BA435F]" : "text-[#8F5260]"}`}
          />
          <span
            className={`text-xs ${activeTab === "home" ? "text-[#BA435F] font-medium" : "text-[#8F5260]"}`}
          >
            Home
          </span>
        </Link>
        <Link
          href="/contenders"
          className="flex flex-col items-center space-y-1"
        >
          <img
            src="/contenders-icon.png"
            alt="Contenders"
            className={`h-6 w-6 ${activeTab === "contenders" ? "brightness-0" : "brightness-0 opacity-60"}`}
            style={{
              filter:
                activeTab === "contenders"
                  ? "brightness(0) saturate(100%) invert(25%) sepia(85%) saturate(1654%) hue-rotate(315deg) brightness(91%) contrast(91%)"
                  : "brightness(0) saturate(100%) invert(35%) sepia(25%) saturate(1200%) hue-rotate(315deg) brightness(85%) contrast(85%)",
            }}
          />
          <span
            className={`text-xs ${activeTab === "contenders" ? "text-[#BA435F] font-medium" : "text-[#8F5260]"}`}
          >
            Contenders
          </span>
        </Link>
        <button className="flex flex-col items-center space-y-1">
          <img
            src="/live-icon.png"
            alt="Live"
            className={`h-6 w-6 ${activeTab === "live" ? "brightness-0" : "brightness-0 opacity-60"}`}
            style={{
              filter:
                activeTab === "live"
                  ? "brightness(0) saturate(100%) invert(25%) sepia(85%) saturate(1654%) hue-rotate(315deg) brightness(91%) contrast(91%)"
                  : "brightness(0) saturate(100%) invert(35%) sepia(25%) saturate(1200%) hue-rotate(315deg) brightness(85%) contrast(85%)",
            }}
          />
          <span
            className={`text-xs ${activeTab === "live" ? "text-[#BA435F] font-medium" : "text-[#8F5260]"}`}
          >
            Live
          </span>
        </button>
        <Link href="/vote" className="flex flex-col items-center space-y-1">
          <img
            src="/vote-icon.png"
            alt="Vote"
            className={`h-6 w-6 ${activeTab === "vote" ? "brightness-0" : "brightness-0 opacity-60"}`}
            style={{
              filter:
                activeTab === "vote"
                  ? "brightness(0) saturate(100%) invert(25%) sepia(85%) saturate(1654%) hue-rotate(315deg) brightness(91%) contrast(91%)"
                  : "brightness(0) saturate(100%) invert(35%) sepia(25%) saturate(1200%) hue-rotate(315deg) brightness(85%) contrast(85%)",
            }}
          />
          <span
            className={`text-xs ${activeTab === "vote" ? "text-[#BA435F] font-medium" : "text-[#8F5260]"}`}
          >
            Vote
          </span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center space-y-1">
          <img
            src="/profile-icon.png"
            alt="Profile"
            className={`h-6 w-6 ${activeTab === "profile" ? "brightness-0" : "brightness-0 opacity-60"}`}
            style={{
              filter:
                activeTab === "profile"
                  ? "brightness(0) saturate(100%) invert(25%) sepia(85%) saturate(1654%) hue-rotate(315deg) brightness(91%) contrast(91%)"
                  : "brightness(0) saturate(100%) invert(35%) sepia(25%) saturate(1200%) hue-rotate(315deg) brightness(85%) contrast(85%)",
            }}
          />
          <span
            className={`text-xs ${activeTab === "profile" ? "text-[#BA435F] font-medium" : "text-[#8F5260]"}`}
          >
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
}
