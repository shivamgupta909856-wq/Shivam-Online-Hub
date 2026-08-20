import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import TechBackground from "./components/TechBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivamhub.in"),

  title: {
    default: "Shivam Online Hub | Jan Suvidha Kendra",
    template: "%s | Shivam Online Hub",
  },

  description:
    "Shivam Online Hub is a Jan Suvidha Kendra providing online forms, government services, Aadhaar, PAN Card, E-Shram Card, bill payment, railway and digital services.",

  verification: {
    google: "2Gdut-7inDJRBA0g52ITW37yVUltkvj7E8LQzGha-U8",
  },

  keywords: [
    "Shivam Online Hub",
    "Shivam Online Hub Jan Suvidha Kendra",
    "Jan Suvidha Kendra",
    "CSC Center",
    "Online Services",
    "Government Services",
    "Aadhaar Services",
    "PAN Card",
    "E-Shram Card",
    "Online Forms",
    "Digital Services",
    "Bill Payment",
    "Railway Ticket",
  ],

  authors: [
    {
      name: "Shivam Online Hub",
    },
  ],

  creator: "Shivam Online Hub",
  publisher: "Shivam Online Hub",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://shivamhub.in",
  },

  openGraph: {
    title: "Shivam Online Hub | Jan Suvidha Kendra",
    description:
      "Shivam Online Hub - Online forms, government services, Aadhaar, PAN Card, E-Shram Card, bill payment and digital services.",
    url: "https://shivamhub.in",
    siteName: "Shivam Online Hub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TechBackground />
        <Navbar />

        <main className="site-content">{children}</main>
      </body>
    </html>
  );
}