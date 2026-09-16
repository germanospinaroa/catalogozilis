import type { MetadataRoute } from "next";
import { products } from "../data/products";
import { getSiteUrl } from "../lib/site-url";
export default function sitemap(): MetadataRoute.Sitemap { const base = getSiteUrl().toString().replace(/\/$/, ""); return [{ url: base, lastModified: new Date() }, ...products.map((product) => ({ url: `${base}/productos/${product.slug}`, lastModified: new Date() }))]; }
