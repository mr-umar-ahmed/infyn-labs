import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-heading text-2xl font-bold tracking-tighter text-white block mb-6">
              INFYN <span className="text-brand-accent">LABS</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Cybersecurity-first technology company building secure digital systems for the modern enterprise.
            </p>
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Infyn Labs. All rights reserved.
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/cybersecurity" className="hover:text-brand-accent transition-colors">Cybersecurity Audit</Link></li>
              <li><Link href="/cybersecurity/pentesting" className="hover:text-brand-accent transition-colors">Penetration Testing</Link></li>
              <li><Link href="/software" className="hover:text-brand-accent transition-colors">Custom Software</Link></li>
              <li><Link href="/software" className="hover:text-brand-accent transition-colors">ERP Solutions</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/internships" className="hover:text-brand-accent transition-colors">Internships</Link></li>
              <li><Link href="/events" className="hover:text-brand-accent transition-colors">Events & Workshops</Link></li>
              {/* Note: We intentionally do not have an About or Contact page, per instructions */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}