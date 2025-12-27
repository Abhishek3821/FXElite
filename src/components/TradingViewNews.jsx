import React, { useEffect, useRef } from "react";

const TradingViewNews = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Prevent duplicate script load
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      colorTheme: "light",
      isTransparent: false,
      displayMode: "regular",
      width: "100%",
      height: 600,
      locale: "en",
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-100 text-indigo-600 text-lg font-semibold px-4 py-1 mb-4">
            MARKET NEWS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest News & Analysis
          </h2>
        </div>

        {/* TradingView Widget */}
        <div ref={containerRef} className="overflow-hidden py-10" />
      </div>
    </section>
  );
};

export default TradingViewNews;
