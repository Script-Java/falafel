// src/app/api/contact/route.js

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Export a named function for each HTTP method.
// This function handles POST requests to /api/contact
export async function POST(request) {
  try {
    // The request body is now accessed by awaiting request.json()
    const { 
      name, 
      email, 
      phone,
      eventDate,
      eventAddress,
      guestCount,
      eventType,
      details 
    } = await request.json();

    // Basic validation
    if (!name || !email || !eventDate || !eventAddress || !guestCount || !eventType) {
      return NextResponse.json({ error: 'Please fill out all required fields.' }, { status: 400 });
    }
    
    // Environment variable check
    if (!process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
        console.error("Email server credentials are not set in .env.local. Please check your environment variables.");
        return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO,
      subject: `New Catering Inquiry: ${eventType} Event from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h1>New Catering Inquiry</h1>
          <p>You have received a new catering inquiry from your website.</p>
          <hr>
          <h2>Event Details:</h2>
          <ul>
            <li><strong>Contact Name:</strong> ${name}</li>
            <li><strong>Contact Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Contact Phone:</strong> ${phone || 'Not provided'}</li>
          </ul>
          <ul>
            <li><strong>Event Type:</strong> ${eventType}</li>
            <li><strong>Event Date:</strong> ${eventDate}</li>
            <li><strong>Event Address:</strong> ${eventAddress}</li>
            <li><strong>Approx. Guest Count:</strong> ${guestCount}</li>
          </ul>
          <hr>
          <h2>Additional Details:</h2>
          <p>${details ? details.replace(/\n/g, '<br>') : 'No additional details provided.'}</p>
        </div>
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    // Return a success response using NextResponse
    return NextResponse.json({ message: 'Inquiry sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error in /api/contact:', error);
    // Return an error response using NextResponse
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
