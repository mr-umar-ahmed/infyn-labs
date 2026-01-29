import { Calendar, MapPin, Clock, ArrowRight, Video, Radio } from "lucide-react";

export const metadata = {
  title: "Events & Hackathons | Infyn Labs",
  description: "Join the cybersecurity community. Hackathons, workshops, and tech talks.",
};

const upcomingEvents = [
  {
    id: 1,
    title: "Global Cyber Hackathon 2025",
    type: "HACKATHON",
    date: "March 15-17, 2025",
    mode: "Hybrid (Online + Bangalore)",
    desc: "48-hour Capture The Flag (CTF) challenge. Test your skills against the best red teamers in the country.",
    status: "Registration Open"
  },
  {
    id: 2,
    title: "Zero Trust Architecture Workshop",
    type: "WORKSHOP",
    date: "April 05, 2025",
    mode: "Live Stream",
    desc: "A deep dive into implementing Zero Trust principles in cloud-native environments. Led by our CTO.",
    status: "Slots Filling Fast"
  }
];

const pastEvents = [
  {
    id: 3,
    title: "Secure Coding Bootcamp",
    date: "Jan 10, 2025",
    mode: "University Campus",
    desc: "Trained 200+ students on OWASP Top 10 vulnerabilities."
  },
  {
    id: 4,
    title: "AI in Cybersecurity Talk",
    date: "Dec 12, 2024",
    mode: "Webinar",
    desc: "Panel discussion on how LLMs are changing the threat landscape."
  }
];

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      
      {/* 1. HERO HEADER */}
      <section className="container mx-auto px-6 mb-20">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white">
          Community <span className="text-brand-accent">Hub</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          We believe in open knowledge. Infyn Labs hosts regular events to foster the next generation of security engineers.
        </p>
      </section>

      {/* 2. UPCOMING EVENTS */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex items-center gap-3 mb-8">
          <Radio className="w-6 h-6 text-red-500 animate-pulse" />
          <h2 className="font-heading text-3xl font-bold text-white">Upcoming Events</h2>
        </div>

        <div className="grid gap-6">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id} 
              className="group border border-brand-accent/30 bg-brand-accent/5 p-8 rounded-sm relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[50px] rounded-full" />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
                
                {/* Event Info */}
                <div>
                  <div className="flex gap-3 mb-3">
                    <span className="text-xs font-bold bg-brand-accent text-black px-2 py-1 rounded-sm">
                      {event.type}
                    </span>
                    <span className="text-xs font-medium border border-white/20 text-white px-2 py-1 rounded-sm">
                      {event.status}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{event.title}</h3>
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

                {/* Register Button */}
                <button className="px-8 py-4 bg-white text-black font-bold hover:bg-brand-accent transition-colors w-full md:w-auto flex justify-center items-center gap-2">
                  Register Now <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PAST EVENTS */}
      <section className="container mx-auto px-6">
        <h2 className="font-heading text-2xl font-bold text-gray-500 mb-8">Past Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pastEvents.map((event) => (
            <div key={event.id} className="p-6 border border-white/5 bg-[#0A0A0A] opacity-70 hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{event.desc}</p>
              <div className="flex gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {event.date}</span>
                <span className="flex items-center gap-1"><Video className="w-3 h-3"/> {event.mode}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}