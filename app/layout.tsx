import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FormProvider } from "@/context/FormContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TryAutoQuote | Find the Best Auto Insurance Rates",
  description: "Compare personalized auto insurance quotes from top carriers in minutes. Free, no obligation, no spam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FormProvider>
        {children}
        </ FormProvider>
      </body>
    </html>
  );
}
