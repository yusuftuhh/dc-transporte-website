'use client'

import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'

const stats = [
  { value: 500, suffix: '+', label: 'Transporte / Monat' },
  { value: 15, suffix: '+', label: 'Fahrzeuge' },
  { value: 10, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 98, suffix: '%', label: 'Kundenzufriedenheit' },
]

function StatItem({ value, suffix, label, index }: {
  value: number; suffix: string; label: string; index: number
}) {
  const { count, ref } = useCountUp(value, 2000)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="font-impact text-5xl sm:text-6xl lg:text-7xl text-brand leading-none">
        {count}<span className="text-brand/60">{suffix}</span>
      </div>
      <p className="mt-2 font-body text-sm text-gray-400 tracking-wide uppercase">{label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-20 lg:py-28 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #4AB4E6 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
