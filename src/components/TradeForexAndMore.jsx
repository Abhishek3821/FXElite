import React from "react";

const TradeForexAndMore = () => {
  return (
    <section className="relative w-full bg-[#5B6CFF] overflow-hidden">
      {/* Background pattern (subtle shapes) */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white" />
        <div className="absolute bottom-16 right-24 w-32 h-32 rounded-full bg-white" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rotate-45 bg-white" />
        <div className="absolute bottom-10 left-1/3 w-20 h-20 rounded-lg bg-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-white/20 text-white text-sm font-semibold px-5 py-2 rounded-lg backdrop-blur">
            TRADE FOREX AND MORE
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
          The Simple Way to Trade Assets
        </h1>
      </div>
    </section>
  );
};

export default TradeForexAndMore;
