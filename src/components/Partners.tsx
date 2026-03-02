'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useAnimationFrame } from 'framer-motion'

const partners = [
  { name: 'H. Gautzsch Hamburg', logo: '/images/partners/gautzsch.png', url: 'https://www.gautzsch-hamburg.de/' },
  { name: 'STERAC Transport & Logistik', logo: '/images/partners/sterac.svg', url: 'https://www.sterac.com/' },
  { name: 'Bursped', logo: '/images/partners/bursped.webp', url: 'https://bursped.de/' },
  { name: 'Nagel-Group', logo: '/images/partners/nagel.png', url: 'https://www.nagel-group.com/' },
]

const allPartners = [...partners, ...partners, ...partners, ...partners]

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const baseX = useMotionValue(0)
  const [trackWidth, setTrackWidth] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Scroll parallax offset
  const scrollX = useTransform(scrollYProgress, [0, 1], [100, -300])
  const smoothScrollX = useSpring(scrollX, { stiffness: 80, damping: 30 })

  // Measure track width for seamless loop
  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2)
    }
  }, [])

  // Slow auto-drift animation
  useAnimationFrame((_, delta) => {
    const speed = 0.02 // px per ms — very slow drift
    let newX = baseX.get() - delta * speed
    if (trackWidth > 0 && Math.abs(newX) >= trackWidth) {
      newX = 0
    }
    baseX.set(newX)
  })

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

      {/* Combined: slow auto-drift + scroll parallax */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={trackRef}
          style={{ x: baseX, translateX: smoothScrollX }}
          className="flex items-center gap-28 sm:gap-40 lg:gap-52 w-max px-20"
        >
          {allPartners.map((partner, i) => (
            <a
              key={`${partner.name}-${i}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center h-16 px-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 sm:h-12 w-auto max-w-[200px] object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
