import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Telemedicine | Lonestar Alternative Medicine",
  description:
    "Virtual HRT/TRT appointments available for new and existing patients. Expert hormone optimization care from the comfort of your home.",
};

export default function TelemedicinePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-30" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Virtual Care</p>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">Telemedicine</h1>
          <div className="star-divider max-w-xs mx-auto mb-6">
            <span className="text-gold">★</span>
          </div>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Expert hormone optimization and wellness care from the comfort of your home.
            Available for both new and existing patients.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <h2 className="font-heading text-3xl text-navy mb-6">
                Same Expert Care, From Anywhere
              </h2>
              <p className="text-slate-light leading-relaxed mb-6">
                Our telemedicine services bring the same quality, personalized care you&apos;d
                receive in our office directly to you — wherever you are. Whether you&apos;re a
                new patient exploring hormone replacement therapy or an existing patient needing
                a follow-up, our virtual appointments make it easy.
              </p>

              <h3 className="font-heading text-xl text-navy mb-4">
                Available Via Telemedicine
              </h3>
              <div className="space-y-3 mb-8">
                {[
                  "Hormone and testosterone replacement therapy consultations",
                  "Follow-up appointments and treatment adjustments",
                  "Prescription refills and Rx re-orders",
                  "Lab result reviews and treatment planning",
                  "New patient consultations (free)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 shrink-0">★</span>
                    <span className="text-slate-light">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-xl text-navy mb-4">
                Prescriptions Delivered
              </h3>
              <p className="text-slate-light leading-relaxed">
                All prescriptions are shipped directly to your door in discreet packaging.
                No need to visit a pharmacy — convenient at-home treatment on your schedule.
              </p>
            </div>

            {/* Right: How it works */}
            <div>
              <div className="bg-cream rounded-lg p-10 border border-cream-dark">
                <h3 className="font-heading text-2xl text-navy mb-8">How It Works</h3>

                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Schedule Your Appointment",
                      desc: "Contact us to set up your virtual visit. New patients receive a free consultation.",
                    },
                    {
                      step: "2",
                      title: "Connect Virtually",
                      desc: "Meet with our hormone specialists via secure video call from the comfort of your home.",
                    },
                    {
                      step: "3",
                      title: "Get Your Plan",
                      desc: "Receive a personalized treatment protocol tailored to your unique needs and goals.",
                    },
                    {
                      step: "4",
                      title: "Doorstep Delivery",
                      desc: "Your prescriptions are shipped directly to you in discreet packaging. Simple as that.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="w-10 h-10 rounded-full border-2 border-gold bg-gold/5 flex items-center justify-center shrink-0">
                        <span className="text-gold font-heading text-lg font-bold">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-heading text-lg text-navy mb-1">{item.title}</h4>
                        <p className="text-slate-light text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-cream-dark">
                  <p className="text-navy font-semibold text-center mb-4">
                    Ready to get started?
                  </p>
                  <Link
                    href="/contact#get-started"
                    className="btn-gold block text-center w-full"
                  >
                    Schedule Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits band */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "No Commute",
                desc: "Save time and skip the traffic. Quality care from your living room.",
              },
              {
                title: "Same Expertise",
                desc: "Our specialists provide the same thorough care virtually as in-office.",
              },
              {
                title: "Flexible Scheduling",
                desc: "Appointments that work around your life, not the other way around.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-heading text-xl text-white mb-2">{item.title}</h3>
                <p className="text-cream/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
