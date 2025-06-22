import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";
import NavbarRes from "@/components/navbar";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sparsh Kamat - Full Stack Developer",
  description: "The portfolio of Sparsh Kamat, a passionate Full Stack Developer creating dynamic and user-friendly web applications.",
  keywords: ["Sparsh Kamat", "Full Stack Developer", "Next.js", "React", "TypeScript", "Portfolio", "Full Stack", "Web Development"],
  authors: [{ name: "Sparsh Kamat", url: "https://www.sparshkamat.me" }],
  creator: "Sparsh Kamat",

  openGraph: {
    type: 'website',
    url: 'https://www.sparshkamat.me',
    title: 'Sparsh Kamat - Full Stack Developer',
    description: 'The portfolio of Sparsh Kamat...',
    images: [
      {
        url: 'https://www.sparshkamat.me/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Sparsh Kamat Portfolio',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Sparsh Kamat - Full Stack Developer',
    description: 'The portfolio of Sparsh Kamat...',
    images: ['https://www.sparshkamat.me/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={robotoSerif.className} suppressHydrationWarning >
      <body className="flex flex-col min-h-screen flex-grow">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen flex-grow">
            <CustomCursor />
            <NavbarRes />
            <main className="flex-grow relative z-10">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
