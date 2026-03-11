import { NextResponse } from 'next/server'
import transporter from '@/lib/mailer'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const {
      transportType, weight, dimensions,
      pickupLocation, deliveryLocation, preferredDate,
      name, company, email, phone, message,
    } = data

    // E-Mail an DC Transporte
    await transporter.sendMail({
      from: `"DC Transporte Webseite" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `Neue Transportanfrage von ${name}`,
      html: `
        <h2>Neue Transportanfrage</h2>
        <h3>Transportdetails</h3>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Transportart</td><td style="padding:8px;border:1px solid #ddd">${transportType}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Gewicht</td><td style="padding:8px;border:1px solid #ddd">${weight}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Maße</td><td style="padding:8px;border:1px solid #ddd">${dimensions || '–'}</td></tr>
        </table>
        <h3>Route</h3>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Abholort</td><td style="padding:8px;border:1px solid #ddd">${pickupLocation}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Lieferort</td><td style="padding:8px;border:1px solid #ddd">${deliveryLocation}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Wunschtermin</td><td style="padding:8px;border:1px solid #ddd">${preferredDate || '–'}</td></tr>
        </table>
        <h3>Kontaktdaten</h3>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Firma</td><td style="padding:8px;border:1px solid #ddd">${company || '–'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">E-Mail</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Telefon</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
        </table>
        ${message ? `<h3>Nachricht</h3><p>${message}</p>` : ''}
      `,
    })

    // Bestätigung an den Kunden
    await transporter.sendMail({
      from: `"DC Transporte" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Ihre Transportanfrage bei DC Transporte',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#1a1a2e">Vielen Dank für Ihre Anfrage!</h2>
          <p>Hallo ${name},</p>
          <p>wir haben Ihre Transportanfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.</p>
          <h3>Ihre Angaben im Überblick:</h3>
          <ul>
            <li><strong>Transportart:</strong> ${transportType}</li>
            <li><strong>Gewicht:</strong> ${weight}</li>
            <li><strong>Von:</strong> ${pickupLocation}</li>
            <li><strong>Nach:</strong> ${deliveryLocation}</li>
            ${preferredDate ? `<li><strong>Wunschtermin:</strong> ${preferredDate}</li>` : ''}
          </ul>
          <p>Bei Rückfragen erreichen Sie uns unter:<br>
          E-Mail: info@dc-transporte.de</p>
          <p>Mit freundlichen Grüßen,<br><strong>DC Transporte</strong><br>Friedrich-Ebert-Damm 204, 22047 Hamburg</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('E-Mail-Fehler:', error)
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 500 })
  }
}
