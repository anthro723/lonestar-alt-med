import Link from "next/link";

const services = [
  {
    title: "HRT / TRT",
    desc: "Hormone and testosterone replacement therapy tailored for men and women. Restore balance, energy, and vitality with personalized protocols.",
    icon: "heart",
  },
  {
    title: "Anti-Aging",
    desc: "Medical treatment designed to keep you biologically effective and healthy, regardless of chronological age. Turn back the clock.",
    icon: "clock",
  },
  {
    title: "Sports Medicine",
    desc: "Enhance athletic performance, accelerate recovery from injury, and prevent potential setbacks with advanced protocols.",
    icon: "bolt",
  },
  {
    title: "Extensive Labs",
    desc: "A combination of 7 in-depth test panels that measure and evaluate your body's key biomarkers for a complete health picture.",
    icon: "beaker",
  },
  {
    title: "Peptide Therapy",
    desc: "Clinically-backed peptide protocols targeting growth factors, hormones, neurotransmitters, and anti-infective pathways.",
    icon: "sparkle",
  },
  {
    title: "Thyroid Evaluations",
    desc: "Comprehensive testing to correctly and accurately measure proper thyroid function, including serum thyroid-stimulating hormone.",
    icon: "chart",
  },
  {
    title: "B-12 Injections",
    desc: "Superior absorption method for vitamin B-12, assisting your body in utilizing fat, carbohydrates, and creating new proteins.",
    icon: "fire",
  },
];

function ServiceIcon({ name }: { name: string }) {
  const cls = "w-8 h-8";
  switch (name) {
    case "heart":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case "clock":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    case "beaker":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A47.78 47.78 0 0112 20.5a47.78 47.78 0 01-3.135-.197c-1.717-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      );
    case "sparkle":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      );
    case "fire":
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
      );
    default:
      return null;
  }
}

const differentiators = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "No obligation, no pressure. Speak with our hormone specialists to understand your options before committing to anything.",
  },
  {
    number: "02",
    title: "Flat-Rate Pricing",
    desc: "$150 per visit with insurance billing available for laboratory work. No surprise fees, no hidden costs.",
  },
  {
    number: "03",
    title: "Direct-to-Door Delivery",
    desc: "All prescriptions shipped directly to you in discreet packaging. Convenient at-home treatment on your schedule.",
  },
  {
    number: "04",
    title: "Telemedicine Available",
    desc: "Can't make it in? Virtual appointments available for both new and existing patients. Same expert care, from anywhere.",
  },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section data-review-section="hero" className="review-note relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-navy-dark">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 texture-overlay opacity-40" />
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-1/3 left-[16%] w-72 h-72 rounded-full bg-navy-light/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 border border-gold/20 rounded-full px-5 py-2 mb-8 bg-white/5 backdrop-blur-sm">
            <span className="text-gold text-sm">★</span>
            <span className="text-cream/70 text-sm tracking-wider uppercase">
              Dallas-Fort Worth
            </span>
            <span className="text-gold text-sm">★</span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up-delay-1 font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Reclaim Your
            <br />
            <span className="gold-shimmer">Vitality</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Personalized hormone optimization, anti-aging therapy, and wellness
            services. Experience the difference between knowledge and marketing
            hype.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#get-started" className="btn-gold text-sm">
              Schedule Free Consultation
            </Link>
            <Link href="/services" className="btn-outline text-sm">
              Explore Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up-delay-3 mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <p className="text-gold font-heading text-2xl font-bold">Free</p>
              <p className="text-cream/40 text-xs uppercase tracking-wider mt-1">
                Consultation
              </p>
            </div>
            <div>
              <p className="text-gold font-heading text-2xl font-bold">$150</p>
              <p className="text-cream/40 text-xs uppercase tracking-wider mt-1">
                Per Visit
              </p>
            </div>
            <div>
              <p className="text-gold font-heading text-2xl font-bold">M + F</p>
              <p className="text-cream/40 text-xs uppercase tracking-wider mt-1">
                Men &amp; Women
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section data-review-section="services-grid" className="review-note py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Our Expertise</p>
            <h2 className="font-heading text-4xl md:text-5xl text-navy mb-4">
              Comprehensive Wellness Services
            </h2>
            <div className="star-divider max-w-xs mx-auto mt-6 mb-4">
              <span className="text-gold">★</span>
            </div>
            <p className="text-slate-light max-w-2xl mx-auto">
              From hormone replacement to advanced peptide therapy, we offer a full spectrum of
              services designed to optimize your health at every stage of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.slice(0, 6).map((service) => (
              <div key={service.title} className="service-card bg-white rounded-lg p-8 border border-cream-dark/80 group">
                <div className="w-14 h-14 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-6 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-300">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="font-heading text-xl text-navy mb-3">{service.title}</h3>
                <p className="text-slate-light text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* B-12 card centered */}
          <div className="max-w-md mx-auto">
            <div className="service-card bg-white rounded-lg p-8 border border-cream-dark/80 group">
              <div className="w-14 h-14 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-6 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-300">
                <ServiceIcon name={services[6].icon} />
              </div>
              <h3 className="font-heading text-xl text-navy mb-3">{services[6].title}</h3>
              <p className="text-slate-light text-sm leading-relaxed">{services[6].desc}</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-gold">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
      <section data-review-section="why-choose-us" className="review-note py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">The Lonestar Difference</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">Why Choose Us</h2>
            <div className="star-divider max-w-xs mx-auto mt-6">
              <span className="text-gold">★</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item) => (
              <div key={item.number} className="glass-card rounded-lg p-8 hover:border-gold/25 transition-all duration-300">
                <span className="text-gold/30 font-heading text-5xl font-bold">{item.number}</span>
                <h3 className="font-heading text-xl text-white mt-2 mb-3">{item.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT PREVIEW ═══════════════ */}
      <section data-review-section="about-preview" className="review-note py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: decorative visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
                <div className="absolute inset-0 texture-overlay opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-gold text-8xl">★</span>
                    <p className="text-cream/60 text-sm tracking-[0.3em] uppercase mt-4">Est. DFW</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/30 rounded-tl-lg" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/30 rounded-br-lg" />
              </div>
            </div>

            {/* Right: content */}
            <div>
              <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">About Our Practice</p>
              <h2 className="font-heading text-4xl text-navy mb-6">
                A Safe &amp; Welcoming Environment
              </h2>
              <p className="text-slate-light leading-relaxed mb-4">
                At Lonestar Alternative Medicine, patient comfort is a top priority. We understand
                that hormone replacement therapy is a sensitive and personal journey — and
                we&apos;re here to guide you every step of the way.
              </p>
              <p className="text-slate-light leading-relaxed mb-4">
                Our medical team stays current with the latest advances in hormone replacement
                therapy, utilizing the most effective and innovative treatments available. Every
                treatment plan is personalized to your unique needs and goals.
              </p>
              <p className="text-slate-light leading-relaxed mb-8">
                Whether you&apos;re dealing with menopause, andropause, or other hormone-related
                conditions, we create a supportive environment where you can take control of your
                health.
              </p>
              <Link href="/about" className="btn-gold">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROCESS PREVIEW ═══════════════ */}
      <section data-review-section="process-preview" className="review-note py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Simple Process</p>
          <h2 className="font-heading text-4xl md:text-5xl text-navy mb-4">
            Getting Started Is Easy
          </h2>
          <div className="star-divider max-w-xs mx-auto mt-6 mb-16">
            <span className="text-gold">★</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Free Consultation",
                desc: "Speak with our hormone specialists about your health goals. No obligation, completely free.",
              },
              {
                step: "2",
                title: "Comprehensive Labs",
                desc: "We run extensive bloodwork to get a complete picture of your body's needs. Insurance billing available for lab work.",
              },
              {
                step: "3",
                title: "Your Custom Plan",
                desc: "Receive a personalized treatment plan. Prescriptions shipped directly to your door in discreet packaging.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="w-16 h-16 rounded-full border-2 border-gold bg-gold/5 flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold font-heading text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="font-heading text-lg text-navy mb-2">{item.title}</h3>
                <p className="text-slate-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/what-to-expect" className="btn-gold">Learn What to Expect</Link>
          </div>
        </div>
      </section>
    </>
  );
}
