import React from "react";

const TradingStatsSection = () => {
  return (
    <section className="relative w-full bg-[#f4f6ff] py-32 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#dfe3ff_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />

      {/* Floating icons (optional – remove if not needed) */}
      <span className="absolute top-24 left-32 text-xl">🪙</span>
      <span className="absolute top-40 right-40 text-xl">🪙</span>
      <span className="absolute bottom-72 left-1/4 text-xl">🪙</span>
      <span className="absolute bottom-28 right-1/3 text-xl">🪙</span>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-block mb-6 bg-indigo-100 text-indigo-600 text-lg font-semibold px-4 py-1">
          FXElite TRADING PLATFORM
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Trade Forex, Crypto, and More Securely
        </h2>

        {/* Stats Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-md shadow-xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
          {/* Stat 1 */}
          <div className="p-10">
            <p className="text-lg mb-2">Forex Trades</p>
            <h3 className="text-5xl font-bold text-gray-900">10B+</h3>
          </div>

          {/* Stat 2 */}
          <div className="p-10">
            <p className="text-lg mb-2">Asset Classes</p>
            <h3 className="text-5xl font-bold text-gray-900">4</h3>
          </div>

          {/* Stat 3 */}
          <div className="p-10">
            <p className="text-lg mb-2">Satisfied Traders</p>
            <h3 className="text-5xl font-bold text-gray-900">20M+</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingStatsSection;
