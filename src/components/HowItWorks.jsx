import React, { useState } from "react";
import { assets } from "../assets/assets";

const steps = [
  {
    id: 1,
    title: "Create FXElite Account",
    desc: "Sign up for an FXElite account quickly and securely to start trading.",
    image: assets.fxcgo5,
  },
  {
    id: 2,
    title: "Fund Your Account",
    desc: "Deposit funds easily to begin trading Forex, Crypto, Commodities, or Stocks.",
    image: assets.fxcgo6,
  },
  {
    id: 3,
    title: "Start Trading",
    desc: "Access our platform to trade a wide range of assets with ease.",
    image: assets.fxcgo7,
  },
];

const HowItWorks = () => {
  // 🔥 Step 2 highlighted by default
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="w-full bg-[#F4F6FF] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-indigo-100 text-indigo-600 text-lg font-semibold px-4 py-1 rounded-md mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl font-bold">Start Trading in 3 Steps</h2>
        </div>

        {/* Step Indicator */}
        <div className="relative flex items-center justify-between max-w-4xl mx-auto mb-16">
          {/* Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300" />

          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full font-semibold transition
                ${
                  activeStep === step.id
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-indigo-500"
                }`}
            >
              {step.id}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const isActive = activeStep === step.id;

            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                className={`rounded-sm overflow-hidden transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-indigo-500 text-white shadow-xl scale-[1.02]"
                      : "bg-indigo-100 text-gray-900"
                  }`}
              >
                {/* Card Header */}
                <div
                  className={`px-6 py-6 transition
                    ${isActive ? "bg-indigo-500" : "bg-indigo-100"}`}
                >
                  <h3
                    className={`font-semibold text-lg mb-2 ${
                      isActive ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isActive ? "text-indigo-100" : "text-gray-600"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="bg-white pt-6 px-6 flex justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
