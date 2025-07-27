"use client"

import { TrendingUp, FileText, Sparkles, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Total Resumes",
    value: "12",
    change: "+2 this month",
    icon: FileText,
    gradient: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
  },
  {
    title: "AI Enhancements",
    value: "8",
    change: "+4 this week",
    icon: Sparkles,
    gradient: "from-electric-500/20 to-electric-600/10",
    iconColor: "text-electric-400",
  },
  {
    title: "Downloads",
    value: "24",
    change: "+6 this week",
    icon: Download,
    gradient: "from-purple-500/20 to-purple-600/10",
    iconColor: "text-purple-400",
  },
  {
    title: "Success Rate",
    value: "94%",
    change: "+2% this month",
    icon: TrendingUp,
    gradient: "from-orange-500/20 to-orange-600/10",
    iconColor: "text-orange-400",
  },
]

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl shadow-glass hover:shadow-glass-lg hover:scale-105 group"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} backdrop-blur-sm border border-white/10`}
              >
                <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
              <div className="h-2 w-2 rounded-full bg-electric-500 animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/70 mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-xs text-electric-400 font-medium">{stat.change}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
