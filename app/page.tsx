import HeroSlider from "@/components/HeroSlider";
import CourseCard from "@/components/CourseCard";
import { Trophy, Video, Users, Flame } from "lucide-react";

export default function Home() {
  const COURSES = [
    {
      title: "Lean Bulk & Muscle Architecture",
      level: "Intermediate",
      price: "₹2,499",
      duration: "12 Weeks",
      features: [
        "Full hyper-growth workout split",
        "Step-by-step video exercise library",
        "Macros & clean bulking meal plan",
        "1-on-1 monthly form review call",
      ],
    },
    {
      title: "Fat Shred & Athletic Conditioning",
      level: "All Levels",
      price: "₹1,999",
      duration: "8 Weeks",
      features: [
        "Metabolic conditioning routines",
        "Calorie deficit nutrition protocols",
        "Weekly progress tracking system",
        "Direct coach Q&A chat access",
      ],
    },
    {
      title: "Elite 1-on-1 Live Mentorship",
      level: "Advanced",
      price: "₹5,999",
      duration: "Monthly",
      features: [
        "Weekly 45-min live video tutorial",
        "Completely custom periodized plan",
        "Daily WhatsApp / direct support",
        "Form correction in real-time",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 1. Moving Hero Slider */}
      <HeroSlider />

      {/* 2. Fitness Journey & Milestones */}
      <section id="journey" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-2">
            Proof of Work
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black">MY FITNESS JOURNEY</h3>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Years of discipline, trial, and error turned into step-by-step systems so you get results without wasting time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl text-center">
            <Trophy className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <div className="text-3xl font-extrabold text-white">5+</div>
            <div className="text-sm text-neutral-400 mt-1">Years Training</div>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl text-center">
            <Flame className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <div className="text-3xl font-extrabold text-white">100+</div>
            <div className="text-sm text-neutral-400 mt-1">Clients Coached</div>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl text-center">
            <Video className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <div className="text-3xl font-extrabold text-white">50+</div>
            <div className="text-sm text-neutral-400 mt-1">Video Tutorials</div>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl text-center">
            <Users className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <div className="text-3xl font-extrabold text-white">1-on-1</div>
            <div className="text-sm text-neutral-400 mt-1">Live Coaching</div>
          </div>
        </div>
      </section>

      {/* 3. Featured Courses */}
      <section id="courses" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-2">
            Available Programs
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black">CHOOSE YOUR PATH</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
            <CourseCard id={""} key={idx} {...course} />
          ))}
        </div>
      </section>
    </main>
  );
}
