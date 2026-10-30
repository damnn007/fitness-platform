"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SLIDES = [
  {
    title: "TRANSFORM YOUR BODY",
    subtitle: "Science-backed workout plans, custom nutrition splits, and measurable results.",
    cta: "Explore Courses",
    link: "#courses",
    badge: "FEATURED PROGRAM",
  },
  {
    title: "1-ON-1 LIVE COACHING",
    subtitle: "Book live video tutorials directly with me to fix technique and optimize training.",
    cta: "Book a Session",
    link: "#coaching",
    badge: "PERSONAL TUTORIALS",
  },
  {
    title: "MY FITNESS JOURNEY",
    subtitle: "Discipline, milestones, PRs, and real transformation. See the blueprint.",
    cta: "Read My Story",
    link: "#journey",
    badge: "ABOUT THE COACH",
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full h-[520px] relative bg-neutral-950">
     <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {SLIDES.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white">
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/50 px-3.5 py-1 rounded-full mb-4">
                {slide.badge}
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase max-w-3xl">
                {slide.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl">
                {slide.subtitle}
              </p>
              <a
                href={slide.link}
                className="mt-8 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-wider transition duration-200"
              >
                {slide.cta}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}