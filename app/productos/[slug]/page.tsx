import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductSections } from "../../../components/ProductSections";
import { getProduct, products, type Product } from "../../../data/products";

const detailCopy: Record<string, { eyebrow: string; title: string; lead: string }> = {
  ice: { eyebrow: "ICE · Bienestar diario", title: "Acompaña mejor el desgaste de todos los días.", lead: "Una fórmula de bienestar para personas que quieren apoyar recuperación y sentirse mejor dentro de una rutina constante." },
  amalaki: { eyebrow: "AMALAKI · Fórmula herbal", title: "Tu cuerpo no está fallando. Solo necesita apoyo.", lead: "Una fórmula herbal basada en Amalaki y otros ingredientes botánicos para acompañar bienestar, digestión y equilibrio dentro de una rutina constante." },
  "b-fit": { eyebrow: "B-FIT · Metabolismo", title: "Sentirte en control también empieza por lo que pasa dentro de tu cuerpo.", lead: "Una fórmula diaria en sobres que reúne fibras, compuestos botánicos y lípidos bioactivos seleccionados para acompañar metabolismo, saciedad, digestión y bienestar integral." },
  edge: { eyebrow: "ULTRA EDGE · Energía y enfoque", title: "Enfoque y energía para cuando el día exige más.", lead: "Diseñado para acompañar concentración, claridad mental y rendimiento durante jornadas de trabajo, estudio o entrenamiento." },
  rise: { eyebrow: "RISE · Café con Amalaki", title: "No es solo café. Es cómo te hace sentir después.", lead: "Café con Amalaki pensado para acompañar energía y enfoque dentro de tu rutina." },
  "ultra-vibe": { eyebrow: "ULTRA VIBE · Bienestar cotidiano", title: "No necesitas apagar tu vida. Necesitas recuperar tu equilibrio.", lead: "CBD + CBG + CBC. Una fórmula diseñada para acompañar calma, recuperación, estado de ánimo y bienestar cotidiano." },
};

export function generateStaticParams() { return products.filter((product) => product.status === "published").map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProduct(params.slug);
  if (!product || product.status !== "published") return {};
  return { title: `${product.name} by Zilis`, description: product.shortDescription, alternates: { canonical: `/productos/${product.slug}` }, openGraph: { title: `${product.name} by Zilis`, description: product.shortDescription, images: product.productImage ? [product.productImage] : [] }, twitter: { card: "summary_large_image", title: `${product.name} by Zilis`, description: product.shortDescription, images: product.productImage ? [product.productImage] : [] } };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product || product.status !== "published") notFound();
  const copy = detailCopy[product.slug];
  const related = product.relatedProducts.map(getProduct).filter((item): item is Product => Boolean(item && item.status === "published"));
  const theme = { "--product-accent": product.theme.accent, "--product-accent-dark": product.theme.dark, "--product-soft": product.theme.soft, "--product-ink": product.theme.ink, "--product-gold": product.theme.gold || product.theme.accent } as CSSProperties;

  return <main id="contenido" className={`product-page product-${product.slug}`} style={theme}>
    <div className="product-shell container">
      <Link className="back-link" href="/#productos"><span aria-hidden="true">←</span> Volver al catálogo</Link>
      <section className="product-hero" aria-labelledby="product-title"><div className="product-hero-copy"><p className="eyebrow">{copy.eyebrow}</p><h1 id="product-title">{product.name === "EDGE" ? "ULTRA EDGE" : product.name}</h1><h2>{copy.title}</h2><p className="product-lead">{copy.lead}</p><div className="pill-row">{product.benefits.slice(0, 3).map((benefit) => <span className="pill" key={benefit}>{benefit}</span>)}</div></div><div className="hero-product"><Image src={product.heroImage || product.productImage!} alt={product.alt} width={920} height={656} sizes="(max-width: 760px) 90vw, 47vw" priority /></div></section>
      <ProductSections product={product} related={related} />
    </div>
  </main>;
}
