// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('');
const TO_EMAIL = 'tommywilson972@gmail.com'


export async function POST(req, res) {
  const { body} = await req.json()
  const { email, Subject, message} = body
  try {
    const data = await resend.emails.send({
      from:'tomisinwilson6@gmail.com',
      to: [TO_EMAIL],
      subject: Subject,
      react: <>
              <h1> {Subject}</h1>
              <p>
                {message}
              </p>
              </>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
