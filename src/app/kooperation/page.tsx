'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Building2, Truck, Check, ArrowRight, ArrowLeft, Send } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const schema = z.object({
  company: z.string().min(2, 'Bitte angeben'),
  contactName: z.string().min(2, 'Bitte angeben'),
  email: z.string().email('Ungültige E-Mail'),
  phone: z.string().min(6, 'Bitte angeben'),
  fleetSize: z.string().min(1, 'Bitte wählen'),
  vehicleTypes: z.array(z.string()).min(1, 'Mindestens einen Typ wählen'),
  operatingArea: z.string().min(1, 'Bitte wählen'),
  availability: z.string().min(1, 'Bitte wählen'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const steps = [
  { label: 'Unternehmen', icon: Building2 },
  { label: 'Fuhrpark', icon: Truck },
]

const vehicleOptions = [
  '3,5 Tonner',
  '7,5 Tonner',
  '12 Tonner',
  'Sattelzugmaschine',
]

const fleetOptions = ['1–5', '6–15', '16+']
const areaOptions = ['Regional', 'Bundesweit', 'International']
const availabilityOptions = ['Vollzeit', 'Teilzeit', 'Nach Bedarf']

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

export default function KooperationPage() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, trigger, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      vehicleTypes: [],
    },
  })

  const selectedVehicles = watch('vehicleTypes') || []

  const fieldsByStep: (keyof FormData)[][] = [
    ['company', 'contactName', 'email', 'phone'],
    ['fleetSize', 'vehicleTypes', 'operatingArea', 'availability', 'message'],
  ]

  const goNext = async () => {
    const valid = await trigger(fieldsByStep[step])
    if (valid) { setDirection(1); setStep(1) }
  }
  const goBack = () => { setDirection(-1); setStep(0) }
  const onSubmit = () => setSubmitted(true)

  const toggleVehicle = (type: string) => {
    const current = selectedVehicles
    if (current.includes(type)) {
      setValue('vehicleTypes', current.filter((v: string) => v !== type), { shouldValidate: true })
    } else {
      setValue('vehicleTypes', [...current, type], { shouldValidate: true })
    }
  }

  const inputClass = `w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 font-body text-dark
    placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:border-brand/30 focus:ring-brand/10
    hover:border-gray-300 transition-all duration-300`

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 bg-dark overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand/10 border border-brand/20 rounded-full mb-6">
                <Truck size={14} className="text-brand" />
                <span className="text-brand text-sm font-body font-medium tracking-wide">Kooperation</span>
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight">
                Werden Sie unser <span className="text-brand">Partner</span>
              </h1>
              <p className="mt-4 font-body text-white/50 text-lg max-w-xl mx-auto">
                Sie sind Transportunternehmer? Registrieren Sie sich als Subunternehmer
                und profitieren Sie von regelmäßigen Aufträgen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
            >
              {/* Progress Steps */}
              <div className="px-4 sm:px-8 pt-6 sm:pt-8 pb-5 sm:pb-6 flex items-center justify-center gap-2 sm:gap-8">
                {steps.map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-400 ${
                        i < step ? 'bg-brand text-white' : i === step ? 'bg-brand/10 text-brand ring-2 ring-brand/20' : 'bg-gray-100 text-gray-300'
                      }`}>
                        {i < step ? <Check size={16} strokeWidth={2.5} /> : <s.icon size={16} />}
                      </div>
                      <span className={`font-body text-xs sm:text-sm font-medium transition-colors ${
                        i <= step ? 'text-dark' : 'text-gray-300'
                      }`}>{s.label}</span>
                    </div>
                    {i < 1 && (
                      <div className="mx-3 sm:mx-10 h-px w-8 sm:w-20 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-brand rounded-full"
                          animate={{ width: step > 0 ? '100%' : '0%' }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="h-px bg-gray-100" />

              {/* Form Body */}
              <div className="p-4 sm:p-8 min-h-[400px]">
                <AnimatePresence mode="wait" custom={direction}>
                  {submitted ? (
                    <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                        <Check size={36} className="text-green-500" strokeWidth={2.5} />
                      </motion.div>
                      <h3 className="font-display font-bold text-2xl text-dark mb-3">Anfrage gesendet!</h3>
                      <p className="font-body text-gray-400 text-center max-w-sm">
                        Vielen Dank für Ihr Interesse an einer Kooperation.
                        Wir prüfen Ihre Angaben und melden uns zeitnah bei Ihnen.
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
                            <h3 className="font-display font-bold text-lg text-dark mb-2">Ihre Unternehmensdaten</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <Field label="Firmenname" error={errors.company?.message}>
                                <input placeholder="Musterspedition GmbH" {...register('company')} className={inputClass} />
                              </Field>
                              <Field label="Ansprechpartner" error={errors.contactName?.message}>
                                <input placeholder="Max Mustermann" {...register('contactName')} className={inputClass} />
                              </Field>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <Field label="E-Mail" error={errors.email?.message}>
                                <input type="email" placeholder="info@firma.de" {...register('email')} className={inputClass} />
                              </Field>
                              <Field label="Telefon" error={errors.phone?.message}>
                                <input type="tel" placeholder="+49 123 456789" {...register('phone')} className={inputClass} />
                              </Field>
                            </div>
                          </div>
                        )}
                        {step === 1 && (
                          <div className="space-y-6">
                            <h3 className="font-display font-bold text-lg text-dark mb-2">Fuhrpark & Kapazität</h3>

                            <Field label="Anzahl Fahrzeuge" error={errors.fleetSize?.message}>
                              <div className="flex gap-3">
                                {fleetOptions.map((opt) => (
                                  <label key={opt} className="cursor-pointer flex-1">
                                    <input type="radio" value={opt} {...register('fleetSize')} className="peer sr-only" />
                                    <div className="px-3 py-3 rounded-xl border-2 border-gray-200 text-center font-body text-sm font-medium text-gray-500
                                      peer-checked:border-brand peer-checked:bg-brand/5 peer-checked:text-brand
                                      hover:border-gray-300 transition-all duration-200">
                                      {opt}
                                    </div>
                                  </label>
                                ))}
                              </div>
                            </Field>

                            <Field label="Fahrzeugtypen" error={errors.vehicleTypes?.message}>
                              <div className="grid grid-cols-2 gap-2">
                                {vehicleOptions.map((type) => (
                                  <button
                                    key={type}
                                    type="button"
                                    onClick={() => toggleVehicle(type)}
                                    className={`px-3 py-2.5 rounded-lg border-2 text-center font-body text-xs font-medium transition-all duration-200 ${
                                      selectedVehicles.includes(type)
                                        ? 'border-brand bg-brand/5 text-brand'
                                        : 'border-gray-200 text-gray-500 hover:border-gray-300'
                                    }`}
                                  >
                                    {type}
                                  </button>
                                ))}
                              </div>
                            </Field>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              <Field label="Einsatzgebiet" error={errors.operatingArea?.message}>
                                <div className="flex flex-col gap-2">
                                  {areaOptions.map((opt) => (
                                    <label key={opt} className="cursor-pointer">
                                      <input type="radio" value={opt} {...register('operatingArea')} className="peer sr-only" />
                                      <div className="px-4 py-2.5 rounded-lg border-2 border-gray-200 font-body text-sm font-medium text-gray-500
                                        peer-checked:border-brand peer-checked:bg-brand/5 peer-checked:text-brand
                                        hover:border-gray-300 transition-all duration-200">
                                        {opt}
                                      </div>
                                    </label>
                                  ))}
                                </div>
                              </Field>

                              <Field label="Verfügbare Kapazität" error={errors.availability?.message}>
                                <div className="flex flex-col gap-2">
                                  {availabilityOptions.map((opt) => (
                                    <label key={opt} className="cursor-pointer">
                                      <input type="radio" value={opt} {...register('availability')} className="peer sr-only" />
                                      <div className="px-4 py-2.5 rounded-lg border-2 border-gray-200 font-body text-sm font-medium text-gray-500
                                        peer-checked:border-brand peer-checked:bg-brand/5 peer-checked:text-brand
                                        hover:border-gray-300 transition-all duration-200">
                                        {opt}
                                      </div>
                                    </label>
                                  ))}
                                </div>
                              </Field>
                            </div>

                            <Field label="Nachricht (optional)" error={errors.message?.message}>
                              <textarea rows={3} placeholder="Weitere Informationen zu Ihrem Unternehmen..." {...register('message')}
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
                  <div className="px-4 sm:px-8 py-4 sm:py-5 flex justify-between">
                    <button onClick={goBack} disabled={step === 0}
                      className={`flex items-center gap-2 px-5 py-2.5 font-body text-sm rounded-lg transition-all ${
                        step === 0 ? 'text-gray-200 cursor-not-allowed' : 'text-gray-500 hover:text-dark hover:bg-gray-50'
                      }`}>
                      <ArrowLeft size={16} /> Zurück
                    </button>
                    {step < 1 ? (
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
      </main>
      <Footer />
    </>
  )
}
