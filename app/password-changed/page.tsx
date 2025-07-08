"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PasswordChangedPage() {
  const handleBackToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[390px] min-h-screen bg-gradient-to-b from-[#F4D2D7] from-0% via-[#F8E6E9] via-40% via-[#F8E6E9] via-60% to-[#F4D2D7] to-100% overflow-hidden relative">
        {/* Back Button */}
        <div className="px-8 pt-2">
          <Link
            href="/reset-password"
            className="inline-flex items-center justify-center w-12 h-12 border-2 border-[#BA435F] rounded-[10px] text-[#BA435F] hover:text-[#BA435F]/80 hover:border-[#BA435F]/80"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </div>

        {/* App Content */}
        <div className="px-8 pb-8 h-full flex flex-col">
          {/* Center Content */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-center">
              {/* Success Icon */}
              <div className="mb-12 flex justify-center">
                <div className="w-20 h-20 border-4 border-[#008631] rounded-full flex items-center justify-center">
                  <Check className="h-10 w-10 text-[#008631] stroke-[3]" />
                </div>
              </div>

              {/* Heading and Description */}
              <div>
                <h1
                  className="text-[#BA435F] mb-4 whitespace-nowrap"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "32px",
                    fontWeight: "normal",
                    lineHeight: "1.2",
                  }}
                >
                  Password Changed!
                </h1>
                <p
                  className="text-[#BA435F] whitespace-nowrap"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  Your password has been changed Successfully
                </p>
              </div>
            </div>
          </div>

          {/* Back to Login Button - Fixed at bottom */}
          <div className="pb-20">
            <Button
              onClick={handleBackToLogin}
              className="w-full bg-[#BA435F] hover:bg-[#A03854] text-white font-medium rounded-[10px] text-lg"
              style={{ height: "48px" }}
            >
              Back to Login
            </Button>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
      </div>
    </div>
  );
}
