import React from "react";
import { Plus, Linkedin, Twitter, Facebook } from "lucide-react";
import { assets } from "../assets/assets";

const teamMembers = [
  {
    name: "Kane Williamson",
    role: "Founder & CEO",
    image: assets.fx8,
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
    },
  },
  {
    name: "Alesay Healy",
    role: "Trading Platform Architect",
    image: assets.fx9,
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Rosie Rempel",
    role: "Marketing Manager",
    image: assets.fx10,
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    name: "Jonathan Weber",
    role: "Trading Systems Engineer",
    image: assets.fx11,
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

const OurTeamSection = () => {
  return (
    <section className="w-full bg-[#f4f6ff] py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-100 text-indigo-600 text-lg font-semibold px-4 py-1 mb-4">
            OUR TEAM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Dedicated Trading Experts
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl p-8 text-center overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-100 rounded-tl-full" />

              {/* Avatar */}
              <div className="flex justify-center mb-6 relative z-10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="relative z-10">
                <h4 className="font-semibold text-lg text-gray-900">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>

              {/* ================= PLUS + SOCIALS ================= */}
              <div className="relative z-10 mt-6 flex justify-center items-center group">
                {/* LEFT SOCIALS */}
                <div className="flex gap-3 mr-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>

                {/* PLUS BUTTON */}
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center cursor-pointer z-10">
                  <Plus size={18} />
                </div>

                {/* RIGHT SOCIALS */}
                <div className="flex gap-3 ml-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700"
                    >
                      <Twitter size={16} />
                    </a>
                  )}

                  {member.socials.facebook && (
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700"
                    >
                      <Facebook size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
