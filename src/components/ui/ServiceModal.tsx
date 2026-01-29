"use client";

import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceData {
  title: string;
  icon: LucideIcon;
  whatIsIt: string;
  whoIsItFor: string;
  deliverables: { title: string; desc: string }[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceData | null;
  onRequestScope?: () => void; // <--- NEW PROP
}

export default function ServiceModal({ isOpen, onClose, service, onRequestScope }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  const Icon = service.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0A0A0A] border border-brand-accent/30 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm relative shadow-[0_0_50px_rgba(0,240,255,0.1)]"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-lg">
                <Icon className="w-8 h-8 text-brand-accent" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-white">{service.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8 border-b border-white/10 pb-8">
              <div>
                <h4 className="text-brand-accent font-bold mb-2 text-sm uppercase tracking-wider">What is it?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{service.whatIsIt}</p>
              </div>
              <div>
                <h4 className="text-brand-accent font-bold mb-2 text-sm uppercase tracking-wider">Who is it for?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{service.whoIsItFor}</p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-bold text-white mb-4">What You Get</h3>
              <div className="grid gap-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 bg-white/5 border border-white/5 rounded-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">{item.title}</strong>
                      <span className="text-gray-500 text-xs">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button 
                onClick={onRequestScope} // <--- CLICK HANDLER ADDED
                className="w-full md:w-auto px-8 py-3 bg-brand-accent text-black font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                Request Scope <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}