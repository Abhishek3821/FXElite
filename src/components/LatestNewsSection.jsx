import React from "react";
import { assets } from "../assets/assets";

const LatestNewsSection = () => {
  return (
    <section className="relative w-full bg-[#f4f6ff] py-18 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-20 right-40 w-24 h-24 rounded-full bg-indigo-100" />
        <div className="absolute bottom-32 right-24 w-16 h-16 bg-indigo-100 rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest News
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Stay updated with the latest market news, analysis, and insights on
            Forex, Crypto, Commodities, and Stocks from the FXElite platform.
          </p>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Crypto path */}
          <img
            src={assets.fx2}
            alt="Crypto path"
            className="absolute top-0 right-55 w-[420px] md:w-[580px]"
          />

          {/* Robot */}
          <img
            src={assets.fx13}
            alt="FXElite Robot"
            className="relative left-10 w-[360px] md:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
