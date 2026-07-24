"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: {
  name: string
  email: string
  phone: string
  address: string
}) {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'clinteth.dev@gmail.com',
    subject: `New Inspection Request from ${data.name}`,
    html: `
      <h2>New Inspection Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Property Address:</strong> ${data.address || 'Not provided'}</p>
    `,
  });
}
