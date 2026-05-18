import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, company } = req.body;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'autolinkinfotech@gmail.com',
    subject: `New Lead: ${name} from ${company}`,
    html: `
      <h2>New Lead Captured</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
    `,
  });

  return res.status(200).json({ success: true });
}
