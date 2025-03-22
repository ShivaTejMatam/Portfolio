import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ColorGlow from "@/components/ui/GlowEffect";
import { FloatingNav } from "@/components/floating-nav";
import ThemeProvider from "@/components/setTheme";
import SpaceWarpCanvas from "@/components/SpaceWrapCanvas";
import CometCanvas from "@/components/CometCanvas";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivatejmatam.vercel.app"),
  title: {
    default: "SIVATEJA MATAM ",
    template: "%s | Full Stack Developer",
  },
  description:
    "I'm a Full Stack Developer skilled in React, Next.js, TypeScript,Node js. Check out my portfolio!",
  openGraph: {
    title: "SIVATEJA MATAM | Full Stack Developer",
    description:
      "Explore my projects, blog, and experience in full stack development",
    url: "https://shivatejmatam.vercel.app",
    siteName: "SIVATEJA MATAM Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://avatars.githubusercontent.com/ShivaTejMatam",
        width: 460,
        height: 460,
        alt: "SIVATEJA MATAM",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIVATEJA MATAM | Full Stack Developer",
    description: "Exploring fullstack development journey",
    images: ["https://avatars.githubusercontent.com/ShivaTejMatam"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "SIVATEJA MATAM",
              url: "https://shivatejmatam.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/sivateja-matam-51420b231/",
                "https://github.com/ShivaTejMatam",
                "https://x.com/shivtejmatam",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpaceWarpCanvas />
        <CometCanvas />
        <ColorGlow />
        <FloatingNav addClass="fixed inset-x-0 bottom-0 border border-[#D14309]" />
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics mode="production" />}
      </body>
    </html>
  );
}
