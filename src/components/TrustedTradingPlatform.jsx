import React from "react";
import { Globe, Wallet, Rocket } from "lucide-react";
import { assets } from "../assets/assets";

const TrustedTradingPlatform = () => {
  return (
    <section className="w-full bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            We’ve Built a Platform to <br />
            Trade Forex, Crypto, and More
          </h2>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* ================= LEFT FEATURES ================= */}
          <div className="space-y-14">
            {/* Feature 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <Globe />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Seamless Trading</h4>
                <p className="text-gray-600 max-w-md">
                  FXElite offers an intuitive platform designed to simplify
                  trading across Forex, Crypto, Commodities, and Stocks.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <Wallet />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Easy to Manage</h4>
                <p className="text-gray-600 max-w-md">
                  Our platform empowers traders with tools to manage diverse
                  assets efficiently and securely.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <Rocket />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Quick Setup</h4>
                <p className="text-gray-600 max-w-md">
                  Get started with FXElite in minutes with our streamlined
                  account creation process.
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center">
            {/* Gradient Circle */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-400 to-indigo-200 opacity-80 -z-10" />

            <img
              src={assets.fx7}
              alt="Trading Dashboard"
              className="w-full max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedTradingPlatform;
