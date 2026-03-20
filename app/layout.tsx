import type { Metadata } from "next";
import Image from "next/image";
import { Plus_Jakarta_Sans, Geist_Mono, Urbanist, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { images } from "@/public/assets";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Wealthup",
  description: "Wealth management made simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} ${urbanist.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none fixed inset-0 z-0">
            <Image
              src={images.bgGradientImage}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div
            className="pointer-events-none fixed inset-0 z-1 opacity-100"
            style={{ background: "var(--bg-overlay)" }}
            aria-hidden
          />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
