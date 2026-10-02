"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, products } from "../data/products";

export function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) => product.status === "published").filter((product) => {
      const searchable = [product.name, product.category, product.shortDescription, product.heroTitle, ...product.needs, ...product.benefits].join(" ").toLowerCase();
      return (category === "Todos" || product.category === category) && (!term || searchable.includes(term));
    });
  }, [category, query]);

  return <section id="productos" className="catalog-section container" aria-labelledby="catalog-title">
    <div className="catalog-tools" id="buscar">
      <div className="tools-heading"><p className="eyebrow">Explora la colección</p><h2 id="catalog-title">Encuentra por dónde empezar.</h2></div>
      <label className="search-label"><span className="sr-only">Buscar productos</span><span className="search-icon" aria-hidden="true">⌕</span><input className="catalog-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar producto, beneficio o necesidad..." /></label>
      <div id="categorias" className="filter-row" aria-label="Filtrar productos">{categories.map((item) => <button type="button" key={item} className={`filter-button ${category === item ? "active" : ""}`} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div>
    </div>
    {filtered.length ? <div className="product-grid">{filtered.map((product) => <article className={`product-card product-card-${product.slug}`} key={product.slug} style={{ "--product-accent": product.theme.accent, "--product-accent-dark": product.theme.dark, "--product-soft": product.theme.soft, "--product-ink": product.theme.ink } as React.CSSProperties}>
      <div className="product-media"><span className="product-category">{product.category}</span><Image className="catalog-product" src={product.catalogImage || product.productImage!} alt={product.alt} width={500} height={500} sizes="(max-width: 640px) 82vw, (max-width: 1040px) 42vw, 27vw" /></div>
      <div className="product-copy"><div className="product-name-row"><h3>{product.name}</h3><span className="product-mark" aria-hidden="true">↗</span></div><p className="product-hook">{product.heroTitle}</p><p>{product.shortDescription}</p><p className="product-note">{product.needs.slice(0, 3).join(" · ")}</p><Link className="product-link" href={`/productos/${product.slug}`}>Conocer producto <span aria-hidden="true">→</span></Link></div>
    </article>)}</div> : <div className="empty" role="status">No encontramos productos con esa búsqueda. Prueba con energía, enfoque, digestión o bienestar.</div>}
  </section>;
}
