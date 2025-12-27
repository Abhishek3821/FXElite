import React from "react";
import { Play } from "lucide-react";

const WhyTradeFXExlite = () => {
  return (
    <section className="w-full bg-[#f4f6fb] py-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= CARD ================= */}
        <div
          className="relative overflow-hidden rounded-md px-10 py-16 md:px-16 md:py-20
          bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-800"
        >
          {/* Soft light streaks */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-24 right-0 h-[400px] w-[600px] rotate-12 bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-[300px] w-[500px] -rotate-12 bg-pink-400/20 blur-3xl" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div className="space-y-6 text-white">
              <span className="inline-block rounded-md bg-white/20 px-4 py-1 text-sm font-semibold">
                TECHNOLOGY
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Why trade with <br /> FXElite?
              </h2>

              <p className="max-w-xl text-white/90 leading-relaxed">
                FXElite Limited offers a trusted platform for trading Forex,
                Crypto, Commodities, and Stocks, with real-time data and
                cutting-edge tools. Our commitment to transparency and
                excellence empowers traders to succeed in global markets.
              </p>

              <button className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-4 font-semibold text-indigo-600 hover:bg-gray-100 transition">
                Explore PayCoin Market ↗
              </button>
            </div>

            {/* ================= PLAY BUTTON ================= */}
            <div className="flex justify-center lg:justify-end">
              <button
                className="flex h-24 w-24 items-center justify-center rounded-full
                bg-indigo-500/90 text-white shadow-xl hover:scale-105 transition"
                aria-label="Play Video"
              >
                <Play size={36} fill="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTradeFXExlite;
