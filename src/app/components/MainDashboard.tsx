import { useState } from "react";
import { Link } from "react-router";
import { Search, Film, Plane, Calendar, MapPin, ArrowLeft, TrendingUp, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function MainDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"entertainment" | "travel" | "events">("entertainment");

  return (
    <div className="min-h-screen w-full relative overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"
        />
        
        {/* Particle Effect */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>
      
      {/* Navigation */}
      <Link to="/" className="absolute top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300">
        <ArrowLeft size={20} />
        <span className="font-medium">Back to Grid</span>
      </Link>

      {/* Split Screen Hero */}
      <div className="relative h-screen grid grid-cols-2">
        {/* Left Side - Entertainment (Crimson) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden cursor-pointer"
          onMouseEnter={() => setActiveTab("entertainment")}
        >
          {/* Background with Parallax */}
          <motion.div
            animate={{
              scale: activeTab === "entertainment" ? 1.1 : 1,
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-br from-[#DC143C] via-rose-700 to-pink-900"
          />
          
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHRoZWF0ZXIlMjBzY3JlZW58ZW58MXx8fHwxNzczMzY4ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-15" />
          
          {/* Gradient Mesh */}
          <motion.div
            animate={{
              opacity: activeTab === "entertainment" ? 0.3 : 0.1,
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            }}
          />
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-12">
            <motion.div
              animate={{
                scale: activeTab === "entertainment" ? 1.1 : 1,
                y: activeTab === "entertainment" ? -20 : 0,
              }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border border-white/10 rounded-full -z-10"
              />
              <Film size={100} className="mx-auto mb-8 opacity-90 drop-shadow-2xl" strokeWidth={1.5} />
            </motion.div>
            
            <motion.h2
              animate={{
                y: activeTab === "entertainment" ? -10 : 0,
              }}
              className="text-7xl mb-4"
              style={{ fontWeight: 900 }}
            >
              Entertainment
            </motion.h2>
            
            <motion.div
              animate={{
                opacity: activeTab === "entertainment" ? 1 : 0.7,
              }}
              className="text-xl opacity-90 mb-8 text-center"
            >
              <p>Movies • Events • Shows</p>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star size={16} fill="white" />
                  <span>Top Rated</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <TrendingUp size={16} />
                  <span>Trending</span>
                </div>
              </div>
            </motion.div>
            
            <Link
              to="/movies"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white/20 backdrop-blur-xl border-2 border-white/30 rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 text-lg shadow-2xl"
              style={{ fontWeight: 600 }}
            >
              <Sparkles size={20} />
              Explore Movies
            </Link>

            {/* Trending Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: activeTab === "entertainment" ? 1 : 0, y: 0 }}
              className="absolute bottom-12 left-12 right-12 grid grid-cols-3 gap-4"
            >
              {[
                { label: "Now Showing", value: "245" },
                { label: "This Week", value: "1.2K" },
                { label: "Events", value: "89" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-xs opacity-70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Travel (Azure) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden cursor-pointer"
          onMouseEnter={() => setActiveTab("travel")}
        >
          {/* Background with Parallax */}
          <motion.div
            animate={{
              scale: activeTab === "travel" ? 1.1 : 1,
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-br from-[#007FFF] via-sky-700 to-blue-900"
          />
          
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1627663412345-aad473f2ba39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGZseWluZyUyMGNsb3Vkc3xlbnwxfHx8fDE3NzM0NTA5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-15" />
          
          {/* Gradient Mesh */}
          <motion.div
            animate={{
              opacity: activeTab === "travel" ? 0.3 : 0.1,
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            }}
          />
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-12">
            <motion.div
              animate={{
                scale: activeTab === "travel" ? 1.1 : 1,
                y: activeTab === "travel" ? -20 : 0,
              }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border border-white/10 rounded-full -z-10"
              />
              <Plane size={100} className="mx-auto mb-8 opacity-90 drop-shadow-2xl" strokeWidth={1.5} />
            </motion.div>
            
            <motion.h2
              animate={{
                y: activeTab === "travel" ? -10 : 0,
              }}
              className="text-7xl mb-4"
              style={{ fontWeight: 900 }}
            >
              Travel
            </motion.h2>
            
            <motion.div
              animate={{
                opacity: activeTab === "travel" ? 1 : 0.7,
              }}
              className="text-xl opacity-90 mb-8 text-center"
            >
              <p>Flights • Buses • Trains</p>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>500+ Destinations</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <TrendingUp size={16} />
                  <span>Best Prices</span>
                </div>
              </div>
            </motion.div>
            
            <Link
              to="/travel"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white/20 backdrop-blur-xl border-2 border-white/30 rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 text-lg shadow-2xl"
              style={{ fontWeight: 600 }}
            >
              <Sparkles size={20} />
              Find Flights
            </Link>

            {/* Trending Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: activeTab === "travel" ? 1 : 0, y: 0 }}
              className="absolute bottom-12 left-12 right-12 grid grid-cols-3 gap-4"
            >
              {[
                { label: "Airlines", value: "150+" },
                { label: "Routes", value: "5K+" },
                { label: "Daily Trips", value: "2.5K" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-xs opacity-70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Centered Floating Glass Search Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-8 z-30"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              "0 25px 50px -12px rgba(220, 20, 60, 0.3)",
              "0 25px 50px -12px rgba(0, 127, 255, 0.3)",
              "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-white/90 backdrop-blur-[40px] border-2 border-white/60 shadow-2xl rounded-[2rem] p-10"
        >
          {/* Search Input */}
          <div className="relative mb-6">
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 text-slate-400" size={28} />
              <input
                type="text"
                placeholder="Search Movies, Events, Flights, or Destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-20 pr-8 py-7 text-2xl bg-white/50 border-2 border-slate-200 rounded-3xl outline-none focus:border-purple-400 placeholder:text-slate-400 text-slate-800 transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </motion.div>
          </div>
          
          {/* Quick Action Buttons */}
          <div className="grid grid-cols-3 gap-4">
            <Link
              to="/movies"
              className="group relative overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative py-5 bg-gradient-to-r from-[#DC143C] to-rose-600 text-white rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3">
                  <Film size={24} />
                  <span className="text-lg font-semibold">Movies</span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </Link>

            <Link
              to="/travel"
              className="group relative overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative py-5 bg-gradient-to-r from-[#007FFF] to-sky-600 text-white rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3">
                  <Plane size={24} />
                  <span className="text-lg font-semibold">Flights</span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-3">
                <Calendar size={24} />
                <span className="text-lg font-semibold">Events</span>
              </div>
            </motion.button>
          </div>

          {/* Trending Searches */}
          <div className="mt-6 flex items-center gap-3 flex-wrap justify-center">
            <span className="text-sm text-slate-500">Trending:</span>
            {["Action Movies", "NYC to LAX", "Concert Tickets", "Weekend Getaways"].map((tag, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm text-slate-700 transition-colors"
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}