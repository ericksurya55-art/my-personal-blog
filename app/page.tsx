'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { User, Briefcase, Star, MapPin, Calendar, ArrowRight, X } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

// Data gambar contoh untuk setiap kategori portofolio (Total 6 gambar didistribusikan)
const projectImages = {
  "Design Poster": [
    { src: "https://ericksurya55-art.github.io/my-personal-blog/portofolio/konten1.jpeg", title: "Desain Poster Konser Musik" },
    { src: "https://ericksurya55-art.github.io/my-personal-blog/portofolio/konten2.jpeg", title: "Poster Grand Opening Toko" }
  ],
  "UI/UX Design": [
    { src: "https://ericksurya55-art.github.io/my-personal-blog/portofolio/konten1.jpeg", title: "Aplikasi E-Commerce Kopi" },
    { src: "https://ericksurya55-art.github.io/my-personal-blog/portofolio/konten2.jpeg", title: "Web Landing Page Travel" }
  ],
  "Content Creator": [
    { src: "https://ericksurya55-art.github.io/my-personal-blog/portofolio/konten2.jpeg", title: "Feeds Instagram Ramadhan" },
    { src: "https://ericksurya55-art.github.io/my-personal-blog/portofolio/konten1.jpeg", title: "Konten TikTok Branding" }
  ]
};

type ProjectCategory = keyof typeof projectImages;

export default function Portfolio() {
  // State untuk melacak kategori proyek mana yang sedang aktif dibuka di modal
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
        <div className="w-full max-w-full px-6 md:px-12 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent shrink-0">
            MyPersonal.
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors text-slate-200">Tentang Saya</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors text-slate-200">Portofolio</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors text-slate-200">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors text-slate-200">Contact</a>
          </div>
          <div className="md:hidden text-blue-400 cursor-pointer text-xl font-bold">☰</div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-20 overflow-hidden">
        
        {/* SECTION 1: SAYA (ABOUT) */}
        <section id="about" className="py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-slate-800 rounded-2xl overflow-hidden border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://ericksurya55-art.github.io/my-personal-blog/portofolio/konten1.jpeg" 
                alt="Profile" 
                className="object-cover rounded-xl w-full h-full" 
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              Tentang Saya
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Halo, Saya <span className="text-blue-400">Erick Surya Saputra</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-400">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>05 Februari, Surabaya</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Asal Kota: Sidoarjo</span>
              </div>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed">
              Seorang kreatif yang berfokus pada estetika digital dan fungsionalitas. Saya senang mengeksplorasi hal baru di dunia design dan teknologi.
            </p>
          </div>
        </section>

        {/* SECTION 2: PORTOFOLIO */}
        <ScrollReveal>
          <section id="portfolio" className="py-20">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <span className="w-12 h-1 bg-blue-500"></span> Portofolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Design Poster" as ProjectCategory, desc: "Visual branding & Layouting", icon: <Star /> },
                { title: "UI/UX Design" as ProjectCategory, desc: "User Interface & Experience", icon: <User /> },
                { title: "Content Creator" as ProjectCategory, desc: "Social Media Strategy", icon: <Briefcase /> },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveCategory(item.title)}
                  className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer text-left"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 mb-6">{item.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    VIEW PROJECT <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* SECTION 3: EXPERIENCE */}
        <ScrollReveal>
          <section id="experience" className="py-20">
            <h2 className="text-3xl font-bold mb-12 text-right flex items-center justify-end gap-4">
              Experience <span className="w-12 h-1 bg-blue-500"></span>
            </h2>
            <div className="space-y-6">
              {[
                { role: "Joki Design", place: "Freelance", year: "2024 - Sampai Sekarang" },
                { role: "Clothing Brand Owner", place: "Self-Employed", year: "2025 - Sampai Sekarang" },
                { role: "Ketua Divisi Kominfo", place: "Organisasi Daerah", year: "2023 - 2024" },
              ].map((exp, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl bg-gradient-to-r from-transparent to-white/5 border-r border-white/10">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                    <p className="text-slate-400">{exp.place}</p>
                  </div>
                  <div className="mt-4 md:mt-0 px-4 py-2 rounded-full bg-slate-800 text-sm font-mono border border-white/5">
                    {exp.year}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* SECTION 4: CONTACT ME */}
        <ScrollReveal>
          <section id="contact" className="py-20">
            <div className="rounded-[40px] bg-blue-600 p-10 md:p-20 text-center space-y-8 relative overflow-hidden">
              <h2 className="text-4xl md:text-5xl font-black text-white">Tertarik Bekerjasama?</h2>
              <p className="text-blue-100 text-lg max-w-xl mx-auto">
                Silakan hubungi saya melalui platform di bawah ini. Saya akan merespon secepat mungkin!
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://www.instagram.com/rcksryaa_?igsh=MXUwcjdoaDk1dDI0eA==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@upilxyz55?_r=1&_t=ZS-97ShgEqeKph" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v5.48c.01 1.89-.4 3.81-1.58 5.2-1.27 1.54-3.23 2.53-5.22 2.53-1.71.02-3.48-.48-4.84-1.6-1.44-1.2-2.22-3.09-2.1-4.98.06-1.76.76-3.47 2.04-4.71 1.37-1.35 3.39-2.09 5.32-1.9v4.03c-1.24-.15-2.49.29-3.3 1.27-.88.94-1.03 2.33-.3 3.39.73 1.07 2.13 1.56 3.32 1.15 1.1-.38 1.81-1.5 1.78-2.68V0h.01z"/></svg>
                  TikTok
                </a>
                <a href="https://wa.me/62812345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 11.966.01c3.184.001 6.177 1.242 8.426 3.496 2.249 2.254 3.487 5.252 3.486 8.44-.004 6.616-5.34 11.955-11.91 11.955-2.004-.002-3.973-.505-5.717-1.46L0 24zm6.59-4.846c1.66.986 3.288 1.481 5.316 1.483 5.43 0 9.85-4.386 9.853-9.78.002-2.613-1.015-5.07-2.864-6.92C17.043 2.083 14.59 1.06 11.97 1.061c-5.434 0-9.855 4.386-9.857 9.782-.001 1.983.518 3.926 1.503 5.614l-.993 3.634 3.732-.973z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

      </main>

      {/* DYNAMIC MODAL COMPONENT (POPUP DESIGN SHOWCASE) */}
      {activeCategory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl transition-all animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            
            {/* Header Modal */}
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <div>
                <h3 className="text-2xl font-black text-white">{activeCategory}</h3>
                <p className="text-sm text-slate-400">Hasil karya Showcase Portofolio</p>
              </div>
              <button 
                onClick={() => setActiveCategory(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Grid Image Showcase (Menampilkan gambar berdasarkan kategori aktif) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projectImages[activeCategory].map((img, index) => (
                <div key={index} className="group relative rounded-2xl overflow-hidden border border-white/5 bg-slate-800 aspect-video">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-sm tracking-wide">{img.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs text-slate-500">
              Klik di luar modal atau tombol silang untuk kembali
            </div>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 text-center text-slate-500 text-sm">
        <p>© 2026 Erick Surya Saputra</p>
      </footer>
    </div>
  );
}