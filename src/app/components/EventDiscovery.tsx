import { useState } from "react";
import { Link } from "react-router";
import { Music, Trophy, Theater, Calendar, MapPin, Clock, Users, ArrowLeft, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const events = [
  {
    id: 1,
    title: "Rock the Arena 2026",
    artist: "The Midnight Riders",
    category: "Concert",
    date: "April 15, 2026",
    time: "8:00 PM",
    venue: "Madison Square Garden, NYC",
    price: 89,
    attendees: "12.5K",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY29uY2VydCUyMGxpdmV8ZW58MXx8fHwxNzQzNDUwOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Music,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    id: 2,
    title: "NBA Finals 2026",
    artist: "Lakers vs Warriors",
    category: "Sports",
    date: "June 10, 2026",
    time: "7:30 PM",
    venue: "Crypto.com Arena, LA",
    price: 250,
    attendees: "18K",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZSUyMGFyZW5hfGVufDF8fHx8MTc0MzQ1MDkxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Trophy,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    id: 3,
    title: "Hamilton - Broadway",
    artist: "Original Cast Revival",
    category: "Theater",
    date: "May 22, 2026",
    time: "7:00 PM",
    venue: "Richard Rodgers Theatre, NYC",
    price: 145,
    attendees: "1.3K",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwYnJvYWR3YXklMjBzdGFnZXxlbnwxfHx8fDE3NDM0NTA5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Theater,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "EDM Festival 2026",
    artist: "Multiple Artists",
    category: "Concert",
    date: "July 4, 2026",
    time: "6:00 PM",
    venue: "Grant Park, Chicago",
    price: 199,
    attendees: "50K+",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzQzNDUwOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Music,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    id: 5,
    title: "US Open Tennis",
    artist: "Championship Round",
    category: "Sports",
    date: "September 8, 2026",
    time: "1:00 PM",
    venue: "Arthur Ashe Stadium, NYC",
    price: 320,
    attendees: "23K",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBzdGFkaXVtJTIwbWF0Y2h8ZW58MXx8fHwxNzQzNDUwOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Trophy,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    id: 6,
    title: "Comedy Night Live",
    artist: "Kevin Hart",
    category: "Theater",
    date: "August 18, 2026",
    time: "9:00 PM",
    venue: "The Forum, LA",
    price: 75,
    attendees: "8.2K",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBzaG93JTIwc3RhZ2V8ZW58MXx8fHwxNzQzNDUwOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Theater,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
  },
];

export function EventDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const categories = ["All", "Concert", "Sports", "Theater"];

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(e => e.category === selectedCategory);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1920px] mx-auto p-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/dashboard" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to SpotNest</span>
          </Link>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles size={24} className="text-purple-600" />
              <h1 className="text-5xl" style={{ fontWeight: 800 }}>
                SpotNest Live Events
              </h1>
            </div>
            <p className="text-slate-500">Concerts • Sports • Theater • Comedy</p>
          </div>
          <div className="w-24" />
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-4 rounded-2xl transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white/80 backdrop-blur-[30px] border border-white/50 text-slate-700 hover:bg-slate-50"
              }`}
              style={{ fontWeight: 600 }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Event Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 rounded-3xl overflow-hidden h-96 group cursor-pointer"
        >
          <div className="absolute inset-0">
            <img
              src={events[0].image}
              alt={events[0].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center px-16 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-4 w-fit">
              <TrendingUp size={16} />
              <span className="text-sm font-semibold">Featured Event</span>
            </div>

            <h2 className="text-6xl mb-4" style={{ fontWeight: 900 }}>
              {events[0].title}
            </h2>

            <p className="text-2xl mb-6 opacity-90">{events[0].artist}</p>

            <div className="flex items-center gap-8 mb-8 text-lg">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{events[0].date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{events[0].time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{events[0].venue}</span>
              </div>
            </div>

            <Link
              to="/cinema-seats"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-purple-600 rounded-full hover:bg-white/90 transition-all duration-300 w-fit text-lg shadow-2xl"
              style={{ fontWeight: 700 }}
            >
              <Sparkles size={20} />
              Get Tickets - ${events[0].price}
            </Link>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-3 gap-8">
          {filteredEvents.slice(1).map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredId(event.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-4 py-2 bg-gradient-to-r ${event.gradient} rounded-full text-white text-sm font-semibold shadow-lg`}>
                      {event.category}
                    </div>
                  </div>

                  {/* Attendees Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-semibold">
                      <Users size={14} />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className={`inline-flex items-center gap-2 mb-3 p-3 bg-gradient-to-r ${event.gradient} rounded-xl`}>
                      <Icon size={20} />
                    </div>

                    <h3 className="text-2xl mb-2" style={{ fontWeight: 700 }}>
                      {event.title}
                    </h3>

                    <p className="text-sm opacity-90 mb-4">{event.artist}</p>

                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    {/* Hover Action */}
                    <motion.div
                      animate={{
                        opacity: hoveredId === event.id ? 1 : 0,
                        y: hoveredId === event.id ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        to="/cinema-seats"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-white/90 transition-all duration-300 w-full justify-center"
                        style={{ fontWeight: 600 }}
                      >
                        Book Tickets • ${event.price}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-12 py-4 bg-white/80 backdrop-blur-[30px] border border-white/50 rounded-full hover:bg-slate-50 transition-all duration-300 shadow-lg" style={{ fontWeight: 600 }}>
            Load More Events
          </button>
        </motion.div>
      </div>
    </div>
  );
}