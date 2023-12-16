import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lorentzo | Βιομηχανικά Δέπεδα",
  description: "Βιομηχανικά Δάπεδα, Σταμπωτά Δάπεδα, Αντιολισθηρές Ράμπες",
  metadataBase: new URL("https://lorentzo.vercel.app"),
  openGraph: {
    images: {
      url: "https://images.pexels.com/photos/926427/pexels-photo-926427.jpeg",
      width: 1200,
      height: 630,
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
