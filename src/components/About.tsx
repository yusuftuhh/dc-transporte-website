'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const values = [
  'Modernster Fuhrpark mit GPS-Tracking',
  'HACCP-zertifizierte Lebensmitteltransporte',
  'Persönlicher Ansprechpartner für jeden Kunden',
  'Transparente Preise ohne versteckte Kosten',
  'Bundesweites Netzwerk mit regionaler Stärke',
  'Umweltbewusste Logistiklösungen',
]

export default function About() {
  return (
    <section id="ueber-uns" className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="D & C Transporte Fuhrpark"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-brand rounded-xl p-6 shadow-xl shadow-brand/20"
            >
              <div className="font-impact text-4xl text-white leading-none">10+</div>
              <div className="font-body text-sm text-white/80 mt-1">Jahre Erfahrung</div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-brand font-body font-semibold text-sm tracking-widest uppercase">
              Über uns
            </span>

            <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark leading-tight">
              Zuverlässigkeit:
              <br />
              unsere oberste <span className="text-brand">Priorität</span>
            </h2>

            <p className="mt-6 text-gray-500 font-body text-lg leading-relaxed">
              D & C Transporte und Handels GmbH steht für professionelle
              Speditionsleistungen in ganz Deutschland. Mit einem modernen
              Fuhrpark und einem engagierten Team garantieren wir Ihnen
              sichere und termingerechte Lieferungen.
            </p>

            {/* Values checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 size={18} className="text-brand mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-gray-600 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              onClick={() => document.querySelector('#anfrage')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 px-8 py-3.5 bg-dark text-white font-body font-semibold text-sm rounded-lg
                hover:bg-dark-50 transition-colors duration-300"
            >
              Kontakt aufnehmen
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
