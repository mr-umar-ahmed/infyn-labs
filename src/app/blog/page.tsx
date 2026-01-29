"use client";

import React from "react";
import { ArrowRight, Calendar, Clock, Search, Zap } from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  slug: string;
  image: string;
  featured?: boolean;
};

const IMAGES = {
  CYBER: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
  AI: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  TECH: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
};

const blogPosts: BlogPost[] = [
  { id: 1, title: "How Hackers Break Web Apps", excerpt: "A deep dive into broken object-level authorization (BOLA).", date: "Jan 10, 2026", readTime: "12 min", tag: "Security", slug: "hack-apps", image: IMAGES.CYBER, featured: true },
  { id: 2, title: "Building AI Resume Screeners", excerpt: "ML systems using vector databases for ranking resumes.", date: "Jan 18, 2026", readTime: "15 min", tag: "AI/ML", slug: "ai-resume", image: IMAGES.CYBER },
  { id: 3, title: "JWT Auth Done Right", excerpt: "Secure auth with HttpOnly cookies and refresh tokens.", date: "Jan 25, 2026", readTime: "8 min", tag: "Security", slug: "jwt-auth", image: IMAGES.AI },
  { id: 4, title: "Zero Trust Architecture", excerpt: "Why identity-aware proxies are the future of access.", date: "Feb 10, 2026", readTime: "11 min", tag: "Infrastructure", slug: "zero-trust", image: IMAGES.AI },
  { id: 5, title: "Vector Databases Explained", excerpt: "HNSW indexes and real use cases for LLM memory.", date: "Feb 20, 2026", readTime: "14 min", tag: "Data", slug: "vector-db", image: IMAGES.TECH },
  { id: 6, title: "Rust Migration Handbook", excerpt: "Rewriting core networking stacks for 40% more speed.", date: "Mar 01, 2026", readTime: "18 min", tag: "Rust", slug: "rust-migrate", image: IMAGES.TECH },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <section className="pt-24 pb-12 container mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono mb-4 border border-blue-500/20">
          <Zap size={14} /> SYSTEM LOGS ACTIVE
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">INFYN <span className="text-blue-500">BLOG</span></h1>
        <p className="text-gray-400 max-w-xl text-lg">Engineering insights and security research.</p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container mx-auto px-6 mb-16">
          <div className="group border border-white/10 bg-white/5 rounded-lg overflow-hidden grid md:grid-cols-2">
            <img src={featuredPost.image} alt="Featured" className="h-64 md:h-full w-full object-cover opacity-80 group-hover:opacity-100 transition" />
            <div className="p-8 flex flex-col justify-center">
              <span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-2">Featured Post</span>
              <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
              <div className="flex gap-4 text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-1"><Calendar size={14}/> {featuredPost.date}</span>
                <span className="flex items-center gap-1"><Clock size={14}/> {featuredPost.readTime}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
        {regularPosts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="aspect-video mb-4 overflow-hidden rounded-md border border-white/10">
              <img src={post.image} alt="" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500" />
            </div>
            <span className="text-blue-500 text-xs font-mono">{post.tag}</span>
            <h3 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition">{post.title}</h3>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
          </div>
        ))}
      </section>

      {/* Simple Newsletter Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight uppercase">Stay Synced</h2>
          <p className="text-gray-500 mb-10 max-w-md mx-auto">Get the latest attack vectors and design patterns every Friday.</p>
          <div className="flex flex-col md:flex-row justify-center gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="root@infyn.io" 
              className="bg-black border border-white/10 px-4 py-3 flex-grow rounded focus:border-blue-500 outline-none text-sm font-mono"
            />
            <button className="bg-white text-black px-8 py-3 font-bold rounded hover:bg-blue-500 hover:text-white transition uppercase text-sm">
              Join
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}