import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/ui/back-to-top";
import PageWrapper from "@/components/PageWrapper";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Atelier Noir - Premium Creative Agency",
  description: "Sophisticated design solutions crafted with precision and artistic vision. We transform brands through thoughtful, human-centered design.",
  keywords: "creative agency, design studio, branding, web design, premium design",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon/atelier_noir_favicon_dark_16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon/atelier_noir_favicon_dark_32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon/atelier_noir_favicon_dark_48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/atelier_noir_favicon_light_16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/atelier_noir_favicon_light_32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/atelier_noir_favicon_light_48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        url: '/favicon/atelier_noir_favicon_16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon/atelier_noir_favicon_32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon/atelier_noir_favicon_48x48.png',
        sizes: '48x48',
        type: 'image/png',
      }
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon/atelier_noir_favicon_192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicon/atelier_noir_favicon_512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ]
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <PageWrapper>
            <ScrollToTop />
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
