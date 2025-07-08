"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RecoveryCodePage() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 3) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recovery code submitted:", code.join(""));
    // Navigate to reset password page
    window.location.href = "/reset-password";
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[390px] min-h-screen bg-gradient-to-b from-[#F4D2D7] from-0% via-[#F8E6E9] via-40% via-[#F8E6E9] via-60% to-[#F4D2D7] to-100% overflow-hidden relative">
        {/* Back Button */}
        <div className="px-8 pt-2">
          <Link
            href="/forgot-password"
            className="inline-flex items-center text-[#BA435F] hover:text-[#BA435F]/80"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </div>

        {/* App Content */}
        <div className="px-8 pb-8 h-full overflow-y-auto scrollbar-hide relative">
          <div className="mb-12 mt-8 text-left">
            <h1
              className="text-[#BA435F] mb-4 leading-tight"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "36px",
                width: "272px",
                height: "80px",
                fontWeight: "normal",
              }}
            >
              Enter 4-digit
              <br />
              recovery Code
            </h1>
            <p
              className="text-[#BA435F]"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "12px",
              }}
            >
              A code has been sent to your email address
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div
              className="flex justify-start gap-[10px]"
              style={{ width: "295px", height: "46px" }}
            >
              {code.map((digit, index) => (
                <Input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="text-center text-2xl font-bold bg-[#F0C4C9]/30 border-[#BA435F] rounded-[10px] focus:border-[#BA435F] focus:ring-[#BA435F]"
                  style={{
                    width: "46px",
                    height: "46px",
                    padding: "27px 14px",
                  }}
                />
              ))}
            </div>
          </form>

          {/* Continue Button - Positioned at bottom */}
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={code.some((digit) => !digit)}
            className="absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-[#BA435F] hover:bg-[#A03854] text-white font-medium rounded-[10px] text-lg px-6 py-2.5 disabled:opacity-50"
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
