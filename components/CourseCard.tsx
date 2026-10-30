"use client";

import { CheckCircle2, PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface CourseProps {
  id: string;
  title: string;
  level: string;
  price: string;
  duration: string;
  features: string[];
}

export default function CourseCard({ id, title, level, price, duration, features }: CourseProps) {
  const router = useRouter();

  const handleEnroll = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selected_course", JSON.stringify({ id, title, price, duration }));
    }
    router.push("/checkout");
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition duration-300">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold px-3 py-1 bg-neutral-800 text-emerald-400 rounded-full border border-neutral-700">
            {level}
          </span>
          <span className="text-sm text-neutral-400">{duration}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="text-3xl font-black text-white mb-6">
          {price} <span className="text-sm font-normal text-neutral-400">/ one-time</span>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={handleEnroll}
        className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition flex items-center justify-center gap-2 cursor-pointer"
      >
        <PlayCircle className="w-5 h-5" />
        Enroll Now
      </button>
    </div>
  );
}