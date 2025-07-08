"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Forgot password submitted:", email)
    // Navigate to recovery code page
    window.location.href = "/recovery-code"
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      {/* Mobile Phone Frame */}
      <div className="relative">
        {/* Phone Outer Frame */}
        <div className="w-[390px] h-[844px] bg-black rounded-[60px] p-2 shadow-2xl">
          {/* Phone Inner Frame */}
          <div className="w-full h-full bg-gradient-to-b from-[#F4D2D7] from-0% via-[#F8E6E9] via-40% via-[#F8E6E9] via-60% to-[#F4D2D7] to-100% rounded-[50px] overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-8 pt-4 pb-2 text-sm font-semibold text-[#BA435F]">
              <span>11:41</span>
              <div className="flex items-center gap-1">
                {/* Signal Bars - Rectangular ascending style */}
                <div className="flex items-end gap-0.5">
                  <div className="w-1 h-1 bg-[#BA435F]"></div>
                  <div className="w-1 h-2 bg-[#BA435F]"></div>
                  <div className="w-1 h-3 bg-[#BA435F]"></div>
                  <div className="w-1 h-4 bg-[#BA435F]"></div>
                </div>

                {/* WiFi Icon - Proper concentric arcs */}
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

                {/* Battery */}
                <div className="w-6 h-3 border border-[#BA435F] rounded-sm ml-1 relative">
                  <div className="w-full h-full bg-[#BA435F] rounded-sm"></div>
                  <div className="absolute -right-0.5 top-0.5 w-0.5 h-2 bg-[#BA435F] rounded-r-sm"></div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="px-8 pt-2">
              <Link href="/login" className="inline-flex items-center text-[#BA435F] hover:text-[#A03854]">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </div>

            {/* App Content */}
            <div className="px-8 pb-8 h-full overflow-y-auto scrollbar-hide relative">
              <div className="mb-12 mt-8">
                <h1
                  className="text-4xl font-light text-[#BA435F] mb-4"
                  style={{ fontFamily: "Georgia, serif", fontSize: "36px" }}
                >
                  Forgot Password?
                </h1>
                <p className="text-[#BA435F] text-xs font-light leading-relaxed">
                  Enter the email address with your account,
                  <br />
                  we'll send a email to reset your password
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#BA435F] font-medium text-base">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#F0C4C9]/30 border-[#BA435F] rounded-[10px] h-[46px] px-[14px] py-[27px] placeholder:text-[#BA435F]/70 focus:border-[#BA435F] focus:ring-[#BA435F] text-base text-[#BA435F]"
                    required
                  />
                </div>
              </form>

              {/* Continue Button - Positioned at bottom */}
              <Button
                type="submit"
                onClick={handleSubmit}
                className="absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-[#BA435F] hover:bg-[#A03854] text-white font-medium rounded-[10px] text-lg px-6 py-2.5"
                style={{ width: "350px", height: "48px" }}
              >
                Continue
              </Button>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
