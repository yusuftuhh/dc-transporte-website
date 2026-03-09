'use client'

import { motion } from 'framer-motion'
import { Truck, ArrowRight, CheckCircle2, FileText, Shield } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  'Vollauslastung (regelmässig Arbeit)',
  'Tagespauschale (fester Betrag pro Tag)',
  'Nahverkehr (keine Fernfahrten)',
  'Pünktliche Bezahlung',
]

const transportTypes = [
  'Lebensmittel',
  'Palettenware / Stückgut',
  'Elektroartikel',
]

const requirements = [
  { icon: FileText, text: 'Gewerbeanmeldung (Transportgewerbe)' },
  { icon: Truck, text: 'EU-Lizenz (Gemeinschaftslizenz)' },
  { icon: Shield, text: 'Güterschadenhaftpflichtversicherung' },
]

const vehicles = [
  '3,5 Tonner',
  '7,5 Tonner',
  '12 Tonner',
  'Sattelzugmaschine',
]

export default function Cooperation() {
  return (
    <section className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Angebot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand/10 border border-brand/20 rounded-full mb-6">
              <Truck size={14} className="text-brand" />
              <span className="text-brand text-sm font-body font-medium tracking-wide">
                Kooperation
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Angebot von D & C
              <br />
              <span className="text-brand">Transporte GmbH</span>
            </h2>

            <p className="mt-6 font-body text-white/50 text-lg leading-relaxed max-w-lg">
              Sie würden als selbstständiger Subunternehmer für die
              D & C Transporte GmbH fahren.
            </p>

            {/* Transportarten */}
            <div className="mt-8">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
                Transportarten
              </h3>
              <div className="flex flex-wrap gap-2">
                {transportTypes.map((t) => (
                  <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg font-body text-sm text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-3 font-body text-sm text-white/30">
                Einsatzgebiet: Hamburg & Hannover (Nahverkehr)
              </p>
            </div>

            {/* Versprochen */}
            <div className="mt-8">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
                Das bieten wir
              </h3>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand flex-shrink-0" />
                    <span className="font-body text-white/70">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/kooperation"
                className="group flex items-center gap-3 px-8 py-4 bg-brand text-white font-body font-semibold text-base rounded-lg
                  hover:bg-brand-dark hover:shadow-2xl hover:shadow-brand/20
                  transition-all duration-300"
              >
                Jetzt bewerben
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>
          </motion.div>

          {/* Right: Voraussetzungen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:w-[380px] flex-shrink-0"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="font-display font-bold text-lg text-white mb-6">
                Voraussetzungen
              </h3>

              {/* Dokumente */}
              <div className="space-y-4 mb-8">
                {requirements.map((req) => (
                  <div key={req.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <req.icon size={16} className="text-brand" />
                    </div>
                    <span className="font-body text-sm text-white/60 leading-snug pt-1">{req.text}</span>
                  </div>
                ))}
              </div>

              {/* Fahrzeuge */}
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
                Eigenes Fahrzeug
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {vehicles.map((v) => (
                  <div key={v} className="px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-center
                    font-body text-xs text-white/50 font-medium">
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
