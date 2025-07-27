"use client"

import type React from "react"

import { FileText, Clock, Download, Sparkles, Upload, CheckCircle, AlertCircle, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const activities = [
  {
    id: 1,
    title: "Software Engineer Resume",
    action: "Enhanced with AI",
    time: "2 hours ago",
    status: "completed",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Marketing Manager Resume",
    action: "Uploaded",
    time: "1 day ago",
    status: "processing",
    icon: Upload,
  },
  {
    id: 3,
    title: "Data Analyst Resume",
    action: "Downloaded",
    time: "3 days ago",
    status: "completed",
    icon: Download,
  },
]

export function ActivityTimeline() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <Card
      className="backdrop-blur-3xl border border-white/40 hover:border-white/60 rounded-2xl shadow-lg relative overflow-hidden group transition-all duration-300"
      onMouseMove={handleMouseMove}
    >
      {/* Multi-layered glass background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-ivory-100/90" />
      <div className="absolute inset-0 bg-gradient-to-tr from-ivory-50/60 via-transparent to-red-50/30" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/50 to-ivory-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Stronger border accent */}
      <div className="absolute inset-0 rounded-2xl border border-red-300/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Stronger top accent line */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-ivory-400/70 via-red-500/90 to-ivory-400/70" />

      {/* Stronger dynamic cursor glow effect */}
      <div
        className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          left: mousePosition.x - 120,
          top: mousePosition.y - 120,
          width: "240px",
          height: "240px",
          background:
            "radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, rgba(239, 68, 68, 0.25) 30%, rgba(255, 255, 255, 0.15) 50%, rgba(229, 229, 229, 0.1) 70%, transparent 90%)",
          borderRadius: "50%",
          filter: "blur(20px)",
        }}
      />

      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full shadow-sm" />
            <CardTitle className="text-gray-900 text-2xl font-bold">Recent Activity</CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border border-white/50 hover:border-red-300 text-gray-800 hover:text-red-700 rounded-xl bg-transparent backdrop-blur-sm px-4 py-2 group/btn relative overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-ivory-50/60 to-white/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-50/60 to-ivory-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            <span className="relative z-10">View all</span>
          </Button>
        </div>
        <p className="text-gray-700 text-base ml-7">Your latest resume activities</p>
      </CardHeader>
      <CardContent className="space-y-4 relative z-10 pb-6">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <div key={activity.id} className="relative">
              {/* Stronger timeline line */}
              {index < activities.length - 1 && (
                <div className="absolute left-6 top-16 w-px h-16 bg-gradient-to-b from-red-400/90 via-ivory-500/70 to-red-400/90 shadow-sm" />
              )}

              <div className="flex items-start space-x-4 p-5 rounded-xl backdrop-blur-xl transition-all duration-200 border-2 border-ivory-300/60 hover:border-red-400/80 group/item relative overflow-hidden hover:scale-[1.01] cursor-pointer mb-4 shadow-sm hover:shadow-lg">
                {/* Multi-layered item background with better contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-ivory-100/95" />
                <div className="absolute inset-0 bg-gradient-to-tr from-ivory-50/70 via-transparent to-red-50/40" />
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/60 to-ivory-100/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />

                {/* Stronger left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-ivory-400/70 via-red-500/90 to-ivory-400/70 opacity-90 group-hover/item:opacity-100 transition-opacity" />

                {/* Stronger item hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-ivory-400/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />

                <div className="w-14 h-14 rounded-2xl backdrop-blur-2xl border-2 border-ivory-300/60 group-hover/item:border-red-400/80 flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-all duration-200 relative z-10 shadow-lg overflow-hidden">
                  {/* Multi-layered icon background with better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-ivory-100/85 to-ivory-200/90" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ivory-50/70 via-transparent to-red-50/40" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/60 to-ivory-100/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />

                  <activity.icon className="h-7 w-7 text-gray-700 group-hover/item:text-red-600 relative z-10 transition-colors duration-300" />
                </div>

                <div className="flex-1 min-w-0 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 truncate text-lg">{activity.title}</h3>
                    <div className="flex items-center space-x-2">
                      {activity.status === "completed" ? (
                        <CheckCircle className="h-4 w-4 text-red-600" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-600" />
                      )}
                      <Badge className="backdrop-blur-sm text-gray-800 border border-white/50 px-2 py-1 text-xs relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-ivory-100/90 via-ivory-50/70 to-white/80" />
                        <span className="relative z-10">{activity.status}</span>
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-2 font-medium">{activity.action}</p>
                  <div className="flex items-center text-xs text-red-600 font-medium">
                    <Clock className="h-3 w-3 mr-1" />
                    {activity.time}
                  </div>
                </div>

                {/* Stronger top accent line for each item */}
                <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-ivory-400/60 via-red-300/90 to-ivory-400/60 opacity-0 group-hover/item:opacity-100 transition-opacity" />
              </div>
              {index < activities.length - 1 && (
                <div className="my-3 mx-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-ivory-400/50 to-transparent" />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto w-20 h-20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 border-2 border-ivory-300/60 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-ivory-100/85 to-ivory-200/90" />
              <FileText className="h-10 w-10 text-gray-700 relative z-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No recent activity</h3>
            <p className="text-gray-700 mb-6 max-w-sm mx-auto text-base">
              Upload your first resume to get started and see your activity here
            </p>
            <Button className="font-semibold rounded-2xl px-8 py-3.5 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border-2 border-red-600/40 hover:border-red-500/60 relative overflow-hidden group/btn cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-700/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/50 via-transparent to-red-400/50 opacity-0 group-hover/btn:opacity-100 transition-opacity" />

              <Plus className="h-5 w-5 mr-2 relative z-10 text-white" />
              <span className="relative z-10 text-white font-bold">Upload Resume</span>
            </Button>
          </div>
        )}
      </CardContent>

      {/* Stronger bottom accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-ivory-400/70 via-red-400/90 to-ivory-400/70 opacity-90" />
    </Card>
  )
}
