import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Plus, Minus, Popcorn, Coffee, Candy, Shield, UtensilsCrossed, Wifi } from "lucide-react";
import { motion } from "motion/react";

interface Addon {
  id: string;
  name: string;
  price: number;
  icon: any;
  category: "movie" | "travel";
  quantity: number;
}

const addonsData: Addon[] = [
  { id: "popcorn", name: "Large Popcorn", price: 8, icon: Popcorn, category: "movie", quantity: 0 },
  { id: "soda", name: "Large Soda", price: 5, icon: Coffee, category: "movie", quantity: 0 },
  { id: "candy", name: "Candy Mix", price: 6, icon: Candy, category: "movie", quantity: 0 },
  { id: "combo", name: "Combo Meal", price: 15, icon: UtensilsCrossed, category: "movie", quantity: 0 },
  { id: "insurance", name: "Travel Insurance", price: 12, icon: Shield, category: "travel", quantity: 0 },
  { id: "meal", name: "In-Flight Meal", price: 18, icon: UtensilsCrossed, category: "travel", quantity: 0 },
  { id: "wifi", name: "WiFi Access", price: 10, icon: Wifi, category: "travel", quantity: 0 },
  { id: "baggage", name: "Extra Baggage", price: 25, icon: Shield, category: "travel", quantity: 0 },
];

export function UpsellAddons() {
  const [addons, setAddons] = useState(addonsData);

  const updateQuantity = (id: string, delta: number) => {
    setAddons(
      addons.map((addon) =>
        addon.id === id
          ? { ...addon, quantity: Math.max(0, addon.quantity + delta) }
          : addon
      )
    );
  };

  const movieAddons = addons.filter((a) => a.category === "movie");
  const travelAddons = addons.filter((a) => a.category === "travel");
  const totalItems = addons.reduce((sum, a) => sum + a.quantity, 0);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1920px] mx-auto p-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/cinema-seats" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </Link>
          <h1 className="text-5xl" style={{ fontWeight: 800 }}>
            Enhance Your Experience
          </h1>
          <div className="w-24" />
        </div>

        {/* Split Panel */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Panel - Movie Snacks */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-rose-50 to-red-100/50 rounded-3xl p-12 border border-rose-200"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#DC143C] rounded-2xl flex items-center justify-center">
                <Popcorn size={24} className="text-white" />
              </div>
              <h2 className="text-3xl" style={{ fontWeight: 700 }}>
                Movie Snacks
              </h2>
            </div>

            <div className="space-y-4">
              {movieAddons.map((addon, index) => {
                const Icon = addon.icon;
                return (
                  <motion.div
                    key={addon.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-[30px] border border-white/50 rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                          <Icon size={24} className="text-[#DC143C]" />
                        </div>
                        <div>
                          <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>
                            {addon.name}
                          </h3>
                          <p className="text-sm text-slate-600">${addon.price.toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(addon.id, -1)}
                          disabled={addon.quantity === 0}
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="text-xl w-8 text-center" style={{ fontWeight: 600 }}>
                          {addon.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(addon.id, 1)}
                          className="w-10 h-10 bg-[#DC143C] text-white rounded-full flex items-center justify-center hover:bg-[#b01030] transition-colors"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Panel - Travel Essentials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-sky-50 to-blue-100/50 rounded-3xl p-12 border border-sky-200"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#007FFF] rounded-2xl flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
              <h2 className="text-3xl" style={{ fontWeight: 700 }}>
                Travel Essentials
              </h2>
            </div>

            <div className="space-y-4">
              {travelAddons.map((addon, index) => {
                const Icon = addon.icon;
                return (
                  <motion.div
                    key={addon.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-[30px] border border-white/50 rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                          <Icon size={24} className="text-[#007FFF]" />
                        </div>
                        <div>
                          <h3 className="text-lg mb-1" style={{ fontWeight: 600 }}>
                            {addon.name}
                          </h3>
                          <p className="text-sm text-slate-600">${addon.price.toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(addon.id, -1)}
                          disabled={addon.quantity === 0}
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="text-xl w-8 text-center" style={{ fontWeight: 600 }}>
                          {addon.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(addon.id, 1)}
                          className="w-10 h-10 bg-[#007FFF] text-white rounded-full flex items-center justify-center hover:bg-[#0066cc] transition-colors"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-[30px] border-t border-slate-200 p-8">
          <div className="max-w-[1920px] mx-auto flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-600 mb-1">Total Add-ons</div>
              <div className="text-3xl" style={{ fontWeight: 700 }}>
                {totalItems} {totalItems === 1 ? "Item" : "Items"}
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                to="/cart"
                className="px-12 py-4 bg-slate-200 text-slate-700 rounded-full text-lg hover:bg-slate-300 transition-all duration-300"
                style={{ fontWeight: 600 }}
              >
                Skip
              </Link>
              <Link
                to="/cart"
                className="px-12 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-lg hover:shadow-lg transition-all duration-300"
                style={{ fontWeight: 600 }}
              >
                Continue to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
