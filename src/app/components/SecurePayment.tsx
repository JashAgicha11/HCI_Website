import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, CreditCard, Lock, Shield, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function SecurePayment() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi">("card");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1920px] mx-auto p-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/cart" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </Link>
          <h1 className="text-5xl" style={{ fontWeight: 800 }}>
            Secure Payment
          </h1>
          <div className="w-24" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Security Badges */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-[30px] border border-white/50 rounded-full shadow-lg">
              <Shield size={20} className="text-green-600" />
              <span className="text-sm" style={{ fontWeight: 600 }}>
                Norton Secured
              </span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-[30px] border border-white/50 rounded-full shadow-lg">
              <Lock size={20} className="text-blue-600" />
              <span className="text-sm" style={{ fontWeight: 600 }}>
                256-bit SSL
              </span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-[30px] border border-white/50 rounded-full shadow-lg">
              <CheckCircle2 size={20} className="text-green-600" />
              <span className="text-sm" style={{ fontWeight: 600 }}>
                PCI Compliant
              </span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-[30px] border border-white/50 rounded-3xl p-12 shadow-2xl"
          >
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setPaymentMethod("card")}
                className={`flex-1 py-4 px-6 rounded-2xl border-2 transition-all duration-300 ${
                  paymentMethod === "card"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 border-purple-600 text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
                style={{ fontWeight: 600 }}
              >
                <CreditCard size={24} className="mx-auto mb-2" />
                Credit Card
              </button>
              <button
                onClick={() => setPaymentMethod("upi")}
                className={`flex-1 py-4 px-6 rounded-2xl border-2 transition-all duration-300 ${
                  paymentMethod === "upi"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 border-purple-600 text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
                style={{ fontWeight: 600 }}
              >
                <div className="text-2xl mx-auto mb-2">📱</div>
                UPI / QR
              </button>
            </div>

            {paymentMethod === "card" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Card Number */}
                <div>
                  <label className="block text-sm mb-2 text-slate-600" style={{ fontWeight: 600 }}>
                    CARD NUMBER
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl text-lg outline-none focus:border-purple-600 transition-colors"
                    />
                    <CreditCard className="absolute right-6 top-1/2 transform -translate-y-1/2 text-slate-400" size={24} />
                  </div>
                </div>

                {/* Cardholder Name */}
                <div>
                  <label className="block text-sm mb-2 text-slate-600" style={{ fontWeight: 600 }}>
                    CARDHOLDER NAME
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl text-lg outline-none focus:border-purple-600 transition-colors"
                  />
                </div>

                {/* Expiry & CVV */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-slate-600" style={{ fontWeight: 600 }}>
                      EXPIRY DATE
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl text-lg outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-slate-600" style={{ fontWeight: 600 }}>
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      maxLength={3}
                      className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl text-lg outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* UPI ID */}
                <div>
                  <label className="block text-sm mb-2 text-slate-600" style={{ fontWeight: 600 }}>
                    UPI ID
                  </label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl text-lg outline-none focus:border-purple-600 transition-colors"
                  />
                </div>

                {/* QR Code */}
                <div className="bg-slate-50 rounded-2xl p-8 text-center">
                  <div className="w-48 h-48 bg-white border-2 border-slate-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <div className="text-6xl">📱</div>
                  </div>
                  <p className="text-sm text-slate-600">Scan QR code with any UPI app</p>
                </div>
              </motion.div>
            )}

            {/* Order Total */}
            <div className="mt-8 pt-8 border-t-2 border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl text-slate-600">Total Amount</span>
                <span className="text-4xl" style={{ fontWeight: 800 }}>
                  $350.00
                </span>
              </div>

              <Link
                to="/confirmation"
                className="block w-full py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl text-center text-xl hover:shadow-lg transition-all duration-300"
                style={{ fontWeight: 700 }}
              >
                <Lock size={20} className="inline mr-2" />
                Complete Payment
              </Link>

              <div className="mt-6 text-center text-sm text-slate-500">
                Your payment information is encrypted and secure
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
