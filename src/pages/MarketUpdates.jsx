import React from "react";
import ForexNewsEvents from "../components/ForexNewsEvents";
import MarketUpdateBanner from "../components/MarketUpdateBanner";

const MarketUpdates = () => {
  return (
    <div>
      <MarketUpdateBanner />
      <ForexNewsEvents />
    </div>
  );
};

export default MarketUpdates;
