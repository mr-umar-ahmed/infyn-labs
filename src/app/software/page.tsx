import Link from "next/link";
import { Code2, Database, LayoutTemplate, Building2, Stethoscope, GraduationCap, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Software Solutions | Infyn Labs",
  description: "Secure-by-design software development. ERPs, Management Systems, and Custom SaaS.",
};

const softwareServices = [
  {
    id: "custom-dev",
    title: "Secure Web Development",
    icon: Code2,
    desc: "Custom high-performance web applications built on Next.js and React. Security is baked into the architecture, not added later.",
    tech: "Stack: Next.js, Node.js, PostgreSQL, Docker"
  },
  {
    id: "erp",
    title: "SME ERP Systems",
    icon: LayoutTemplate,
    desc: "Streamline your business operations with custom Enterprise Resource Planning. Inventory, HR, and Finance in one secure dashboard.",
    tech: "Features: Role-Based Access (RBAC), Audit Logs"
  },
  {
    id: "hospital",
    title: "Hospital Management",
    icon: Stethoscope,
    desc: "HIPAA-compliant platforms for patient records, appointment scheduling, and billing. Designed for data privacy and zero downtime.",
    tech: "Compliance: HIPAA Ready, HL7 Standards"
  },
  {
    id: "school",
    title: "School Management",
    icon: GraduationCap,
    desc: " comprehensive digital campuses. Student information systems, fee management, and e-learning integration.",
    tech: "Scale: Handles 10,000+ Concurrent Users"
  },
  {
    id: "cloud",
    title: "Cloud Migration & SaaS",
    icon: Database,
    desc: "Transform legacy desktop software into modern, scalable Cloud SaaS products hosted on AWS or Azure.",
    tech: "Architecture: Microservices, Kubernetes"
  },
  {
    id: "enterprise",
    title: "Enterprise Custom Solutions",
    icon: Building2,
    desc: "Bespoke software for unique business needs. If you can imagine the workflow, we can engineer the system.",
    tech: "Focus: High Availability & Security"
  }
];

export default function SoftwarePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      
      {/* HEADER SECTION */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 text-white">
            Engineering <span className="text-brand-accent">Secure Systems</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Most software agencies prioritize speed over safety. We prioritize both. 
            Infyn Labs builds robust, scalable platforms that are hardened against attacks from the first line of code.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-mono">
             <span className="px-3 py-1 border border-white/10 rounded-full">TYPE: FULL STACK</span>
             <span className="px-3 py-1 border border-white/10 rounded-full">SEC: HARDENED</span>
             <span className="px-3 py-1 border border-white/10 rounded-full">UPTIME: 99.99%</span>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {softwareServices.map((service) => (
            <div 
              key={service.id} 
              className="group flex flex-col p-8 bg-[#0A0A0A] border border-white/10 hover:border-brand-accent/50 transition-all duration-300 rounded-sm"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-white/5 rounded-sm">
                  <service.icon className="w-8 h-8 text-white group-hover:text-brand-accent transition-colors" />
                </div>
                {/* Note: We use a div here instead of a link arrow because these might be custom projects */}
                <ShieldCheck className="w-5 h-5 text-gray-700 group-hover:text-brand-accent transition-colors" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-wide group-hover:text-white transition-colors">
                  {service.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="container mx-auto px-6 mt-24">
        <div className="bg-white/5 border border-white/10 p-12 text-center rounded-sm">
          <h2 className="font-heading text-3xl font-bold mb-4 text-white">Need a Custom Solution?</h2>
          <p className="mb-8 text-gray-400 max-w-xl mx-auto">
            We don t use templates. We build systems tailored to your specific operational needs.
          </p>
          <button className="px-8 py-3 bg-white text-black font-bold rounded-sm hover:bg-brand-accent transition-colors inline-flex items-center gap-2">
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
      
    </main>
  );
}