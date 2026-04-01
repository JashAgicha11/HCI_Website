import { useState } from "react";
import { Link } from "react-router";
import { Plane, Clock, DollarSign, ArrowRight, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const flights = [
  {
    id: 1,
    airline: "Sky Airways",
    logo: "✈️",
    from: "NYC",
    to: "LAX",
    departure: "08:00 AM",
    arrival: "11:30 AM",
    duration: "5h 30m",
    price: 289,
    stops: "Non-stop",
  },
  {
    id: 2,
    airline: "Global Airlines",
    logo: "🛫",
    from: "NYC",
    to: "LAX",
    departure: "12:30 PM",
    arrival: "4:15 PM",
    duration: "5h 45m",
    price: 245,
    stops: "Non-stop",
  },
  {
    id: 3,
    airline: "Continental Air",
    logo: "🌐",
    from: "NYC",
    to: "LAX",
    departure: "3:45 PM",
    arrival: "7:20 PM",
    duration: "5h 35m",
    price: 319,
    stops: "Non-stop",
  },
  {
    id: 4,
    airline: "Pacific Wings",
    logo: "🦅",
    from: "NYC",
    to: "LAX",
    departure: "6:00 PM",
    arrival: "9:35 PM",
    duration: "5h 35m",
    price: 275,
    stops: "Non-stop",
  },
];

export function TravelSearchResults() {
  const [priceRange, setPriceRange] = useState([200, 400]);

  return (
    <div className="min-h-screen w-full bg-[#070d1f] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1920px] mx-auto p-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/dashboard" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to SpotNest</span>
          </Link>
          <h1 className="text-5xl" style={{ fontWeight: 800 }}>
            SpotNest Flight Results
          </h1>
          <div className="w-24" />
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="col-span-3">
            <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-lg sticky top-8">
              <div className="flex items-center gap-2 mb-8">
                <SlidersHorizontal size={24} className="text-[#007FFF]" />
                <h2 className="text-2xl text-white" style={{ fontWeight: 700 }}>
                  Filters
                </h2>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-sm mb-4 text-slate-300" style={{ fontWeight: 600 }}>
                  PRICE RANGE
                </h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="100"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#007FFF]"
                  />
                  <div className="flex justify-between text-sm">
                    <span className="px-4 py-2 bg-white/10 rounded-lg">${priceRange[0]}</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Stops */}
              <div className="mb-8">
                <h3 className="text-sm mb-4 text-slate-300" style={{ fontWeight: 600 }}>
                  STOPS
                </h3>
                <div className="space-y-3">
                  {["Non-stop", "1 Stop", "2+ Stops"].map((stop) => (
                    <label key={stop} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked={stop === "Non-stop"} className="w-5 h-5 accent-[#007FFF]" />
                      <span className="text-sm text-slate-200">{stop}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Departure Time */}
              <div className="mb-8">
                <h3 className="text-sm mb-4 text-slate-300" style={{ fontWeight: 600 }}>
                  DEPARTURE TIME
                </h3>
                <div className="space-y-3">
                  {["Morning (6-12)", "Afternoon (12-6)", "Evening (6-12)"].map((time) => (
                    <label key={time} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#007FFF]" />
                      <span className="text-sm text-slate-200">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-[#007FFF] to-sky-600 text-white rounded-xl hover:shadow-lg transition-all duration-300">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Main Flight Cards */}
          <div className="col-span-9 space-y-6">
            {flights.map((flight, index) => (
              <motion.div
                key={flight.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-lg hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  {/* Left - Airline Info */}
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#007FFF] to-sky-600 rounded-2xl flex items-center justify-center text-3xl">
                      {flight.logo}
                    </div>
                    <div>
                      <h3 className="text-xl mb-1" style={{ fontWeight: 600 }}>
                        {flight.airline}
                      </h3>
                      <span className="text-sm text-slate-300">{flight.stops}</span>
                    </div>
                  </div>

                  {/* Center - Timeline */}
                  <div className="flex items-center gap-8 flex-1 mx-16">
                    <div className="text-center">
                      <div className="text-3xl mb-2" style={{ fontWeight: 700 }}>
                        {flight.departure}
                      </div>
                      <div className="text-sm text-slate-300">{flight.from}</div>
                    </div>

                    <div className="flex-1 relative">
                      <div className="h-0.5 bg-gradient-to-r from-[#007FFF] to-sky-400" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 px-3 py-1 rounded-full text-xs text-slate-700 border border-slate-200">
                        <Clock size={12} className="inline mr-1" />
                        {flight.duration}
                      </div>
                      <Plane
                        size={20}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-[#007FFF]"
                      />
                    </div>

                    <div className="text-center">
                      <div className="text-3xl mb-2" style={{ fontWeight: 700 }}>
                        {flight.arrival}
                      </div>
                      <div className="text-sm text-slate-300">{flight.to}</div>
                    </div>
                  </div>

                  {/* Right - Price & Action */}
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end mb-3">
                      <DollarSign size={28} className="text-[#007FFF]" />
                      <span className="text-4xl" style={{ fontWeight: 800 }}>
                        {flight.price}
                      </span>
                    </div>
                    <Link
                      to="/bus-train"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#007FFF] to-sky-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
                      style={{ fontWeight: 600 }}
                    >
                      Select
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
