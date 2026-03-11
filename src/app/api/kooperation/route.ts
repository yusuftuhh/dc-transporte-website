import { NextResponse } from 'next/server'
import transporter from '@/lib/mailer'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const {
      company, contactName, email, phone,
      fleetSize, vehicleTypes, operatingArea, availability, message,
    } = data

    // E-Mail an DC Transporte
    await transporter.sendMail({
      from: `"DC Transporte Webseite" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `Neue Kooperationsanfrage von ${company}`,
      html: `
        <h2>Neue Kooperationsanfrage</h2>
        <h3>Unternehmensdaten</h3>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Firma</td><td style="padding:8px;border:1px solid #ddd">${company}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Ansprechpartner</td><td style="padding:8px;border:1px solid #ddd">${contactName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">E-Mail</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Telefon</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
        </table>
        <h3>Fuhrpark & Kapazität</h3>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Anzahl Fahrzeuge</td><td style="padding:8px;border:1px solid #ddd">${fleetSize}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Fahrzeugtypen</td><td style="padding:8px;border:1px solid #ddd">${vehicleTypes.join(', ')}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Einsatzgebiet</td><td style="padding:8px;border:1px solid #ddd">${operatingArea}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Verfügbarkeit</td><td style="padding:8px;border:1px solid #ddd">${availability}</td></tr>
        </table>
        ${message ? `<h3>Nachricht</h3><p>${message}</p>` : ''}
      `,
    })

    // Bestätigung an den Interessenten
    await transporter.sendMail({
      from: `"DC Transporte" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Ihre Kooperationsanfrage bei DC Transporte',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#1a1a2e">Vielen Dank für Ihr Interesse!</h2>
          <p>Hallo ${contactName},</p>
          <p>wir haben Ihre Kooperationsanfrage erhalten und freuen uns über Ihr Interesse an einer Zusammenarbeit.</p>
          <p>Wir prüfen Ihre Angaben und melden uns zeitnah bei Ihnen.</p>
          <h3>Ihre Angaben im Überblick:</h3>
          <ul>
            <li><strong>Firma:</strong> ${company}</li>
            <li><strong>Fahrzeuge:</strong> ${fleetSize}</li>
            <li><strong>Fahrzeugtypen:</strong> ${vehicleTypes.join(', ')}</li>
            <li><strong>Einsatzgebiet:</strong> ${operatingArea}</li>
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
