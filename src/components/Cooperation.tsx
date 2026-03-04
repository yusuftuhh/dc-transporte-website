'use client'

import { motion } from 'framer-motion'
import { Truck, ArrowRight } from 'lucide-react'
import Link from 'next/link'

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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand/10 border border-brand/20 rounded-full mb-6">
              <Truck size={14} className="text-brand" />
              <span className="text-brand text-sm font-body font-medium tracking-wide">
                Kooperation
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Subunternehmer
              <br />
              <span className="text-brand">gesucht</span>
            </h2>

            <p className="mt-6 font-body text-white/50 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Sie sind Transportunternehmer und suchen einen zuverlässigen
              Auftraggeber? Werden Sie Teil unseres Netzwerks und profitieren
              Sie von regelmäßigen Aufträgen im nationalen Güterverkehr.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <Link
                href="/kooperation"
                className="group flex items-center gap-3 px-8 py-4 bg-brand text-white font-body font-semibold text-base rounded-lg
                  hover:bg-brand-dark hover:shadow-2xl hover:shadow-brand/20
                  transition-all duration-300"
              >
                Jetzt bewerben
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+491725773777"
                className="flex items-center gap-2 px-6 py-4 text-white/50 font-body font-medium text-base
                  border border-white/10 rounded-lg hover:bg-white/5 hover:text-white/80 hover:border-white/20
                  transition-all duration-300"
              >
                Oder direkt anrufen
              </a>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-shrink-0 hidden lg:block"
          >
            <div className="relative">
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '15+', label: 'Eigene\nFahrzeuge' },
                  { value: '24/7', label: 'Auftrags-\nverfügbarkeit' },
                  { value: '100%', label: 'Pünktliche\nBezahlung' },
                  { value: 'DE', label: 'Bundesweite\nRouten' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center
                      hover:bg-white/10 hover:border-brand/30 transition-all duration-300"
                  >
                    <div className="font-impact font-bold text-3xl text-brand">{stat.value}</div>
                    <div className="mt-2 font-body text-xs text-white/40 whitespace-pre-line leading-snug">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
