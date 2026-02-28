import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-5avx-63pp5z10n-nk-987s-projects.vercel.app"),

  title: {
    default: "Nitesh Kumar | Full Stack Developer",
    template: "%s | Nitesh Kumar",
  },

  description:
    "Full Stack Developer (B.Tech 2025) specializing in backend systems, AI models, and production-ready web applications.",

  keywords: [
    "Nitesh Kumar",
    "Full Stack Developer",
    "Backend Developer",
    "MERN Stack",
    "Next.js Developer",
    "AI Developer",
    "Portfolio",
  ],

  authors: [{ name: "Nitesh Kumar" }],

  openGraph: {
    title: "Nitesh Kumar | Full Stack Developer",
    description:
      "Explore my projects in backend development, AI systems, and full stack applications.",
    url: "https://portfolio-5avx-63pp5z10n-nk-987s-projects.vercel.app",
    siteName: "Nitesh Kumar Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nitesh Kumar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nitesh Kumar | Full Stack Developer",
    description:
      "Backend & AI focused Full Stack Developer building production-grade applications.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}