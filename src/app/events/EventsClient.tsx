"use client";

import { useState } from "react";
import { Calendar, MapPin, ArrowRight, Radio, X, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Ensure type matches Sanity response exactly
type EventItem = {
  _id: string;
  title: string;
  eventType: string;
  date: string;
  mode: string;
  desc: string;
  status: string;
};

export default function EventsClient({ initialEvents }: { initialEvents: EventItem[] }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. Debug Log Function
  const handleOpen = (event: EventItem) => {
    console.log("OPENING MODAL FOR:", event.title); // <--- Check Console (F12) if this prints
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
    setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      eventTitle: selectedEvent?.title,
    };

    try {
      const res = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => closeModal(), 2500);
      } else {
        throw new Error();
      }
    } catch (err) {
      alert("System Error: Could not establish secure uplink.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTypeBadge = (type?: string) => {
    if (type === "PODCAST") return "bg-purple-500 text-black";
    if (type === "WEBINAR") return "bg-blue-500 text-black";
    return "bg-brand-accent text-black";
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-black text-white selection:bg-brand-accent selection:text-black">
      
      {/* HERO SECTION */}
      <section className="container mx-auto px-6 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-[10px] font-mono mb-6">
          [ NETWORK STATUS: ACTIVE ]
        </div>
        <h1 className="font-heading text-5xl md:text-8xl font-bold mb-6 italic tracking-tighter">
          COMMUNITY <span className="text-brand-accent">HUB</span>
        </h1>
      </section>

      {/* EVENTS GRID */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex items-center gap-3 mb-12">
          <Radio className="w-6 h-6 text-red-600 animate-pulse" />
          <h2 className="font-heading text-3xl font-bold uppercase italic tracking-widest">Live Broadcasts & Ops</h2>
        </div>

        <div className="grid gap-6">
          {initialEvents.map((event) => (
            <div 
              key={event._id} 
              className="border border-white/10 bg-[#050505] p-8 group hover:border-brand-accent/40 transition-all relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center relative z-10">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className={`text-[10px] font-black px-3 py-1 uppercase tracking-widest ${getTypeBadge(event.eventType)}`}>
                      {event.eventType}
                    </span>
                    <span className="text-[10px] border border-white/20 px-3 py-1 font-mono uppercase text-gray-500">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-3 italic tracking-tight">{event.title}</h3>
                  <p className="text-gray-500 mb-6 max-w-2xl text-sm font-mono leading-relaxed">{event.desc}</p>

                  <div className="flex flex-wrap gap-6 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-accent" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-accent" />
                      {event.mode}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleOpen(event)}
                  className="px-10 py-5 bg-white text-black font-black hover:bg-brand-accent transition-all w-full md:w-auto flex justify-center items-center gap-3 uppercase text-xs tracking-[0.2em] shadow-lg cursor-pointer z-20"
                >
                  Notify Me <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {initialEvents.length === 0 && (
             <div className="p-10 border border-white/10 text-center text-gray-500 font-mono">
                NO OPERATIONS SCHEDULED. STAND BY.
             </div>
          )}
        </div>
      </section>

      {/* MODAL - MOVED TO TOP LEVEL Z-INDEX */}
      <AnimatePresence>
        {showModal && selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[999] p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0F0F0F] border border-white/10 w-full max-w-md relative overflow-hidden shadow-2xl shadow-brand-accent/10"
            >
              <div className="p-8">
                <button 
                  onClick={closeModal} 
                  className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>

                {isSuccess ? (
                  <div className="text-center py-10 animate-in fade-in zoom-in">
                    <CheckCircle className="w-20 h-20 text-brand-accent mx-auto mb-6 animate-bounce" />
                    <h3 className="text-2xl font-bold uppercase italic tracking-tighter">Broadcast Subscribed</h3>
                    <p className="text-gray-500 font-mono text-[10px] mt-2 uppercase tracking-widest">
                      We will alert {selectedEvent.title}.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold italic uppercase tracking-tighter mb-1">
                        INITIALIZE ALERT
                      </h3>
                      <p className="text-brand-accent text-[9px] font-mono tracking-[0.3em]">
                        TARGET: {selectedEvent.title.toUpperCase()}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid gap-4">
                      <input name="name" required placeholder="IDENTITY (FULL NAME)" className="p-4 bg-black border border-white/10 outline-none focus:border-brand-accent text-xs font-mono text-white placeholder:text-gray-700 transition-colors" />
                      <input name="email" required type="email" placeholder="COMM_CHANNEL (EMAIL)" className="p-4 bg-black border border-white/10 outline-none focus:border-brand-accent text-xs font-mono text-white placeholder:text-gray-700 transition-colors" />
                      
                      <button 
                        disabled={isSubmitting}
                        className="bg-brand-accent text-black font-black py-5 flex items-center justify-center gap-3 hover:bg-white transition-all disabled:opacity-50 uppercase text-xs tracking-widest mt-4"
                      >
                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "EXECUTE_REGISTRATION"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}