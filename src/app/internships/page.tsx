import Link from "next/link";
import { Terminal, Code, Cpu, Palette, ArrowRight, CheckCircle, Zap } from "lucide-react";

export const metadata = {
  title: "Engineering Internships | Infyn Labs",
  description: "Join the elite engineering program. Real projects, production code, and cybersecurity training.",
};

const domains = [
  {
    title: "Cybersecurity Analyst",
    icon: Terminal,
    desc: "Learn offensive and defensive security. Work on VAPT, network analysis, and compliance auditing.",
    skills: ["Linux", "Networking", "Python", "Ethical Hacking"]
  },
  {
    title: "Full Stack Developer",
    icon: Code,
    desc: "Build scalable web applications using the MERN/Next.js stack. Write clean, production-grade code.",
    skills: ["React/Next.js", "Node.js", "TypeScript", "Tailwind"]
  },
  {
    title: "Backend Engineer",
    icon: Cpu,
    desc: "Architect robust APIs and database systems. Focus on performance, security, and cloud scalability.",
    skills: ["Go/Node.js", "PostgreSQL", "Docker", "AWS"]
  },
  {
    title: "UI/UX Designer",
    icon: Palette,
    desc: "Design intuitive interfaces for complex enterprise systems. Turn technical requirements into smooth user flows.",
    skills: ["Figma", "Prototyping", "Design Systems", "User Research"]
  }
];

export default function InternshipsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      
      {/* 1. HERO HEADER */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-3 py-1 mb-6 border border-brand-accent/30 rounded-full bg-brand-accent/5 text-brand-accent text-sm font-medium">
          Now Hiring: Summer & Winter Batches
        </div>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-white">
          Build Real <span className="text-brand-accent">Systems.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          This is not a coffee-run internship. You will push code to production, 
          audit real networks, and work alongside senior engineers on enterprise projects.
        </p>
      </section>

      {/* 2. WHY JOIN (The Value Prop) */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0A0A0A] border border-white/10 rounded-sm">
            <Zap className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Live Production</h3>
            <p className="text-gray-400 text-sm">You wont work on dummy projects. You work on live client systems under supervision.</p>
          </div>
          <div className="p-6 bg-[#0A0A0A] border border-white/10 rounded-sm">
            <Terminal className="w-8 h-8 text-brand-accent mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Mentorship</h3>
            <p className="text-gray-400 text-sm">Daily code reviews and architectural guidance from senior full-stack engineers.</p>
          </div>
          <div className="p-6 bg-[#0A0A0A] border border-white/10 rounded-sm">
            <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Certification</h3>
            <p className="text-gray-400 text-sm">Receive a verified Experience Certificate and Letter of Recommendation upon success.</p>
          </div>
        </div>
      </section>

      {/* 3. OPEN DOMAINS */}
      <section className="container mx-auto px-6 mb-24">
        <h2 className="font-heading text-3xl font-bold text-white mb-10">Open Domains</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {domains.map((domain, idx) => (
            <div key={idx} className="group p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all rounded-sm">
              <div className="flex items-start justify-between mb-4">
                <domain.icon className="w-10 h-10 text-white group-hover:text-brand-accent transition-colors" />
                <span className="text-xs font-mono border border-white/20 px-2 py-1 rounded text-gray-400">REMOTE / HYBRID</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{domain.title}</h3>
              <p className="text-gray-400 mb-6">{domain.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {domain.skills.map((skill) => (
                  <span key={skill} className="text-xs font-medium bg-black px-3 py-1 text-gray-300 border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. APPLICATION CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-brand-accent/20 to-transparent border border-brand-accent/30 p-12 rounded-sm relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-heading text-4xl font-bold text-white mb-6">Ready to Join the Lab?</h2>
            <p className="text-gray-300 mb-8 max-w-xl">
              We recruit on a rolling basis. Selection is based on a technical task, not just your resume. 
              Show us what you can build.
            </p>
            <button className="px-8 py-3 bg-brand-accent text-black font-bold rounded-sm hover:bg-white transition-colors flex items-center gap-2">
              Apply for Internship <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}