import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  gradient: string;
}

const ALL_CATEGORY = "Semua";

export function ExperienceGallery() {
  const scrollRef = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState<string>(ALL_CATEGORY);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    ALL_CATEGORY,
    "Gedung",
    "Industri",
    "Infrastruktur",
    "Fasilitas Publik",
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Pembangunan Gedung Perkantoran",
      category: "Gedung",
      location: "Sidoarjo, Jawa Timur",
      year: "2023",
      gradient: "from-blue-600 to-indigo-700",
    },
    {
      id: 2,
      title: "Kawasan Industri Terpadu",
      category: "Industri",
      location: "Bekasi, Jawa Barat",
      year: "2023",
      gradient: "from-emerald-600 to-teal-700",
    },
    {
      id: 3,
      title: "Renovasi Fasilitas Publik",
      category: "Fasilitas Publik",
      location: "Surabaya, Jawa Timur",
      year: "2022",
      gradient: "from-amber-600 to-orange-700",
    },
    {
      id: 4,
      title: "Pembangunan Jalan & Jembatan",
      category: "Infrastruktur",
      location: "Jawa Timur",
      year: "2022",
      gradient: "from-purple-600 to-violet-700",
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_CATEGORY) return projects;
    return projects.filter(
      (project) =>
        project.category.toLowerCase() === activeFilter.toLowerCase(),
    );
  }, [activeFilter]);

  return (
    <div ref={scrollRef}>
      {/* ================= HERO BANNER (TETAP ADA) ================= */}
      <section className="relative bg-navy-deep hero-pattern pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-20 w-96 h-96 rounded-full bg-accent/5 animate-float" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-navy-mid/30 animate-float-delayed" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="fade-up inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">
                Portofolio Proyek
              </span>
            </span>
            <h1 className="fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Experience <span className="gradient-text">Gallery</span>
            </h1>
            <p className="fade-up delay-200 text-gray-400 text-lg max-w-2xl leading-relaxed">
              Dokumentasi pengalaman dan proyek-proyek yang telah kami kerjakan
              dengan standar kualitas tertinggi.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none">
            <path
              d="M0 80L60 72C120 64 240 48 360 42.7C480 37.3 600 42.7 720 48C840 53.3 960 58.7 1080 56C1200 53.3 1320 42.7 1380 37.3L1440 32V80H0Z"
              fill="#fafaf8"
            />
          </svg>
        </div>
      </section>

      {/* ================= FILTER & GALLERY ================= */}
      <section className="bg-warm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-accent text-white shadow-lg shadow-accent/25"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Animated Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.35 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className={`rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} relative min-h-[220px] flex items-center justify-center p-8 shadow-lg`}
                  >
                    <h3 className="text-white font-bold text-xl md:text-2xl text-center">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`py-12 px-8 bg-gradient-to-br ${selectedProject.gradient}`}
              >
                <h3 className="text-white font-bold text-2xl text-center">
                  {selectedProject.title}
                </h3>
              </div>
              <div className="p-8 text-sm text-gray-500">
                {selectedProject.location} • {selectedProject.year}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
