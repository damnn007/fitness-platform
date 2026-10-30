import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 bg-black text-neutral-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400">
            <Dumbbell className="w-5 h-5" />
          </div>
          <span className="font-black text-white tracking-wider">FINISHER FIT</span>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link href="#courses" className="hover:text-emerald-400 transition">Programs</Link>
          <Link href="#journey" className="hover:text-emerald-400 transition">Story</Link>
          <Link href="/login" className="hover:text-emerald-400 transition">Login</Link>
        </div>

        <p className="text-xs text-neutral-600">
          © 2026 Finisher Fit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}