import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Lonestar Alternative Medicine",
  description:
    "Learn about Lonestar Alternative Medicine — DFW's premier hormone optimization and wellness clinic. Patient-first care with personalized treatment plans.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section data-review-section="hero" className="review-note relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-30" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Who We Are</p>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">About Us</h1>
          <div className="star-divider max-w-xs mx-auto mb-6">
            <span className="text-gold">★</span>
          </div>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Dedicated to helping the Dallas-Fort Worth community achieve optimal health through
            personalized hormone optimization and wellness services.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section data-review-section="about-mission" className="review-note py-20 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Our Mission</p>
              <h2 className="font-heading text-4xl text-navy mb-6">
                Knowledge Over Marketing Hype
              </h2>
              <p className="text-slate-light leading-relaxed mb-4">
                At Lonestar Alternative Medicine, we believe in a straightforward approach to
                healthcare. We don&apos;t rely on flashy marketing promises — we rely on science,
                comprehensive diagnostics, and personalized care that actually works.
              </p>
              <p className="text-slate-light leading-relaxed mb-4">
                Our practice was founded on the principle that everyone deserves access to
                high-quality hormone optimization and wellness services. That&apos;s why we keep
                our pricing transparent, our consultations free, and our focus squarely on your
                results.
              </p>
              <p className="text-slate-light leading-relaxed">
                Experience the difference between knowledge and marketing hype. That&apos;s not
                just a tagline — it&apos;s the standard we hold ourselves to every single day.
              </p>
            </div>

            {/* Decorative */}
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-navy to-navy-light relative overflow-hidden max-w-md mx-auto">
                <div className="absolute inset-0 texture-overlay opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-gold text-7xl">★</span>
                    <p className="text-cream/40 text-xs tracking-[0.3em] uppercase mt-4">
                      Lonestar
                    </p>
                    <p className="text-cream/40 text-xs tracking-[0.3em] uppercase">
                      Alternative Medicine
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/20 rounded-tl-lg" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/20 rounded-br-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section data-review-section="about-values" className="review-note py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Our Values</p>
            <h2 className="font-heading text-4xl text-navy mb-4">What Sets Us Apart</h2>
            <div className="star-divider max-w-xs mx-auto mt-6">
              <span className="text-gold">★</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Patient Comfort First",
                desc: "Your comfort is our top priority. We understand that hormone replacement therapy is a sensitive and personal matter. We create a safe and welcoming environment where you can openly discuss your health concerns without judgment.",
              },
              {
                title: "Expertise & Innovation",
                desc: "Our medical team stays current with the latest advances in hormone replacement therapy and wellness science. We utilize the most effective and innovative treatments available to deliver real, measurable results.",
              },
              {
                title: "Personalized Care",
                desc: "No two patients are alike. Every treatment plan we create is tailored specifically to your unique needs, biomarker data, and personal health goals. We never take a one-size-fits-all approach.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-lg p-8 border border-cream-dark service-card"
              >
                <div className="w-12 h-12 rounded-full border-2 border-gold bg-gold/5 flex items-center justify-center mb-6">
                  <span className="text-gold text-xl">★</span>
                </div>
                <h3 className="font-heading text-xl text-navy mb-3">{value.title}</h3>
                <p className="text-slate-light text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section data-review-section="conditions-we-treat" className="review-note py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Who We Help</p>
            <h2 className="font-heading text-4xl text-white mb-4">Conditions We Treat</h2>
            <div className="star-divider max-w-xs mx-auto mt-6">
              <span className="text-gold">★</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Menopause",
                desc: "Hot flashes, mood swings, sleep disruption, and other symptoms that impact quality of life during this transition.",
              },
              {
                title: "Andropause (Male Menopause)",
                desc: "Fatigue, low libido, muscle loss, brain fog, and other symptoms of declining testosterone in men.",
              },
              {
                title: "Hormonal Imbalances",
                desc: "A wide range of conditions caused by hormones being too high, too low, or out of balance with each other.",
              },
              {
                title: "Thyroid Disorders",
                desc: "Hypothyroidism, hyperthyroidism, and subclinical thyroid conditions affecting metabolism, energy, and mood.",
              },
              {
                title: "Fatigue & Low Energy",
                desc: "Persistent tiredness that doesn't improve with sleep — often rooted in hormonal, nutritional, or metabolic causes.",
              },
              {
                title: "Age-Related Decline",
                desc: "The natural but treatable decline in hormones, vitality, and biological performance that comes with aging.",
              },
            ].map((condition) => (
              <div
                key={condition.title}
                className="glass-card rounded-lg p-6 hover:border-gold/25 transition-all duration-300"
              >
                <h3 className="font-heading text-lg text-white mb-2">{condition.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{condition.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-review-section="cta-section" className="review-note py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl text-navy mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-slate-light mb-8 max-w-xl mx-auto">
            Schedule your free, no-obligation consultation and learn how personalized hormone
            optimization can change your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact#get-started" className="btn-gold">
              Schedule Free Consultation
            </Link>
            <Link href="/services" className="btn-outline !border-navy !text-navy hover:!bg-navy hover:!text-white">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
