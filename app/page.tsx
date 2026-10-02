import { ProductCatalog } from "../components/ProductCatalog";

export default function Home() {
  return <main id="contenido">
    <section className="hero container">
      <div className="hero-copy"><p className="eyebrow">Catálogo de bienestar Zilis</p><h1>No todos necesitan lo mismo.<span>Y ese es exactamente el problema.</span></h1><p className="hero-lead">Energía. Enfoque. Metabolismo. Equilibrio.</p><p className="hero-text">Estás intentando sentirte mejor, pero no todo lo que pruebas está hecho para lo que realmente te pasa. Son cosas distintas. Y necesitan soluciones distintas.</p><div className="hero-actions"><a href="#productos" className="cta-main">Quiero entender qué tiene sentido para mí <span aria-hidden="true">→</span></a></div><div className="signal-row"><span>Entender primero</span><span>Explorar con calma</span><span>Elegir con criterio</span></div></div>
      <aside className="hero-visual"><div className="hero-index"><span className="index-number">01</span><div><p className="eyebrow">Una colección para explorar</p><h2>Encuentra el punto de partida de tu rutina.</h2><p>Conoce qué propone cada producto, cómo se integra y qué información conviene tener presente.</p></div><a className="hero-index-link" href="#productos">Ver la colección <span aria-hidden="true">↓</span></a></div></aside>
    </section>
    <div className="principles container" aria-label="Principios del catálogo"><span>Producto real</span><i aria-hidden="true"/><span>Información clara</span><i aria-hidden="true"/><span>Uso responsable</span></div>
    <ProductCatalog/>
    <section className="editorial-break container"><div className="break-number">02</div><div><p className="eyebrow">Una decisión más informada</p><h2>No se trata de probar todo.</h2><p>Se trata de entender qué tiene sentido para ti ahora y empezar por ahí.</p></div><div className="break-note"><span aria-hidden="true">✦</span><p>Explora cada ficha y consulta siempre la etiqueta vigente.</p></div></section>
    <section className="container closing-section"><article className="closing-card"><div className="closing-copy"><p className="eyebrow">Sigue explorando</p><h2>Si no estás seguro, eso también es normal.</h2><p>Conoce las páginas de producto y encuentra la información que necesitas para conversar sobre tu rutina.</p></div><div className="closing-actions"><a href="#productos" className="cta-main">Ver productos <span aria-hidden="true">→</span></a></div></article></section>
    <section className="container disclaimer-section"><article className="alert-card"><span className="alert-symbol" aria-hidden="true">i</span><div><h3>Uso responsable</h3><p>Estos productos no están diseñados para diagnosticar, tratar o prevenir enfermedades. Consulta con un profesional de salud si tienes dudas.</p></div></article></section>
  </main>;
}
