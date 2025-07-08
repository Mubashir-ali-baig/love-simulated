"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot password submitted:", email);
    // Navigate to recovery code page
    window.location.href = "/recovery-code";
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[390px] min-h-screen bg-gradient-to-b from-[#F4D2D7] from-0% via-[#F8E6E9] via-40% via-[#F8E6E9] via-60% to-[#F4D2D7] to-100% overflow-hidden relative">
        {/* Back Button */}
        <div className="px-8 pt-2">
          <Link
            href="/login"
            className="inline-flex items-center text-[#BA435F] hover:text-[#A03854]"
          >
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
              <Label
                htmlFor="email"
                className="text-[#BA435F] font-medium text-base"
              >
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
  );
}
