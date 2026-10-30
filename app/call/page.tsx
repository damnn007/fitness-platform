"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Video, Mic, ShieldAlert, Sparkles } from "lucide-react";

function VideoRoom() {
  const searchParams = useSearchParams();
  const roomName = searchParams.get("room") || "finisher-coaching-room";
  const [micCheck, setMicCheck] = useState(true);

  // Free, high-speed encrypted WebRTC room
  const jitsiUrl = `https://meet.jit.si/${encodeURIComponent(
    roomName
  )}#config.startWithAudioMuted=false&config.prejoinPageEnabled=false&config.disableDeepLinking=true`;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Bar */}
      <header className="px-6 py-4 border-b border-neutral-800 bg-neutral-950 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Leave Call & Return
        </Link>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-800 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Session Active
          </span>
          <span className="hidden sm:inline text-xs text-neutral-400 font-mono">
            Room: {roomName}
          </span>
        </div>
      </header>

      {/* Main Video Call Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 flex flex-col gap-4">
        <div className="w-full flex-1 min-h-[640px] bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative">
          <iframe
            src={jitsiUrl}
            allow="camera; microphone; fullscreen; display-capture; autoplay"
            className="w-full h-full min-h-[640px] border-none"
            title="1-on-1 Fitness Mentorship Call"
          />
        </div>

        {/* Quick Coach Notes / Tips Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-neutral-400">
          <div className="p-3.5 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center gap-3">
            <Video className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Position your camera sideways so your full form & spine angle are visible.</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center gap-3">
            <Mic className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Wireless earbuds or headphones recommended to eliminate gym background echo.</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Have a notebook or workout log ready for tempo & weight progression tweaks.</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function CallPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-neutral-400 text-sm">
          Preparing your encrypted coaching room...
        </div>
      }
    >
      <VideoRoom />
    </Suspense>
  );
}