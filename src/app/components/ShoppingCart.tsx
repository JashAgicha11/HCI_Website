import { Link } from "react-router";
import { ArrowLeft, Film, Plane, Trash2, ShoppingCart as CartIcon } from "lucide-react";
import { motion } from "motion/react";

const cartItems = [
  {
    id: 1,
    type: "movie",
    title: "Quantum Nexus",
    subtitle: "2 Tickets • Row A, Seats 5-6",
    date: "March 15, 2026 • 7:30 PM",
    price: 36,
    icon: Film,
  },
  {
    id: 2,
    type: "travel",
    title: "NYC → LAX",
    subtitle: "Sky Airways • Seat 12A",
    date: "March 20, 2026 • 8:00 AM",
    price: 289,
    icon: Plane,
  },
];

export function ShoppingCart() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen w-full bg-[#070d1f] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1920px] mx-auto p-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/upsell" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to SpotNest</span>
          </Link>
          <h1 className="text-5xl" style={{ fontWeight: 800 }}>
            SpotNest Cart
          </h1>
          <div className="w-24" />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Cart Items */}
          <div className="mb-8 space-y-6">
            {cartItems.map((item, index) => {
              const Icon = item.icon;
              const isMovie = item.type === "movie";
              const gradientColor = isMovie
                ? "from-[#DC143C] to-rose-600"
                : "from-[#007FFF] to-sky-600";
              const bgColor = isMovie ? "from-rose-50 to-red-50" : "from-sky-50 to-blue-50";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white/[0.05] rounded-3xl p-8 border ${
                    isMovie ? "border-rose-300/20" : "border-sky-300/20"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-6 flex-1">
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradientColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <Icon size={32} className="text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl mb-2" style={{ fontWeight: 700 }}>
                          {item.title}
                        </h3>
                        <p className="text-slate-300 mb-1">{item.subtitle}</p>
                        <p className="text-sm text-slate-400">{item.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-3xl mb-1" style={{ fontWeight: 800 }}>
                          ${item.price}
                        </div>
                      </div>

                      <button className="w-12 h-12 bg-white/50 hover:bg-white rounded-full flex items-center justify-center transition-colors">
                        <Trash2 size={20} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Cart Summary Drawer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <CartIcon size={28} className="text-slate-100" />
              <h2 className="text-3xl" style={{ fontWeight: 700 }}>
                Order Summary
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-lg">
                <span className="text-slate-300">Subtotal</span>
                <span style={{ fontWeight: 600 }}>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-slate-300">Tax (8%)</span>
                <span style={{ fontWeight: 600 }}>${tax.toFixed(2)}</span>
              </div>
              <div className="h-px bg-white/10 my-4" />
              <div className="flex justify-between text-2xl">
                <span style={{ fontWeight: 700 }}>Total</span>
                <span style={{ fontWeight: 800 }}>${total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              to="/payment"
              className="block w-full py-5 bg-gradient-to-r from-[#DC143C] via-purple-600 to-[#007FFF] text-white rounded-2xl text-center text-xl hover:shadow-lg transition-all duration-300"
              style={{ fontWeight: 700 }}
            >
              Proceed to Checkout
            </Link>

            <div className="mt-6 text-center text-sm text-slate-300">
              Secure checkout powered by industry-leading encryption
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
