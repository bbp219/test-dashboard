"use client"

import { DashboardHeader } from "./components/dashboard-header"
import { WelcomeBanner } from "./components/welcome-banner"
import { ActionGrid } from "./components/action-grid"
import { ActivityTimeline } from "./components/activity-timeline"

export default function Dashboard() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced multi-layered background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory-50 via-white to-ivory-100" />
      <div className="absolute inset-0 bg-gradient-to-tr from-red-50/30 via-transparent to-ivory-200/40" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/50 to-red-50/20" />

      {/* Enhanced ambient background effects with sophisticated gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-60">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/8 via-red-400/6 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-ivory-400/10 via-transparent to-red-300/4" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-bl from-ivory-500/8 via-ivory-400/6 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tl from-red-400/6 via-transparent to-ivory-300/4" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse delay-2000 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/6 via-red-500/4 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-ivory-600/8 via-transparent to-red-400/3" />
        </div>
      </div>

      <DashboardHeader />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-12 space-y-12">
        {/* Welcome Section */}
        <WelcomeBanner />

        {/* Enhanced section separator with sophisticated gradients */}
        <div className="relative w-full h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ivory-400/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory-300/40 via-red-300/80 to-ivory-300/40" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        {/* Quick Actions */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-1 h-6 rounded-full mr-3 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-600" />
              <div className="absolute inset-0 bg-gradient-to-b from-red-400/50 to-transparent" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent">
              Quick Actions
            </h2>
            <div className="flex-1 ml-4 h-px relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/60 via-ivory-400/80 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-300/40 via-white/30 to-transparent" />
            </div>
          </div>
          <ActionGrid />
        </section>

        {/* Enhanced section separator with sophisticated gradients */}
        <div className="relative w-full h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ivory-400/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory-300/40 via-red-300/80 to-ivory-300/40" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        {/* Recent Activity */}
        <section>
          <div className="flex items-center mb-6">
            <div className="w-1 h-6 rounded-full mr-3 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-red-600" />
              <div className="absolute inset-0 bg-gradient-to-b from-red-400/50 to-transparent" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent">
              Activity Timeline
            </h2>
            <div className="flex-1 ml-4 h-px relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/60 via-ivory-400/80 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-300/40 via-white/30 to-transparent" />
            </div>
          </div>
          <ActivityTimeline />
        </section>
      </main>
    </div>
  )
}
