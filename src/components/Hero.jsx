import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-indigo-100 px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-bold bg-white text-indigo-600 rounded-sm">
            TRADE WITH CONFIDENCE ON FXElite
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 leading-tight mb-6">
            Online Trading with FXElite Platform
          </h1>

          <p className="text-lg max-w-xl mb-8">
            FXElite Limited, certified by The Registrar of Companies for England
            and Wales (Company No. 16672163), offers a trusted platform for
            trading Forex, Crypto, Commodities, and Stocks.
          </p>

          {/* EMAIL CTA */}
          <div className="flex flex-col sm:flex-row max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 rounded-sm border text-black border-gray-300 bg-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center gap-2">
              Get Started
            </button>
          </div>

          {/* PAYMENT METHODS */}
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
            <span>Trade With:</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-5"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-4"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-5"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative h-full">
          <img
            src={assets.fxcgo2}
            alt="Trading Expert"
            className="absolute top-50 left-50 "
          />

          {/* App Screenshot (Floating) */}

          <img
            src={assets.fxcgo1}
            alt="App UI"
            className="absolute top-0 left-0"
          />

          {/* APP STORE LINKS */}
          <div className="absolute top-6 right-0 flex flex-col gap-3">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
