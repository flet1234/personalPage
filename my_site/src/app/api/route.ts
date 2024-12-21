import { EmailTemplate } from "@/lib/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(text: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "My site <onboarding@resend.dev>",
      to: ["flet1908@gmail.com"],
      subject: "Message from my site",
      react: EmailTemplate({ text: text })
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
