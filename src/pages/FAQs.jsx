import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What Is Forex Trading, And How Does It Work On FXElite?",
    answer:
      "Forex trading involves buying and selling currency pairs to profit from price movements. FXElite provides real-time pricing, advanced tools, and a secure platform to execute trades efficiently.",
  },
  {
    question: "Is Forex Trading Risky?",
    answer:
      "Yes, Forex trading involves risk due to market volatility. However, FXElite offers risk management tools such as stop-loss orders and educational resources to help traders manage risk responsibly.",
  },
  {
    question: "How Do I Start Trading On FXElite?",
    answer:
      "You can start by creating an account on FXElite, completing verification, funding your account, and accessing the trading platform.",
  },
  {
    question: "What Fees Does FXElite Charge For Trading?",
    answer:
      "FXElite offers competitive spreads and transparent pricing. Fees may vary depending on the instrument and account type.",
  },
  {
    question: "Does FXElite Offer Investment Advice?",
    answer:
      "FXElite does not provide personalized investment advice but offers educational resources and market insights to support informed trading decisions.",
  },
  {
    question: "How Does FXElite Ensure The Security Of My Funds And Data?",
    answer:
      "FXElite uses advanced encryption, secure servers, and strict compliance standards to protect user funds and personal data.",
  },
  {
    question: "Can I Trade On FXElite From Any Country?",
    answer:
      "FXElite is available in many regions worldwide. Availability may vary depending on local regulations.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(1); // second item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300
                ${
                  isOpen
                    ? "bg-indigo-500 text-white border-indigo-500"
                    : "bg-white text-gray-900 border-gray-200"
                }`}
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold"
              >
                <span>{faq.question}</span>

                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition
                    ${
                      isOpen
                        ? "bg-white text-indigo-500"
                        : "bg-indigo-500 text-white"
                    }`}
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 px-6
                  ${
                    isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <p
                  className={`text-sm leading-relaxed ${
                    isOpen ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;
