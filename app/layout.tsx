import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-5avx.vercel.app"),

  title: {
    default: "Nitesh Kumar | Data Analyst · Business Intelligence · Full Stack Developer",
    template: "%s | Nitesh Kumar",
  },

  description:
    "Portfolio of Nitesh Kumar — Data Analyst, Business Intelligence and Full Stack Developer skilled in SQL, Python, Power BI, React, Next.js, Node.js and NestJS.",

  keywords: [
    "Nitesh Kumar",
    "Data Analyst",
    "Business Intelligence",
    "BI Analyst",
    "Full Stack Developer",
    "Python",
    "SQL",
    "Power BI",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Data Analytics",
    "Machine Learning",
  ],

  authors: [{ name: "Nitesh Kumar" }],
  creator: "Nitesh Kumar",

  alternates: {
    canonical: "https://portfolio-5avx.vercel.app",
  },

  openGraph: {
    title:
      "Nitesh Kumar | Data Analyst · Business Intelligence · Full Stack Developer",
    description:
      "Explore Nitesh Kumar's portfolio featuring data analytics, Power BI dashboards, machine learning, backend systems and full stack projects.",
    url: "https://portfolio-5avx.vercel.app",
    siteName: "Nitesh Kumar Portfolio",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Nitesh Kumar | Data Analyst · Business Intelligence · Full Stack Developer",
    description:
      "Data Analyst, BI and Full Stack Developer portfolio — projects, experience, skills and resumes.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
