"use client";

import type { FormEvent } from "react";

export default function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you! This is a demo — in production, this form would submit to a backend.");
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Get In Touch</p>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">Contact Us</h1>
          <div className="star-divider max-w-xs mx-auto mb-6">
            <span className="text-gold">★</span>
          </div>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Have questions? Ready to schedule your free consultation? We&apos;d love to hear from
            you. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-navy mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Phone</p>
                  <a
                    href="tel:+12145550199"
                    className="text-navy font-heading text-xl hover:text-gold transition-colors"
                  >
                    (214) 555-0199
                  </a>
                </div>

                <div>
                  <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Email</p>
                  <a
                    href="mailto:info@lonestaralternativemedicine.com"
                    className="text-navy hover:text-gold transition-colors"
                  >
                    info@lonestaralternativemedicine.com
                  </a>
                </div>

                <div>
                  <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Location</p>
                  <p className="text-slate-text">Dallas-Fort Worth, TX</p>
                </div>

                <div>
                  <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Hours</p>
                  <div className="text-slate-text text-sm space-y-1">
                    <p>Monday – Friday: 9:00 AM – 4:00 PM CST</p>
                    <p>Saturday – Sunday: Closed</p>
                  </div>
                </div>

                <div>
                  <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Social</p>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full border border-cream-dark flex items-center justify-center hover:border-gold hover:bg-gold/5 transition-all"
                    >
                      <svg className="w-5 h-5 text-slate-light" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-full border border-cream-dark flex items-center justify-center hover:border-gold hover:bg-gold/5 transition-all"
                    >
                      <svg className="w-5 h-5 text-slate-light" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3" id="get-started">
              <div className="bg-white rounded-lg p-8 md:p-10 border border-cream-dark">
                <h2 className="font-heading text-2xl text-navy mb-2">Get Started</h2>
                <p className="text-slate-light text-sm mb-8">
                  Fill out the form below to schedule your free consultation or ask us anything.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-navy text-sm font-medium mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full border border-cream-dark rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-navy text-sm font-medium mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full border border-cream-dark rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-navy text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-cream-dark rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-navy text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full border border-cream-dark rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-navy text-sm font-medium mb-2"
                    >
                      I&apos;m Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full border border-cream-dark rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="hrt-trt">HRT / TRT</option>
                      <option value="anti-aging">Anti-Aging</option>
                      <option value="sports-medicine">Sports Medicine</option>
                      <option value="labs">Extensive Labs</option>
                      <option value="peptides">Peptide Therapy</option>
                      <option value="thyroid">Thyroid Evaluations</option>
                      <option value="b12">B-12 Injections</option>
                      <option value="telemedicine">Telemedicine</option>
                      <option value="other">Other / General Question</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-navy text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full border border-cream-dark rounded-md px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                      placeholder="Tell us about your health goals or ask us anything..."
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full text-center">
                    Schedule Free Consultation
                  </button>

                  <p className="text-slate-light text-xs text-center">
                    Your information is confidential and protected under HIPAA guidelines.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
