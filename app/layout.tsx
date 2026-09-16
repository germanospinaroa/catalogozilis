import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://catalogo-zilis.vercel.app"),
  title: { default: "Productos Zilis | Catálogo informativo", template: "%s | Productos Zilis" },
  description: "Catálogo informativo independiente para conocer productos Zilis, sus ingredientes, usos y precauciones.",
  openGraph: { type: "website", locale: "es_CO", siteName: "Productos Zilis" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body><a className="skip-link" href="#contenido">Saltar al contenido</a><Header />{children}<Footer /></body></html>;
}
