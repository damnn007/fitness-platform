"use client";

import Link from "next/link";
import { Dumbbell, User, Video, BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-black text-xl tracking-wider text-white">
          <Dumbbell className="w-6 h-6 text-emerald-400" />
          <span>FINISHER<span className="text-emerald-400">FIT</span></span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-300">
          <Link href="/#courses" className="hover:text-emerald-400 transition flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> Courses
          </Link>
          <Link href="/#coaching" className="hover:text-emerald-400 transition flex items-center gap-1.5">
            <Video className="w-4 h-4" /> 1-on-1 Calls
          </Link>
          <Link href="/about" className="hover:text-emerald-400 transition">
            My Journey
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-semibold text-neutral-300 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-black rounded-lg transition"
          >
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}