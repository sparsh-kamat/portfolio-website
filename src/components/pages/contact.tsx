"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Send, CheckCircle, AlertCircle, RotateCcw } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { sendEmail } from "@/lib/actions";
// Form validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await sendEmail(data);
      if (response.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
        throw new Error(response.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus(null);
    form.reset();
  };

  return (
    <section className="flex flex-col  py-20  lg:px-10 items-center justify-center  ">
      <div className="grid grid-cols-1 lg:gap-10 lg:grid-cols-2  w-full max-w-sm  md:max-w-2xl lg:max-w-5xl   ">
        <div className=" text-center  mb-1">
          <h1 className="text-5xl font-serif tracking-tight leading-tight mb-3">
            Contact Me :)
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>
        </div>

        <div className="w-full max-w-sm md:max-w-lg px-4 mx-auto lg:px-0">
          {submitStatus ? (
            <div className="space-y-4">
              {submitStatus === "success" && (
                <Alert className="w-full   mb-6 border-green-200 bg-green-50 text-green-800 justify-center align-middle items-center">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Thank you for your message! I'll get back to you as soon as
                    possible.
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === "error" && (
                <Alert className="w-full   mb-6 border-red-200 bg-red-50 text-red-800 justify-center align-middle items-center">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Sorry, there was an error sending your message. Please try
                    again or reach out directly via email.
                  </AlertDescription>
                </Alert>
              )}
              {/* Button to show form again */}
              <Button onClick={resetForm} variant="outline" className="w-full">
                <RotateCcw className="w-4 h-4 mr-2" />
                Send Another Message
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Name and Email in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Subject Field */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="What's this about?"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or idea..."
                          className="min-h-[100px] resize-none"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
      <Separator className="mt-10 mb-8 max-w-xs md:max-w-xl lg:max-w-2xl" />

      {/* Additional Contact Info */}
      <div className="text-center max-w-sm md:max-w-lg  text-muted-foreground">
        <p className="text-sm">
          You can also reach me directly at{" "}
          <a
            href="mailto:kamatsparsh@gmail.com"
            className="text-primary hover:underline"
          >
            kamatsparsh@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
