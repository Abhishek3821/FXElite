import React from "react";
import AboutSection from "../components/AboutSection";
import WhyChoose from "../components/WhyChoose";
import TradingStatsSection from "../components/TradingStatsSection";
import TrustedTradingPlatform from "../components/TrustedTradingPlatform";
import OurTeamSection from "../components/OurTeamSection";
import TestimonialsSection from "../components/TestimonialsSection";

const AboutUs = () => {
  return (
    <div>
      <AboutSection />
      <WhyChoose />
      <TradingStatsSection />
      <TrustedTradingPlatform />
      <OurTeamSection />
      <TestimonialsSection />
    </div>
  );
};

export default AboutUs;
