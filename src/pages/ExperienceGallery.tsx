import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  gradient: string;
}

export function ExperienceGallery() {
  const scrollRef = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Semua', 'Gedung', 'Industri', 'Infrastruktur', 'Fasilitas Publik'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Pembangunan Gedung Perkantoran',
      category: 'Gedung',
      location: 'Sidoarjo, Jawa Timur',
      year: '2023',
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      id: 2,
      title: 'Kawasan Industri Terpadu',
      category: 'Industri',
      location: 'Bekasi, Jawa Barat',
      year: '2023',
      gradient: 'from-emerald-600 to-teal-700',
    },
    {
      id: 3,
      title: 'Renovasi Fasilitas Publik',
      category: 'Fasilitas Publik',
      location: 'Surabaya, Jawa Timur',
      year: '2022',
      gradient: 'from-amber-600 to-orange-700',
    },
    {
      id: 4,
      title: 'Pembangunan Jalan & Jembatan',
      category: 'Infrastruktur',
      location: 'Jawa Timur',
      year: '2022',
      gradient: 'from-purple-600 to-violet-700',
    },
    {
      id: 5,
      title: 'Pembangunan Gudang Logistik',
      category: 'Industri',
      location: 'Cikarang, Jawa Barat',
      year: '2023',
      gradient: 'from-cyan-600 to-blue-700',
    },
    {
      id: 6,
      title: 'Konstruksi Perumahan',
      category: 'Gedung',
      location: 'Sidoarjo, Jawa Timur',
      year: '2022',
      gradient: 'from-rose-600 to-pink-700',
    },
    {
      id: 7,
      title: 'Perbaikan Infrastruktur Drainase',
      category: 'Infrastruktur',
      location: 'Bekasi, Jawa Barat',
      year: '2021',
      gradient: 'from-sky-600 to-cyan-700',
    },
    {
      id: 8,
      title: 'Pembangunan Sarana Olahraga',
      category: 'Fasilitas Publik',
      location: 'Surabaya, Jawa Timur',
      year: '2021',
      gradient: 'from-green-600 to-emerald-700',
    },
    {
      id: 9,
      title: 'Pembangunan Workshop & Pabrik',
      category: 'Industri',
      location: 'Gresik, Jawa Timur',
      year: '2023',
      gradient: 'from-yellow-600 to-amber-700',
    },
  ];

  const filteredProjects = activeFilter === 'Semua'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div ref={scrollRef}>
      {/* Hero Banner */}
      <section className="relative bg-navy-deep hero-pattern pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-20 w-96 h-96 rounded-full bg-accent/5 animate-float" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-navy-mid/30 animate-float-delayed" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="fade-up inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">Portofolio Proyek</span>
            </span>
            <h1 className="fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Experience <span className="gradient-text">Gallery</span>
            </h1>
            <p className="fade-up delay-200 text-gray-400 text-lg max-w-2xl leading-relaxed">
              Dokumentasi pengalaman dan proyek-proyek yang telah kami kerjakan dengan 
              standar kualitas tertinggi.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 72C120 64 240 48 360 42.7C480 37.3 600 42.7 720 48C840 53.3 960 58.7 1080 56C1200 53.3 1320 42.7 1380 37.3L1440 32V80H0Z" fill="#fafaf8"/>
          </svg>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="bg-warm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="fade-up flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`fade-up delay-${(i % 3 + 1) * 100} group cursor-pointer`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`card-hover rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} relative min-h-[220px] flex items-center justify-center p-8 shadow-lg hover:shadow-2xl transition-all duration-500`}>
                  {/* Background decoration */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5 group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/[0.03] group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl" />
                  {/* Category badge */}
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>
                  {/* Year badge */}
                  <div className="absolute top-5 right-5">
                    <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/20">
                      {project.year}
                    </span>
                  </div>
                  {/* Title Only */}
                  <h3 className="relative z-10 text-white font-bold text-xl md:text-2xl text-center leading-snug drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </h3>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-white/30 group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-navy font-bold text-xl mb-2">Belum ada proyek</h3>
              <p className="text-gray-500">Proyek untuk kategori ini akan segera ditambahkan.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden transform animate-[scale-in_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`py-12 px-8 bg-gradient-to-br ${selectedProject.gradient} relative flex items-center justify-center`}>
              <h3 className="text-white font-bold text-2xl md:text-3xl text-center leading-snug drop-shadow-lg">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/40 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="bg-accent/10 text-accent text-xs font-semibold px-4 py-2 rounded-full">
                  {selectedProject.category}
                </span>
                <span className="text-gray-400 text-sm font-medium">{selectedProject.year}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {selectedProject.location}
              </div>
              <div className="pt-5 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-navy font-semibold text-sm">Status: Selesai</span>
                    <p className="text-gray-400 text-xs">Proyek telah diserahterimakan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Banner */}
      <section className="bg-navy-deep relative overflow-hidden py-20">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="fade-up text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pengalaman yang <span className="gradient-text">Berbicara</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Setiap proyek adalah bukti komitmen kami terhadap kualitas dan kepuasan klien.
            </p>
          </div>
          <div className="fade-up delay-200 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '50+', label: 'Total Proyek' },
              { val: '100%', label: 'Tingkat Penyelesaian' },
              { val: '2', label: 'Kantor Operasional' },
              { val: '4', label: 'Provinsi Jangkauan' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.val}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
