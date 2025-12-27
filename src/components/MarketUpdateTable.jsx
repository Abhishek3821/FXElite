import React from "react";
import { Star } from "lucide-react";

const data = [
  {
    name: "EUR/USD",
    price: "1.1123",
    change: "+0.07%",
    positive: true,
    chartColor: "green",
  },
  {
    name: "GBP/USD",
    price: "1.3245",
    change: "+0.12%",
    positive: true,
    chartColor: "green",
  },
  {
    name: "USD/JPY",
    price: "142.56",
    change: "-0.15%",
    positive: false,
    chartColor: "green",
  },
  {
    name: "Bitcoin (BTC)",
    price: "$62,345.54",
    change: "+0.27%",
    positive: true,
    chartColor: "green",
  },
  {
    name: "Gold (XAU)",
    price: "$2,450.04",
    change: "-0.14%",
    positive: false,
    chartColor: "red",
  },
  {
    name: "Apple (AAPL)",
    price: "$225.00",
    change: "+0.03%",
    positive: true,
    chartColor: "red",
  },
];

const Sparkline = ({ color }) => (
  <svg
    viewBox="0 0 100 40"
    className="w-28 h-10"
    fill="none"
    stroke={color === "green" ? "#22c55e" : "#ef4444"}
    strokeWidth="2"
  >
    <polyline points="0,30 10,10 20,25 30,15 40,28 50,12 60,22 70,8 80,26 90,10 100,18" />
  </svg>
);

const MarketUpdateTable = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-indigo-100 text-indigo-600 text-lg font-semibold px-4 py-1 rounded-md">
            MARKET UPDATE
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
          Forex and Multi-Asset Market Update
        </h2>

        {/* Table Header */}
        <div className="grid grid-cols-12 bg-indigo-50 text-sm font-semibold text-gray-700 px-6 py-4 rounded-lg">
          <div className="col-span-4">NAME/PAIR</div>
          <div className="col-span-2">LAST PRICE</div>
          <div className="col-span-2">24 CHANGE</div>
          <div className="col-span-2">CHART</div>
          <div className="col-span-2 text-right">TRADE</div>
        </div>

        {/* Rows */}
        <div className="mt-6 space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 items-center bg-white rounded-xl shadow-sm px-6 py-5"
            >
              {/* Name */}
              <div className="col-span-4 flex items-center gap-4">
                <Star
                  size={18}
                  className="text-gray-400 hover:text-indigo-500 cursor-pointer"
                />
                <span className="font-semibold text-gray-900">{item.name}</span>
              </div>

              {/* Price */}
              <div className="col-span-2 font-medium">{item.price}</div>

              {/* Change */}
              <div
                className={`col-span-2 font-medium ${
                  item.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.change}
              </div>

              {/* Chart */}
              <div className="col-span-2">
                <Sparkline color={item.chartColor} />
              </div>

              {/* Trade */}
              <div className="col-span-2 text-right">
                <button className="bg-indigo-100 text-indigo-600 font-medium px-5 py-2 rounded-lg hover:bg-indigo-200 transition">
                  Trade
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketUpdateTable;
