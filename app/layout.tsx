import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Nitesh Kumar | Data Analyst · Business Intelligence · Full Stack Developer",
  description:
    "Portfolio of Nitesh Kumar — Data Analyst and Full Stack Developer focused on Python, SQL, Power BI, machine learning, backend APIs and modern web development.",
  keywords: [
    "Nitesh Kumar",
    "Data Analyst",
    "Business Intelligence Analyst",
    "Power BI Developer",
    "SQL Developer",
    "Python Developer",
    "Full Stack Developer",
    "Backend Developer",
    "Machine Learning",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Nitesh Kumar" }],
  creator: "Nitesh Kumar",
  metadataBase: new URL("https://portfolio-5avx.vercel.app"),
  openGraph: {
    title: "Nitesh Kumar | Data Analyst · BI · Full Stack Developer",
    description:
      "Data Analyst and Full Stack Developer focused on analytics, business intelligence, machine learning and practical software development.",
    type: "website",
    locale: "en_IN",
    url: "https://portfolio-5avx.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitesh Kumar | Data Analyst · BI · Full Stack Developer",
    description:
      "Portfolio of Nitesh Kumar — Data Analyst, BI and Full Stack Developer.",
  },
  robots: { index: true, follow: true },
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
