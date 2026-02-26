import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCounter } from '../hooks/useCounter';

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}<span className="text-accent">{suffix}</span>
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}

export function Home() {
  const scrollRef = useScrollAnimation();

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M6 18V8l6-4 6 4v10M10 22v-4h4v4M10 14h.01M14 14h.01M10 10h.01M14 10h.01" />
        </svg>
      ),
      title: 'Pembangunan Gedung',
      desc: 'Konstruksi gedung komersial, perkantoran, dan perumahan dengan standar kualitas tinggi.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Kawasan Industri',
      desc: 'Pembangunan dan pengembangan kawasan industri dengan infrastruktur terpadu dan modern.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      title: 'Fasilitas Publik',
      desc: 'Pembangunan fasilitas publik seperti jembatan, jalan, dan infrastruktur sipil lainnya.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Supplier Material',
      desc: 'Penyediaan material konstruksi berkualitas tinggi untuk mendukung kelancaran proyek.',
    },
  ];

  const whyUs = [
    { title: 'Berpengalaman', desc: 'Tim profesional dengan pengalaman bertahun-tahun di bidang konstruksi.' },
    { title: 'Tepat Waktu', desc: 'Komitmen penyelesaian proyek sesuai timeline yang disepakati.' },
    { title: 'Kualitas Terjamin', desc: 'Standar mutu tinggi dalam setiap tahap pelaksanaan proyek.' },
    { title: 'Harga Kompetitif', desc: 'Penawaran harga yang bersaing tanpa mengurangi kualitas pekerjaan.' },
  ];

  return (
    <div ref={scrollRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-navy-deep hero-pattern overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/5 animate-float" />
          <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-navy-mid/30 animate-float-delayed" />
          <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-accent/3 animate-float" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(62,175,113,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(62,175,113,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="fade-up inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-sm font-medium">General Contractor & Supplier</span>
              </div>

              <h1 className="fade-up delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                Membangun
                <span className="block gradient-text">Infrastruktur</span>
                <span className="block">Indonesia</span>
              </h1>

              <p className="fade-up delay-200 text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
                PT Abadi Primajaya Sejahtera — Mitra konstruksi terpercaya dengan pengalaman, 
                keahlian teknis, dan komitmen tinggi terhadap mutu serta keselamatan kerja.
              </p>

              <div className="fade-up delay-300 flex flex-wrap gap-4">
                <Link
                  to="/company-background"
                  className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
                >
                  Tentang Kami
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="fade-right delay-300 hidden lg:block relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main card */}
                <div className="absolute inset-8 bg-gradient-to-br from-navy to-navy-mid rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-accent-light p-3 animate-pulse-glow">
                        <img
                          src="assets/img/logo/logo.png"
                          alt="Logo APS"
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = '<span class="text-white font-bold text-3xl flex items-center justify-center h-full">APS</span>';
                            }
                          }}
                        />
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-2">PT Abadi Primajaya</h3>
                      <p className="text-accent font-medium">Sejahtera</p>
                    </div>
                  </div>
                  {/* Decorative lines */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                </div>
                {/* Floating decorations */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center animate-float">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M6 18V8l6-4 6 4v10" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-2xl bg-navy-mid/50 border border-white/10 flex items-center justify-center animate-float-delayed">
                  <svg className="w-6 h-6 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 108C120 96 240 72 360 66C480 60 600 72 720 78C840 84 960 84 1080 78C1200 72 1320 60 1380 54L1440 48V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafaf8"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-warm relative -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="fade-up bg-gradient-to-r from-navy-deep to-navy rounded-3xl p-8 md:p-12 -mt-20 relative z-10 shadow-2xl border border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard value={50} suffix="+" label="Proyek Selesai" />
              <StatCard value={10} suffix="+" label="Tahun Pengalaman" />
              <StatCard value={30} suffix="+" label="Klien Puas" />
              <StatCard value={100} suffix="+" label="Tenaga Ahli" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="fade-up inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Layanan Kami</span>
            <h2 className="fade-up delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep mb-6">
              Solusi Konstruksi <span className="gradient-text">Terpadu</span>
            </h2>
            <p className="fade-up delay-200 text-gray-600 max-w-2xl mx-auto text-lg">
              Kami melayani berbagai proyek konstruksi — baik skala menengah maupun besar — 
              dengan standar kualitas tertinggi.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`fade-up delay-${(i + 1) * 100} card-hover bg-white rounded-2xl p-8 border border-gray-100 group cursor-pointer`}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-navy font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-warm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-left">
              <div className="relative">
                <div className="bg-gradient-to-br from-navy to-navy-mid rounded-3xl p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-light p-2.5 mb-8">
                      <img
                        src="assets/img/logo/logo.png"
                        alt="Logo APS"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<span class="text-white font-bold text-2xl flex items-center justify-center h-full">APS</span>';
                          }
                        }}
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Keselamatan Kerja</h4>
                          <p className="text-gray-400 text-sm">Prioritas utama kami</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Efisien & Andal</h4>
                          <p className="text-gray-400 text-sm">Solusi tepat guna</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Tim Profesional</h4>
                          <p className="text-gray-400 text-sm">Berpengalaman dan terlatih</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-right">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6 leading-tight">
                Mitra Konstruksi Terpercaya di <span className="gradient-text">Indonesia</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                PT Abadi Primajaya Sejahtera merupakan perusahaan penyedia jasa konstruksi yang 
                berdedikasi dalam mendukung kemajuan infrastruktur di Indonesia. Dengan mengandalkan 
                pengalaman, keahlian teknis, serta manajemen proyek yang terencana.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Kami siap memberikan solusi konstruksi yang andal, efisien, dan sesuai kebutuhan klien. 
                Kepercayaan dan kepuasan klien selalu menjadi prioritas utama dalam setiap pekerjaan yang kami lakukan.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="text-navy font-semibold text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/company-background"
                className="group inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all duration-300"
              >
                Selengkapnya
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-deep relative overflow-hidden py-24">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(62,175,113,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(62,175,113,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Memulai <span className="gradient-text">Proyek</span> Anda?
          </h2>
          <p className="fade-up delay-100 text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk proyek konstruksi Anda.
          </p>
          <div className="fade-up delay-200 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact-us"
              className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hubungi Kami Sekarang
            </Link>
            <Link
              to="/experience-gallery"
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Lihat Portofolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
