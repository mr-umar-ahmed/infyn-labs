"use client";

import Link from "next/link";
import {
  Terminal, Code, Cpu, Palette, Smartphone, Database, Brain, Shield, BarChart3,
  Cloud, ArrowRight, CheckCircle, Zap
} from "lucide-react";

const domains = [
  { title: "Cybersecurity Analyst", icon: Shield, desc: "Offensive/defensive security. VAPT, pentesting, network analysis, compliance.", skills: ["Linux", "Nmap", "Python", "Metasploit"] },
  { title: "Security Operations (SOC)", icon: Shield, desc: "Real-time threat detection, incident response, SIEM monitoring, security automation.", skills: ["Splunk", "ELK Stack", "SOAR", "Threat Hunting"] },
  { title: "Full Stack Developer", icon: Code, desc: "Production web apps with Next.js stack. Clean, scalable architecture.", skills: ["Next.js", "Node.js", "Prisma", "Tailwind"] },
  { title: "Backend Engineer", icon: Cpu, desc: "Robust APIs, databases, cloud systems. Focus on performance + security.", skills: ["Node.js", "PostgreSQL", "Docker", "Redis"] },
  { title: "Frontend Developer", icon: Palette, desc: "Modern React/Next.js UIs. Component architecture + performance optimization.", skills: ["React", "Next.js", "TypeScript", "Framer Motion"] },
  { title: "Mobile App Developer", icon: Smartphone, desc: "Native + cross-platform mobile apps for iOS/Android enterprise clients.", skills: ["React Native", "Expo", "Swift", "Kotlin"] },
  { title: "DevOps Engineer", icon: Database, desc: "CI/CD pipelines, cloud infrastructure, container orchestration.", skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions"] },
  { title: "Data Science Intern", icon: BarChart3, desc: "ML models, data pipelines, statistical analysis for business insights.", skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow"] },
  { title: "AI/ML Engineer", icon: Brain, desc: "Build production AI systems. Computer vision, NLP, recommendation engines.", skills: ["PyTorch", "HuggingFace", "FastAPI", "ONNX"] },
  { title: "UI/UX Designer", icon: Palette, desc: "Enterprise design systems, user research, prototyping complex workflows.", skills: ["Figma", "Framer", "Design Tokens", "Accessibility"] },
  { title: "Blockchain Developer", icon: Shield, desc: "Smart contracts, decentralized apps, Web3 infrastructure.", skills: ["Solidity", "Hardhat", "ethers.js", "IPFS"] },
  { title: "Cloud Engineer", icon: Cloud, desc: "Multi-cloud architecture, serverless, cost optimization, security.", skills: ["AWS", "GCP", "Terraform", "Serverless"] }
];

export default function InternshipsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-black via-[#0A0A0A] to-black">
      
      {/* 1. HERO */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-2 mb-8 border border-brand-accent/30 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold">
          🚀 Now Hiring: Summer 2026 Batch (100% Remote)
        </div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
          Elite Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
            Internships
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
          Real projects. Production code. Senior mentorship.{" "}
          <strong>Stipend: ₹15K–₹35K/month.</strong>
        </p>

        <Link
          href="https://forms.gle/your-real-form"
          target="_blank"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-black font-bold text-lg rounded-lg transition-all hover:scale-105"
        >
          Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
        </Link>
      </section>

      {/* 2. BENEFITS */}
      <section className="container mx-auto px-6 mb-24">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Why Join Infyn Labs?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
            <Zap className="w-12 h-12 text-yellow-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Production Code</h3>
            <p className="text-gray-400">Deploy to live systems. No dummy projects.</p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
            <Terminal className="w-12 h-12 text-brand-accent mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">1:1 Mentorship</h3>
            <p className="text-gray-400">Daily code reviews with seniors.</p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
            <CheckCircle className="w-12 h-12 text-emerald-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Certificates</h3>
            <p className="text-gray-400">Offer letter + experience certificate + LOR.</p>
          </div>
        </div>
      </section>

      {/* 3. DOMAINS */}
      <section className="container mx-auto px-6 mb-24">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Open Positions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, idx) => (
            <div
              key={idx}
              className="p-8 border border-white/10 bg-white/5 rounded-xl"
            >
              <domain.icon className="w-12 h-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {domain.title}
              </h3>
              <p className="text-gray-400 mb-4">{domain.desc}</p>

              <div className="flex flex-wrap gap-2">
                {domain.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs bg-black/50 px-3 py-1 rounded-lg text-gray-300 border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build Real Sh*t?
        </h2>
        <p className="text-gray-400 mb-8">
          No fake internships. No resume padding. Just real engineering.
        </p>

        <Link
          href="https://forms.gle/your-real-form"
          target="_blank"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-brand-accent to-blue-500 text-black font-bold text-xl rounded-xl hover:scale-105 transition"
        >
          Apply Now <ArrowRight className="w-6 h-6" />
        </Link>
      </section>
    </main>
  );
}
