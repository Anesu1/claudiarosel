import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keep fonts for now, or replace if specific font needed
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Header } from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// We can add a class to body to use a nice serif for specific elements if we had imported it,
// but for now relying on standard tailwind font-serif is safe.

export const metadata: Metadata = {
  title: "Claudia Rosel",
  description: "Portfolio of Claudia Rosel",
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
        <SmoothScroll>
          <Header />
          <main className="pt-24 min-h-screen ">
            {children}
          </main>
          <footer className="py-12 px-6 border-t border-gray-100 dark:border-gray-800 mt-20 text-center text-xs uppercase tracking-widest text-gray-500 space-y-4">
            <div>© {new Date().getFullYear()} Claudia Rosel</div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-[10px] tracking-[0.2em]">
              <a className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors" href="mailto:claudiaroselphoto@gmail.com">
                claudiaroselphoto [at] gmail dot com
              </a>
              <span className="hidden md:inline">•</span>
              <a className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors" href="https://x.com" target="_blank" rel="noreferrer">
                X / Twitter
              </a>
              <span className="hidden md:inline">•</span>
              <a className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors" href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}

