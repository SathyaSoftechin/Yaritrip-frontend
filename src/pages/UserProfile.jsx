import { useState } from "react";
import {
  FaChevronRight,
  FaUser,
  FaBell,
  FaGlobe,
  FaShieldAlt,
  FaFileContract,
} from "react-icons/fa";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("Personal Information");

  return (
    <section className="w-full bg-gray-100 min-h-screen">
      {/* Header Spacer (if navbar exists) */}
      <div className="h-28" />

      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-md p-6 flex gap-8">

          {/* LEFT SIDEBAR */}
          <div className="w-[260px] border rounded-2xl p-4">
            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-purple-200 flex items-center justify-center text-3xl font-bold text-white">
                <FaUser />
              </div>
            </div>

            {/* Menu */}
            <div className="space-y-3">
              {[
                { name: "Personal Information", icon: <FaUser /> },
                { name: "Preferred language", icon: <FaGlobe /> },
                { name: "Your Bookings", icon: <FaBell /> },
                { name: "Privacy Policies", icon: <FaShieldAlt /> },
                { name: "Terms and Conditions", icon: <FaFileContract /> },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition
                    ${
                      activeTab === item.name
                        ? "border border-blue-500 text-blue-600 bg-blue-50"
                        : "border border-gray-200 hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  <FaChevronRight />
                </button>
              ))}
            </div>

            {/* Logout */}
            <div className="mt-8 flex justify-center">
              <button className="px-8 py-2 rounded-full border border-blue-400 text-red-500 font-semibold shadow-sm hover:bg-red-50">
                Log Out
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 border rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-6 underline">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  E-mail Id
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-10">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-2.5 rounded-full font-semibold shadow-md">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
