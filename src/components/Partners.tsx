'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const partners = [
  { name: 'H. Gautzsch Hamburg', logo: '/images/partners/gautzsch.png', url: 'https://www.gautzsch-hamburg.de/' },
  { name: 'STERAC Transport & Logistik', logo: '/images/partners/sterac.svg', url: 'https://www.sterac.com/' },
  { name: 'Bursped', logo: '/images/partners/bursped.webp', url: 'https://bursped.de/' },
  { name: 'Nagel-Group', logo: '/images/partners/nagel.png', url: 'https://www.nagel-group.com/' },
]

// 6x for seamless CSS loop (translateX(-50%) loops perfectly with 2 halves)
const allPartners = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners]

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Scroll parallax adds extra horizontal shift on top of the CSS drift
  const parallaxX = useTransform(scrollYProgress, [0, 1], [80, -200])

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-brand font-body font-semibold text-sm tracking-widest uppercase">
            Referenzen
          </span>
          <h2 className="mt-3 font-display font-extrabold text-2xl sm:text-3xl text-dark">
            Unternehmen, die uns <span className="text-brand">vertrauen</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scroll parallax wrapper */}
        <motion.div style={{ x: parallaxX }}>
          {/* CSS auto-drift inside */}
          <div className="partner-drift flex items-center gap-12 sm:gap-24 lg:gap-40 w-max">
            {allPartners.map((partner, i) => (
              <a
                key={`${partner.name}-${i}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center h-16 px-2 sm:px-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-9 sm:h-12 w-auto max-w-[140px] sm:max-w-[200px] object-contain"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
