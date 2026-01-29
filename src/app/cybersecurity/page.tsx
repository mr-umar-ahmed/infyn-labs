import Link from "next/link";
import { Shield, Search, Lock, FileCheck, Terminal, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Cybersecurity | Infyn Labs",
  description: "Enterprise-grade defensive architecture, audits, and managed security operations.",
};

const services = [
  {
    id: "audit",
    title: "Security Audit & Assessment",
    icon: Search,
    desc: "A deep-dive analysis of your current infrastructure, identifying vulnerabilities in network, cloud, and application layers.",
    deliverable: "Deliverable: Full Vulnerability Assessment Report (VAPT)",
    link: "/cybersecurity/audit"
  },
  {
    id: "pentest",
    title: "Penetration Testing",
    icon: Shield,
    desc: "Simulated cyberattacks by our Red Team to exploit weaknesses before malicious actors do.",
    deliverable: "Deliverable: Exploitation Report & Remediation Patch Plan",
    link: "/cybersecurity/pentesting"
  },
  {
    id: "mssp",
    title: "Managed Security (MSSP)",
    icon: Lock,
    desc: "24/7/365 surveillance of your digital perimeter. We detect and neutralize threats in real-time.",
    deliverable: "Deliverable: 24/7 SOC Monitoring & Monthly Incident Reports",
    link: "/cybersecurity/mssp"
  },
  {
    id: "compliance",
    title: "Compliance & Consulting",
    icon: FileCheck,
    desc: "Navigating the complexities of ISO 27001, GDPR, HIPAA, and SOC2 to ensure you are legally secure.",
    deliverable: "Deliverable: Compliance Roadmap & Audit Preparation",
    link: "/cybersecurity/compliance"
  },
  {
    id: "devsec",
    title: "Security for Developers",
    icon: Terminal,
    desc: "Integrating security directly into your CI/CD pipeline. Secure code reviews and automated scanning.",
    deliverable: "Deliverable: DevSecOps Pipeline Integration",
    link: "/cybersecurity/dev-security"
  },
  {
    id: "training",
    title: "Training & Awareness",
    icon: Users,
    desc: "Your employees are your first line of defense. We train them to recognize phishing and social engineering.",
    deliverable: "Deliverable: Workshop Sessions & Phishing Simulation Results",
    link: "/cybersecurity/training"
  }
];

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      
      {/* HEADER SECTION */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 text-white">
            Defensive <span className="text-brand-accent">Architecture</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Modern security is not about buying a firewall. It is about building a system that is 
            resilient by design. Infyn Labs provides end-to-end protection for high-value digital assets.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-mono">
             <span className="px-3 py-1 border border-white/10 rounded-full">REL: PRODUCTION</span>
             <span className="px-3 py-1 border border-white/10 rounded-full">LOC: GLOBAL</span>
             <span className="px-3 py-1 border border-white/10 rounded-full">STATUS: ACTIVE</span>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link 
              key={service.id} 
              href={service.link}
              className="group flex flex-col p-8 bg-[#0A0A0A] border border-white/10 hover:border-brand-accent/50 transition-all duration-300 rounded-sm"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-brand-accent/5 rounded-sm">
                  <service.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                  {service.deliverable}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
    </main>
  );
}