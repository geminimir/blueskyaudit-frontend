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
        from: 'recapify@resend.dev', // Using Resend's testing domain
        to: email,
        subject: 'Welcome to Recapify Waitlist! 🎉',
        html: `
          <p>Thank you for joining our exclusive waitlist. You're now first in line to experience the future of diagram creation.</p>
          
          <h2>What's coming your way:</h2>
          <ul>
            <li>🎁 <strong>50% lifetime discount</strong> when we launch</li>
            <li>⚡️ Early access to our platform</li>
            <li>💎 Direct Input on Features</li>
            <li>🎯 Priority support when we launch</li>
            <li>🔔 First to know about new features</li>
          </ul>

          <p>We're working hard to create something amazing and can't wait to share it with you. 
          As a waitlist member, you'll get an exclusive <strong>50% lifetime discount</strong> on any plan when we launch!</p>
          
          <p>Stay tuned for updates!</p>
          
          <p style="color: #666; font-size: 0.9em;">Best regards,<br>Khalil<br>Founder, Recapify</p>
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