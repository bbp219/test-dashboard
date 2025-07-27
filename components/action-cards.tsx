"use client"

import { Upload, FileText, Sparkles, User, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const actions = [
  {
    title: "Upload Resume",
    description: "Upload a new resume to get started",
    icon: Upload,
    gradient: "from-blue-500/20 to-blue-600/10",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    href: "/upload",
  },
  {
    title: "My Resumes",
    description: "View and manage your uploaded resumes",
    icon: FileText,
    gradient: "from-purple-500/20 to-purple-600/10",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    href: "/resumes",
  },
  {
    title: "AI Enhancement",
    description: "Enhance your resume with AI",
    icon: Sparkles,
    gradient: "from-electric-500/20 to-electric-600/10",
    iconBg: "bg-electric-500/20",
    iconColor: "text-electric-400",
    href: "/enhancement",
  },
  {
    title: "Profile Settings",
    description: "Manage your account settings",
    icon: User,
    gradient: "from-orange-500/20 to-orange-600/10",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
    href: "/profile",
  },
]

export function ActionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {actions.map((action) => (
        <Card
          key={action.title}
          className="group cursor-pointer bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all duration-300 rounded-2xl shadow-glass hover:shadow-glass-lg hover:scale-105"
        >
          <CardContent className="p-6">
            <div
              className={`bg-gradient-to-br ${action.gradient} backdrop-blur-sm rounded-2xl p-8 mb-6 relative overflow-hidden`}
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${action.iconBg} backdrop-blur-sm border border-white/10`}
              >
                <action.icon className={`h-6 w-6 ${action.iconColor}`} />
              </div>
              <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/5 blur-sm" />
            </div>

            <h3 className="font-semibold text-white mb-2 text-lg">{action.title}</h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">{action.description}</p>

            <Button
              variant="ghost"
              size="sm"
              className="p-0 h-auto text-white/80 hover:text-electric-400 group-hover:translate-x-1 transition-all duration-200 font-medium"
            >
              Get started
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
