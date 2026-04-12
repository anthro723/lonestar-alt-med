import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What to Expect | Lonestar Alternative Medicine",
  description:
    "Learn what to expect at Lonestar Alternative Medicine — from your free consultation through your personalized treatment plan.",
};

export default function WhatToExpectPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-30" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Your Journey</p>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">What to Expect</h1>
          <div className="star-divider max-w-xs mx-auto mb-6">
            <span className="text-gold">★</span>
          </div>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            We believe in transparency and making you feel comfortable from day one. Here&apos;s
            exactly what your experience will look like.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Step 1 */}
          <div className="relative pl-16 pb-16 border-l-2 border-gold/20 ml-6">
            <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
              <span className="text-navy-dark font-heading font-bold text-lg">1</span>
            </div>
            <div className="bg-white rounded-lg p-8 border border-cream-dark">
              <h2 className="font-heading text-2xl text-navy mb-2">Free Consultation</h2>
              <p className="text-gold text-sm tracking-wider uppercase mb-4">No Obligation</p>
              <p className="text-slate-light leading-relaxed mb-4">
                Your journey begins with a complimentary consultation with one of our hormone
                specialists. This is your opportunity to discuss your health concerns, share your
                goals, and learn how hormone optimization can help you feel your best.
              </p>
              <p className="text-slate-light leading-relaxed">
                We take the time to listen and understand your unique situation. There is
                absolutely no pressure — this consultation is about giving you the information you
                need to make an informed decision about your health.
              </p>
              <div className="mt-6 p-4 bg-cream/50 rounded-lg">
                <p className="text-navy font-semibold text-sm">
                  Available in-office or via telemedicine
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative pl-16 pb-16 border-l-2 border-gold/20 ml-6">
            <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
              <span className="text-navy-dark font-heading font-bold text-lg">2</span>
            </div>
            <div className="bg-white rounded-lg p-8 border border-cream-dark">
              <h2 className="font-heading text-2xl text-navy mb-2">Comprehensive Lab Work</h2>
              <p className="text-gold text-sm tracking-wider uppercase mb-4">
                Insurance Billing Available
              </p>
              <p className="text-slate-light leading-relaxed mb-4">
                We run our extensive lab panel — a combination of 7 in-depth test panels that
                measure and evaluate your body&apos;s key biomarkers. This comprehensive bloodwork
                gives us a complete picture of your health and allows us to design a truly
                personalized treatment plan.
              </p>
              <p className="text-slate-light leading-relaxed">
                Insurance billing is available for all laboratory work, keeping your out-of-pocket
                costs low. Our team handles the coordination so you don&apos;t have to.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative pl-16 pb-16 border-l-2 border-gold/20 ml-6">
            <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
              <span className="text-navy-dark font-heading font-bold text-lg">3</span>
            </div>
            <div className="bg-white rounded-lg p-8 border border-cream-dark">
              <h2 className="font-heading text-2xl text-navy mb-2">
                Personalized Treatment Plan
              </h2>
              <p className="text-gold text-sm tracking-wider uppercase mb-4">
                Tailored to Your Needs
              </p>
              <p className="text-slate-light leading-relaxed mb-4">
                Based on your lab results, health history, and personal goals, our specialists
                design a treatment protocol uniquely crafted for you. We walk you through every
                aspect of your plan, ensuring you understand and feel confident about your path
                forward.
              </p>
              <p className="text-slate-light leading-relaxed">
                Your plan may include hormone therapy, peptides, supplements, or a combination —
                always based on your specific biomarker data, never a one-size-fits-all approach.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative pl-16 pb-16 border-l-2 border-gold/20 ml-6">
            <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
              <span className="text-navy-dark font-heading font-bold text-lg">4</span>
            </div>
            <div className="bg-white rounded-lg p-8 border border-cream-dark">
              <h2 className="font-heading text-2xl text-navy mb-2">
                Prescriptions Delivered to You
              </h2>
              <p className="text-gold text-sm tracking-wider uppercase mb-4">
                Discreet Packaging
              </p>
              <p className="text-slate-light leading-relaxed mb-4">
                All prescriptions are shipped directly to your door in discreet packaging. No
                pharmacy visits, no waiting in line — just convenient at-home treatment delivered
                on your schedule.
              </p>
              <p className="text-slate-light leading-relaxed">
                Your privacy is our priority. All shipments arrive in unmarked packaging for
                complete discretion.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative pl-16 ml-6">
            <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
              <span className="text-navy-dark font-heading font-bold text-lg">5</span>
            </div>
            <div className="bg-white rounded-lg p-8 border border-cream-dark">
              <h2 className="font-heading text-2xl text-navy mb-2">Ongoing Support</h2>
              <p className="text-gold text-sm tracking-wider uppercase mb-4">
                $150 Per Follow-Up Visit
              </p>
              <p className="text-slate-light leading-relaxed mb-4">
                Your health journey doesn&apos;t end with a prescription. We schedule regular
                follow-ups to monitor your progress, adjust your protocol as needed, and ensure
                you&apos;re achieving your goals. Follow-up appointments are available both
                in-office and via telemedicine.
              </p>
              <p className="text-slate-light leading-relaxed">
                Prescription re-orders are easy — simply use our Rx Re-Order system and we&apos;ll
                have your medications shipped directly to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing summary */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl text-navy mb-8">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-lg p-8 border border-cream-dark">
              <p className="text-gold font-heading text-4xl font-bold">Free</p>
              <p className="text-navy font-semibold mt-2 text-lg">Initial Consultation</p>
              <p className="text-slate-light text-sm mt-3">
                No cost, no obligation. Learn about your options with zero pressure.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-cream-dark">
              <p className="text-gold font-heading text-4xl font-bold">$150</p>
              <p className="text-navy font-semibold mt-2 text-lg">Per Visit</p>
              <p className="text-slate-light text-sm mt-3">
                Flat rate for all follow-up visits. Insurance billing available for lab work.
              </p>
            </div>
          </div>
          <Link href="/contact#get-started" className="btn-gold">
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
