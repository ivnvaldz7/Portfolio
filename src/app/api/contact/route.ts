import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequest = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "ivnvaldz@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
