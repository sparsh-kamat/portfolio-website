import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Roboto_Serif } from "next/font/google";
import CustomCursor from "@/components/custom-cursor";
import NavbarRes from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
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
            <main className="flex-grow ">
              {children}
              <Analytics />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
