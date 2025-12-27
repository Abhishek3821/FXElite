import React from "react";
import { Clock } from "lucide-react";
import { assets } from "../assets/assets";

// Sample data (replace with API later)
const newsData = [
  {
    id: 1,
    image: assets.fxcgo12,
    source: "FXLeaders",
    time: "2 hours ago",
    title: "Forex Signals Sept 25: US GDP And Unemployment Claims",
    description:
      "The U.S. dollar strengthened significantly today, with the most notable move seen against the Japanese yen, where the pair surged by 125 pips.",
  },
  {
    id: 2,
    image: assets.fxcgo13,
    source: "DailyForex",
    time: "50 minutes ago",
    title: "Forex Today: Bitcoin Testing Three Week Low",
    description:
      "Bitcoin continues to look weak and continues to test a key three-weeks support level low at $11,332 with a breakdown looking likely.",
  },
  {
    id: 3,
    image: assets.fxcgo14,
    source: "Reuters",
    time: "4 hours ago",
    title: "Currencies Muted As Traders Await Economic Data",
    description:
      "The U.S. dollar was steady on Thursday as traders weighed the prospect of a measured Fed easing cycle.",
    highlight: true,
  },
  {
    id: 4,
    image: assets.fxcgo15,
    source: "Reuters",
    time: "4 hours ago",
    title: "Currencies Muted As Traders Await Economic Data",
    description:
      "The U.S. dollar was steady on Thursday as traders weighed the prospect of a measured Fed easing cycle.",
    highlight: true,
  },
  {
    id: 5,
    image: assets.fxcgo16,
    source: "Reuters",
    time: "4 hours ago",
    title: "Currencies Muted As Traders Await Economic Data",
    description:
      "The U.S. dollar was steady on Thursday as traders weighed the prospect of a measured Fed easing cycle.",
    highlight: true,
  },
];

const ForexNewsEvents = () => {
  return (
    <section className="w-full bg-[#f4f6fb] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 rounded-md bg-indigo-100 px-4 py-1 text-lg font-semibold text-indigo-600">
            LATEST UPDATES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Forex News & Events
          </h2>
        </div>

        {/* ================= NEWS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsData.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-xs overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-84 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                {/* META */}
                <div className="flex items-center gap-4 text-md text-gray-500">
                  <span className="font-medium text-gray-700">
                    {item.source}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {item.time}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className={`text-lg font-bold leading-snug ${
                    item.highlight ? "text-indigo-600" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold text-sm text-gray-900 hover:text-indigo-600 transition"
                >
                  Read More
                  <span className="text-lg">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForexNewsEvents;
