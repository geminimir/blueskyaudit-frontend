import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email, status = 'pending' } = await request.json()
    
    // Insert/update waitlist entry
    await sql`
      INSERT INTO waitlist (email, status, created_at)
      VALUES (${email}, ${status}, NOW())
      ON CONFLICT (email) 
      DO UPDATE SET 
        status = ${status},
        updated_at = NOW()
    `

    try {
      await resend.emails.send({
        from: 'hello@bluebrandly.com',
        to: email,
        subject: 'Welcome to BlueBrandly Waitlist! 🎉',
        html: `
          <p>Thank you for joining our exclusive waitlist. You're now first in line to experience premium brand development and marketing solutions.</p>
          
          <h2>What's coming your way:</h2>
          <ul>
            <li>🎁 <strong>Early bird pricing</strong> when we launch</li>
            <li>⚡️ Priority access to our services</li>
            <li>💎 Personalized brand consultation</li>
            <li>🎯 Dedicated account manager</li>
            <li>🔔 First to know about new service offerings</li>
          </ul>

          <p>We're working hard to create exceptional branding and marketing solutions tailored for your business.
          As a waitlist member, you'll get exclusive early bird pricing when we launch!</p>
          
          <p>Stay tuned for updates!</p>
          
          <p style="color: #666; font-size: 0.9em;">Best regards,<br>The BlueBrandly Team</p>
        `
      })
    } catch (emailError) {
      console.error('Email sending failed with error:', emailError)
    }

    return NextResponse.json({ message: 'Successfully added to waitlist' })
  } catch (error) {
    console.error('Waitlist registration failed with error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
} 