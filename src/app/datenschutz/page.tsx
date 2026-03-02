import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | D & C Transporte und Handels GmbH',
}

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-10 font-body text-gray-600 leading-relaxed">
          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-3">
              D & C Transporte und Handels GmbH<br />
              Friedrich-Ebert-Damm 204<br />
              22047 Hamburg<br />
              Telefon: +49 172 577 377 7<br />
              E-Mail: info@dc-transporte.de
            </p>
            <p className="mt-3">
              Geschäftsführer: Sinan Danis, Seyyid Caymaz
            </p>
          </section>

          {/* 2. Erhebung und Speicherung */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              2. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch unserer Website werden automatisch Informationen an den
              Server unserer Website gesendet. Diese Informationen werden temporär
              in einem sog. Logfile gespeichert. Folgende Informationen werden dabei
              ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>
            <p className="mt-3">
              Die genannten Daten werden zu folgenden Zwecken verarbeitet:
              Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,
              Gewährleistung einer komfortablen Nutzung unserer Website,
              Auswertung der Systemsicherheit und -stabilität sowie zu weiteren
              administrativen Zwecken.
            </p>
            <p className="mt-3">
              Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1
              lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten
              Zwecken zur Datenerhebung.
            </p>
          </section>

          {/* 3. Kontaktformular */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              3. Kontaktformular / Angebotsanfrage
            </h2>
            <p>
              Bei der Nutzung unseres Kontaktformulars bzw. Angebotsformulars werden
              die von Ihnen eingegebenen Daten (Name, Firma, E-Mail, Telefon,
              Transportdetails) zum Zweck der Bearbeitung Ihrer Anfrage bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-3">
              Die Verarbeitung der in das Formular eingegebenen Daten erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
              bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Beantwortung Ihrer Anfrage).
            </p>
            <p className="mt-3">
              Die von Ihnen im Formular eingegebenen Daten verbleiben bei uns, bis
              Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
              widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende
              gesetzliche Bestimmungen — insbesondere Aufbewahrungsfristen — bleiben
              unberührt.
            </p>
          </section>

          {/* 4. Cookies */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              4. Cookies
            </h2>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die
              Ihr Browser automatisch erstellt und auf Ihrem Endgerät speichert, wenn
              Sie unsere Seite besuchen.
            </p>
            <p className="mt-3">
              Wir verwenden ausschließlich technisch notwendige Cookies, die für den
              Betrieb der Seite erforderlich sind (z.B. Speicherung Ihrer
              Cookie-Einwilligung). Diese Cookies werden nach Ende der Browser-Sitzung
              oder nach Ablauf einer definierten Zeit automatisch gelöscht.
            </p>
            <p className="mt-3">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
              Cookies informiert werden und Cookies nur im Einzelfall erlauben. Bei
              der Deaktivierung von Cookies kann die Funktionalität unserer Website
              eingeschränkt sein.
            </p>
          </section>

          {/* 5. Ihre Rechte */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              5. Ihre Rechte
            </h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Ihnen steht zudem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde
              zu (Art. 77 DSGVO). Die für uns zuständige Aufsichtsbehörde ist:
            </p>
            <p className="mt-3">
              Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br />
              Ludwig-Erhard-Str 22, 7. OG<br />
              20459 Hamburg
            </p>
          </section>

          {/* 6. SSL-Verschlüsselung */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              6. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
              Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol
              in Ihrer Browserzeile.
            </p>
          </section>

          {/* 7. Aktualität */}
          <section>
            <h2 className="font-display font-bold text-xl text-dark mb-4">
              7. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026.
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter
              gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese
              Datenschutzerklärung zu ändern.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
