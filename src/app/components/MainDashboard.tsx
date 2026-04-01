import { useState } from "react";
import { Link } from "react-router";
import { Search, Film, Plane, ArrowLeft, Hotel, Music } from "lucide-react";
import { motion } from "motion/react";
import { getStaticUser } from "../lib/auth";

export function MainDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const user = getStaticUser();
  const quickCards = [
    { title: "Movies", subtitle: "Now showing and upcoming", icon: Film, path: "/movies", gradient: "from-rose-500 to-red-600" },
    { title: "Travel", subtitle: "Flights and smart routes", icon: Plane, path: "/travel", gradient: "from-cyan-500 to-blue-600" },
    { title: "Events", subtitle: "Concerts, sports, theatre", icon: Music, path: "/events", gradient: "from-violet-500 to-purple-600" },
    { title: "Hotels", subtitle: "Curated stays and resorts", icon: Hotel, path: "/hotels", gradient: "from-teal-500 to-cyan-600" },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#060b18] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_15%,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_95%_20%,rgba(168,85,247,0.2),transparent_38%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-10">
        <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link to="/" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/10 transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Link to={user ? "/profile" : "/login"} className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 text-sm hover:bg-white/20 transition-colors">
            {user ? `Signed in as ${user.fullName}` : "Login / Register"}
          </Link>
        </header>

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10 mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300 mb-3">Control Center</p>
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">Book experiences and travel with one professional dashboard.</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Discover the best movies, events, routes, and stays with one consistent journey from search to checkout.
          </p>

          <div className="mt-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search destinations, movies, concerts, or hotels"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-white/15 bg-[#091128] py-3.5 pl-11 pr-4 outline-none focus:border-cyan-400"
            />
          </div>
        </section>

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {quickCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.title} to={card.path} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.08] transition-colors group">
                <div className={`h-11 w-11 rounded-xl bg-gradient-to-r ${card.gradient} grid place-items-center mb-4`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{card.subtitle}</p>
              </Link>
            );
          })}
        </section>

        <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-3 gap-5">
          <Link to="/movies" className="lg:col-span-2 rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-rose-600/40 to-violet-700/40">
            <p className="text-xs uppercase tracking-[0.2em] text-rose-200 mb-2">Entertainment Focus</p>
            <h3 className="text-2xl font-bold">Curated movie releases and premium seat booking.</h3>
            <p className="text-sm text-slate-100/90 mt-2">Browse top picks and instantly continue to seat selection and payment flow.</p>
          </Link>
          <Link to="/travel" className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-cyan-600/40 to-blue-700/40">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200 mb-2">Travel Focus</p>
            <h3 className="text-xl font-bold">Smart route search.</h3>
            <p className="text-sm text-slate-100/90 mt-2">Compare options and move directly to checkout.</p>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}