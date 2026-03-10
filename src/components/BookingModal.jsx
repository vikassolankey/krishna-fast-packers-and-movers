import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">Book Your Move</h2>
                  <p className="text-gray-400 text-sm">Fill in the details for a free quote</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Mobile</label>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Pickup Location</label>
                  <input
                    type="text"
                    placeholder="From City"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Destination Location</label>
                  <input
                    type="text"
                    placeholder="To City"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Move Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all appearance-none">
                    <option className="bg-slate-900">Household Shifting</option>
                    <option className="bg-slate-900">Office Shifting</option>
                    <option className="bg-slate-900">Car/Bike Transport</option>
                    <option className="bg-slate-900">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 mt-4"
                >
                  <Send size={18} />
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
