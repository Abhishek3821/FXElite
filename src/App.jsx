import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import News from "./pages/News";
import Footer from "./components/Footer";
import MarketUpdates from "./pages/MarketUpdates";
import Contact from "./pages/Contact";
import ForexMarket from "./pages/ForexMarket";
import ForexCrossRates from "./pages/ForexCrossRates";
import EconomicCalender from "./pages/EconomicCalender";
import FAQs from "./pages/FAQs";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/market" element={<MarketUpdates />} />
          <Route path="/forex" element={<ForexMarket />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/forex-cross-rates" element={<ForexCrossRates />} />
          <Route path="/economic-calender" element={<EconomicCalender />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
