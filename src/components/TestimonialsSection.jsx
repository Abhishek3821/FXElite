import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";

const testimonials = [
  {
    quote:
      "The user-friendly interface and fast execution on FXElite make trading a breeze, even for beginners.",
    name: "Marvin McKinney",
    role: "Professional Trader",
    avatar: assets.fx10,
  },
  {
    quote:
      "FXElite provides excellent tools and real-time insights that help me trade confidently every day.",
    name: "Alesay Healy",
    role: "Crypto Analyst",
    avatar: assets.fx8,
  },
  {
    quote:
      "Reliable execution, smooth UI, and top-notch support. FXElite stands out among trading platforms.",
    name: "Rosie Rempel",
    role: "Forex Trader",
    avatar: assets.fx9,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { quote, name, role, avatar } = testimonials[current];

  return (
    <section className="w-full bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Feedback from Our Traders
          </h2>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* ================= LEFT SLIDER CARD ================= */}
          <div className="relative bg-[#f4f6ff] rounded-2xl p-10 shadow-md max-w-xl transition-all duration-300">
            {/* Quote */}
            <p className="text-gray-800 text-lg leading-relaxed mb-8">
              “{quote}”
            </p>

            {/* User */}
            <div className="flex items-center gap-4">
              <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            </div>
            {/* Navigation Buttons */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* ================= RIGHT PLACEHOLDER ================= */}
          <div className="hidden lg:flex justify-center items-center text-gray-400">
            <img src={assets.fx12} alt="" className="scale-125" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
