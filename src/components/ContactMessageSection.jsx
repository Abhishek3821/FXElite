import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const ContactMessageSection = () => {
  return (
    <section className="w-full bg-[#f4f6fb] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 rounded-md bg-indigo-100 px-4 py-1 text-lg font-semibold text-indigo-600">
            GET IN TOUCH WITH FXElite
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Leave A Message For Us
          </h2>
        </div>

        {/* ================= CARD ================= */}
        <div className="bg-white rounded-md shadow-sm p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* ================= FORM ================= */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Send Us A Message
                </h3>
                <p className="text-gray-600 max-w-xl">
                  Enjoy the convenience of our user-friendly interface, which
                  caters to both novice traders and seasoned investors alike.
                  With access to a wide range
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full rounded-lg bg-[#f4f6fb] px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full rounded-lg bg-[#f4f6fb] px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="text"
                    placeholder="Phone*"
                    className="w-full rounded-lg bg-[#f4f6fb] px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <select className="w-full rounded-lg bg-[#f4f6fb] px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Subject*</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Trading</option>
                  </select>
                </div>

                <textarea
                  rows="5"
                  placeholder="Your Message*"
                  className="w-full rounded-lg bg-[#f4f6fb] px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 text-white font-semibold hover:bg-indigo-700 transition"
                >
                  Submit Now →
                </button>
              </form>
            </div>

            {/* ================= CONTACT INFO ================= */}
            <div className="space-y-6">
              <InfoCard icon={<Phone />} title="Call" value="+971562292675" />

              <InfoCard
                icon={<Mail />}
                title="Email"
                value="support@FXElite.com"
              />

              <InfoCard
                icon={<Clock />}
                title="Schedule Time"
                value="24/7 Anytime All Support"
              />

              <InfoCard
                icon={<MapPin />}
                title="Location"
                value="2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= INFO CARD ================= */
const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="flex gap-4 rounded-xl bg-[#f4f6fb] p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{value}</p>
      </div>
    </div>
  );
};

export default ContactMessageSection;
