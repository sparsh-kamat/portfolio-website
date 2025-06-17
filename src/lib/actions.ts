"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


const contactFormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
})

export async function sendEmail(data: unknown) {
    const parsedData = contactFormSchema.safeParse(data);
    if (!parsedData.success) {
        throw new Error("Invalid form data");
    }
    const { name, email, subject, message } = parsedData.data;

    const envEmail = process.env.CONTACT_EMAIL;
    if (!envEmail) {
        throw new Error("CONTACT_EMAIL environment variable is not set");
    }

    const { data: emailData, error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: envEmail,
        replyTo: email, // Use the user's email for replies
        subject: subject,
        html: `
        <h2>New message via sparshkamat.me</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            message: "Failed to send email. Please try again later.",
        };
    }
    console.log("Email sent successfully:", emailData);
    return {
        success: true,
        message: "Email sent successfully!",
    };
}