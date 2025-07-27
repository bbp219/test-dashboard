"use client"

import { Bell, ChevronDown, Home, FileText, Sparkles, User, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-3xl border-b border-white/30 shadow-lg relative overflow-hidden">
      {/* Multi-layered glass background with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/90 to-white/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-100/50 via-transparent to-ivory-200/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-50/30 via-transparent to-red-50/30" />

      {/* Glass reflection effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white/90 via-ivory-100/80 to-ivory-200/90 text-gray-800 font-bold text-base shadow-lg border border-white/50 backdrop-blur-xl relative overflow-hidden hover:scale-105 transition-transform duration-200">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 to-transparent" />
                <span className="relative z-10">RT</span>
              </div>
              <span className="font-semibold text-gray-900 text-lg">Resume Tailor</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-900 rounded-xl font-medium px-4 py-2 relative border border-white/40 backdrop-blur-xl overflow-hidden group hover:scale-105 transition-all duration-200"
                >
                  {/* Multi-layered glass background with better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100/80 via-red-50/60 to-white/80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 via-transparent to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-sm" />
                  <Home className="h-4 w-4 mr-2 relative z-10" />
                  <span className="relative z-10">Dashboard</span>
                </Button>
              </Link>
              <Link href="/resumes">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-gray-900 rounded-xl px-4 py-2 border border-white/30 hover:border-white/50 backdrop-blur-xl relative overflow-hidden group hover:scale-105 transition-all duration-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-ivory-50/40 to-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FileText className="h-4 w-4 mr-2 relative z-10" />
                  <span className="relative z-10">Resumes</span>
                </Button>
              </Link>
              <Link href="/enhancement">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-gray-900 rounded-xl px-4 py-2 border border-white/30 hover:border-white/50 backdrop-blur-xl relative overflow-hidden group hover:scale-105 transition-all duration-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-ivory-50/40 to-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Sparkles className="h-4 w-4 mr-2 relative z-10" />
                  <span className="relative z-10">Enhancement</span>
                </Button>
              </Link>
              <Link href="/profile">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-gray-900 rounded-xl px-4 py-2 border border-white/30 hover:border-white/50 backdrop-blur-xl relative overflow-hidden group hover:scale-105 transition-all duration-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-ivory-50/40 to-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <User className="h-4 w-4 mr-2 relative z-10" />
                  <span className="relative z-10">Profile</span>
                </Button>
              </Link>
            </nav>
          </div>

          {/* Search and User Menu */}
          <div className="flex items-center space-x-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600 z-10" />
              <Input
                placeholder="Search..."
                className="w-56 pl-10 text-gray-900 placeholder:text-gray-600 rounded-2xl backdrop-blur-xl h-10 border-2 border-ivory-300/60 hover:border-ivory-400/80 focus:border-red-400/80 relative overflow-hidden transition-all duration-200 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,245,245,0.8) 50%, rgba(255,255,255,0.85) 100%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-50/20 via-transparent to-red-50/20 rounded-xl pointer-events-none" />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-2xl h-10 w-10 border-2 border-ivory-300/60 hover:border-red-400/80 backdrop-blur-xl overflow-hidden group hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-ivory-50/60 to-white/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Bell className="h-4 w-4 text-gray-700 relative z-10" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white p-0 text-xs font-bold border border-white/60 shadow-lg">
                2
              </Badge>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 rounded-2xl px-4 py-2.5 border-2 border-ivory-300/60 hover:border-red-400/80 backdrop-blur-xl relative overflow-hidden group hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-ivory-50/60 to-white/80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-white/90 via-ivory-100/80 to-ivory-200/90 flex items-center justify-center shadow-lg border border-white/50 backdrop-blur-xl relative z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent" />
                    <span className="text-xs font-bold text-gray-800 relative z-10">BP</span>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-900 relative z-10">Ben Powell</span>
                  <ChevronDown className="h-4 w-4 text-gray-700 relative z-10" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 backdrop-blur-3xl text-gray-900 shadow-2xl border border-white/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-ivory-50/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-ivory-100/50 to-transparent" />
                <div className="relative z-10">
                  <DropdownMenuLabel className="text-gray-900 border-b border-white/40 font-semibold">
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <DropdownMenuItem className="hover:bg-white/60 text-gray-800 focus:bg-white/60 relative cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-ivory-50/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">Profile Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/60 text-gray-800 focus:bg-white/60 relative cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-ivory-50/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-white/60 text-gray-800 focus:bg-white/60 relative cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-ivory-50/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <DropdownMenuItem className="hover:bg-red-50/80 text-red-700 focus:bg-red-50/80 relative cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">Sign out</span>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
