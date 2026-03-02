'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="font-display font-bold text-lg text-dark">
                Cookie-Einstellungen
              </h3>
              <button
                onClick={decline}
                className="text-gray-300 hover:text-gray-500 transition-colors"
                aria-label="Schließen"
              >
                <X size={20} />
              </button>
            </div>

            <p className="font-body text-sm text-gray-500 leading-relaxed mb-6">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer
              Website zu bieten. Technisch notwendige Cookies sind für die Funktionalität
              der Seite erforderlich. Weitere Informationen finden Sie in unserer{' '}
              <Link href="/datenschutz" className="text-brand hover:underline">
                Datenschutzerklärung
              </Link>.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={accept}
                className="px-6 py-2.5 bg-brand text-white font-body font-semibold text-sm rounded-lg
                  hover:bg-brand-dark transition-colors duration-300"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={decline}
                className="px-6 py-2.5 bg-gray-100 text-gray-600 font-body font-semibold text-sm rounded-lg
                  hover:bg-gray-200 transition-colors duration-300"
              >
                Nur notwendige
              </button>
              <Link
                href="/datenschutz"
                className="px-6 py-2.5 text-gray-400 font-body text-sm text-center
                  hover:text-gray-600 transition-colors duration-300"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
