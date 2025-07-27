"use client"

import type React from "react"

import { Upload, FileText, Sparkles, User, ArrowRight, Plus, Eye, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ActionGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div className="space-y-8">
      {/* Primary Actions */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <Card
          className="group cursor-pointer backdrop-blur-3xl transition-all duration-500 rounded-3xl shadow-2xl hover:shadow-3xl relative overflow-hidden border-2 border-ivory-300/60 hover:border-red-400/80 hover:scale-[1.02]"
          onMouseMove={(e) => handleMouseMove(e, "upload")}
        >
          {/* Multi-layered glass background with better contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-ivory-100/90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-ivory-50/60 via-transparent to-red-50/40" />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/50 to-ivory-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Glass reflections */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
          <div className="absolute top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          {/* Enhanced top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ivory-400/70 via-red-500/90 to-ivory-400/70 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />

          {/* Enhanced dynamic cursor glow */}
          <div
            className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              left: mousePosition.x - 80,
              top: mousePosition.y - 80,
              width: "160px",
              height: "160px",
              background:
                "radial-gradient(circle, rgba(239, 68, 68, 0.6) 0%, rgba(220, 38, 38, 0.4) 20%, rgba(255, 255, 255, 0.3) 40%, rgba(229, 229, 229, 0.2) 60%, transparent 80%)",
              borderRadius: "50%",
              filter: "blur(15px)",
            }}
          />

          <CardContent className="p-8 text-center relative z-10">
            <div className="mx-auto w-20 h-20 backdrop-blur-2xl rounded-3xl flex items-center justify-center mb-6 border-2 border-ivory-300/60 group-hover:border-red-400/80 group-hover:scale-110 transition-all duration-500 shadow-xl relative overflow-hidden">
              {/* Multi-layered icon background with better contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-ivory-100/85 to-ivory-200/90" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ivory-50/70 via-transparent to-red-50/50" />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/60 to-ivory-100/70 opacity-0 group-hover:opacity-100 transition-opacity" />

              <Upload className="h-10 w-10 text-gray-700 group-hover:text-red-600 relative z-10 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Upload New Resume</h3>
            <p className="text-gray-700 mb-6 text-base leading-relaxed">Drag & drop your resume or click to browse</p>

            <Button className="font-semibold rounded-2xl px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-red-600/40 hover:border-red-500/60 relative overflow-hidden group/btn cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-700/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/50 via-transparent to-red-400/50 opacity-0 group-hover/btn:opacity-100 transition-opacity" />

              <Plus className="h-5 w-5 mr-2 relative z-10 text-white" />
              <span className="relative z-10 text-white font-bold">Choose File</span>
            </Button>
          </CardContent>

          {/* Enhanced side accents with gradients */}
          <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-red-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />
          <div className="absolute right-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-red-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />
        </Card>

        {/* AI Enhancement */}
        <Card
          className="group cursor-pointer backdrop-blur-3xl transition-all duration-500 rounded-3xl shadow-2xl hover:shadow-3xl relative overflow-hidden border-2 border-ivory-300/60 hover:border-red-400/80 hover:scale-[1.02]"
          onMouseMove={(e) => handleMouseMove(e, "ai")}
        >
          {/* Multi-layered glass background with better contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-ivory-100/90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-ivory-50/60 via-transparent to-red-50/40" />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/50 to-ivory-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Glass reflections */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
          <div className="absolute top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          {/* Enhanced top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ivory-400/70 via-red-500/90 to-ivory-400/70 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />

          {/* Enhanced dynamic cursor glow */}
          <div
            className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              left: mousePosition.x - 80,
              top: mousePosition.y - 80,
              width: "160px",
              height: "160px",
              background:
                "radial-gradient(circle, rgba(185, 28, 28, 0.6) 0%, rgba(220, 38, 38, 0.4) 20%, rgba(255, 255, 255, 0.3) 40%, rgba(229, 229, 229, 0.2) 60%, transparent 80%)",
              borderRadius: "50%",
              filter: "blur(15px)",
            }}
          />

          <CardContent className="p-8 relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="w-18 h-18 backdrop-blur-2xl rounded-3xl flex items-center justify-center border-2 border-ivory-300/60 group-hover:border-red-400/80 group-hover:scale-110 transition-all duration-500 shadow-xl relative overflow-hidden">
                {/* Multi-layered icon background with better contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-ivory-100/85 to-ivory-200/90" />
                <div className="absolute inset-0 bg-gradient-to-tr from-ivory-50/70 via-transparent to-red-50/50" />
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/60 to-ivory-100/70 opacity-0 group-hover:opacity-100 transition-opacity" />

                <Sparkles className="h-9 w-9 text-gray-700 group-hover:text-red-600 relative z-10 transition-colors duration-300" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text text-transparent mb-1">
                  8
                </div>
                <div className="text-gray-700 text-sm font-semibold">Enhanced</div>
                <div className="w-6 h-px bg-gradient-to-r from-transparent via-red-500/90 to-red-400/70 mt-2 shadow-sm" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Enhancement</h3>
            <p className="text-gray-700 mb-6 text-base leading-relaxed">Powered by GPT-4 • 94% success rate</p>

            <Button
              variant="outline"
              className="font-semibold rounded-2xl w-full py-3 transition-all duration-300 backdrop-blur-xl relative overflow-hidden group/btn border-2 border-ivory-300/60 hover:border-red-400/80 bg-transparent cursor-pointer hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-ivory-50/80 to-white/85" />
              <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-50/80 via-transparent to-red-50/80 opacity-0 group-hover/btn:opacity-100 transition-opacity" />

              <span className="relative z-10 text-gray-800 group-hover/btn:text-red-700 transition-colors font-bold">
                Enhance Resume
              </span>
              <ArrowRight className="h-5 w-5 ml-2 relative z-10 text-gray-800 group-hover/btn:text-red-700 transition-colors" />
            </Button>
          </CardContent>

          {/* Enhanced side accents with gradients */}
          <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-red-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />
          <div className="absolute right-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-red-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />
        </Card>
      </div>

      {/* Secondary Actions */}
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { icon: FileText, title: "My Resumes", subtitle: "12 total • 3 recent", action: Eye },
          { icon: User, title: "Profile Settings", subtitle: "Account & preferences", action: Settings },
        ].map((item, index) => (
          <Card
            key={index}
            className="backdrop-blur-3xl transition-all duration-300 rounded-2xl shadow-lg hover:shadow-xl group relative border-2 border-ivory-300/60 hover:border-red-400/80 overflow-hidden hover:scale-[1.02] cursor-pointer"
          >
            {/* Multi-layered glass background with better contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-ivory-100/90" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ivory-50/60 via-transparent to-red-50/30" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/50 to-ivory-100/50 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Glass reflections */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

            {/* Enhanced left accent */}
            <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-ivory-300/50 via-red-500/90 to-ivory-300/50 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />

            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 backdrop-blur-2xl rounded-2xl flex items-center justify-center border-2 border-ivory-300/60 group-hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden">
                    {/* Multi-layered icon background with better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-ivory-100/85 to-ivory-200/90" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-ivory-50/70 via-transparent to-red-50/40" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/60 to-ivory-100/60 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <item.icon className="h-7 w-7 text-gray-700 group-hover:text-red-600 relative z-10 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-red-600 text-sm font-medium">{item.subtitle}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-2xl p-3 backdrop-blur-xl relative overflow-hidden group/btn border-2 border-ivory-300/60 hover:border-red-400/80 bg-transparent cursor-pointer hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-ivory-50/70 to-white/80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-ivory-100/60 via-transparent to-ivory-100/60 opacity-0 group-hover/btn:opacity-100 transition-opacity" />

                  <item.action className="h-5 w-5 text-gray-700 group-hover/btn:text-gray-900 relative z-10 transition-colors" />
                </Button>
              </div>
            </CardContent>

            {/* Top accent line */}
            <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-ivory-300/50 via-red-400/90 to-ivory-300/50 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />
          </Card>
        ))}
      </div>
    </div>
  )
}
