"use client";

import Image from "next/image";

const technologies = [
  { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "AWS", url: "https://cdn.simpleicons.org/amazon/FF9900" }, // <--- CHANGED from 'amazonaws' to 'amazon'
  { name: "Docker", url: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kali Linux", url: "https://cdn.simpleicons.org/kalilinux/557C94" },
  { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/47A248" },
];
export default function TechStack() {
  return (
    <section className="py-10 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
          Powering Next-Gen Infrastructure With
        </p>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="relative flex overflow-x-hidden group">
        
        {/* Gradient Masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

        {/* The Marquee Track (Repeated twice for seamless loop) */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div 
              key={index} 
              className="mx-8 md:mx-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <Image 
                src={tech.url} 
                alt={tech.name} 
                width={40} 
                height={40} 
                className="h-8 md:h-10 w-auto object-contain"
              />
              <span className="ml-3 text-lg font-bold text-gray-300 hidden md:block">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}