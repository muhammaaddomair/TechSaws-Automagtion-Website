import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techsaws",
  description:
    "AI automation, backend infrastructure, cyber defense, revenue, and growth systems for scaling businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
