# D & C Transporte und Handels GmbH - Webapp Design

## Ueberblick
One-Page "Scroll-Story" Webauftritt mit interaktivem Angebotsformular fuer eine nationale Spedition.

## Entscheidungen
- **Typ**: One-Page mit Scroll-Sektionen (kein Multi-Page)
- **Stil**: Modern Energetisch - kraeftige Farben, dynamische Scroll-Animationen
- **Ansatz**: Scroll-Story - narratives Scroll-Erlebnis mit Framer Motion
- **Inhalte**: Platzhalter (werden spaeter ersetzt)
- **Leistungen**: Nationale Transporte (Stueckgut, Teil-/Komplettladung, Express)

## Farbschema
| Element | Wert |
|---|---|
| Primaer | #3BA3D9 (Logo-Blau) |
| Primaer Dunkel | #2B7DAA |
| Akzent | #F97316 (Orange - CTA) |
| Hintergrund | #FAFBFC |
| Text | #1A1A2E |
| Grau | #64748B |

## Typografie
- Headlines: Inter Bold, 48-72px
- Body: Inter Regular

## Tech-Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS 4
- Framer Motion (Scroll-Animationen)
- React Hook Form + Zod (Formular-Validierung)
- Lucide Icons

## Sektionen

### 1. Hero (100vh)
- Heller Hintergrund mit animierten geometrischen Formen (Pfeil-Motiv vom Logo)
- Logo zentral, Scale+Fade Animation
- Headline: "Ihr zuverlaessiger Partner fuer nationale Transporte"
- Sub: "Schnell. Sicher. Bundesweit."
- CTA: "Angebot anfragen" (Orange, scrollt zum Formular)
- Scroll-Indikator unten

### 2. Leistungen (Karten-Grid)
- 3-4 Karten mit gestaffelter Fade-In Animation
- Stueckgut, Teil-/Komplettladungen, Express, Lagerlogistik
- Icon + Titel + Beschreibung + Hover-Effekt

### 3. Zahlen & Fakten (Statistik-Banner)
- Blauer Hintergrund
- 3-4 animierte CountUp-Zaehler (500+ Transporte, 50+ Fahrzeuge, 100% Zuverlaessigkeit, 24/7)

### 4. Ueber uns (Split-Layout)
- Links: Text mit Firmenwerten (Fade von links)
- Rechts: Platzhalter-Bild (Fade von rechts)

### 5. Angebotsanfrage (Multi-Step Formular)
- 3 Schritte mit Fortschrittsbalken:
  1. Transportdetails (Art, Gewicht, Masse)
  2. Route (Abhol-/Lieferort, Termin)
  3. Kontakt (Name, Firma, E-Mail, Telefon, Nachricht)
- Horizontale Slide-Animation zwischen Schritten
- Zod-Validierung, kein Backend (Erfolgs-Nachricht)

### 6. Kontakt & Footer
- Platzhalter-Kontaktdaten, Maps-Platzhalter
- Footer: Logo, Copyright, Impressum/Datenschutz

## Animations-Konzept
- Framer Motion whileInView fuer alle Sektionen
- Stagger: 50-100ms Delay zwischen Elementen
- Timing: ease-out, 0.6-0.8s
- Sticky Header mit Blur-Backdrop, kompakt beim Scrollen
- prefers-reduced-motion respektiert
