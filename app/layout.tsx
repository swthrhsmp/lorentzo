import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";
import ogImage from "@/public/assets/works/101.jpg";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lorentzo | Βιομηχανικά Δάπεδα, Σταμπωτά Δάπεδα, Αντιολισθηρές Ράμπες",
  description: "Βιομηχανικά Δάπεδα, Σταμπωτά Δάπεδα, Αντιολισθηρές Ράμπες",
  keywords: ["σταμπωτά", "δάπεδα", "ράμπες", "πατητή", "τσιμεντοκονία", "πατητή τσιμεντοκονία", "βιομηχανικά δάπεδα", "αντιολισθηρές ράμπες"],
  metadataBase: new URL("https://lorentzo.vercel.app"),
  openGraph: {
    images: {
      url: ogImage.src,
      width: 1200,
      height: 630,
      alt: "Image of the company",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="light" lang="el" className={`${roboto.className} scroll-smooth`}>
      <body className="flex flex-col min-h-screen pt-28">
        <Navbar />
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
