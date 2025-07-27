"use client"

import type React from "react"

import { Sparkles, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function WelcomeBanner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      className="relative overflow-hidden rounded-3xl backdrop-blur-3xl shadow-2xl group border-2 border-ivory-300/60 hover:border-red-400/80 transition-all duration-500"
      onMouseMove={handleMouseMove}
    >
      {/* Multi-layered frosted glass background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-ivory-100/70" />
      <div className="absolute inset-0 bg-gradient-to-tr from-ivory-50/40 via-transparent to-red-50/30" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/20 to-ivory-100/40" />

      {/* Glass reflection layers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      <div className="absolute top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Stronger top accent with gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ivory-400/60 via-red-500/90 to-ivory-400/60 shadow-sm" />

      {/* Enhanced dynamic cursor glow effect */}
      <div
        className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 120,
          top: mousePosition.y - 120,
          width: "240px",
          height: "240px",
          background:
            "radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.25) 20%, rgba(255, 255, 255, 0.15) 40%, rgba(229, 229, 229, 0.1) 60%, transparent 80%)",
          borderRadius: "50%",
          filter: "blur(20px)",
        }}
      />

      <div className="relative z-10 p-6 lg:p-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">👋</span>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                  Welcome back,{" "}
                  <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Ben!</span>
                </h1>
              </div>
              <p className="text-gray-600 text-base leading-relaxed font-medium max-w-2xl">
                Ready to enhance your resume with AI? Let's get started and make your resume stand out from the crowd.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="font-semibold rounded-2xl px-8 py-3.5 text-base shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border-2 border-red-600/40 hover:border-red-500/60 relative overflow-hidden group"
                size="lg"
              >
                {/* Multi-layered button background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-700/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 via-transparent to-red-400/30 opacity-0 group-hover:opacity-100 transition-opacity" />

                <Sparkles className="h-5 w-5 mr-2 relative z-10 text-white" />
                <span className="relative z-10 text-white font-bold">Start Enhancement</span>
                <ArrowRight className="h-5 w-5 ml-2 relative z-10 text-white" />
              </Button>
              <Button
                variant="outline"
                className="font-semibold rounded-2xl px-8 py-3.5 text-base backdrop-blur-xl relative overflow-hidden group border-2 border-ivory-300/60 hover:border-red-400/80 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-ivory-50/80 to-white/85" />
                <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-50/60 via-transparent to-red-50/60 opacity-0 group-hover:opacity-100 transition-opacity" />

                <Zap className="h-5 w-5 mr-2 relative z-10 text-gray-700" />
                <span className="relative z-10 text-gray-700 font-bold">View Tutorial</span>
              </Button>
            </div>
          </div>

          {/* Enhanced vertical divider with glass effect */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 transform -translate-x-1/2">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-white/60 to-transparent" />
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-ivory-300/40 via-red-200/60 to-ivory-300/40" />
          </div>

          {/* Right stats with enhanced glass effect */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "12", label: "Resumes" },
                { value: "94%", label: "Success Rate" },
                { value: "8", label: "AI Enhanced" },
                { value: "24", label: "Downloads" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative backdrop-blur-2xl rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-ivory-300/60 hover:border-red-400/80 group/card overflow-hidden"
                >
                  {/* Multi-layered glass background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-ivory-100/70" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ivory-50/40 via-transparent to-red-50/20" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/30 to-ivory-100/30 opacity-0 group-hover/card:opacity-100 transition-opacity" />

                  {/* Glass reflection */}
                  <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                  <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-ivory-400/40 via-red-300/80 to-ivory-400/40 opacity-0 group-hover/card:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-xs font-semibold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom accent with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ivory-400/60 via-red-400/80 to-ivory-400/60 opacity-80 shadow-sm" />

      {/* Additional glass reflection at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  )
}
