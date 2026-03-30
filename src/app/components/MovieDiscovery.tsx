import { useState } from "react";
import { Link } from "react-router";
import { Star, Clock, Play, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const movies = [
  {
    id: 1,
    title: "Quantum Nexus",
    rating: 8.5,
    duration: "2h 28m",
    genre: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1708348201502-423c75f6fe4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHBvc3RlciUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzczNDY5MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Night Runner",
    rating: 7.8,
    duration: "2h 15m",
    genre: "Action",
    image: "https://images.unsplash.com/photo-1643677841226-d6427625f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMHBvc3RlciUyMGRhcmt8ZW58MXx8fHwxNzczMzgyNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Shadow Protocol",
    rating: 8.2,
    duration: "2h 05m",
    genre: "Thriller",
    image: "https://images.unsplash.com/photo-1767048264833-5b65aacd1039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMG1vdmllJTIwcG9zdGVyJTIwc3VzcGVuc2V8ZW58MXx8fHwxNzczNDY5MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Eternal Hearts",
    rating: 7.5,
    duration: "1h 58m",
    genre: "Romance",
    image: "https://images.unsplash.com/photo-1746980931930-d8e69847d633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbW92aWUlMjBwb3N0ZXIlMjByb21hbnRpY3xlbnwxfHx8fDE3NzM0NjkyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Horizon Dawn",
    rating: 8.8,
    duration: "2h 45m",
    genre: "Adventure",
    image: "https://images.unsplash.com/photo-1740390133235-e82eba2c040a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBtb3ZpZSUyMHBvc3RlciUyMGVwaWN8ZW58MXx8fHwxNzczNDY5MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Digital Ghost",
    rating: 7.9,
    duration: "2h 10m",
    genre: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1708348201502-423c75f6fe4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBtb3ZpZSUyMHBvc3RlciUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzczNDY5MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function MovieDiscovery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1920px] mx-auto p-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/dashboard" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </Link>
          <h1 className="text-5xl" style={{ fontWeight: 800 }}>
            Now Showing
          </h1>
          <div className="w-24" />
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-3 gap-8">
          {movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(movie.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#DC143C] via-[#DC143C]/80 to-transparent transition-opacity duration-300 ${
                    hoveredId === movie.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 backdrop-blur-sm" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl mb-3" style={{ fontWeight: 700 }}>
                      {movie.title}
                    </h3>
                    
                    <div className="flex items-center gap-6 mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Star size={16} fill="currentColor" />
                        <span>{movie.rating} IMDB</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{movie.duration}</span>
                      </div>
                      <div className="px-3 py-1 bg-white/20 rounded-full text-xs">
                        {movie.genre}
                      </div>
                    </div>
                    
                    <Link
                      to="/cinema-seats"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#DC143C] rounded-full hover:bg-white/90 transition-all duration-300"
                      style={{ fontWeight: 600 }}
                    >
                      <Play size={18} fill="currentColor" />
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Default Card Info (visible when not hovering) */}
              <div
                className={`mt-4 transition-opacity duration-300 ${
                  hoveredId === movie.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                  {movie.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Star size={14} fill="currentColor" className="text-yellow-500" />
                    <span>{movie.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{movie.genre}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
