"use client"

import { FileText, Clock, MoreHorizontal, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    title: "Software Engineer Resume",
    action: "Enhanced with AI",
    time: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    title: "Marketing Manager Resume",
    action: "Uploaded",
    time: "1 day ago",
    status: "pending",
  },
  {
    id: 3,
    title: "Data Analyst Resume",
    action: "Downloaded",
    time: "3 days ago",
    status: "completed",
  },
]

export function RecentActivity() {
  return (
    <Card className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-float hover:shadow-float-lg transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white text-xl">Recent Activity</CardTitle>
          <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10 rounded-xl">
            View all
          </Button>
        </div>
        <p className="text-white/60">Your latest resume activities</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/5 hover:border-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/20 border border-electric-500/30 backdrop-blur-sm">
                  <FileText className="h-6 w-6 text-electric-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{activity.title}</p>
                  <div className="flex items-center space-x-2 text-sm text-white/60">
                    <span>{activity.action}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge
                  variant={activity.status === "completed" ? "default" : "secondary"}
                  className={
                    activity.status === "completed"
                      ? "bg-electric-500/20 text-electric-400 hover:bg-electric-500/30 border-electric-500/30"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }
                >
                  {activity.status}
                </Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10 rounded-lg">
                  <MoreHorizontal className="h-4 w-4 text-white/60" />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto h-16 w-16 rounded-2xl bg-electric-500/20 flex items-center justify-center mb-6 backdrop-blur-sm border border-electric-500/30">
              <FileText className="h-8 w-8 text-electric-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">No recent activity</h3>
            <p className="text-white/60 mb-6 max-w-sm mx-auto">
              Upload your first resume to get started and see your activity here
            </p>
            <Button className="bg-electric-500 text-black hover:bg-electric-400 font-semibold rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              <Plus className="h-4 w-4 mr-2" />
              Upload Resume
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
