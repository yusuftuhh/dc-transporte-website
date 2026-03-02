import type { Metadata } from 'next'
import { Poppins, Open_Sans, Oswald } from 'next/font/google'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-impact',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'D & C Transporte und Handels GmbH | Nationale Spedition',
  description:
    'Ihr zuverlässiger Partner für nationale Transporte, Lebensmitteltransporte, Kühltransporte und Lagerlogistik — schnell, sicher und bundesweit. Hamburg.',
  keywords: ['Spedition', 'Transport', 'Logistik', 'Hamburg', 'Lebensmitteltransporte', 'Kühltransporte', 'Umzüge', 'Lagerlogistik'],
  authors: [{ name: 'D & C Transporte und Handels GmbH' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'D & C Transporte und Handels GmbH',
    title: 'D & C Transporte und Handels GmbH | Nationale Spedition',
    description: 'Ihr zuverlässiger Partner für nationale Transporte, Lebensmitteltransporte, Kühltransporte und Lagerlogistik — schnell, sicher und bundesweit.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'D & C Transporte GmbH Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D & C Transporte und Handels GmbH',
    description: 'Nationale Transporte, Lebensmitteltransporte, Kühltransporte und Lagerlogistik — Hamburg.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon-32.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${poppins.variable} ${openSans.variable} ${oswald.variable}`}>
      <body className="font-body antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
