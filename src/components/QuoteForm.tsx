'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Package, MapPin, User, Check, ArrowRight, ArrowLeft, Send } from 'lucide-react'

const schema = z.object({
  transportType: z.string().min(1, 'Bitte wählen'),
  weight: z.string().min(1, 'Bitte angeben'),
  dimensions: z.string().optional(),
  pickupLocation: z.string().min(2, 'Bitte angeben'),
  deliveryLocation: z.string().min(2, 'Bitte angeben'),
  preferredDate: z.string().optional(),
  name: z.string().min(2, 'Bitte angeben'),
  company: z.string().optional(),
  email: z.string().email('Ungültige E-Mail'),
  phone: z.string().min(6, 'Bitte angeben'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const steps = [
  { label: 'Transport', icon: Package },
  { label: 'Route', icon: MapPin },
  { label: 'Kontakt', icon: User },
]

const transportOptions = [
  'Stückgut', 'Teilladung', 'Komplettladung', 'Express',
  'Lebensmittel', 'Kühltransport', 'Umzug', 'Spezialtransport',
]

function Field({ label, error, children }: {
  label: string; error?: string; children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-sm font-body font-medium text-gray-500 mb-2">{label}</label>
      {children}
      {error && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-body mt-1.5">
          {error}
        </motion.p>
      )}
    </div>
  )
}

export default function QuoteForm() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, trigger, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  const fieldsByStep: (keyof FormData)[][] = [
    ['transportType', 'weight', 'dimensions'],
    ['pickupLocation', 'deliveryLocation', 'preferredDate'],
    ['name', 'company', 'email', 'phone', 'message'],
  ]

  const goNext = async () => {
    const valid = await trigger(fieldsByStep[step])
    if (valid) { setDirection(1); setStep(s => Math.min(s + 1, 2)) }
  }
  const goBack = () => { setDirection(-1); setStep(s => Math.max(s - 1, 0)) }
  const onSubmit = () => setSubmitted(true)

  const inputClass = `w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 font-body text-dark
    placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:border-brand/30 focus:ring-brand/10
    hover:border-gray-300 transition-all duration-300`

  return (
    <section id="anfrage" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-brand font-body font-semibold text-sm tracking-widest uppercase">
            Jetzt anfragen
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark">
            Ihr Angebot in <span className="text-brand">3 Schritten</span>
          </h2>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
        >
          {/* Progress Steps */}
          <div className="px-8 pt-8 pb-6 flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-400 ${
                    i < step ? 'bg-brand text-white' : i === step ? 'bg-brand/10 text-brand ring-2 ring-brand/20' : 'bg-gray-100 text-gray-300'
                  }`}>
                    {i < step ? <Check size={18} strokeWidth={2.5} /> : <s.icon size={18} />}
                  </div>
                  <span className={`hidden sm:block font-body text-sm font-medium transition-colors ${
                    i <= step ? 'text-dark' : 'text-gray-300'
                  }`}>{s.label}</span>
                </div>
                {i < 2 && (
                  <div className="mx-4 sm:mx-8 h-px w-8 sm:w-16 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-brand rounded-full"
                      animate={{ width: i < step ? '100%' : '0%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="h-px bg-gray-100" />

          {/* Form Body */}
          <div className="p-8 min-h-[360px]">
            <AnimatePresence mode="wait" custom={direction}>
              {submitted ? (
                <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <Check size={36} className="text-green-500" strokeWidth={2.5} />
                  </motion.div>
                  <h3 className="font-display font-bold text-2xl text-dark mb-3">Anfrage gesendet!</h3>
                  <p className="font-body text-gray-400 text-center max-w-sm">
                    Vielen Dank. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  custom={direction}
                  initial={{ x: direction > 0 ? 150 : -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction < 0 ? 150 : -150, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {step === 0 && (
                      <div className="space-y-6">
                        <Field label="Transportart" error={errors.transportType?.message}>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {transportOptions.map((opt) => (
                              <label key={opt} className="cursor-pointer">
                                <input type="radio" value={opt} {...register('transportType')} className="peer sr-only" />
                                <div className="px-3 py-2.5 rounded-lg border-2 border-gray-200 text-center font-body text-xs font-medium text-gray-500
                                  peer-checked:border-brand peer-checked:bg-brand/5 peer-checked:text-brand
                                  hover:border-gray-300 transition-all duration-200">
                                  {opt}
                                </div>
                              </label>
                            ))}
                          </div>
                        </Field>
                        <Field label="Gewicht (ca.)" error={errors.weight?.message}>
                          <input placeholder="z.B. 500 kg" {...register('weight')} className={inputClass} />
                        </Field>
                        <Field label="Maße (optional)" error={errors.dimensions?.message}>
                          <input placeholder="z.B. 120 x 80 x 100 cm" {...register('dimensions')} className={inputClass} />
                        </Field>
                      </div>
                    )}
                    {step === 1 && (
                      <div className="space-y-6">
                        <Field label="Abholort" error={errors.pickupLocation?.message}>
                          <input placeholder="PLZ oder Stadt" {...register('pickupLocation')} className={inputClass} />
                        </Field>
                        <Field label="Lieferort" error={errors.deliveryLocation?.message}>
                          <input placeholder="PLZ oder Stadt" {...register('deliveryLocation')} className={inputClass} />
                        </Field>
                        <Field label="Wunschtermin" error={errors.preferredDate?.message}>
                          <input type="date" {...register('preferredDate')} className={inputClass} />
                        </Field>
                      </div>
                    )}
                    {step === 2 && (
                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <Field label="Name" error={errors.name?.message}>
                            <input placeholder="Max Mustermann" {...register('name')} className={inputClass} />
                          </Field>
                          <Field label="Firma (optional)" error={errors.company?.message}>
                            <input placeholder="Firma GmbH" {...register('company')} className={inputClass} />
                          </Field>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <Field label="E-Mail" error={errors.email?.message}>
                            <input type="email" placeholder="max@beispiel.de" {...register('email')} className={inputClass} />
                          </Field>
                          <Field label="Telefon" error={errors.phone?.message}>
                            <input type="tel" placeholder="+49 123 456789" {...register('phone')} className={inputClass} />
                          </Field>
                        </div>
                        <Field label="Nachricht (optional)" error={errors.message?.message}>
                          <textarea rows={3} placeholder="Weitere Details..." {...register('message')}
                            className={`${inputClass} resize-none`} />
                        </Field>
                      </div>
                    )}
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {!submitted && (
            <>
              <div className="h-px bg-gray-100" />
              <div className="px-8 py-5 flex justify-between">
                <button onClick={goBack} disabled={step === 0}
                  className={`flex items-center gap-2 px-5 py-2.5 font-body text-sm rounded-lg transition-all ${
                    step === 0 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-500 hover:text-dark hover:bg-gray-50'
                  }`}>
                  <ArrowLeft size={16} /> Zurück
                </button>
                {step < 2 ? (
                  <button onClick={goNext}
                    className="flex items-center gap-2 px-6 py-2.5 bg-brand text-white font-body text-sm font-semibold rounded-lg
                      hover:bg-brand-dark transition-all duration-300">
                    Weiter <ArrowRight size={16} />
                  </button>
                ) : (
                  <button onClick={handleSubmit(onSubmit)}
                    className="flex items-center gap-2 px-6 py-2.5 bg-brand text-white font-body text-sm font-semibold rounded-lg
                      hover:bg-brand-dark transition-all duration-300">
                    Anfrage senden <Send size={16} />
                  </button>
                )}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
