// src/app/cybersecurity/[slug]/page.tsx
import { cyberServices } from "@/src/lib/serviceData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Target, ShieldAlert } from "lucide-react";

// This tells Next.js to pre-build these pages
export async function generateStaticParams() {
  return Object.keys(cyberServices).map((slug) => ({
    slug: slug,
  }));
}

export default function ServiceTemplate({ params }: { params: { slug: string } }) {
  const service = cyberServices[params.slug];

  // If page doesn't exist, show 404
  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      
      {/* HEADER */}
      <section className="container mx-auto px-6 mb-20">
        <Link href="/cybersecurity" className="text-sm text-brand-accent hover:underline mb-6 inline-block">
           &larr; Back to Services
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-lg">
             <Icon className="w-8 h-8 text-brand-accent" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
            {service.title}
          </h1>
        </div>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed border-l-2 border-brand-accent pl-6">
          {service.heroText}
        </p>
      </section>

      {/* DETAILS GRID */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#0A0A0A] border border-white/10">
            <ShieldAlert className="w-8 h-8 text-gray-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">What is it?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.whatIsIt}</p>
          </div>
          <div className="p-8 bg-[#0A0A0A] border border-white/10">
            <Target className="w-8 h-8 text-gray-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Who is it for?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.whoIsItFor}</p>
          </div>
          <div className="p-8 bg-[#0A0A0A] border border-white/10">
            <AlertTriangle className="w-8 h-8 text-gray-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Why it matters</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.whyItMatters}</p>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="container mx-auto px-6">
        <h2 className="font-heading text-3xl font-bold text-white mb-10">Deliverables</h2>
        <div className="grid gap-6">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start p-6 bg-white/5 border border-white/10 rounded-sm">
              <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}