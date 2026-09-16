"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { categories, products } from "../data/products";

export function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "Todos" || product.category === category;
      const searchable = [product.name, product.category, product.shortDescription, ...product.needs, ...product.benefits].join(" ").toLowerCase();
      return matchesCategory && (!term || searchable.includes(term));
    });
  }, [query, category]);
  return <section id="productos" className="container"><div className="toolbar" id="buscar"><label className="search-wrap"><span className="search-icon" aria-hidden="true">⌕</span><span className="sr-only">Buscar productos</span><input className="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar producto, beneficio o necesidad..." /></label><div id="categorias" className="chips" aria-label="Filtrar por categoría">{categories.map((item) => <button key={item} className={`chip ${category === item ? "active" : ""}`} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div></div><div className="section-heading"><div><p className="eyebrow">Biblioteca de productos</p><h2>Empieza por lo que hoy tiene sentido.</h2></div><p>{filtered.length} {filtered.length === 1 ? "producto disponible" : "productos disponibles"}</p></div>{filtered.length ? <div className="product-grid">{filtered.map((product) => <article className={`product-card ${product.status === "pending" ? "pending" : ""}`} key={product.slug}><div className="product-media">{product.productImage && <Image src={product.productImage} alt={product.alt} width={500} height={500} sizes="(max-width: 800px) 90vw, 30vw" />}</div><div className="product-body"><div className="product-topline"><span className="eyebrow">{product.category}</span>{product.status === "pending" && <span className="pending-badge">Pendiente</span>}</div><h3>{product.name}</h3><p>{product.shortDescription}</p><div className="tag-row">{product.needs.slice(0,3).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><Link className="product-link" href={`/productos/${product.slug}`}>Conocer producto</Link></div></article>)}</div> : <div className="empty">No encontramos productos con esa búsqueda. Prueba con energía, enfoque, digestión o bienestar.</div>}</section>;
}
