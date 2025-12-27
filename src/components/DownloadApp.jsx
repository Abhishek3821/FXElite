import React from "react";
import { assets } from "../assets/assets";

const DownloadApp = () => {
  return (
    <section className="relative w-full bg-[#5B6CFF] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-white/20 text-white text-lg font-semibold px-4 py-1 rounded-md mb-6">
            MOBILE TRADING
          </span>

          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">
            Download FXElite App
          </h2>

          <p className="text-white text-lg leading-relaxed max-w-xl mb-10">
            Trade on the go with the FXElite mobile app, available on iOS and
            Android, offering seamless access to Forex, Crypto, Commodities, and
            Stocks.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4 flex-wrap">
            <img
              src={assets.fxcgo9}
              alt="App Store"
              className="h-14 cursor-pointer hover:scale-105 transition"
            />
            <img
              src={assets.fxcgo10}
              alt="Google Play"
              className="h-14 cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>

        {/* RIGHT IMAGE (ONLY ONE IMAGE) */}
        <div className="w-full">
          {/* Main App Image */}
          <img src={assets.fxcgo8} alt="FXElite App" className="scale-110" />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
