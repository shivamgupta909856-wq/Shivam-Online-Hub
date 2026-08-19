import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import TechBackground from "./components/TechBackground";

export const metadata: Metadata = {
  title: {
    default: "Shivam Online Hub | Jan Suvidha Kendra",
    template: "%s | Shivam Online Hub",
  },

  description:
    "Shivam Online Hub is a Jan Suvidha Kendra providing online forms, government services, Aadhaar, PAN Card, bill payment, railway and digital services.",
verification: {
  google: "BA4WbZx7AYqh0k3v4wsMpklQgscLk_B2mBZRAGHiCY0",
},
  keywords: [
    "Shivam Online Hub",
    "Jan Suvidha Kendra",
    "Online Services",
    "Government Services",
    "Aadhaar Services",
    "PAN Card",
    "Online Forms",
    "Digital Services",
  ],

  authors: [
    {
      name: "Shivam Online Hub",
    },
  ],

  creator: "Shivam Online Hub",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Shivam Online Hub | Jan Suvidha Kendra",
    description:
      "Online forms, government services and digital solutions — all in one place.",
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