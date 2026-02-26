import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function CompanyBackground() {
  const scrollRef = useScrollAnimation();

  const profileData = [
    { label: 'Nama Perusahaan', value: 'PT. Abadi Primajaya Sejahtera' },
    { label: 'Bidang Usaha', value: 'General Contractor & Supplier' },
    { label: 'Alamat Kantor Pusat', value: 'Berbek I No. 25, Sidoarjo, Jawa Timur' },
    { label: 'Alamat Kantor Cabang', value: 'Perumahan Bumi Cikarang Makmur Blok A 17 No. 7, Bekasi, Jawa Barat' },
    { label: 'Nomor Telepon', value: '082245088086 / 085707420017' },
    { label: 'Email', value: 'abadiprimajayasejahtera@yahoo.com' },
  ];

  const milestones = [
    { year: 'Awal', title: 'Pendirian Perusahaan', desc: 'PT Abadi Primajaya Sejahtera didirikan dengan visi menjadi mitra konstruksi terpercaya.' },
    { year: 'Berkembang', title: 'Ekspansi Layanan', desc: 'Memperluas layanan ke berbagai sektor konstruksi dan membuka kantor cabang.' },
    { year: 'Tumbuh', title: 'Proyek Skala Besar', desc: 'Menyelesaikan berbagai proyek konstruksi berskala besar di Jawa Timur dan Jawa Barat.' },
    { year: 'Saat Ini', title: 'Mitra Terpercaya', desc: 'Memperkuat eksistensi sebagai mitra konstruksi terpercaya di Indonesia.' },
  ];

  return (
    <div ref={scrollRef}>
      {/* Hero Banner */}
      <section className="relative bg-navy-deep hero-pattern pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/5 animate-float" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-navy-mid/30 animate-float-delayed" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="fade-up inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">Tentang Perusahaan</span>
            </span>
            <h1 className="fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Company <span className="gradient-text">Background</span>
            </h1>
            <p className="fade-up delay-200 text-gray-400 text-lg max-w-2xl leading-relaxed">
              Mengenal lebih dekat PT Abadi Primajaya Sejahtera, perusahaan konstruksi yang 
              berkomitmen membangun Indonesia.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 72C120 64 240 48 360 42.7C480 37.3 600 42.7 720 48C840 53.3 960 58.7 1080 56C1200 53.3 1320 42.7 1380 37.3L1440 32V80H0Z" fill="#fafaf8"/>
          </svg>
        </div>
      </section>

      {/* Company Description */}
      <section className="bg-warm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="fade-left">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">Latar Belakang</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-8 leading-tight">
                Dedikasi dalam Mendukung Kemajuan <span className="gradient-text">Infrastruktur</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  PT Abadi Primajaya Sejahtera merupakan perusahaan penyedia jasa konstruksi yang 
                  berdedikasi dalam mendukung kemajuan infrastruktur di Indonesia. Dengan mengandalkan 
                  pengalaman, keahlian teknis, serta manajemen proyek yang terencana, kami siap memberikan 
                  solusi konstruksi yang andal, efisien, dan sesuai kebutuhan klien.
                </p>
                <p>
                  Kami melayani berbagai proyek konstruksi—baik skala menengah maupun besar—meliputi 
                  pembangunan gedung, kawasan industri, fasilitas publik, dan infrastruktur sipil lainnya. 
                  Kepercayaan dan kepuasan klien selalu menjadi prioritas utama dalam setiap pekerjaan yang kami lakukan.
                </p>
                <p>
                  Melangkah dengan semangat profesionalisme dan komitmen tinggi terhadap mutu serta 
                  keselamatan kerja, PT Abadi Primajaya Sejahtera terus memperkuat eksistensinya sebagai 
                  mitra konstruksi terpercaya di Indonesia.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-accent to-transparent" />
              </div>
            </div>

            <div className="fade-right">
              <div className="bg-gradient-to-br from-navy to-navy-mid rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-light p-2">
                      <img
                        src="assets/img/logo/logo.png"
                        alt="Logo APS"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<span class="text-white font-bold text-xl flex items-center justify-center h-full">APS</span>';
                          }
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">PT Abadi Primajaya</h3>
                      <p className="text-accent">Sejahtera</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: '🏗️', label: 'Konstruksi', value: 'Gedung & Sipil' },
                      { icon: '🏭', label: 'Industri', value: 'Kawasan Terpadu' },
                      { icon: '🛣️', label: 'Infrastruktur', value: 'Jalan & Jembatan' },
                      { icon: '📦', label: 'Supplier', value: 'Material Konstruksi' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <span className="text-2xl mb-2 block">{item.icon}</span>
                        <h4 className="text-white font-semibold text-sm">{item.label}</h4>
                        <p className="text-gray-400 text-xs mt-1">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Table */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="fade-up inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Data Perusahaan</span>
            <h2 className="fade-up delay-100 text-3xl md:text-4xl font-bold text-navy-deep">
              Profil <span className="gradient-text">Perusahaan</span>
            </h2>
          </div>

          <div className="fade-up delay-200 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-navy to-navy-mid p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Informasi Perusahaan</h3>
                  <p className="text-gray-300 text-sm">Data resmi PT Abadi Primajaya Sejahtera</p>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {profileData.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-start hover:bg-accent/3 transition-colors duration-300"
                  >
                    <div className="sm:w-56 shrink-0 px-6 py-4 sm:py-5">
                      <span className="text-navy font-semibold text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item.label}
                      </span>
                    </div>
                    <div className="px-6 pb-4 sm:py-5 sm:border-l border-gray-100">
                      <span className="text-gray-600 text-sm">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="bg-warm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="fade-up inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Perjalanan Kami</span>
            <h2 className="fade-up delay-100 text-3xl md:text-4xl font-bold text-navy-deep">
              Milestone <span className="gradient-text">Perusahaan</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <div key={i} className={`fade-up delay-${(i + 1) * 100} flex gap-6 mb-8 last:mb-0`}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg shadow-accent/25">
                    {i + 1}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-accent/30 to-transparent mt-2" />
                  )}
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 card-hover flex-1 mb-2">
                  <span className="text-accent text-sm font-semibold">{milestone.year}</span>
                  <h3 className="text-navy font-bold text-lg mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
