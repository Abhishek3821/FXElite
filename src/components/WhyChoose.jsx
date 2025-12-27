import React from "react";
import { ShieldCheck, Smartphone } from "lucide-react";

import fx3 from "../assets/fx3.png"; // Investor experience card
import fx4 from "../assets/fx4.png"; // BTC chart image
import fx5 from "../assets/fx5.png"; // Profile card

const WhyChoose = () => {
  return (
    <section className="w-full bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT VISUAL ================= */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Gradient Circle */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-400 to-indigo-200 opacity-80 -z-10" />

          {/* Top Card (Investor Experience) */}
          <img
            src={fx3}
            alt="Investor Experience"
            className="absolute top-0 left-24 w-64 shadow-xl rounded-xl"
          />

          {/* ================= BTC CARD (REDESIGNED) ================= */}
          <div className="absolute top-45 left-60 w-64">
            <div className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl shadow-2xl border border-white/40">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">
                    ₿
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    BTC / USD
                  </span>
                </div>
                <span className="text-xs text-green-500 font-medium">
                  ▲ 1.7%
                </span>
              </div>

              {/* Price */}
              <div className="px-4 pt-4">
                <p className="text-xl font-bold text-gray-900">$50,435.36</p>
                <p className="text-xs text-gray-500">Updated just now</p>
              </div>

              {/* Chart Image */}
              <div className="px-2 pb-2 mt-1">
                <img src={fx4} alt="BTC Chart" className="w-full rounded-lg" />
              </div>

              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-indigo-200/50 pointer-events-none" />
            </div>
          </div>

          {/* Bottom Profile Card */}
          <img
            src={fx5}
            alt="Investor Profile"
            className="relative mt-62 w-58 shadow-2xl rounded-2xl"
          />
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="space-y-10">
          {/* Badge */}
          <span className="inline-block bg-indigo-100 text-indigo-600 text-lg font-semibold px-4 py-1">
            WHY CHOOSE FXElite
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Your Trusted Partner in <br /> Multi-Asset Trading
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-xl">
            At FXElite, we provide a seamless and secure platform for trading
            Forex, Crypto, Commodities, and Stocks, designed for both beginners
            and experienced traders.
          </p>

          {/* Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-5 bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-lg text-indigo-600">
                <ShieldCheck />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Secure Trading</h4>
                <p className="text-sm text-gray-600">
                  Our platform leverages advanced technology to ensure fast,
                  secure, and reliable trading across all asset classes.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5 bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-lg text-indigo-600">
                <Smartphone />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Mobile And Web Access</h4>
                <p className="text-sm text-gray-600">
                  Trade anytime, anywhere with our intuitive mobile app and web
                  terminal, built for convenience and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
