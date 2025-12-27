import React from "react";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import TradingStatsSection from "../components/TradingStatsSection";
import MarketUpdateTable from "../components/MarketUpdateTable";
import TradeForexAndMore from "../components/TradeForexAndMore";
import PlatformFeatures from "../components/PlatformFeatures";
import HowItWorks from "../components/HowItWorks";
import DownloadApp from "../components/DownloadApp";
import TestimonialsSection from "../components/TestimonialsSection";
import ForexNewsEvents from "../components/ForexNewsEvents";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <TradingStatsSection />
      <MarketUpdateTable />
      <TradeForexAndMore />
      <PlatformFeatures />
      <HowItWorks />
      <DownloadApp />
      <TestimonialsSection />
      <ForexNewsEvents />
    </div>
  );
};

export default Homepage;
