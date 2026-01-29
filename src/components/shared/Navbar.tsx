"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { useState } from "react";

const navLinks = [
  { name: "Cybersecurity", path: "/cybersecurity" },
  { name: "Software", path: "/software" },
  { name: "Internships", path: "/internships" },
  { name: "Events", path: "/events" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="font-heading text-2xl font-bold tracking-tighter text-white">
            INFYN <span className="text-brand-accent">LABS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  pathname === link.path ? "text-brand-accent" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-400 hover:text-brand-accent"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}