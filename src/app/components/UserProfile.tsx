import { useState } from "react";
import { Link } from "react-router";
import { User, Mail, Phone, MapPin, Calendar, Edit, ArrowLeft, Camera, Shield, Bell, CreditCard, Sparkles, Star, Award, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "security" | "preferences">("profile");

  const userData = {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    joinDate: "March 2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZSUyMG1hbnxlbnwxfHx8fDE3NzM0NzAyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-all duration-300 shadow-lg">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-5xl bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent"
            style={{ fontWeight: 900 }}
          >
            My Profile
          </motion.h1>
          <div className="w-32 flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm shadow-lg"
            >
              <Sparkles size={16} />
              <span className="font-medium">Premium</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-12 -translate-x-12 opacity-50" />

              <div className="relative z-10 text-center">
                {/* Avatar with Enhanced Styling */}
                <div className="relative inline-block mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <img
                      src={userData.avatar}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl"
                    />
                    {/* Avatar Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-md" />
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Camera size={20} />
                  </motion.button>
                </div>

                {/* Name and Status */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
                  style={{ fontWeight: 800 }}
                >
                  {userData.name}
                </motion.h2>

                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full text-sm mb-4 shadow-lg"
                >
                  <Star size={16} fill="white" />
                  <span className="font-semibold">Premium Member</span>
                  <Sparkles size={14} />
                </motion.div>

                {/* Achievement Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center gap-3 mb-6"
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                    <span className="text-xs text-slate-600 font-medium">Verified</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <Award size={20} className="text-white" />
                    </div>
                    <span className="text-xs text-slate-600 font-medium">Top User</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <span className="text-xs text-slate-600 font-medium">VIP</span>
                  </div>
                </motion.div>

                {/* User Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3 text-sm text-slate-600 mb-8"
                >
                  <div className="flex items-center gap-2 justify-center">
                    <Calendar size={16} className="text-blue-500" />
                    <span>Joined {userData.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <MapPin size={16} className="text-purple-500" />
                    <span>{userData.location}</span>
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(!isEditing)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontWeight: 600 }}
                >
                  <Edit size={18} />
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            {/* Tabs */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-8 mb-6">
              <div className="flex gap-4 mb-6">
                {[
                  { id: "profile", label: "Profile Info", icon: User },
                  { id: "security", label: "Security", icon: Shield },
                  { id: "preferences", label: "Preferences", icon: Bell },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-[#007FFF] text-white shadow-lg"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Profile Tab */}
              {activeTab === "profile" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          type="text"
                          defaultValue={userData.name}
                          disabled={!isEditing}
                          className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#007FFF] disabled:bg-slate-50 disabled:text-slate-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          type="email"
                          defaultValue={userData.email}
                          disabled={!isEditing}
                          className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#007FFF] disabled:bg-slate-50 disabled:text-slate-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          type="tel"
                          defaultValue={userData.phone}
                          disabled={!isEditing}
                          className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#007FFF] disabled:bg-slate-50 disabled:text-slate-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          type="text"
                          defaultValue={userData.location}
                          disabled={!isEditing}
                          className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#007FFF] disabled:bg-slate-50 disabled:text-slate-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Security Tab */}
              {activeTab === "security" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-50 rounded-2xl p-6">
                    <h3 className="text-lg mb-4" style={{ fontWeight: 700 }}>
                      Password & Security
                    </h3>
                    <div className="space-y-4">
                      <button className="w-full text-left px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-[#007FFF] transition-colors">
                        Change Password
                      </button>
                      <button className="w-full text-left px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-[#007FFF] transition-colors">
                        Enable Two-Factor Authentication
                      </button>
                      <button className="w-full text-left px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-[#007FFF] transition-colors">
                        Login History
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Preferences Tab */}
              {activeTab === "preferences" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-50 rounded-2xl p-6">
                    <h3 className="text-lg mb-4" style={{ fontWeight: 700 }}>
                      Notification Preferences
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Booking confirmations",
                        "Payment reminders",
                        "Travel updates",
                        "Movie recommendations",
                        "Promotional offers",
                      ].map((pref) => (
                        <label key={pref} className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="w-4 h-4 text-[#007FFF] border-slate-300 rounded focus:ring-[#007FFF]" />
                          <span className="text-slate-700">{pref}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6">
                    <h3 className="text-lg mb-4" style={{ fontWeight: 700 }}>
                      Payment Methods
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                        <div className="flex items-center gap-3">
                          <CreditCard size={20} className="text-slate-400" />
                          <div>
                            <p className="font-medium">•••• •••• •••• 4242</p>
                            <p className="text-sm text-slate-500">Expires 12/26</p>
                          </div>
                        </div>
                        <button className="text-[#007FFF] hover:underline">Edit</button>
                      </div>
                      <button className="w-full py-3 bg-white border border-slate-200 rounded-xl hover:border-[#007FFF] transition-colors">
                        + Add New Card
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}