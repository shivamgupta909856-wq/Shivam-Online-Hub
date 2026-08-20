import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Services | Aadhaar, PAN, E-Shram & Government Services",
  description:
    "Shivam Online Hub Jan Suvidha Kendra पर Aadhaar, PAN Card, E-Shram Card, online forms, government services, railway services, bill payment और digital services की online assistance प्राप्त करें।",

  keywords: [
    "Shivam Online Hub Services",
    "Jan Suvidha Kendra",
    "Aadhaar Services",
    "PAN Card Services",
    "E-Shram Card",
    "Online Forms",
    "Government Services",
    "Railway Services",
    "Bill Payment",
    "Digital Services",
  ],

  alternates: {
    canonical: "https://shivam-online-hub-gdxf.vercel.app/services",
  },

  openGraph: {
    title: "Online Services | Shivam Online Hub",
    description:
      "Aadhaar, PAN Card, E-Shram Card, online forms, government services और digital services की assistance.",
    url: "https://shivam-online-hub-gdxf.vercel.app/services",
    siteName: "Shivam Online Hub",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}