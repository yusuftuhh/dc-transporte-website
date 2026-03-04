'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  'Nationale Transporte',
  'Lebensmitteltransporte',
  'Kühltransporte',
  'Umzüge & Möbeltransporte',
  'Lagerlogistik',
  'Spezialtransporte',
]

const contact = [
  { icon: MapPin, label: 'Friedrich-Ebert-Damm 204, 22047 Hamburg' },
  { icon: Phone, label: '+49 176 415 593 98' },
  { icon: Phone, label: '+49 172 577 377 7' },
  { icon: Mail, label: 'info@dc-transporte.de' },
  { icon: Clock, label: 'Mo – Fr: 06:00 – 20:00 Uhr' },
]

export default function Footer() {
  return (
    <footer id="kontakt" className="relative bg-dark text-white">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-brand rounded-2xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden"
          >
            {/* BG pattern */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10">
              <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-white">
                Bereit für Ihre nächste Lieferung?
              </h3>
              <p className="mt-2 font-body text-white/70 text-lg">
                Fordern Sie jetzt Ihr unverbindliches Angebot an.
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#anfrage')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative z-10 flex items-center gap-2 px-8 py-4 bg-white text-brand font-body font-bold rounded-lg
                hover:bg-gray-100 hover:shadow-lg transition-all duration-300 flex-shrink-0"
            >
              Angebot anfragen
              <ArrowUpRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-t border-white/5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/images/logo.png" alt="D & C Transporte" className="h-10 brightness-0 invert mb-4" />
            <p className="font-body text-sm text-white/30 leading-relaxed">
              D & C Transporte und Handels GmbH — Ihr Logistikpartner
              für bundesweite Transportlösungen.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
              Leistungen
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => document.querySelector('#leistungen')?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-body text-sm text-white/35 hover:text-brand transition-colors duration-300"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-4">
              {contact.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <item.icon size={16} className="text-brand/60 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-white/40">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* OpenStreetMap */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
              Standort
            </h4>
            <div className="rounded-xl overflow-hidden aspect-square border border-white/5">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=10.071,53.581,10.079,53.587&layer=mapnik&marker=53.5840,10.0750"
                className="w-full h-full border-0"
                loading="lazy"
                title="Standort D & C Transporte - Friedrich-Ebert-Damm 204, Hamburg"
              />
            </div>
            <a
              href="https://www.openstreetmap.org/?mlat=53.5840&mlon=10.0750#map=17/53.5840/10.0750"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 font-body text-xs text-white/25 hover:text-brand transition-colors"
            >
              <MapPin size={12} />
              Größere Karte anzeigen
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/15">
            &copy; {new Date().getFullYear()} D & C Transporte und Handels GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/kooperation" className="font-body text-xs text-white/20 hover:text-white/40 transition-colors">Kooperation</Link>
            <Link href="/impressum" className="font-body text-xs text-white/20 hover:text-white/40 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="font-body text-xs text-white/20 hover:text-white/40 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
