"use client";

import { useState } from "react";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: string; // e.g. "Penetration Testing" or "Internship"
}

export default function ContactModal({ isOpen, onClose, defaultInterest = "General Inquiry" }: ContactModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: defaultInterest,
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // SIMULATION: In a real app, you would fetch() to an API here.
    // We simulate a 2-second network request.
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Submitted:", formData);
    setLoading(false);
    setSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setSuccess(false);
      onClose();
      setFormData({ name: "", email: "", interest: "", message: "" });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      >
        {/* Modal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-[#0F0F0F] border border-white/10 w-full max-w-lg rounded-sm overflow-hidden shadow-2xl relative"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-2">Initialize Contact</h2>
            <p className="text-gray-400 text-sm mb-6">Our engineers will analyze your request and respond within 24 hours.</p>

            {success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-white">Transmission Received.</h3>
                <p className="text-gray-400 mt-2">Stand by for response.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">Identity / Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-brand-accent rounded-sm transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">Communication Channel / Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-brand-accent rounded-sm transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Interest (Pre-filled) */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">Target Protocol</label>
                  <input 
                    type="text" 
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full bg-brand-accent/5 border border-brand-accent/20 text-brand-accent p-3 font-medium rounded-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">Parameters / Message</label>
                  <textarea 
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-brand-accent rounded-sm transition-colors"
                    placeholder="Tell us about your infrastructure needs..."
                  />
                </div>

                {/* Submit Button */}
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full bg-white text-black font-bold py-4 rounded-sm hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>Processing <Loader2 className="w-4 h-4 animate-spin" /></>
                  ) : (
                    <>Initiate Uplink <Send className="w-4 h-4" /></>
                  )}
                </button>

              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}