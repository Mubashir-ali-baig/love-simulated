"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login submitted:", { ...formData, rememberMe })
    // Navigate to dashboard after successful login
    window.location.href = "/dashboard"
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

            {/* App Content */}
            <div className="px-8 pb-8 h-full overflow-y-auto scrollbar-hide">
              <div className="mb-8 mt-12">
                <h1 className="text-5xl font-light text-[#BA435F] mb-4" style={{ fontFamily: "Georgia, serif" }}>
                  Login
                </h1>
                <p className="text-[#BA435F] text-base font-light">Enter your email and password to log in</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#BA435F] font-medium text-base">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-[#F0C4C9]/30 border-[#BA435F] rounded-2xl h-14 placeholder:text-[#BA435F]/70 focus:border-[#BA435F] focus:ring-[#BA435F] text-base text-[#BA435F]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#BA435F] font-medium text-base">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="bg-[#F0C4C9]/30 border-[#BA435F] rounded-2xl h-14 placeholder:text-[#BA435F]/70 focus:border-[#BA435F] focus:ring-[#BA435F] pr-12 text-base text-[#BA435F]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#BA435F] hover:text-[#BA435F]/80"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me and Forgot Password */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      className="border-[#BA435F] data-[state=checked]:bg-[#BA435F] data-[state=checked]:border-[#BA435F] w-4 h-4"
                    />
                    <Label htmlFor="remember" className="text-[#BA435F] font-medium text-base cursor-pointer">
                      Remember me
                    </Label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-[#BA435F] font-medium text-base hover:text-[#BA435F]/80"
                  >
                    Forgot Password ?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#BA435F] hover:bg-[#A03854] text-white font-semibold py-4 rounded-2xl h-14 text-lg mt-8"
                >
                  Log In
                </Button>
              </form>

              <div className="mt-8">
                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-[#BA435F]"></div>
                  <span className="flex-shrink mx-4 text-[#BA435F] font-light text-base">Or login with</span>
                  <div className="flex-grow border-t border-[#BA435F]"></div>
                </div>

                <div className="mt-6 flex justify-center space-x-4">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="bg-[#F0D1D8] hover:bg-[#E8C5CE] border-0"
                    style={{ width: "88.33px", height: "48px", borderRadius: "10px" }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="bg-[#F0D1D8] hover:bg-[#E8C5CE] border-0"
                    style={{ width: "88.33px", height: "48px", borderRadius: "10px" }}
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="bg-[#F0D1D8] hover:bg-[#E8C5CE] border-0"
                    style={{ width: "88.33px", height: "48px", borderRadius: "10px" }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center pb-8">
                <p className="text-[#BA435F] text-base font-light">
                  Don't have an account?{" "}
                  <Link href="/signup" className="font-semibold text-[#BA435F] hover:text-[#A03854] underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
