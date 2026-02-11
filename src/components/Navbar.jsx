import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [countryOpen, setCountryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages where navbar should NOT be pill-style
  const noPillRoutes = ["/", "/login", "/signup"];
  const isPillNavbar = !noPillRoutes.includes(location.pathname);

  return (
    <header className="w-full absolute top-4 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <nav
          className={`h-16 flex items-center justify-between transition-all duration-300
            ${
              isPillNavbar
                ? "bg-white rounded-full px-6 shadow-md"
                : "bg-transparent px-0"
            }`}
        >
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo2.png"
              alt="Yaritrip Logo"
              className="h-36 object-contain"
            />
          </Link>

          {/* RIGHT SECTION */}
          <div className="hidden md:flex items-center gap-6">
            {/* Customer Support */}
            <div
              className={`flex items-center gap-2 text-sm font-medium
                ${isPillNavbar ? "text-gray-700" : "text-white"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 14 14"
              >
                <g fill="none">
                  <path
                    fill="#8fbffa"
                    fill-rule="evenodd"
                    d="M7 1.5a3.25 3.25 0 0 0-3.25 3.25v2.5a.75.75 0 0 1-1.5 0v-2.5A4.75 4.75 0 0 1 7 0h.25A4.75 4.75 0 0 1 12 4.75v5.382c0 .892-.448 1.667-.993 2.198c-.534.521-1.274.92-2.007.92a.75.75 0 0 1 0-1.5c.221 0 .606-.148.96-.493c.341-.334.54-.743.54-1.125V4.75A3.25 3.25 0 0 0 7.25 1.5z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="#2859c5"
                    d="M5 12.5A1.5 1.5 0 0 1 6.5 11H8a1.5 1.5 0 0 1 0 3H6.5A1.5 1.5 0 0 1 5 12.5m-5-6A1.5 1.5 0 0 1 1.5 5h2.25v4a1 1 0 0 1-1 1H1.5A1.5 1.5 0 0 1 0 8.5zM10.5 5h2A1.5 1.5 0 0 1 14 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-2z"
                  />
                </g>
              </svg>
              Customer Support
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setCountryOpen(!countryOpen)}
                className={`flex items-center gap-1 text-sm font-medium
                  ${isPillNavbar ? "text-gray-700" : "text-white"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3b92ff"
                    d="m12.87 15.07l-2.54-2.51l.03-.03A17.5 17.5 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7l1.62-4.33L19.12 17z"
                  />
                </svg>
                English
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {countryOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-md overflow-hidden">
                  <button className="block w-full px-4 py-2 text-sm hover:bg-gray-100">
                    Arabic
                  </button>
                  <button className="block w-full px-4 py-2 text-sm hover:bg-gray-100">
                    Hindi
                  </button>
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <Link
              to="/login"
              className={`px-4 py-1.5 rounded-full border transition
                ${
                  isPillNavbar
                    ? "text-gray-100 hover:text-black bg-blue-600"
                    : "border-white text-white "
                }`}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className={`px-4 py-1.5 rounded-full border transition
                ${
                  isPillNavbar
                    ? "text-gray-100 hover:text-black bg-blue-600"
                    : "border-white text-white"
                }`}
            >
              Sign Up
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className={`md:hidden text-2xl ${
              isPillNavbar ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-white rounded-2xl shadow-md p-4 space-y-4">
            <Link
              to="/login"
              className="block text-center py-2 border rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block text-center py-2 bg-blue-600 text-white rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
