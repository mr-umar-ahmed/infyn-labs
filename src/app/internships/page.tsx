"use client";

import { useState } from "react";
import {
  Terminal,
  Code,
  Cpu,
  Palette,
  Smartphone,
  Database,
  Brain,
  Shield,
  BarChart3,
  Cloud,
  ArrowRight,
  CheckCircle,
  Zap,
  X,
  Upload,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const domains = [
  { title: "Cybersecurity Analyst", icon: Shield, desc: "Offensive/defensive security. VAPT, pentesting, network analysis, compliance.", skills: ["Linux", "Nmap", "Python", "Metasploit"] },
  { title: "Security Operations (SOC)", icon: Shield, desc: "Real-time threat detection, incident response, SIEM monitoring, security automation.", skills: ["Splunk", "ELK Stack", "SOAR", "Threat Hunting"] },
  { title: "Full Stack Developer", icon: Code, desc: "Production web apps with Next.js stack.", skills: ["Next.js", "Node.js", "Prisma", "Tailwind"] },
  { title: "Backend Engineer", icon: Cpu, desc: "Robust APIs and cloud systems.", skills: ["Node.js", "PostgreSQL", "Docker", "Redis"] },
  { title: "Frontend Developer", icon: Palette, desc: "Modern React/Next.js UIs.", skills: ["React", "Next.js", "TypeScript", "Framer Motion"] },
  { title: "Mobile App Developer", icon: Smartphone, desc: "Cross-platform mobile apps.", skills: ["React Native", "Expo", "Swift", "Kotlin"] },
  { title: "DevOps Engineer", icon: Database, desc: "CI/CD and infrastructure.", skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions"] },
  { title: "Data Science Intern", icon: BarChart3, desc: "ML + analytics.", skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow"] },
  { title: "AI/ML Engineer", icon: Brain, desc: "Production AI systems.", skills: ["PyTorch", "HuggingFace", "FastAPI", "ONNX"] },
  { title: "UI/UX Designer", icon: Palette, desc: "Enterprise design systems.", skills: ["Figma", "Framer", "Accessibility"] },
  { title: "Blockchain Developer", icon: Shield, desc: "Smart contracts + Web3.", skills: ["Solidity", "Hardhat", "ethers.js"] },
  { title: "Cloud Engineer", icon: Cloud, desc: "Multi-cloud architecture.", skills: ["AWS", "GCP", "Terraform"] },
];

export default function InternshipsPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("role", selectedRole || "General Application");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      alert("System Error: Failed to establish uplink.");
      setStatus("idle");
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-black text-white font-sans">

      {/* HERO */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-2 mb-8 border border-brand-accent/30 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold">
          🚀 Now Hiring: Summer 2026 Batch
        </motion.div>

        <h1 className="font-bold text-5xl md:text-7xl mb-8 italic tracking-tighter">
          ELITE ENGINEERING
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
            {" "}INTERNSHIPS
          </span>
        </h1>

        <button
          onClick={() => setSelectedRole("General Application")}
          className="inline-flex items-center gap-3 px-8 py-4 bg-brand-accent text-black font-black hover:bg-white transition">
          Apply Now <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* DOMAINS */}
      <section className="container mx-auto px-6 mb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((d, i) => (
          <motion.div key={i} whileHover={{ y: -5 }}
            onClick={() => setSelectedRole(d.title)}
            className="p-8 border border-white/10 bg-[#050505] cursor-pointer">
            <d.icon className="w-10 h-10 text-brand-accent mb-4" />
            <h3 className="text-xl font-bold italic">{d.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{d.desc}</p>
            <div className="flex flex-wrap gap-2">
              {d.skills.map(s => (
                <span key={s} className="text-xs bg-white/5 px-2 py-1 border border-white/10">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedRole && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-[#0F0F0F] border border-white/10 p-8 max-w-lg w-full relative">

              <button
                onClick={() => { setSelectedRole(null); setStatus("idle"); }}
                className="absolute top-4 right-4 text-gray-500 hover:text-white">
                <X />
              </button>

              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-brand-accent mx-auto mb-4" />
                  <h2 className="text-2xl font-bold italic uppercase">Application Submitted</h2>
                  <p className="text-gray-500 mt-2">We’ll contact you soon.</p>
                </div>
              ) : (

                /* ===== NEW SCREENING FORM ===== */

                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h2 className="text-xl font-bold italic uppercase">
                        Candidate Screening: {selectedRole}
                      </h2>
                      <p className="text-brand-accent text-[9px] font-mono uppercase">
                        Security Clearance: Level 1 Required
                      </p>
                    </div>

                    <div className="hidden sm:block text-right">
                      <p className="text-gray-600 text-[9px] font-mono uppercase">
                        Ref: INF-{Math.random().toString(36).substring(2, 11).toUpperCase()}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="name" required placeholder="LEGAL FULL NAME"
                      className="bg-black border border-white/10 p-3 text-xs font-mono text-white" />
                    <input name="email" type="email" required placeholder="OFFICIAL EMAIL"
                      className="bg-black border border-white/10 p-3 text-xs font-mono text-white" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="linkedin" type="url" required placeholder="LINKEDIN PROFILE URL"
                      className="bg-black border border-white/10 p-3 text-xs font-mono text-white" />
                    <input name="github" type="url" placeholder="PORTFOLIO / GITHUB"
                      className="bg-black border border-white/10 p-3 text-xs font-mono text-white" />
                  </div>

                  <div>
                    <label className="text-[9px] font-mono text-gray-500 ml-1">
                      EARLIEST JOINING DATE
                    </label>
                    <input name="startDate" type="date" required
                      className="bg-black border border-white/10 p-3 text-xs font-mono text-white w-full" />
                  </div>

                  <textarea name="message" rows={3}
                    placeholder="STATEMENT OF PURPOSE (Why Infyn Labs?)"
                    className="w-full bg-black border border-white/10 p-3 text-xs font-mono text-white resize-none" />

                  <div className="border-2 border-dashed border-white/5 p-6 text-center group">
                    <input name="resume" type="file" required accept=".pdf"
                      className="hidden" id="resume-upload" />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <Upload className="w-6 h-6 mx-auto text-gray-600 mb-2 group-hover:text-brand-accent" />
                      <p className="text-[9px] font-mono text-gray-500 uppercase">
                        Attach CV/Resume (PDF)
                      </p>
                    </label>
                  </div>

                  <button
                    disabled={status === "loading"}
                    className="w-full bg-brand-accent text-black font-black py-4 text-xs flex justify-center gap-3 disabled:opacity-50">
                    {status === "loading"
                      ? <Loader2 className="animate-spin w-4 h-4" />
                      : "FINALIZE_APPLICATION_SUBMISSION"}
                  </button>

                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
