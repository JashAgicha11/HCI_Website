import { useState } from "react";
import { Link } from "react-router";
import { Calendar, MapPin, Film, Plane, Clock, ArrowLeft, Download, Eye, RefreshCw, Filter, Sparkles, Star, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const bookingHistory = [
  {
    id: "BK001",
    type: "movie",
    title: "Quantum Nexus",
    date: "2024-03-15",
    time: "7:30 PM",
    location: "AMC Theater Downtown",
    status: "completed",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1708348201502-423c75f6fe4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHBvc3RlciUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzczNDY5MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "BK002",
    type: "flight",
    title: "New York to Los Angeles",
    date: "2024-03-20",
    time: "10:15 AM",
    location: "JFK Airport",
    status: "upcoming",
    price: "$299.00",
    image: "https://images.unsplash.com/photo-1627663412345-aad473f2ba39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGZseWluZyUyMGNsb3Vkc3xlbnwxfHx8fDE3NzM0NTA5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "BK003",
    type: "bus",
    title: "Boston to New York",
    date: "2024-02-28",
    time: "8:00 AM",
    location: "South Station",
    status: "completed",
    price: "$45.50",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXMlMjB0cmF2ZWx8ZW58MXx8fHwxNzczNDcwMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "BK004",
    type: "movie",
    title: "Night Runner",
    date: "2024-02-15",
    time: "9:45 PM",
    location: "Regal Cinema",
    status: "cancelled",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1643677841226-d6427625f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlciUyMGRhcmt8ZW58MXx8fHwxNzczMzgyNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "BK005",
    type: "train",
    title: "Washington DC to New York",
    date: "2024-01-30",
    time: "2:30 PM",
    location: "Union Station",
    status: "completed",
    price: "$89.00",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbiUyMHRyYXZlbHxlbnwxfHx8fDE3NzM0NzAyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function BookingHistory() {
  const [filter, setFilter] = useState<"all" | "movie" | "travel" | "upcoming" | "completed" | "cancelled">("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "upcoming": return "bg-blue-100 text-blue-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "movie": return <Film size={20} className="text-[#DC143C]" />;
      case "flight": return <Plane size={20} className="text-[#007FFF]" />;
      case "bus": return <MapPin size={20} className="text-[#007FFF]" />;
      case "train": return <MapPin size={20} className="text-[#007FFF]" />;
      default: return <Calendar size={20} className="text-slate-400" />;
    }
  };

  const filteredBookings = bookingHistory.filter(booking => {
    if (filter === "all") return true;
    if (filter === "movie") return booking.type === "movie";
    if (filter === "travel") return ["flight", "bus", "train"].includes(booking.type);
    return booking.status === filter;
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-8">
        {/* Enhanced Header with Stats */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-all duration-300 shadow-lg">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to SpotNest</span>
          </Link>

          <div className="text-center">
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-5xl bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-2"
              style={{ fontWeight: 900 }}
            >
              SpotNest Booking History
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>{filteredBookings.filter(b => b.status === 'completed').length} Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>{filteredBookings.filter(b => b.status === 'upcoming').length} Upcoming</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span>{filteredBookings.filter(b => b.status === 'cancelled').length} Cancelled</span>
              </div>
            </motion.div>
          </div>

          <div className="w-32 flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm shadow-lg"
            >
              <TrendingUp size={16} />
              <span className="font-medium">{filteredBookings.length} Total</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-6 mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <Filter size={20} className="text-slate-400" />
            <span className="font-medium text-slate-700">Filter by:</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { id: "all", label: "All Bookings" },
              { id: "movie", label: "Movies" },
              { id: "travel", label: "Travel" },
              { id: "upcoming", label: "Upcoming" },
              { id: "completed", label: "Completed" },
              { id: "cancelled", label: "Cancelled" },
            ].map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id as typeof filter)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === filterOption.id
                    ? "bg-[#007FFF] text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
                style={{ fontWeight: 600 }}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Booking List */}
        <div className="space-y-6">
          {filteredBookings.map((booking, index) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-6 relative overflow-hidden group cursor-pointer"
            >
              {/* Subtle Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${
                booking.type === 'movie' ? 'from-rose-50 to-pink-50' :
                booking.type === 'flight' ? 'from-blue-50 to-sky-50' :
                booking.type === 'bus' ? 'from-purple-50 to-indigo-50' :
                'from-slate-50 to-gray-50'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex items-start gap-6">
                {/* Enhanced Image */}
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 group-hover:shadow-2xl transition-shadow duration-300">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={booking.image}
                    alt={booking.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md rounded-full p-1 shadow-lg">
                    {getTypeIcon(booking.type)}
                  </div>
                  {/* Status Indicator */}
                  <div className={`absolute bottom-2 left-2 w-3 h-3 rounded-full ${
                    booking.status === 'completed' ? 'bg-green-500' :
                    booking.status === 'upcoming' ? 'bg-blue-500' :
                    'bg-red-500'
                  } shadow-lg`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <motion.h3
                        className="text-xl mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
                        style={{ fontWeight: 700 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {booking.title}
                      </motion.h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-2">
                        <motion.div
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar size={16} className="text-blue-500" />
                          <span>{booking.date}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Clock size={16} className="text-purple-500" />
                          <span>{booking.time}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <MapPin size={16} className="text-green-500" />
                          <span>{booking.location}</span>
                        </motion.div>
                      </div>
                    </div>

                    <div className="text-right">
                      <motion.div
                        className="text-2xl mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
                        style={{ fontWeight: 700 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {booking.price}
                      </motion.div>
                      <motion.span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)} shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {booking.status === 'completed' && <CheckCircle2 size={12} className="inline mr-1" />}
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </motion.span>
                    </div>
                  </div>

                  {/* Enhanced Actions */}
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 rounded-full hover:from-blue-200 hover:to-blue-300 transition-all duration-300 shadow-lg"
                    >
                      <Eye size={16} />
                      View Details
                    </motion.button>

                    {booking.status === "completed" && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-700 rounded-full hover:from-green-200 hover:to-green-300 transition-all duration-300 shadow-lg"
                      >
                        <Download size={16} />
                        Download Ticket
                      </motion.button>
                    )}

                    {booking.status === "upcoming" && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 rounded-full hover:from-purple-200 hover:to-purple-300 transition-all duration-300 shadow-lg"
                      >
                        <RefreshCw size={16} />
                        Modify Booking
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-slate-200 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-slate-200 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center py-20 bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Animated Background for Empty State */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-2xl"
              />
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-8xl mb-6"
              >
                📅
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl mb-4 bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent"
                style={{ fontWeight: 800 }}
              >
                No bookings found
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-slate-600 mb-8 text-lg max-w-md mx-auto"
              >
                Try adjusting your filters or make your first booking to get started on your SpotNest entertainment and travel journey!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  style={{ fontWeight: 600 }}
                >
                  <Sparkles size={20} />
                  Start Your Journey
                  <Star size={16} />
                </Link>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 opacity-20">
                <Film size={32} className="text-slate-400" />
              </div>
              <div className="absolute bottom-6 left-6 opacity-20">
                <Plane size={32} className="text-slate-400" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}