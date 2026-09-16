import type { MetadataRoute } from "next";
import { products } from "../data/products";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || "https://catalogo-zilis.vercel.app"; return [{ url: base, lastModified: new Date() }, ...products.map((product) => ({ url: `${base}/productos/${product.slug}`, lastModified: new Date() }))]; }
