import { ProductCatalog } from "../components/ProductCatalog";

export default function Home() {
  return <main id="contenido"><section className="container hero"><div className="hero-copy"><p className="eyebrow">Catálogo informativo independiente</p><h1>PRODUCTOS ZILIS</h1><p className="hero-lead">Encuentra el producto que tiene sentido para ti.</p><p className="muted">Conoce sus beneficios, ingredientes, recomendaciones de uso y la forma en que cada producto puede acompañar diferentes objetivos de bienestar.</p></div><aside className="hero-card" aria-label="Cómo usar el catálogo"><div className="hero-card-inner"><span className="hero-card-mark">Una biblioteca para explorar</span><p className="hero-card-note">Primero entiende. Después decide.</p><span className="muted">Información clara, navegación simple, decisiones con contexto.</span></div></aside></section><ProductCatalog /></main>;
}
