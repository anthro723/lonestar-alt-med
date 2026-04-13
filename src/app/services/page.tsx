import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Lonestar Alternative Medicine",
  description:
    "HRT/TRT, anti-aging, sports medicine, peptide therapy, extensive labs, thyroid evaluations, and B-12 injections in Dallas-Fort Worth.",
};

const services = [
  {
    id: "hrt-trt",
    title: "HRT / TRT",
    subtitle: "Hormone & Testosterone Replacement Therapy",
    description:
      "Hormone and testosterone replacement therapy for men and women. Our personalized protocols are designed to restore hormonal balance, boost energy levels, improve mood, and enhance overall quality of life.",
    benefits: [
      "Increased energy and reduced fatigue",
      "Improved mood and mental clarity",
      "Better sleep quality",
      "Enhanced libido and sexual function",
      "Reduced symptoms of menopause and andropause",
      "Improved body composition",
    ],
    forWhom: "Men and women experiencing hormonal imbalances, menopause, andropause, or age-related hormone decline.",
  },
  {
    id: "anti-aging",
    title: "Anti-Aging",
    subtitle: "Age-Defying Medical Therapy",
    description:
      "Anti-aging medical treatment includes therapy to keep a person biologically effective and healthy, regardless of chronological age. Our comprehensive approach combines hormone optimization, targeted supplementation, and lifestyle guidance.",
    benefits: [
      "Improved skin elasticity and appearance",
      "Enhanced cognitive function",
      "Increased energy and stamina",
      "Better immune system response",
      "Optimized metabolic function",
      "Improved overall vitality",
    ],
    forWhom: "Anyone looking to maintain peak biological performance and slow the effects of aging.",
  },
  {
    id: "sports-medicine",
    title: "Sports Medicine",
    subtitle: "Performance & Recovery Optimization",
    description:
      "Sports medicine centers on enhancing a person's athletic performance, recovery from injury, and prevention of potential injuries. Our approach uses cutting-edge protocols to help athletes and active individuals perform at their best.",
    benefits: [
      "Accelerated recovery from training and injury",
      "Enhanced athletic performance",
      "Injury prevention strategies",
      "Optimized hormone levels for peak output",
      "Improved endurance and stamina",
      "Personalized performance protocols",
    ],
    forWhom: "Athletes, fitness enthusiasts, and active individuals seeking performance optimization or injury recovery.",
  },
  {
    id: "extensive-labs",
    title: "Extensive Labs",
    subtitle: "Comprehensive Diagnostic Testing",
    description:
      "The extensive lab test panel is a combination of 7 in-depth test panels that measure and evaluate the body's key biomarkers. This thorough approach gives us a complete picture of your health, allowing us to create truly personalized treatment plans.",
    benefits: [
      "Complete hormonal panel analysis",
      "Thyroid function assessment",
      "Metabolic markers evaluation",
      "Cardiovascular risk indicators",
      "Vitamin and mineral levels",
      "Inflammatory markers",
    ],
    forWhom: "All patients — comprehensive labs are the foundation of every personalized treatment plan we create.",
  },
  {
    id: "peptide-therapy",
    title: "Peptide Therapy",
    subtitle: "Advanced Cellular Optimization",
    description:
      "With hundreds of clinical trials backing peptide therapy, peptides have key roles in our bodies including but not limited to growth factors, hormones, neurotransmitters, and anti-infectives. Our peptide protocols are tailored to your specific health goals.",
    benefits: [
      "Enhanced growth hormone production",
      "Improved tissue repair and healing",
      "Better immune system function",
      "Increased fat metabolism",
      "Improved sleep quality",
      "Anti-inflammatory properties",
    ],
    forWhom: "Patients seeking advanced therapeutic options for anti-aging, healing, performance, or immune support.",
  },
  {
    id: "thyroid-evaluations",
    title: "Thyroid Evaluations",
    subtitle: "Complete Thyroid Function Testing",
    description:
      "Our thyroid evaluations are a series of tests used to correctly and accurately measure proper thyroid function, including serum thyroid-stimulating hormone. Thyroid imbalances are often overlooked but can profoundly impact your quality of life.",
    benefits: [
      "Accurate TSH level assessment",
      "T3 and T4 hormone evaluation",
      "Thyroid antibody testing",
      "Identification of hypo/hyperthyroidism",
      "Metabolic rate optimization",
      "Energy and weight management support",
    ],
    forWhom: "Anyone experiencing unexplained fatigue, weight changes, mood shifts, or temperature sensitivity.",
  },
  {
    id: "b12-injections",
    title: "B-12 Injections",
    subtitle: "Superior Vitamin Absorption",
    description:
      "The superior absorption method for getting your vitamin B-12, which assists the body in utilizing fat, carbohydrates, and creating new proteins. Injectable B-12 bypasses digestive limitations for maximum bioavailability.",
    benefits: [
      "Enhanced energy levels",
      "Improved metabolism and fat utilization",
      "Better cognitive function",
      "Supports red blood cell production",
      "Improved mood and mental clarity",
      "Superior absorption over oral supplements",
    ],
    forWhom: "Individuals with B-12 deficiency, low energy, or those seeking enhanced metabolic support.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section data-review-section="hero" className="review-note relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 texture-overlay opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">What We Offer</p>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">Our Services</h1>
          <div className="star-divider max-w-xs mx-auto mb-6">
            <span className="text-gold">★</span>
          </div>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            From hormone replacement to advanced peptide therapy, we offer a comprehensive suite
            of services to optimize your health and wellness.
          </p>
        </div>
      </section>

      {/* Services */}
      <section data-review-section="services-list" className="review-note py-20 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 ${i !== services.length - 1 ? "border-b border-cream-dark" : ""}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Left: Title area */}
                <div className="lg:col-span-2">
                  <span className="text-gold/30 font-heading text-6xl font-bold leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-3xl text-navy mt-2">{service.title}</h2>
                  <p className="text-gold text-sm tracking-wider uppercase mt-2">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-light text-xs mt-6 leading-relaxed italic">
                    {service.forWhom}
                  </p>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-3">
                  <p className="text-slate-text leading-relaxed mb-6">{service.description}</p>
                  <h4 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4">
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2">
                        <span className="text-gold mt-0.5 shrink-0">★</span>
                        <span className="text-slate-light text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Banner */}
      <section data-review-section="pricing-banner" className="review-note py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl text-navy mb-4">Transparent Pricing</h2>
          <div className="star-divider max-w-xs mx-auto mb-8">
            <span className="text-gold">★</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-lg p-8 border border-cream-dark service-card">
              <p className="text-gold font-heading text-3xl font-bold">Free</p>
              <p className="text-navy font-semibold mt-2">Initial Consultation</p>
              <p className="text-slate-light text-sm mt-2">
                No obligation. Speak with our specialists about your goals.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-cream-dark service-card animate-pulse-glow">
              <p className="text-gold font-heading text-3xl font-bold">$150</p>
              <p className="text-navy font-semibold mt-2">Per Visit</p>
              <p className="text-slate-light text-sm mt-2">
                Flat-rate fee. No surprise charges, no hidden costs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-cream-dark service-card">
              <p className="text-gold font-heading text-3xl font-bold">Insurance</p>
              <p className="text-navy font-semibold mt-2">Lab Work Billing</p>
              <p className="text-slate-light text-sm mt-2">
                We bill insurance for laboratory work when applicable.
              </p>
            </div>
          </div>
          <Link href="/contact#get-started" className="btn-gold">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
