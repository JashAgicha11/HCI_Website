import { Link } from "react-router";
import { Play, Plane, Armchair, Bus, ShoppingBag, CreditCard, CheckCircle2, Film, Sparkles, ChevronRight, User, Music, Hotel, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { getStaticUser } from "../lib/auth";

export function ShowcaseGrid() {
  const currentUser = getStaticUser();

  const frames = [
    { 
      title: "Main Dashboard", 
      path: "/dashboard", 
      icon: Film, 
      color: "crimson",
      description: "Unified entertainment & travel hub",
      gradient: "from-rose-500 via-pink-500 to-red-500"
    },
    { 
      title: "Movie Discovery", 
      path: "/movies", 
      icon: Play, 
      color: "crimson",
      description: "Cinematic poster showcase",
      gradient: "from-red-500 via-rose-600 to-pink-600"
    },
    { 
      title: "Travel Search", 
      path: "/travel", 
      icon: Plane, 
      color: "azure",
      description: "Smart flight comparison",
      gradient: "from-blue-500 via-sky-500 to-cyan-500"
    },
    { 
      title: "Cinema Seats", 
      path: "/cinema-seats", 
      icon: Armchair, 
      color: "crimson",
      description: "Interactive seat map",
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500"
    },
    { 
      title: "Bus/Train Layout", 
      path: "/bus-train", 
      icon: Bus, 
      color: "azure",
      description: "Premium seat selection",
      gradient: "from-indigo-500 via-blue-500 to-sky-500"
    },
    { 
      title: "Upsell & Add-ons", 
      path: "/upsell", 
      icon: ShoppingBag, 
      color: "mixed",
      description: "Enhance your journey",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500"
    },
    { 
      title: "Shopping Cart", 
      path: "/cart", 
      icon: ShoppingBag, 
      color: "mixed",
      description: "Unified checkout experience",
      gradient: "from-pink-500 via-rose-500 to-red-500"
    },
    { 
      title: "Secure Payment", 
      path: "/payment", 
      icon: CreditCard, 
      color: "neutral",
      description: "Bank-grade security",
      gradient: "from-slate-600 via-gray-600 to-zinc-600"
    },
    { 
      title: "Confirmation", 
      path: "/confirmation", 
      icon: CheckCircle2, 
      color: "success",
      description: "Journey timeline & tickets",
      gradient: "from-emerald-500 via-green-500 to-teal-500"
    },
    { 
      title: "User Profile", 
      path: "/profile", 
      icon: User, 
      color: "mixed",
      description: "Account & booking history",
      gradient: "from-indigo-500 via-purple-500 to-pink-500"
    },
    { 
      title: "Event Discovery", 
      path: "/events", 
      icon: Music, 
      color: "crimson",
      description: "Concerts, sports & theater",
      gradient: "from-fuchsia-500 via-purple-500 to-violet-500"
    },
    { 
      title: "Hotel Booking", 
      path: "/hotels", 
      icon: Hotel, 
      color: "azure",
      description: "Perfect accommodation finder",
      gradient: "from-teal-500 via-cyan-500 to-blue-500"
    },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#060b18] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_90%_15%,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-12">
        <header className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 grid place-items-center shadow-lg">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">SpotNest Premium</p>
              <h1 className="text-xl font-bold">Entertainment x Travel</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {currentUser ? (
              <Link to="/profile" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition-colors">
                <ShieldCheck size={16} />
                {currentUser.fullName}
              </Link>
            ) : (
              <>
                <Link to="/login" className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/10 transition-colors">Login</Link>
                <Link to="/register" className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity">Register</Link>
              </>
            )}
          </div>
        </header>

        <section className="mb-12">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-300 mb-3">Booking Experience Platform</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            A modern, professional interface for movies, events, travel, and stays.
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Explore every stage of the user journey with a consistent premium theme, clear navigation, and polished UI components.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-5">
          {frames.map((frame, index) => {
            const Icon = frame.icon;
            return (
              <Link key={index} to={frame.path} className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${frame.gradient} opacity-0 group-hover:opacity-15 transition-opacity`} />
                <div className="relative flex items-start justify-between">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${frame.gradient} grid place-items-center shadow-lg`}>
                    <Icon size={22} />
                  </div>
                  <ChevronRight className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" size={18} />
                </div>
                <h3 className="relative mt-4 text-lg font-semibold">{frame.title}</h3>
                <p className="relative mt-2 text-sm text-slate-300">{frame.description}</p>
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm text-slate-300">Ready to experience the redesigned dashboard?</p>
            <p className="text-lg font-semibold">Jump into your main control center.</p>
          </div>
          <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-2.5 font-semibold hover:bg-slate-100 transition-colors">
            Open Dashboard
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}