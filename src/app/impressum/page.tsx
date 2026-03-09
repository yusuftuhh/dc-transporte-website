import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impressum | D & C Transporte und Handels GmbH',
}

export default function Impressum() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand font-body text-sm font-medium hover:text-brand-dark transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Zurück zur Startseite
        </Link>

        <h1 className="font-display font-extrabold text-4xl lg:text-5xl text-dark mb-12">
          Impressum
        </h1>

        <div className="space-y-10 font-body text-gray-600 leading-relaxed">
          {/* Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              D & C Transporte und Handels GmbH<br />
              Friedrich-Ebert-Damm 204<br />
              22047 Hamburg
            </p>
          </section>

          {/* Vertreten durch */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              Vertreten durch
            </h2>
            <p>
              Geschäftsführer: Sinan Danis, Seyyid Caymaz
            </p>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              Kontakt
            </h2>
            <p>

              E-Mail: info@dc-transporte.de
            </p>
          </section>

          {/* Registereintrag */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              Registereintrag
            </h2>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Hamburg<br />
              Registernummer: HRB 162746
            </p>
          </section>

          {/* Umsatzsteuer-ID */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE330273881
            </p>
          </section>

          {/* Streitschlichtung */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-3">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftung für Inhalte */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder
              nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
              nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
              Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Haftung für Links */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
