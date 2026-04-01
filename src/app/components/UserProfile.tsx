import { Link } from "react-router";
import { User, Calendar, MapPin, Film, Plane, Settings, Heart, CreditCard, Bell, LogOut, ArrowLeft, Star, Clock } from "lucide-react";
import { motion } from "motion/react";
import { clearStaticUser, getStaticUser } from "../lib/auth";

export function UserProfile() {
  const user = getStaticUser();
  const upcomingBookings = [
    { id: 1, title: "Quantum Nexus", date: "March 15, 2026", time: "7:30 PM", location: "Cinema Galaxy, Screen 3", icon: Film, color: "from-rose-500 to-red-600" },
    { id: 2, title: "NYC -> LAX", date: "March 20, 2026", time: "8:00 AM", location: "Sky Airways", icon: Plane, color: "from-cyan-500 to-blue-600" },
  ];
  const pastBookings = [
    { id: 1, title: "Shadow Protocol", date: "Feb 28, 2026", rating: 5 },
    { id: 2, title: "Boston -> Miami", date: "Feb 15, 2026", rating: 4 },
    { id: 3, title: "Night Runner", date: "Jan 22, 2026", rating: 5 },
  ];

  return (
    <div className="min-h-screen w-full bg-[#070d1f] text-white">
      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        <div className="flex items-center justify-between mb-10">
          <Link to="/dashboard" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Dashboard</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold">My Account</h1>
          <div className="w-24" />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/[0.05] border border-white/10 rounded-3xl p-8 sticky top-8">
              <div className="text-center mb-8">
                <div className="relative inline-block mb-4">
                  <div className="w-28 h-28 bg-gradient-to-br from-cyan-500 via-violet-500 to-fuchsia-500 rounded-full grid place-items-center shadow-2xl">
                    <User size={52} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold">{user?.fullName ?? "Guest User"}</h2>
                <p className="text-slate-300 text-sm mt-1">{user?.email ?? "guest@example.com"}</p>
                <p className="text-xs text-slate-400 mt-1">Member since {user?.memberSince ?? "N/A"}</p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Star size={16} fill="#facc15" className="text-yellow-400" />
                  <span className="text-sm font-semibold">Premium Member</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { label: "Movies", value: "24" },
                  { label: "Trips", value: "8" },
                  { label: "Events", value: "12" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="text-xl font-bold">{s.value}</div>
                    <div className="text-xs text-slate-300">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[Settings, Heart, CreditCard, Bell].map((Icon, i) => (
                  <button key={i} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]">
                    <Icon size={18} className="text-slate-300" />
                    <span className="font-medium">{["Account Settings", "Favorites", "Payment Methods", "Notifications"][i]}</span>
                  </button>
                ))}
                <Link to="/" onClick={() => clearStaticUser()} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-300/20 hover:bg-rose-500/20 text-rose-300">
                  <LogOut size={18} />
                  <span className="font-medium">Sign Out</span>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-8 space-y-6">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={22} className="text-cyan-300" />
                <h3 className="text-2xl font-bold">Upcoming Bookings</h3>
              </div>
              <div className="space-y-4">
                {upcomingBookings.map((booking) => {
                  const Icon = booking.icon;
                  return (
                    <div key={booking.id} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                      <div className="flex flex-wrap items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${booking.color} grid place-items-center`}>
                          <Icon size={20} />
                        </div>
                        <div className="flex-1 min-w-[220px]">
                          <h4 className="text-xl font-semibold">{booking.title}</h4>
                          <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-300">
                            <span className="inline-flex items-center gap-1"><Calendar size={14} />{booking.date}</span>
                            <span className="inline-flex items-center gap-1"><Clock size={14} />{booking.time}</span>
                            <span className="inline-flex items-center gap-1"><MapPin size={14} />{booking.location}</span>
                          </div>
                        </div>
                        <button className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500">View Details</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-slate-300" />
                <h3 className="text-2xl font-bold">Recent Activity</h3>
              </div>
              <div className="space-y-3">
                {pastBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0">
                    <div>
                      <p className="font-medium">{booking.title}</p>
                      <p className="text-sm text-slate-300">{booking.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(booking.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#facc15" className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}