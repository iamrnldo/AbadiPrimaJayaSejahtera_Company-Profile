import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function VisiMisi() {
  const scrollRef = useScrollAnimation();

  const misiItems = [
    {
      num: '01',
      title: 'Kualitas Terbaik',
      desc: 'Menyediakan jasa konstruksi berkualitas tinggi dengan mengutamakan standar mutu, keselamatan, dan ketepatan waktu dalam setiap proyek.',
    },
    {
      num: '02',
      title: 'Inovasi Berkelanjutan',
      desc: 'Menerapkan teknologi dan metode konstruksi modern untuk meningkatkan efisiensi dan efektivitas pelaksanaan proyek.',
    },
    {
      num: '03',
      title: 'SDM Profesional',
      desc: 'Mengembangkan sumber daya manusia yang kompeten, profesional, dan memiliki integritas tinggi.',
    },
    {
      num: '04',
      title: 'Kepuasan Klien',
      desc: 'Membangun hubungan jangka panjang dengan klien melalui pelayanan yang responsif, transparan, dan berorientasi pada kepuasan.',
    },
    {
      num: '05',
      title: 'Kontribusi Nasional',
      desc: 'Berkontribusi aktif dalam pembangunan infrastruktur nasional untuk mendukung pertumbuhan ekonomi Indonesia.',
    },
    {
      num: '06',
      title: 'Keselamatan Kerja',
      desc: 'Mengutamakan keselamatan dan kesehatan kerja (K3) di setiap tahap pelaksanaan proyek sebagai prioritas utama.',
    },
  ];

  const values = [
    { icon: '🎯', title: 'Integritas', desc: 'Jujur dan bertanggung jawab' },
    { icon: '⭐', title: 'Profesionalisme', desc: 'Standar kerja tertinggi' },
    { icon: '🤝', title: 'Kolaborasi', desc: 'Kerjasama tim yang solid' },
    { icon: '🔧', title: 'Inovasi', desc: 'Terus berinovasi dan berkembang' },
  ];

  return (
    <div ref={scrollRef}>
      {/* Hero Banner */}
      <section className="relative bg-navy-deep hero-pattern pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent/5 animate-float" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-navy-mid/30 animate-float-delayed" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="fade-up inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">Arah & Tujuan</span>
            </span>
            <h1 className="fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Visi & <span className="gradient-text">Misi</span>
            </h1>
            <p className="fade-up delay-200 text-gray-400 text-lg max-w-2xl leading-relaxed">
              Panduan dan arah perusahaan dalam mewujudkan kontribusi nyata bagi 
              kemajuan infrastruktur Indonesia.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 72C120 64 240 48 360 42.7C480 37.3 600 42.7 720 48C840 53.3 960 58.7 1080 56C1200 53.3 1320 42.7 1380 37.3L1440 32V80H0Z" fill="#fafaf8"/>
          </svg>
        </div>
      </section>

      {/* Visi Section */}
      <section className="bg-warm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-left">
              <div className="relative">
                <div className="bg-gradient-to-br from-navy to-navy-mid rounded-3xl p-12 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-36 h-36 bg-accent/3 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-transparent" />
                  
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mb-8">
                      <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Visi Kami</h3>
                    <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
                      "Menjadi perusahaan konstruksi terdepan dan terpercaya di Indonesia yang 
                      memberikan kontribusi nyata dalam pembangunan infrastruktur yang berkualitas, 
                      berkelanjutan, dan bermanfaat bagi masyarakat."
                    </p>
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center animate-float">
                  <span className="text-2xl">🏗️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-navy-mid/50 border border-white/10 flex items-center justify-center animate-float-delayed">
                  <span className="text-xl">🌟</span>
                </div>
              </div>
            </div>

            <div className="fade-right">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">Pandangan Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6 leading-tight">
                Visi untuk <span className="gradient-text">Masa Depan</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Visi kami mencerminkan tekad PT Abadi Primajaya Sejahtera untuk menjadi pemimpin 
                dalam industri konstruksi Indonesia. Kami percaya bahwa infrastruktur yang berkualitas 
                adalah fondasi dari kemajuan bangsa.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Dengan komitmen terhadap keberlanjutan dan inovasi, kami berupaya untuk terus 
                meningkatkan standar industri dan memberikan dampak positif bagi masyarakat 
                melalui setiap proyek yang kami kerjakan.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="bg-cream rounded-xl p-4 border border-gray-200/50 card-hover">
                    <span className="text-2xl mb-2 block">{v.icon}</span>
                    <h4 className="text-navy font-bold text-sm">{v.title}</h4>
                    <p className="text-gray-500 text-xs mt-1">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="fade-up inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Langkah Kami</span>
            <h2 className="fade-up delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep mb-6">
              Misi <span className="gradient-text">Perusahaan</span>
            </h2>
            <p className="fade-up delay-200 text-gray-600 max-w-2xl mx-auto text-lg">
              Langkah-langkah strategis yang kami jalankan untuk mewujudkan visi perusahaan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {misiItems.map((item, i) => (
              <div
                key={i}
                className={`fade-up delay-${(i % 3 + 1) * 100} card-hover bg-white rounded-2xl p-8 border border-gray-100 group relative overflow-hidden`}
              >
                {/* Number background */}
                <span className="absolute -top-4 -right-4 text-8xl font-bold text-navy/3 select-none group-hover:text-accent/10 transition-colors duration-500">
                  {item.num}
                </span>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300">
                    <span className="text-accent font-bold text-lg group-hover:text-white transition-colors duration-300">{item.num}</span>
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <section className="bg-navy-deep relative overflow-hidden py-24">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="fade-up text-3xl md:text-4xl font-bold text-white mb-6">
            Komitmen Kami terhadap <span className="gradient-text">Mutu & Keselamatan</span>
          </h2>
          <p className="fade-up delay-100 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Dengan semangat profesionalisme dan komitmen tinggi terhadap mutu serta keselamatan kerja, 
            PT Abadi Primajaya Sejahtera terus memperkuat eksistensinya sebagai mitra konstruksi 
            terpercaya di Indonesia.
          </p>
          <div className="fade-up delay-200 mt-10 flex justify-center gap-8 flex-wrap">
            {[
              { val: 'ISO', label: 'Standar Mutu' },
              { val: 'K3', label: 'Keselamatan Kerja' },
              { val: 'SOP', label: 'Prosedur Terstandar' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                  <span className="text-accent font-bold text-lg">{item.val}</span>
                </div>
                <span className="text-gray-400 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
