import React from "react";
import { assets } from "../assets/assets";

const LiveForexMarket = () => {
  return (
    <section className="relative w-full overflow-hidden bg-blue-100 py-28">
      {/* Soft background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-full w-full opacity-40 bg-[radial-gradient(circle_at_top_right,#e9ecff,transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Live Forex Market
            </h1>

            <p className="max-w-xl text-lg text-gray-600 leading-relaxed">
              Access real-time Forex trading data, top movers, economic events,
              and latest news on the FXElite platform.
            </p>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Curved line + coins */}
            <div className="absolute left-20 top-0 w-full h-full pointer-events-none">
              <svg viewBox="0 0 600 400" className="w-full h-full" fill="none">
                <path
                  d="M100 20 C300 80 200 250 420 300"
                  stroke="#6C63FF"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>

            {/* Chart Illustration */}
            <img
              src={assets.fxcgo17}
              alt="Forex Chart"
              className="relative z-10 w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveForexMarket;
