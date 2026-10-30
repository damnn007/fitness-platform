"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dumbbell, ArrowRight, Lock, Mail, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Demo dummy login verification
    if (formData.email === "testuser@fitness.com" && formData.password === "Fitness@123") {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials! Try: testuser@fitness.com / Fitness@123");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12 bg-neutral-950">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-full bg-emerald-950/70 border border-emerald-800 text-emerald-400 mb-3">
            <Dumbbell className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black">Welcome Back</h2>
          <p className="text-sm text-neutral-400 mt-1">Access your courses and live tutorials</p>
        </div>

        <div className="mb-6 p-3 bg-neutral-950/80 border border-neutral-800 rounded-xl text-xs text-neutral-400 space-y-1">
          <p className="font-semibold text-emerald-400">Demo Login Details:</p>
          <p>Email: <span className="text-white font-mono">testuser@fitness.com</span></p>
          <p>Password: <span className="text-white font-mono">Fitness@123</span></p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-950/50 border border-red-800/80 text-red-300 rounded-xl text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-neutral-300 block mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                placeholder="testuser@fitness.com"
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
            Sign In
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-xs text-center text-neutral-400 mt-6">
          New here?{" "}
          <Link href="/register" className="text-emerald-400 font-semibold hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}