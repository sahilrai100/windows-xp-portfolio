import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahil Rai - Portfolio XP",
  description: "Sahil Rai's Windows XP-themed portfolio - Backend Software Engineer from Bengaluru, India",
  keywords: ["portfolio", "windows xp", "software engineer", "backend", "python", "django", "fastapi", "sahil rai"],
  authors: [{ name: "Sahil Rai" }],
  openGraph: {
    title: "Sahil Rai - Portfolio XP",
    description: "Windows XP style portfolio - Backend Software Engineer from Bengaluru, India",
    url: "https://github.com/sahilrai100",
    siteName: "Sahil Rai Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sahil Rai - Windows XP Portfolio",
      },
    ],
    locale: "en_US",
    type: "website", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Rai - Portfolio XP",
    description: "Windows XP style portfolio - Backend Software Engineer from Bengaluru, India",
    images: ["/og.png"],
    creator: "@sahilrai17480",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
