import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CatalogTracker } from "../components/CatalogTracker";
import { getSiteUrl } from "../lib/site-url";

const ogImageUrl = new URL("/catalogo-zilis-og-v2.jpg", getSiteUrl()).toString();

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: { default: "Productos Zilis | Catálogo informativo", template: "%s | Productos Zilis" },
  description:
    "Conoce los productos Zilis, sus ingredientes, beneficios, formas de uso y recomendaciones.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Productos Zilis",
    title: "Productos Zilis | Catálogo informativo",
    description:
      "Conoce los productos Zilis, sus ingredientes, beneficios, formas de uso y recomendaciones.",
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "Catálogo de productos Zilis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Productos Zilis | Catálogo informativo",
    description:
      "Conoce los productos Zilis, sus ingredientes, beneficios, formas de uso y recomendaciones.",
    images: [ogImageUrl],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body><CatalogTracker /><a className="skip-link" href="#contenido">Saltar al contenido</a><Header />{children}<Footer /></body></html>;
}
