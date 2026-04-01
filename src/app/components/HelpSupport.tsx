import { useState } from "react";
import { Link } from "react-router";
import { HelpCircle, MessageCircle, Phone, Mail, Search, ArrowLeft, ChevronDown, ChevronRight, Star, Clock, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "How do I book a movie ticket?",
    answer: "Navigate to the Movies section from the dashboard, select your preferred movie, choose showtime and seats, then proceed to checkout."
  },
  {
    question: "Can I cancel my flight booking?",
    answer: "Yes, you can cancel your flight booking up to 24 hours before departure. Cancellation fees may apply depending on the airline policy."
  },
  {
    question: "How do I modify my bus/train reservation?",
    answer: "Go to your Booking History, select the booking you want to modify, and click 'Modify Booking'. Changes are subject to availability and fees."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and digital wallets. All payments are secured with SSL encryption."
  },
  {
    question: "How do I get a refund?",
    answer: "Refunds are processed automatically for cancellations made within the eligible timeframe. You'll receive an email confirmation and the amount will be credited to your original payment method within 5-7 business days."
  },
  {
    question: "Can I book multiple services at once?",
    answer: "Yes! You can add movies, flights, and transportation to your cart and checkout all at once for a seamless booking experience."
  },
];

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "Available 24/7",
    action: "Start Chat"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a representative",
    availability: "Mon-Fri 9AM-6PM EST",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "Response within 24 hours",
    action: "Send Email"
  },
];

export function HelpSupport() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"faq" | "contact" | "status">("faq");

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to SpotNest</span>
          </Link>
          <h1 className="text-4xl" style={{ fontWeight: 800 }}>
            SpotNest Help & Support
          </h1>
          <div className="w-24" />
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#007FFF] to-[#007FFF]/80 text-white rounded-3xl p-8 mb-8"
        >
          <div className="text-center">
            <HelpCircle size={64} className="mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
              How can we help you today?
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Find answers to common questions or get in touch with our support team
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {[
            { id: "faq", label: "FAQ", icon: HelpCircle },
            { id: "contact", label: "Contact Us", icon: MessageCircle },
            { id: "status", label: "System Status", icon: CheckCircle },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#007FFF] text-white shadow-lg"
                  : "bg-white/80 backdrop-blur-xl border border-white/60 text-slate-600 hover:bg-white/90"
              }`}
              style={{ fontWeight: 600 }}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-lg" style={{ fontWeight: 600 }}>
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronDown size={20} className="text-slate-400" />
                  ) : (
                    <ChevronRight size={20} className="text-slate-400" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-16">
                <Search size={48} className="mx-auto mb-4 text-slate-300" />
                <h3 className="text-xl mb-2" style={{ fontWeight: 700 }}>
                  No results found
                </h3>
                <p className="text-slate-600">
                  Try different keywords or contact our support team
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Contact Tab */}
        {activeTab === "contact" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-6 text-center"
              >
                <option.icon size={48} className="mx-auto mb-4 text-[#007FFF]" />
                <h3 className="text-xl mb-2" style={{ fontWeight: 700 }}>
                  {option.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {option.description}
                </p>
                <p className="text-sm text-slate-500 mb-6">
                  {option.availability}
                </p>
                <button className="w-full py-3 bg-[#007FFF] text-white rounded-full hover:bg-[#007FFF]/80 transition-all duration-300" style={{ fontWeight: 600 }}>
                  {option.action}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Status Tab */}
        {activeTab === "status" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle size={32} className="text-green-500" />
                <div>
                  <h3 className="text-2xl" style={{ fontWeight: 700 }}>
                    All Systems Operational
                  </h3>
                  <p className="text-slate-600">Last updated: 2 minutes ago</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { service: "Movie Booking", status: "operational" },
                  { service: "Flight Reservations", status: "operational" },
                  { service: "Bus/Train Tickets", status: "operational" },
                  { service: "Payment Processing", status: "operational" },
                  { service: "Customer Support", status: "operational" },
                ].map((service, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0">
                    <span className="font-medium">{service.service}</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${service.status === 'operational' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                      <span className="text-sm text-slate-600 capitalize">{service.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-8">
              <h3 className="text-xl mb-4" style={{ fontWeight: 700 }}>
                Recent Updates
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Payment system maintenance completed</p>
                    <p className="text-sm text-slate-600">March 28, 2024 - 2:30 PM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">New movie theater partnerships added</p>
                    <p className="text-sm text-slate-600">March 27, 2024 - 10:15 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}