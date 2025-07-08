"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Reset password submitted:", formData);
    // Navigate to password changed page
    window.location.href = "/password-changed";
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-[390px] min-h-screen bg-gradient-to-b from-[#F4D2D7] from-0% via-[#F8E6E9] via-40% via-[#F8E6E9] via-60% to-[#F4D2D7] to-100% overflow-hidden relative">
        {/* Back Button */}
        <div className="px-8 pt-2">
          <Link
            href="/recovery-code"
            className="inline-flex items-center text-[#BA435F] hover:text-[#BA435F]/80"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </div>

        {/* App Content */}
        <div className="px-8 pb-8 h-full overflow-y-auto scrollbar-hide relative">
          <div className="mb-6 mt-8 text-left">
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
              Reset Password
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-[#BA435F] font-medium text-base"
              >
                Enter a Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="bg-[#F0C4C9]/30 border-[#BA435F] rounded-[10px] h-[46px] px-[14px] py-[27px] placeholder:text-[#BA435F]/70 focus:border-[#BA435F] focus:ring-[#BA435F] pr-12 text-base text-[#BA435F]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BA435F] hover:text-[#BA435F]/80"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-[#BA435F] font-medium text-base"
              >
                Confirm New Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className="bg-[#F0C4C9]/30 border-[#BA435F] rounded-[10px] h-[46px] px-[14px] py-[27px] placeholder:text-[#BA435F]/70 focus:border-[#BA435F] focus:ring-[#BA435F] pr-12 text-base text-[#BA435F]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BA435F] hover:text-[#BA435F]/80"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Reset Password Button - Positioned at bottom */}
          <Button
            type="submit"
            onClick={handleSubmit}
            className="absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-[#BA435F] hover:bg-[#A03854] text-white font-medium rounded-[10px] text-lg px-6 py-2.5"
            style={{ width: "350px", height: "48px" }}
          >
            Reset Password
          </Button>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
      </div>
    </div>
  );
}
