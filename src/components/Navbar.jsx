import React, { useState } from "react";
import { assets, navItems } from "../assets/assets";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <>
      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* LOGO (unchanged) */}
            <NavLink to="/" className="flex items-center">
              <img src={assets.fxeliteLogoo} alt="Logo" className="h-13 " />
            </NavLink>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    setHoveredSubItem(null);
                  }}
                >
                  {item.subItems ? (
                    <div className="flex items-center gap-1 text-[15px] font-medium text-gray-800 cursor-pointer hover:text-black">
                      {item.label}
                      <IoIosArrowDown size={14} />
                    </div>
                  ) : (
                    <NavLink
                      to={item.link}
                      className="text-[15px] font-medium text-gray-800 hover:text-black"
                    >
                      {item.label}
                    </NavLink>
                  )}

                  {/* FIRST LEVEL DROPDOWN */}
                  {hoveredItem === index && item.subItems && (
                    <div
                      className={`absolute z-50 min-w-max bg-white shadow-md ${
                        index >= navItems.length - 2 ? "right-0" : "left-0"
                      }`}
                      style={{ top: "100%" }}
                    >
                      {item.subItems.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className="relative group"
                          onMouseEnter={() => setHoveredSubItem(subIndex)}
                          onMouseLeave={() => setHoveredSubItem(null)}
                        >
                          <NavLink
                            to={sub.link}
                            className={({ isActive }) =>
                              `px-8 py-2 text-lg whitespace-nowrap flex justify-between items-center ${
                                isActive
                                  ? "text-[#0066ff]"
                                  : "hover:bg-gray-100"
                              }`
                            }
                          >
                            {sub.label}
                            {sub.subSubItems && (
                              <IoIosArrowDown size={12} className="ml-2" />
                            )}
                          </NavLink>

                          {hoveredSubItem === subIndex && sub.subSubItems && (
                            <div
                              className={`absolute top-0 bg-white shadow-lg text-lg min-w-max ${
                                index >= navItems.length - 3
                                  ? "right-full"
                                  : "left-full"
                              }`}
                            >
                              {sub.subSubItems.map((subSub, subSubIndex) => (
                                <NavLink
                                  to={subSub.link}
                                  className={({ isActive }) =>
                                    `px-8 py-2 text-lg whitespace-nowrap flex justify-between items-center ${
                                      isActive
                                        ? "text-[#0066ff]"
                                        : "hover:bg-gray-100"
                                    }`
                                  }
                                  onClick={() => {
                                    setHoveredItem(null);
                                    setHoveredSubItem(null);
                                    setMobileMenuOpen(false); // optional for mobile
                                  }}
                                >
                                  {subSub.label}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="hidden lg:flex items-center gap-6">
              <NavLink
                to="/login"
                className="text-[15px] font-medium text-gray-800 hover:text-black flex items-center gap-1"
              >
                Login <span>→</span>
              </NavLink>

              <NavLink
                to="/register"
                className="bg-[#5B6CFF] text-white px-5 py-2.5 rounded-lg text-[15px] font-medium hover:bg-[#4a5bff] transition flex items-center gap-1"
              >
                Get Started <span>↗</span>
              </NavLink>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU (logic preserved) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <img src={assets.primeForexLogo1} alt="" className="h-9" />
            <HiX size={26} onClick={() => setMobileMenuOpen(false)} />
          </div>

          {navItems.map((item, index) => (
            <div key={index} className="border-b py-3">
              <div
                className="flex justify-between items-center font-medium"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                {item.label}
                {item.subItems && (
                  <IoIosArrowDown
                    className={`transition ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {expandedIndex === index && item.subItems && (
                <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  {item.subItems.map((sub, i) => (
                    <NavLink
                      key={i}
                      to={sub.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block"
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-6 space-y-3">
            <NavLink
              to="/login"
              className="block text-center border rounded-lg py-3 font-medium"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="block text-center bg-[#5B6CFF] text-white rounded-lg py-3 font-medium"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
