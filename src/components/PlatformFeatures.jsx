import React from "react";
import { assets } from "../assets/assets";

const featuresLeft = [
  {
    title: "Trade Forex",
    desc: "Access major and minor currency pairs with our intuitive platform for seamless trading.",
  },
  {
    title: "Diverse Asset Classes",
    desc: "Trade Forex, Crypto, Commodities, and Stocks all in one secure platform.",
  },
];

const featuresRight = [
  {
    title: "Safe And Secure",
    desc: "Trade with confidence on a platform certified by The Registrar of Companies for England and Wales.",
  },
  {
    title: "Trade Anywhere",
    desc: "Access our mobile app and web terminal for trading on the go.",
  },
];

const FeatureCard = ({ title, desc }) => (
  <div className="bg-[#F4F6FF] rounded-xl px-8 py-6 max-w-sm shadow-sm">
    <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const PlatformFeatures = () => {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* LEFT FEATURES */}
        <div className="flex flex-col gap-16 items-end relative">
          {featuresLeft.map((item, index) => (
            <div key={index} className="relative">
              <FeatureCard {...item} />

              {/* Connector */}
              <div className="hidden lg:block absolute top-1/2 right-[-60px] w-14 h-px bg-gray-200">
                <span className="absolute -right-2 -top-2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-white" />
              </div>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="relative flex justify-center">
          <img src={assets.fxcgo4} alt="Trading platform" className="" />
        </div>

        {/* RIGHT FEATURES */}
        <div className="flex flex-col gap-16 items-start relative">
          {featuresRight.map((item, index) => (
            <div key={index} className="relative">
              <FeatureCard {...item} />

              {/* Connector */}
              <div className="hidden lg:block absolute top-1/2 left-[-60px] w-14 h-px bg-gray-200">
                <span className="absolute -left-2 -top-2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
