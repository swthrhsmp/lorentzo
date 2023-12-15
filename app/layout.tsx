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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="light" lang="el" className={`${roboto.className} scroll-smooth`}>
      <body className="flex flex-col pt-28">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
