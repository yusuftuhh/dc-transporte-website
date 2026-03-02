'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Truck, UtensilsCrossed, Thermometer, Home, Warehouse, Shield } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Nationale Transporte',
    description: 'Stückgut, Teil- und Komplettladungen — pünktlich und sicher an jedes Ziel in Deutschland.',
    icon: Truck,
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '02',
    title: 'Lebensmittel\u00ADtransporte',
    description: 'HACCP-konforme Transporte von Lebensmitteln mit lückenloser Dokumentation und Hygiene.',
    icon: UtensilsCrossed,
    image: 'https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '03',
    title: 'Kühltransporte',
    description: 'Temperaturgeführte Transporte mit modernster Kühltechnik für sensible Waren.',
    icon: Thermometer,
    image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '04',
    title: 'Umzüge & Möbeltransporte',
    description: 'Professionelle Umzüge für Privat und Gewerbe. Sicher verpackt und transportiert.',
    icon: Home,
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '05',
    title: 'Lagerlogistik',
    description: 'Flexible Lager\u00ADlösungen mit Kommissionierung, Bestandsverwaltung und Versand.',
    icon: Warehouse,
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    num: '06',
    title: 'Spezialtransporte',
    description: 'Schwerlast, Überbreite, Gefahrgut — wir finden für jede Anforderung die passende Lösung.',
    icon: Shield,
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-brand font-body font-semibold text-sm tracking-widest uppercase">
            Unsere Leistungen
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark leading-tight">
            Für jede logistische
            <br />
            Herausforderung <span className="text-brand">bereit</span>
          </h2>
          <p className="mt-4 text-gray-500 font-body text-lg max-w-2xl leading-relaxed">
            Von nationalen Transporten bis zur spezialisierten Kühllogistik —
            wir bieten maßgeschneiderte Lösungen für Ihr Unternehmen.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-default"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-dark/10
                group-hover:from-dark/95 group-hover:via-dark/50 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                {/* Top: Number + Icon */}
                <div className="flex items-start justify-between">
                  <span className="font-impact text-5xl text-white/10 group-hover:text-brand/30 transition-colors duration-500">
                    {service.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center
                    group-hover:bg-brand/20 transition-colors duration-500">
                    <service.icon size={22} className="text-white/80" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Bottom: Title + Description */}
                <div>
                  <h3 className="font-display font-bold text-xl lg:text-2xl text-white leading-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/50 font-body text-sm leading-relaxed
                    max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100
                    transition-all duration-500 overflow-hidden">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
