import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import heroVideo from "../assets/hero-video.mp4";

/* -------- GLOBAL AIRPORT CITIES -------- */
const airportCities = [
  { city: "Hyderabad", country: "India", code: "HYD" },
  { city: "Delhi", country: "India", code: "DEL" },
  { city: "Mumbai", country: "India", code: "BOM" },
  { city: "Dubai", country: "UAE", code: "DXB" },
  { city: "New York", country: "USA", code: "JFK" },
  { city: "London", country: "UK", code: "LHR" },
  { city: "Singapore", country: "Singapore", code: "SIN" },
  { city: "Paris", country: "France", code: "CDG" },
  { city: "Tokyo", country: "Japan", code: "HND" },
  { city: "Doha", country: "Qatar", code: "DOH" },
];

const Hero = () => {
  const [open, setOpen] = useState(null);

  const [fromCity, setFromCity] = useState(null);
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState(null);
  const [rooms, setRooms] = useState(null);

  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");

  const [swapAnim, setSwapAnim] = useState(false);

  const wrapperRef = useRef(null);

  /* ---------- Close on outside click ---------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (key) => {
    setOpen((prev) => (prev === key ? null : key));
  };

  /* -------- Smart Swap -------- */
  const handleSwap = () => {
    if (!fromCity || !destination) return;

    if (fromCity.code === destination.code) {
      alert("Departure and Destination cannot be the same airport.");
      return;
    }

    setSwapAnim(true);

    setTimeout(() => {
      const temp = fromCity;
      setFromCity(destination);
      setDestination(temp);
      setSwapAnim(false);
    }, 250);
  };

  /* -------- Filter Logic -------- */
  const filteredFrom = airportCities.filter(
    (item) =>
      item.city.toLowerCase().includes(searchFrom.toLowerCase()) ||
      item.code.toLowerCase().includes(searchFrom.toLowerCase())
  );

  const filteredTo = airportCities.filter(
    (item) =>
      item.city.toLowerCase().includes(searchTo.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTo.toLowerCase())
  );

  const dropdownBase =
    "absolute left-0 top-full mt-3 z-[9999] transition-all duration-300 ease-out";

  const closed = "opacity-0 scale-95 -translate-y-2 pointer-events-none";
  const openState = "opacity-100 scale-100 translate-y-0";

  return (
    <section className="relative w-full h-[90vh] overflow-visible">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-4xl text-center max-w-4xl leading-tight mt-28 font-serif">
          Travel the world smoothly with <br /> deals that actually hit
        </h1>

        <div
          ref={wrapperRef}
          className="mt-20 w-full max-w-6xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-4 relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative items-center">

            {/* FROM + DESTINATION WRAPPER */}
            <div className="relative md:col-span-2 flex gap-4">

              {/* FROM */}
              <div
                className={`relative border rounded-xl p-3 flex-1 transition-transform duration-300 ${
                  swapAnim ? "-translate-x-2 opacity-70" : ""
                }`}
              >
                <p className="text-xs text-white">From city</p>
                <p
                  className="font-semibold text-white cursor-pointer"
                  onClick={() => toggle("from")}
                >
                  {fromCity
                    ? `${fromCity.city} (${fromCity.code}), ${fromCity.country}`
                    : "Select City"}
                </p>

                <div className={`${dropdownBase} ${open === "from" ? openState : closed}`}>
                  <div className="bg-white rounded-xl shadow-lg p-3 w-[260px] max-h-[300px] overflow-y-auto">
                    <input
                      type="text"
                      placeholder="Search city or IATA..."
                      className="w-full border p-2 rounded mb-2 text-sm"
                      value={searchFrom}
                      onChange={(e) => setSearchFrom(e.target.value)}
                    />
                    {filteredFrom.map((item) => (
                      <p
                        key={item.code}
                        className="p-2 rounded hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => {
                          if (destination?.code === item.code) {
                            alert("Cannot select same airport.");
                            return;
                          }
                          setFromCity(item);
                          setOpen(null);
                          setSearchFrom("");
                        }}
                      >
                        {item.city} ({item.code}), {item.country}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* DESTINATION */}
              <div
                className={`relative border rounded-xl p-3 flex-1 transition-transform duration-300 ${
                  swapAnim ? "translate-x-2 opacity-70" : ""
                }`}
              >
                <p className="text-xs text-white">Destination</p>
                <p
                  className="font-semibold text-white cursor-pointer"
                  onClick={() => toggle("destination")}
                >
                  {destination
                    ? `${destination.city} (${destination.code}), ${destination.country}`
                    : "Select Destination"}
                </p>

                <div className={`${dropdownBase} ${open === "destination" ? openState : closed}`}>
                  <div className="bg-white rounded-xl shadow-lg p-3 w-[260px] max-h-[300px] overflow-y-auto">
                    <input
                      type="text"
                      placeholder="Search city..."
                      className="w-full border p-2 rounded mb-2 text-sm"
                      value={searchTo}
                      onChange={(e) => setSearchTo(e.target.value)}
                    />
                    {filteredTo.map((item) => (
                      <p
                        key={item.code}
                        className="p-2 rounded hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => {
                          if (fromCity?.code === item.code) {
                            alert("Cannot select same airport.");
                            return;
                          }
                          setDestination(item);
                          setOpen(null);
                          setSearchTo("");
                        }}
                      >
                        {item.city} ({item.code}), {item.country}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* SWAP BUTTON */}
              <button
                onClick={handleSwap}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full shadow-xl border hover:rotate-180 transition duration-300 z-20"
              >
                ⇄
              </button>
            </div>

            {/* DATE */}
            <div className="relative border rounded-xl p-3">
              <p className="text-xs text-white">Departure Date</p>
              <p
                className="font-semibold text-white cursor-pointer"
                onClick={() => toggle("date")}
              >
                {date
                  ? date.toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Select Date"}
              </p>

              <div className={`${dropdownBase} ${open === "date" ? openState : closed}`}>
                <div
                  className="bg-black/60 backdrop-blur-2xl border border-black/30 rounded-2xl shadow-2xl p-2 w-[320px]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={(selected) => setDate(selected)}
                    disabled={{ before: new Date() }}
                    className="text-white"
                  />
                </div>
              </div>
            </div>

            {/* ROOMS */}
            <div className="relative border rounded-xl p-3">
              <p className="text-xs text-white">Rooms & Guests</p>
              <p
                className="font-semibold text-white cursor-pointer"
                onClick={() => toggle("rooms")}
              >
                {rooms || "Select Rooms"}
              </p>

              <div className={`${dropdownBase} ${open === "rooms" ? openState : closed}`}>
                <div className="bg-white rounded-xl shadow-lg p-3 w-[220px]">
                  {[
                    "1 Room • 2 Guests",
                    "2 Rooms • 4 Guests",
                    "3 Rooms • 6 Guests",
                  ].map((option) => (
                    <p
                      key={option}
                      className="p-2 rounded hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => {
                        setRooms(option);
                        setOpen(null);
                      }}
                    >
                      {option}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition mr-[500px]">
              Go Search 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
