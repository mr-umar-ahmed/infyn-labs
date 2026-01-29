"use client";

import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay in seconds
  width?: "fit-content" | "100%"; 
}

export default function ScrollReveal({ children, className = "", delay = 0, width = "fit-content" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start slightly down and invisible
      whileInView={{ opacity: 1, y: 0 }} // Animate to normal position
      viewport={{ once: true, margin: "-50px" }} // Trigger when 50px of the element is visible
      transition={{ duration: 0.6, ease: "easeOut", delay }} // Smooth ease
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}