import { useState } from "react";
import { Link } from "react-router";
import { Hotel, Star, MapPin, Wifi, Coffee, Dumbbell, UtensilsCrossed, ParkingCircle, ArrowLeft, Calendar, Users, DollarSign, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";

const hotels = [
  {
    id: 1,
    name: "Grand Luxury Resort",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviews: 2847,
    price: 289,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc0MzQ1MDkxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    amenities: ["Wifi", "Pool", "Gym", "Restaurant", "Parking", "Spa"],
    featured: true,
  },
  {
    id: 2,
    name: "Ocean View Paradise",
    location: "Miami Beach, FL",
    rating: 4.7,
    reviews: 1923,
    price: 359,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdGVsJTIwcmVzb3J0fGVufDF8fHx8MTc0MzQ1MDkxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    amenities: ["Wifi", "Beach", "Pool", "Restaurant", "Bar", "Spa"],
    featured: false,
  },
  {
    id: 3,
    name: "Urban Boutique Hotel",
    location: "New York, NY",
    rating: 4.6,
    reviews: 3156,
    price: 199,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzQzNDUwOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    amenities: ["Wifi", "Gym", "Restaurant", "Parking", "Concierge"],
    featured: false,
  },
  {
    id: 4,
    name: "Mountain Lodge Retreat",
    location: "Aspen, CO",
    rating: 4.9,
    reviews: 1654,
    price: 425,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxvZGdlJTIwaG90ZWx8ZW58MXx8fHwxNzQzNDUwOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    amenities: ["Wifi", "Fireplace", "Spa", "Restaurant", "Ski Access"],
    featured: true,
  },
  {
    id: 5,
    name: "Downtown Business Hotel",
    location: "Chicago, IL",
    rating: 4.5,
    reviews: 2341,
    price: 179,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhvdGVsJTIwcm9vbXxlbnwxfHx8fDE3NDM0NTA5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    amenities: ["Wifi", "Gym", "Business Center", "Parking", "Restaurant"],
    featured: false,
  },
  {
    id: 6,
    name: "Desert Oasis Resort",
    location: "Phoenix, AZ",
    rating: 4.7,
    reviews: 1876,
    price: 249,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBwb29sJTIwaG90ZWx8ZW58MXx8fHwxNzQzNDUwOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    amenities: ["Wifi", "Pool", "Golf", "Spa", "Restaurant", "Parking"],
    featured: false,
  },
];

const amenityIcons: Record<string, any> = {
  Wifi: Wifi,
  Pool: Hotel,
  Gym: Dumbbell,
  Restaurant: UtensilsCrossed,
  Parking: ParkingCircle,
  Spa: Sparkles,
  Bar: Coffee,
  Beach: MapPin,
  Fireplace: Hotel,
  "Ski Access": Hotel,
  "Business Center": Hotel,
  Concierge: Hotel,
  Golf: Hotel,
};

export function HotelBooking() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

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
              <Hotel size={28} className="text-[#007FFF]" />
              <h1 className="text-5xl" style={{ fontWeight: 800 }}>
                SpotNest Hotels & Stays
              </h1>
            </div>
            <p className="text-slate-500">Find your perfect accommodation</p>
          </div>
          <div className="w-24" />
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-[30px] border border-white/50 rounded-3xl p-8 shadow-lg mb-12"
        >
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block text-sm mb-2 text-slate-600" style={{ fontWeight: 600 }}>
                DESTINATION
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Los Angeles, CA"
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl outline-none focus:border-[#007FFF] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-600" style={{ fontWeight: 600 }}>
                CHECK-IN
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Mar 20, 2026"
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl outline-none focus:border-[#007FFF] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-600" style={{ fontWeight: 600 }}>
                CHECK-OUT
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Mar 25, 2026"
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl outline-none focus:border-[#007FFF] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-slate-600" style={{ fontWeight: 600 }}>
                GUESTS
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="2 Adults"
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl outline-none focus:border-[#007FFF] transition-colors"
                />
              </div>
            </div>
          </div>

          <button className="w-full mt-6 py-4 bg-gradient-to-r from-[#007FFF] to-sky-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 text-lg" style={{ fontWeight: 700 }}>
            Search Hotels
          </button>
        </motion.div>

        {/* Featured Hotels Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles size={24} className="text-[#007FFF]" />
            <h2 className="text-3xl" style={{ fontWeight: 700 }}>
              Featured Properties
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {hotels.filter(h => h.featured).map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredId(hotel.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-96">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(hotel.id)}
                    className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                  >
                    <Heart
                      size={20}
                      className={favorites.includes(hotel.id) ? "fill-rose-500 text-rose-500" : "text-white"}
                    />
                  </button>

                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-[#007FFF] to-sky-600 rounded-full text-white text-sm font-semibold shadow-lg">
                    ⭐ Featured
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl mb-2" style={{ fontWeight: 700 }}>
                      {hotel.name}
                    </h3>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="text-sm">{hotel.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={16} fill="currentColor" className="text-yellow-400" />
                        <span className="text-sm font-semibold">{hotel.rating}</span>
                        <span className="text-sm opacity-70">({hotel.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      {hotel.amenities.slice(0, 4).map((amenity) => {
                        const Icon = amenityIcons[amenity] || Hotel;
                        return (
                          <div key={amenity} className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs">
                            <Icon size={12} />
                            <span>{amenity}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm opacity-70">Starting from</div>
                        <div className="flex items-center gap-1">
                          <DollarSign size={28} />
                          <span className="text-4xl" style={{ fontWeight: 800 }}>
                            {hotel.price}
                          </span>
                          <span className="text-lg opacity-70">/night</span>
                        </div>
                      </div>

                      <motion.div
                        animate={{
                          opacity: hoveredId === hotel.id ? 1 : 0,
                          x: hoveredId === hotel.id ? 0 : 20,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          to="/upsell"
                          className="px-8 py-4 bg-white text-[#007FFF] rounded-full hover:bg-white/90 transition-all duration-300 font-semibold shadow-xl"
                        >
                          Book Now
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Hotels Grid */}
        <div>
          <h2 className="text-3xl mb-8" style={{ fontWeight: 700 }}>
            All Properties
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {hotels.filter(h => !h.featured).map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-[30px] border border-white/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                onMouseEnter={() => setHoveredId(hotel.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(hotel.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                  >
                    <Heart
                      size={16}
                      className={favorites.includes(hotel.id) ? "fill-rose-500 text-rose-500" : "text-white"}
                    />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-2" style={{ fontWeight: 700 }}>
                    {hotel.name}
                  </h3>

                  <div className="flex items-center gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-slate-600">
                      <MapPin size={14} />
                      <span>{hotel.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={14} fill="currentColor" className="text-yellow-400" />
                      <span className="font-semibold">{hotel.rating}</span>
                      <span className="text-slate-500">({hotel.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {hotel.amenities.slice(0, 3).map((amenity) => {
                      const Icon = amenityIcons[amenity] || Hotel;
                      return (
                        <div key={amenity} className="flex items-center gap-1 text-xs text-slate-600">
                          <Icon size={12} />
                          <span>{amenity}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-xs text-slate-500">From</div>
                      <div className="flex items-center gap-1">
                        <DollarSign size={20} className="text-[#007FFF]" />
                        <span className="text-2xl" style={{ fontWeight: 800 }}>
                          {hotel.price}
                        </span>
                        <span className="text-sm text-slate-500">/night</span>
                      </div>
                    </div>

                    <Link
                      to="/upsell"
                      className="px-6 py-3 bg-gradient-to-r from-[#007FFF] to-sky-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-12 py-4 bg-white/80 backdrop-blur-[30px] border border-white/50 rounded-full hover:bg-slate-50 transition-all duration-300 shadow-lg" style={{ fontWeight: 600 }}>
            Show More Hotels
          </button>
        </motion.div>
      </div>
    </div>
  );
}