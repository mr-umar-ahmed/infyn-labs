import { Terminal, Lock, Cpu, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Infyn LMS | Next Gen Cyber Training",
  description: "The world's first interactive cybersecurity learning platform with real-world attack simulations.",
};

export default function LMSPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm font-mono mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
          </span>
          SYSTEM KERNEL LOADING...
        </div>

        {/* Main Title */}
        <h1 className="font-heading text-6xl md:text-9xl font-bold text-white tracking-tighter mb-6">
          INFYN <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-600">LMS</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          The first cybersecurity training platform built on <span className="text-white">live warfare simulations</span>.
          Stop watching videos. Start hacking real servers.
        </p>

        {/* Feature Teasers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 text-left">
          <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm">
            <Terminal className="w-8 h-8 text-brand-accent mb-4" />
            <h3 className="text-white font-bold mb-1">Browser Kali Linux</h3>
            <p className="text-gray-400 text-sm">Launch a full attack VM directly in your browser. No installs.</p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm">
            <Lock className="w-8 h-8 text-brand-accent mb-4" />
            <h3 className="text-white font-bold mb-1">CTF Career Mode</h3>
            <p className="text-gray-400 text-sm">Rank up from Script Kiddie to Elite Hacker in our global leaderboard.</p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm">
            <Cpu className="w-8 h-8 text-brand-accent mb-4" />
            <h3 className="text-white font-bold mb-1">AI Red Team</h3>
            <p className="text-gray-400 text-sm">Defend your network against an AI that learns from your mistakes.</p>
          </div>
        </div>

        {/* Waitlist Form Area */}
        <div className="max-w-md mx-auto">
          <p className="text-white font-bold mb-4">Get Early Access + 50% Off</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent"
              disabled
            />
            <button className="bg-brand-accent text-black font-bold px-6 py-3 rounded-sm hover:bg-white transition-colors flex items-center gap-2 cursor-not-allowed opacity-80">
              Join Waitlist <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-3">Launching Q4 2026. Limited spots for Beta.</p>
        </div>

      </div>
    </main>
  );
}