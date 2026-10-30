"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Video, BookOpen, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-black text-xl tracking-wider text-white">
          <Dumbbell className="w-6 h-6 text-emerald-400" />
          <span>
            FINISHER<span className="text-emerald-400">FIT</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-neutral-300">
          <Link href="/#courses" className="hover:text-emerald-400 transition flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> Courses
          </Link>
          <Link href="/#coaching" className="hover:text-emerald-400 transition flex items-center gap-1.5">
            <Video className="w-4 h-4" /> 1-on-1 Calls
          </Link>
          <Link href="/#journey" className="hover:text-emerald-400 transition">
            My Journey
          </Link>
          <Link
            href="/call?room=finisher-coaching"
            className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500 hover:text-black transition flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Video className="w-3.5 h-3.5" />
            Join Live Call
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-semibold text-neutral-300 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl transition"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden 