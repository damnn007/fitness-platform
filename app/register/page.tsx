"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dumbbell, ArrowRight, Lock, Mail, User } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("user_profile", JSON.stringify({ name: formData.name, email: formData.email }));
    }
    router.push("/dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12 bg-neutral-950">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-full bg-emerald-950/70 border border-emerald-800 text-emerald-400 mb-3">
            <Dumbbell className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black">Create Your Account</h2>
          <p className="text-sm text-neutral-400 mt-1">Start your transformation today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-neutral-300 block mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-neutral-300 block mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-neutral-300 block mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
          >
            Register Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-xs text-center text-neutral-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-emerald-400 font-semibold hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}