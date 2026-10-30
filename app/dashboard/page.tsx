"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Video, 
  Send, 
  Bot, 
  User, 
  Flame, 
  Trophy, 
  Calendar, 
  Sparkles, 
  Activity, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function DashboardPage() {
  // AI Fitness Chat State
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey athlete! I'm your Finisher AI Coach. Ask me about workout splits, macros, recovery tips, or form adjustments.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Realistic smart fitness response simulator
    setTimeout(() => {
      let reply = "Stay consistent! Ensure you hit progressive overload on your compound lifts and maintain a slight calorie surplus if your goal is lean hypertrophy.";
      const lower = userMessage.content.toLowerCase();

      if (lower.includes("diet") || lower.includes("protein") || lower.includes("food")) {
        reply = "Aim for 1.6g to 2.2g of protein per kg of bodyweight. Prioritize whole sources like eggs, chicken breast, paneer, tofu, lentils, and whey.";
      } else if (lower.includes("fat") || lower.includes("cut") || lower.includes("weight loss")) {
        reply = "A sustainable deficit is 300–500 kcal below maintenance with 8k–10k daily steps to preserve lean muscle tissue while stripping fat.";
      } else if (lower.includes("call") || lower.includes("coach") || lower.includes("session")) {
        reply = "You can tap 'Enter 1-on-1 Call Room' above to start your live video session directly with Coach Yuvraj!";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 max-w-7xl mx-auto space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-900 pb-6">
        <div>
          <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest bg-emerald-950/60 border border-emerald-800/80 px-3 py-1 rounded-full">
            Active Member Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mt-3">Welcome Back, Athlete</h1>
          <p className="text-neutral-400 text-sm mt-1">Here is your daily training overview and coaching hub.</p>
        </div>

        {/* Video Call Quick Launcher */}
        <Link
          href="/call?room=member-coaching-room"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm transition shadow-lg shadow-emerald-500/10 cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
          <Video className="w-4 h-4" />
          Launch 1-on-1 Live Room
        </Link>
      </div>

      {/* SECTION 1: Progress Metrics */}
      <div>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-neutral-200">
          <Activity className="w-5 h-5 text-emerald-400" />
          Your Transformation Progress
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400 text-xs">
              <span>Program Completion</span>
              <Trophy className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="mt-4">
              <div className="text-2xl font-black">68%</div>
              <div className="w-full bg-neutral-800 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[68%]" />
              </div>
              <p className="text-[11px] text-neutral-500 mt-2">Week 8 of 12 completed</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400 text-xs">
              <span>Workouts Logged</span>
              <Flame className="w-4 h-4 text-orange-400" />
            </div>
            <div className="mt-4">
              <div className="text-2xl font-black">24 Sessions</div>
              <p className="text-[11px] text-emerald-400 mt-2 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 4 sessions this week
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400 text-xs">
              <span>Nutrition Streak</span>
              <Calendar className="w-4 h-4 text-blue-400" />
            </div>
            <div className="mt-4">
              <div className="text-2xl font-black">18 Days</div>
              <p className="text-[11px] text-neutral-500 mt-2">Met 160g protein target</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-400 text-xs">
              <span>Next Check-in</span>
              <Video className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="mt-4">
              <div className="text-2xl font-black text-emerald-400">Tomorrow</div>
              <p className="text-[11px] text-neutral-500 mt-2">Form review & progression</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Split Layout (Video Call Overview + AI Coach Chat) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Live Call Banner & Schedule */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-neutral-950 border border-emerald-900/40 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Video className="w-4 h-4" />
              Private Coaching Call
            </div>
            <h3 className="text-xl font-bold">1-on-1 Video Room Ready</h3>
            <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
              Launch into your high-definition encrypted session to review your compound lift execution, bio-mechanics, and weekly diet adjustments.
            </p>

            <Link
              href="/call?room=member-coaching-room"
              className="mt-6 w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition"
            >
              Enter Video Call
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            </Link>
          </div>

          {/* Quick Workout Reminder */}
          <div className="p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800">
            <h4 className="font-bold text-sm text-neutral-200">Today&apos;s Focus: Upper Body Push</h4>
            <div className="mt-3 space-y-2 text-xs text-neutral-400">
              <div className="flex justify-between py-1.5 border-b border-neutral-800/80">
                <span>Incline Barbell Bench</span>
                <span className="font-mono text-white">4 sets x 6–8 reps</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-neutral-800/80">
                <span>Weighted Dips / Pushups</span>
                <span className="font-mono text-white">3 sets x 10–12 reps</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span>Standing DB Lateral Raises</span>
                <span className="font-mono text-white">4 sets x 15 reps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: In-Browser AI Chat Box */}
        <div className="lg:col-span-7 flex flex-col h-[520px] rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl">
          {/* Chat Header */}
          <div className="p-4 bg-neutral-900/60 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Finisher AI Coach</h3>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Instant Form & Nutrition Answers
                </p>
              </div>
            </div>
            <span className="text-[10px] text-neutral-500 font-mono bg-neutral-900 px-2 py-1 rounded-md border border-neutral-800">
              v1.0 Assistant
            </span>
          </div>

          {/* Chat Message Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 max-w-[85%] ${
                  m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                    m.role === "user"
                      ? "bg-emerald-500 text-black font-bold"
                      : "bg-neutral-800 text-emerald-400"
                  }`}
                >
                  {m.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed ${
                    m.role === "user"
                      ? "bg-emerald-500 text-black font-medium rounded-tr-none"
                      : "bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-tl-none"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 pl-9">
                <Sparkles className="w-3 h-3 text-emerald-400 animate-spin" />
                <span>Coach AI is calculating...</span>
              </div>
            )}
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-neutral-900/40 border-t border-neutral-800 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about your workout, macros, or recovery..."
              className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition"
            />
            <button
              onClick={handleSend}
              className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black transition cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}