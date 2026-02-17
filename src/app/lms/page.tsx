"use client";

import { useState } from "react";
import { Terminal, Lock, Cpu, ArrowRight, Loader2, CheckCircle } from "lucide-react";

export default function LMSPage() {
  const [email, setEmail] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, suggestions }),
      });

      if (res.ok) setStatus("success");
      else throw new Error();
    } catch (err) {
      alert("Encryption Error: Failed to join waitlist.");
      setStatus("idle");
    }
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* ... (Previous Background Code) ... */}

      <div className="container relative z-10 px-6 text-center">
        {/* ... (Previous Badge and Title Code) ... */}

        <h1 className="font-heading text-6xl md:text-9xl font-bold text-white tracking-tighter mb-6">
          INFYN <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-600">LMS</span>
        </h1>

        {/* Form Area */}
        <div className="max-w-xl mx-auto bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-md">
          {status === "success" ? (
            <div className="py-8 animate-in fade-in zoom-in">
              <CheckCircle className="w-16 h-16 text-brand-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">ACCESS GRANTED</h3>
              <p className="text-gray-400 mt-2">You are on the list. We will contact you at {email}.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="space-y-4 text-left">
              <div>
                <label className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.2em] mb-2 block">Identity / Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hacker@infynlabs.com" 
                  className="w-full bg-black border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-all"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.2em] mb-2 block">Feature Suggestions (Optional)</label>
                <textarea 
                  value={suggestions}
                  onChange={(e) => setSuggestions(e.target.value)}
                  placeholder="What features would make this the perfect training platform for you?" 
                  className="w-full bg-black border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-accent h-24 resize-none transition-all"
                />
              </div>

              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand-accent text-black font-black py-4 rounded-sm hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>INITIALIZE EARLY ACCESS <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
              <p className="text-center text-[10px] text-gray-500 font-mono mt-4">LAUNCHING Q4 2026. SECURE YOUR SPOT.</p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}