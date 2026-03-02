import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Partners from '@/components/Partners'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <Partners />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}
