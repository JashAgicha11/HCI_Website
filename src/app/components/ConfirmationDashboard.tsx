import { Link } from "react-router";
import { CheckCircle2, Download, Mail, Film, Plane, Calendar, MapPin, Clock, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export function ConfirmationDashboard() {
  return (
    <div className="min-h-screen w-full bg-[#070d1f] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1920px] mx-auto p-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to SpotNest</span>
          </Link>
          <div className="w-24" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mb-6 shadow-2xl">
              <CheckCircle2 size={72} className="text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-6xl mb-4" style={{ fontWeight: 800 }}>
              SpotNest Booking Confirmed!
            </h1>
            <p className="text-xl text-slate-300">
              Your tickets have been sent to your email
            </p>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl mb-8"
          >
            <h2 className="text-3xl mb-8" style={{ fontWeight: 700 }}>
              Your Journey Timeline
            </h2>

            <div className="space-y-8">
              {/* Movie Event */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-[#DC143C] to-rose-600 rounded-2xl flex items-center justify-center">
                  <Film size={24} className="text-white" />
                </div>
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-[#DC143C] to-[#007FFF]" />

                <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-6 border border-rose-200">
                  <h3 className="text-2xl mb-3" style={{ fontWeight: 700 }}>
                    Quantum Nexus
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={16} />
                      <span>March 15, 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock size={16} />
                      <span>7:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={16} />
                      <span>Cinema Galaxy, Screen 3</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="font-semibold">Seats: A5, A6</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Travel Event */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-[#007FFF] to-sky-600 rounded-2xl flex items-center justify-center">
                  <Plane size={24} className="text-white" />
                </div>

                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-200">
                  <h3 className="text-2xl mb-3" style={{ fontWeight: 700 }}>
                    NYC → LAX Flight
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={16} />
                      <span>March 20, 2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock size={16} />
                      <span>8:00 AM - 11:30 AM</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin size={16} />
                      <span>Sky Airways</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="font-semibold">Seat: 12A</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Actions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            <button className="flex items-center justify-center gap-3 py-6 bg-gradient-to-r from-[#DC143C] via-purple-600 to-[#007FFF] text-white rounded-2xl hover:shadow-lg transition-all duration-300 text-lg" style={{ fontWeight: 700 }}>
              <Download size={24} />
              Download PDF Tickets
            </button>

            <button className="flex items-center justify-center gap-3 py-6 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-lg" style={{ fontWeight: 700 }}>
              <Mail size={24} />
              Email Tickets
            </button>
          </motion.div>

          {/* Booking Reference */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 rounded-full border border-white/15">
              <span className="text-sm text-slate-300">Booking Reference:</span>
              <span className="text-xl tracking-wider" style={{ fontWeight: 700 }}>
                BK-2026-XY789Z
              </span>
            </div>
          </motion.div>

          {/* Return to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 text-slate-300 hover:text-white transition-colors"
              style={{ fontWeight: 600 }}
            >
              Return to SpotNest Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
