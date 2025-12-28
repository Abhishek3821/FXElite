import React from "react";
import { NavLink } from "react-router-dom";
import { assets, navItems } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-[#5B6CFF] relative overflow-hidden">
      {/* ===== TOP CTA SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Join Our Investment Area
          </h2>

          <p className="text-indigo-100 leading-relaxed max-w-xl mb-8">
            Take your crypto trading experience to the next level with the
            FXElite AI Investment Platform. Available for download on both iOS
            and Android devices, our app puts the power of forex trading right
            in the palm of your hand.
          </p>

          <div className="flex gap-4 flex-wrap">
            <NavLink
              to="/signup"
              className="bg-black text-white px-6 py-3 rounded-sm font-medium flex items-center gap-1"
            >
              Sign Up ↗
            </NavLink>

            <NavLink
              to="/ai-investment"
              className="bg-white text-indigo-600 px-6 py-3 rounded-sm font-medium flex items-center gap-1"
            >
              Explore AI Investment ↗
            </NavLink>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={assets.fxcgo11}
            alt="Investor"
            className=""
          />
        </div>
      </div>

      {/* ===== BOTTOM FOOTER ===== */}
      <div className="bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Card */}
          <div className="lg:col-span-2 bg-[#5B6CFF] p-8 text-white text-center">
            <NavLink to="/">
              <img
                src={assets.fxeliteLogo}
                alt="FXElite"
                className="h-20 mb-6 mx-auto cursor-pointer"
              />
            </NavLink>

            <h3 className="text-2xl font-semibold mb-4">
              Join Our FXElite <br /> Community
            </h3>

            <NavLink
              to="/signup"
              className="inline-flex items-center gap-1 bg-white text-indigo-600 px-5 py-3 rounded-sm font-medium"
            >
              Join Now ↗
            </NavLink>
          </div>

          {/* Market */}
          {navItems
            .filter((item) => item.label === "Market")
            .map((item) => (
              <div key={item.label}>
                <h4 className="font-semibold text-gray-900 mb-4">
                  {item.label}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {item.subItems.map((sub, i) => (
                    <li key={i}>
                      <NavLink to={sub.link} className="hover:text-indigo-600">
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {/* Platforms */}
          {navItems
            .filter((item) => item.label === "Platforms")
            .map((item) => (
              <div key={item.label}>
                <h4 className="font-semibold text-gray-900 mb-4">
                  {item.label}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {item.subItems.map((sub, i) => (
                    <li key={i}>
                      <NavLink to={sub.link} className="hover:text-indigo-600">
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {/* Account (merged) */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Account</h4>

            <ul className="space-y-2 text-gray-600">
              {navItems
                .find((i) => i.label === "Account")
                ?.subItems.map((sub, i) => (
                  <li key={`account-${i}`}>
                    <NavLink to={sub.link} className="hover:text-indigo-600">
                      {sub.label}
                    </NavLink>
                  </li>
                ))}

              {navItems
                .filter((i) => ["News", "About Us"].includes(i.label))
                .map((extra, i) => (
                  <li key={`extra-${i}`}>
                    <NavLink to={extra.link} className="hover:text-indigo-600">
                      {extra.label}
                    </NavLink>
                  </li>
                ))}

              {navItems
                .find((i) => i.label === "Contact")
                ?.subItems.map((sub, i) => (
                  <li key={`contact-${i}`}>
                    <NavLink to={sub.link} className="hover:text-indigo-600">
                      {sub.label}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Need Help?</h4>
            <p className="text-gray-600 mb-2">+ (1) 123 456 7890</p>
            <p className="text-gray-600 mb-2">support@FXElite.com</p>
            <p className="text-gray-600 mb-4">FXElite.com</p>

            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/fxeliteofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                aria-label="Instagram"
              >
                in
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/fxeliteofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                aria-label="X (Twitter)"
              >
                x
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61584855974219"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
