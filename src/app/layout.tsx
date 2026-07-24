import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// ─── Font loading ────────────────────────────────────────────────────────────
// Fraunces: optical-size axis (opsz), soft/irregular letterforms — display only
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// ─── Site metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Watchmen Roofing",
  description:
    "Commercial roofing and storm restoration contractor based in Tulsa, Oklahoma. " +
    "We track the storm, protect the roof.",
  // TODO: add og:image, og:url, twitter card once domain is confirmed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
