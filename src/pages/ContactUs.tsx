import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ContactUs() {
  const scrollRef = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Kantor Pusat',
      detail: 'Berbek I No. 25, Sidoarjo, Jawa Timur',
      sub: 'Senin - Jumat: 08:00 - 17:00 WIB',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Kantor Cabang',
      detail: 'Perumahan Bumi Cikarang Makmur Blok A 17 No. 7, Bekasi, Jawa Barat',
      sub: 'Senin - Jumat: 08:00 - 17:00 WIB',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Telepon',
      detail: '082245088086 / 085707420017',
      sub: 'Tersedia pada jam kerja',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      detail: 'abadiprimajayasejahtera@yahoo.com',
      sub: 'Respon dalam 1x24 jam',
    },
  ];

  return (
    <div ref={scrollRef}>
      {/* Hero Banner */}
      <section className="relative bg-navy-deep hero-pattern pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/3 w-96 h-96 rounded-full bg-accent/5 animate-float" />
          <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-navy-mid/30 animate-float-delayed" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="fade-up inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">Hubungi Kami</span>
            </span>
            <h1 className="fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="fade-up delay-200 text-gray-400 text-lg max-w-2xl leading-relaxed">
              Kami siap membantu Anda. Hubungi kami untuk konsultasi proyek, 
              penawaran harga, atau informasi lainnya.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 72C120 64 240 48 360 42.7C480 37.3 600 42.7 720 48C840 53.3 960 58.7 1080 56C1200 53.3 1320 42.7 1380 37.3L1440 32V80H0Z" fill="#fafaf8"/>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-warm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className={`fade-up delay-${(i + 1) * 100} card-hover bg-white rounded-2xl p-6 border border-gray-100 group`}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>
                <h3 className="text-navy font-bold text-base mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-1">{info.detail}</p>
                <p className="text-gray-400 text-xs">{info.sub}</p>
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 fade-left">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">Kirim Pesan</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-8 leading-tight">
                Ada Pertanyaan? <span className="gradient-text">Hubungi Kami</span>
              </h2>

              {submitted && (
                <div className="mb-6 bg-accent/10 border border-accent/20 rounded-xl p-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-accent font-medium text-sm">Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy font-semibold text-sm mb-2">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-semibold text-sm mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy font-semibold text-sm mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-semibold text-sm mb-2">Subjek *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="konsultasi">Konsultasi Proyek</option>
                      <option value="penawaran">Permintaan Penawaran</option>
                      <option value="kerjasama">Kerjasama Bisnis</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-navy font-semibold text-sm mb-2">Pesan *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm resize-none"
                    placeholder="Tuliskan pesan atau kebutuhan Anda..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Kirim Pesan
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 fade-right">
              <div className="bg-gradient-to-br from-navy to-navy-mid rounded-3xl p-8 sticky top-32">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/3 rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-light p-2 mb-6">
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
                  
                  <h3 className="text-white font-bold text-xl mb-2">PT Abadi Primajaya Sejahtera</h3>
                  <p className="text-accent text-sm font-medium mb-6">General Contractor & Supplier</p>
                  
                  <div className="h-px bg-white/10 mb-6" />
                  
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Jam Operasional</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Senin - Jumat</span>
                          <span className="text-accent font-medium">08:00 - 17:00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Sabtu</span>
                          <span className="text-accent font-medium">08:00 - 12:00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Minggu</span>
                          <span className="text-gray-500 font-medium">Tutup</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div>
                      <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Hubungi Langsung</h4>
                      <a
                        href="https://wa.me/6282245088086"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-green-600/20 hover:bg-green-600/30 border border-green-500/20 rounded-xl p-4 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-semibold text-sm block">Chat WhatsApp</span>
                          <span className="text-gray-400 text-xs">Respon cepat</span>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        href="mailto:abadiprimajayasejahtera@yahoo.com"
                        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-white font-semibold text-sm block">Kirim Email</span>
                          <span className="text-gray-400 text-xs">Respon 1x24 jam</span>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="fade-up inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Lokasi Kami</span>
            <h2 className="fade-up delay-100 text-3xl md:text-4xl font-bold text-navy-deep">
              Temukan <span className="gradient-text">Kantor Kami</span>
            </h2>
          </div>

          <div className="fade-up delay-200 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover">
              <div className="bg-gradient-to-br from-navy to-navy-mid p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Kantor Pusat</h3>
                    <p className="text-gray-400 text-sm">Sidoarjo, Jawa Timur</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  <div className="text-center relative z-10">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-navy font-semibold text-sm">Berbek I No. 25</p>
                    <p className="text-gray-500 text-xs">Sidoarjo, Jawa Timur</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover">
              <div className="bg-gradient-to-br from-navy to-navy-mid p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Kantor Cabang</h3>
                    <p className="text-gray-400 text-sm">Bekasi, Jawa Barat</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  <div className="text-center relative z-10">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                      </svg>
                    </div>
                    <p className="text-navy font-semibold text-sm">Bumi Cikarang Makmur</p>
                    <p className="text-gray-500 text-xs">Blok A 17 No. 7, Bekasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
