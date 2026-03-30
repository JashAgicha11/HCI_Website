import { Link } from "react-router";
import { Play, Plane, Armchair, Bus, ShoppingBag, CreditCard, CheckCircle2, Film, MapPin, Sparkles, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useState, useEffect } from "react";

export function ShowcaseGrid() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      icon: Film,
      color: "mixed",
      description: "Account management & settings",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500"
    },
    {
      title: "Booking History",
      path: "/bookings",
      icon: MapPin,
      color: "mixed",
      description: "Past bookings & management",
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    },
    {
      title: "Help & Support",
      path: "/help",
      icon: CheckCircle2,
      color: "neutral",
      description: "FAQs & customer assistance",
      gradient: "from-lime-500 via-green-500 to-emerald-500"
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#DC143C] to-rose-500 rounded-full blur-[120px] opacity-30"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#007FFF] to-sky-500 rounded-full blur-[120px] opacity-30"
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-16 py-20">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8"
          >
            <Sparkles size={20} className="text-yellow-400" />
            <span className="text-white/90 text-sm" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Professional UI/UX Portfolio Showcase
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-8xl mb-6 tracking-tight bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
          >
            Entertainment
            <span className="block text-7xl mt-2">
              <span className="bg-gradient-to-r from-[#DC143C] via-purple-500 to-[#007FFF] bg-clip-text text-transparent">
                meets Travel
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl text-white/60 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            Experience the fusion of glassmorphism design and seamless booking flows
            <br />
            <span className="text-white/40 text-lg">12 meticulously crafted frames • 1920x1080 resolution</span>
          </motion.p>
        </motion.div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-3 gap-8">
          {frames.map((frame, index) => {
            const Icon = frame.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <Link
                  to={frame.path}
                  className="group relative block aspect-video rounded-3xl overflow-hidden"
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Card Background with Glassmorphism */}
                  <motion.div
                    animate={{
                      scale: activeIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden"
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${frame.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Animated Border Gradient */}
                    <motion.div
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${frame.gradient} opacity-30 blur-xl`}
                    />

                    {/* Shine Effect */}
                    <motion.div
                      animate={{
                        x: activeIndex === index ? ['-100%', '200%'] : '-100%',
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                    {/* Icon Container */}
                    <motion.div
                      animate={{
                        scale: activeIndex === index ? 1.2 : 1,
                        rotateY: activeIndex === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className={`mb-6 p-6 bg-gradient-to-br ${frame.gradient} rounded-2xl shadow-2xl`}
                    >
                      <Icon size={48} className="text-white" strokeWidth={2} />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      animate={{
                        y: activeIndex === index ? -5 : 0,
                      }}
                      className="text-3xl mb-2 text-white text-center"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
                    >
                      {frame.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      animate={{
                        opacity: activeIndex === index ? 1 : 0.6,
                      }}
                      className="text-sm text-white/60 text-center mb-4"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {frame.description}
                    </motion.p>

                    {/* Frame Number Badge */}
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white/70">
                      Frame {index + 1} / 12
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        x: activeIndex === index ? 0 : -10,
                      }}
                      className="absolute bottom-6 right-6 p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full"
                    >
                      <ChevronRight size={24} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#DC143C] rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">Entertainment Booking</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#007FFF] rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">Travel Booking</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-purple-400" />
              <span className="text-white/60 text-sm">Glassmorphism Design</span>
            </div>
          </div>
        </motion.div>
      </div>


    </div>
  );
}