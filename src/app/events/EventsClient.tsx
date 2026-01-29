"use client";

import { useState, FormEvent } from "react";
import { Calendar, MapPin, ArrowRight, Radio, X } from "lucide-react";

type EventItem = {
  id: number;
  title: string;
  type?: string;
  date: string;
  mode: string;
  desc: string;
  status?: string;
};

const upcomingEvents: EventItem[] = [
  {
    id: 1,
    title: "State Cybersecurity Hackathon 2026",
    type: "HACKATHON",
    date: "June 20-21, 2026",
    mode: "Online",
    desc: "State-level 36-hour hackathon focused on building security tools, CTFs, and real-world cyber defense solutions.",
    status: "Coming Soon"
  },
  {
    id: 2,
    title: "National Cyber Defense Hackathon 2026",
    type: "HACKATHON",
    date: "August 10-12, 2026",
    mode: "Online",
    desc: "National-level competitive hackathon with participants from across India. Prizes, certifications, and hiring opportunities.",
    status: "Coming Soon"
  },
  {
    id: 3,
    title: "Cybersecurity Trends Webinar 2026",
    type: "WEBINAR",
    date: "April 08, 2026",
    mode: "Live Webinar",
    desc: "Live session on modern cybersecurity threats, AI in security, and how to build a career in cyber.",
    status: "Registration Opens Soon"
  },
  {
    id: 4,
    title: "Cyber Builders Podcast – Season 1",
    type: "PODCAST",
    date: "November 2026",
    mode: "Spotify / YouTube",
    desc: "Weekly podcast with founders, security engineers, and AI builders talking real engineering, startups, and career moves.",
    status: "Launching Soon"
  }
];

export default function EventsClient() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const openModal = (event: EventItem) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("You're on the list. We'll notify you.");
    closeModal();
  };

  const getTypeBadge = (type?: string) => {
    if (type === "PODCAST") return "bg-purple-500 text-black";
    if (type === "WEBINAR") return "bg-blue-500 text-black";
    return "bg-brand-accent text-black";
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background text-white">

      {/* HERO */}
      <section className="container mx-auto px-6 mb-20">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
          Community <span className="text-brand-accent">Hub</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Hackathons, webinars, podcasts, and original engineering content on Cybersecurity, AI, and modern tech.
        </p>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex items-center gap-3 mb-8">
          <Radio className="w-6 h-6 text-red-500 animate-pulse" />
          <h2 className="font-heading text-3xl font-bold">Upcoming Events</h2>
        </div>

        <div className="grid gap-6">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id} 
              className="border border-brand-accent/30 bg-brand-accent/5 p-8"
            >
              <div className="flex flex-col md:flex-row gap-8 justify-between">
                <div>
                  <div className="flex gap-3 mb-3">
                    <span className={`text-xs font-bold px-2 py-1 ${getTypeBadge(event.type)}`}>
                      {event.type}
                    </span>
                    <span className="text-xs border border-white/20 px-2 py-1">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-6 max-w-2xl">{event.desc}</p>

                  <div className="flex flex-wrap gap-6 text-sm text-gray-300">
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
                  onClick={() => openModal(event)}
                  className="px-8 py-4 bg-white text-black font-bold hover:bg-brand-accent transition w-full md:w-auto flex justify-center items-center gap-2"
                >
                  Get Notified <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG ENTRY GATEWAY (MOVED DOWN) */}
      <section className="container mx-auto px-6 mb-24">
        <div className="border border-white/10 bg-[#0A0A0A] p-14 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Engineering Blog
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We publish practical articles on <span className="text-white">Cybersecurity</span>,{" "}
            <span className="text-white">AI/ML</span>, Web Development, and real-world engineering.
            No fluff. No recycled Medium posts. Just content that actually helps you build.
          </p>

          <a
            href="/blog"
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-black font-bold text-lg hover:opacity-90 transition"
          >
            View All Blogs <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* MODAL */}
      {showModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#0A0A0A] p-8 w-full max-w-md relative">
            <button onClick={closeModal} className="absolute top-4 right-4">
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-4">
              Get Notified – {selectedEvent.title}
            </h3>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <input required placeholder="Full Name" className="p-3 bg-black border border-white/10" />
              <input required type="email" placeholder="Email" className="p-3 bg-black border border-white/10" />
              <input placeholder="Mobile Number" className="p-3 bg-black border border-white/10" />
              <input placeholder="City / State" className="p-3 bg-black border border-white/10" />

              <button className="bg-brand-accent text-black font-bold py-3">
                Notify Me
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
