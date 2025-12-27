import React from "react";
import { assets } from "../assets/assets";

const EconomicCalenderBanner = () => {
  return (
    <section className="relative w-full bg-[#f5f6ff] overflow-hidden py-24">
      {/* ================= DECORATIVE FLOATING COINS ================= */}
      <img
        src={assets.fx2}
        alt="Floating crypto path"
        className="absolute top-1 right-75 pointer-events-none select-none"
      />

      {/* ================= WRAPPER ================= */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Economic Calendar
          </h2>

          <p className="text-lg leading-relaxed max-w-xl">
            Stay informed with live economic events impacting Forex markets on
            the FXElite platform, your trusted solution for trading.
          </p>

          {/* EMAIL INPUT */}
          <div className="flex max-w-lg bg-white rounded-sm overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-5 py-4 outline-none text-gray-700"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold px-6 flex items-center gap-2">
              Get Started
              <span className="text-xl">↗</span>
            </button>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center">
          <img src={assets.fx1} alt="Trading App" className="" />
        </div>
      </div>
    </section>
  );
};

export default EconomicCalenderBanner;
