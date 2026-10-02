import Link from "next/link";
import type { Product } from "../data/products";

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading bfit-section-heading">
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
    {intro && <p>{intro}</p>}
  </div>;
}

const formulaMap = [
  { label: "Metabolismo", ingredients: "Fenogreco + Berberina", text: "Dos componentes vegetales que forman parte del enfoque metabólico de la fórmula." },
  { label: "Saciedad", ingredients: "Psyllium + OEA", text: "Componentes que ayudan a entender el enfoque de B-FIT alrededor de las señales de hambre, llenura y control." },
  { label: "Digestión", ingredients: "Inulina + Psyllium", text: "Dos tipos de fibra con características diferentes que aportan al componente digestivo de la fórmula." },
  { label: "Sistema endocannabinoide", ingredients: "BCP", text: "Un compuesto botánico conocido por su interacción con receptores CB2." },
];

const observationPoints = [
  "¿Llegas a tus comidas con el mismo nivel de hambre?",
  "¿Cómo se comportan tus antojos?",
  "¿Cómo se siente tu digestión?",
  "¿Te resulta más fácil mantener la estructura de alimentación que decidiste?",
];

export function BFItSections({ product, related }: { product: Product; related: Product[] }) {
  return <div className="product-sections bfit-sections">
    <section className="product-section bfit-context" aria-labelledby="bfit-context-title">
      <SectionHeading eyebrow="El contexto" title="No siempre es falta de disciplina." />
      <div className="bfit-context-copy">
        <p>Puedes estar comiendo mejor, intentando controlar los antojos o tratando de mantener una rutina y aun así sentir que tu cuerpo no acompaña el esfuerzo como quisieras.</p>
        <p>B-FIT está pensado para complementar esos hábitos desde varios frentes: metabolismo, señales de saciedad y salud digestiva.</p>
        <p>No reemplaza comer bien ni moverte. La idea es que esos hábitos tengan un mejor contexto para sostenerse.</p>
      </div>
    </section>

    <section className="product-section bfit-ingredients" aria-labelledby="bfit-ingredients-title">
      <SectionHeading eyebrow="Ingredientes y componentes" title="Seis componentes. Seis razones para estar en la fórmula." intro="B-FIT combina fibras, compuestos vegetales y lípidos bioactivos con funciones diferentes dentro de una misma rutina." />
      <div className="bfit-ingredient-grid">
        {(product.ingredients || []).map((ingredient, index) => <article className="bfit-ingredient-card" key={ingredient.name}>
          <div className="bfit-card-topline"><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true" /></div>
          <p className="bfit-ingredient-type">Componente principal</p>
          <h3>{ingredient.name}</h3>
          {ingredient.headline && <p className="bfit-ingredient-headline">{ingredient.headline}</p>}
          <p className="bfit-ingredient-description">{ingredient.description}</p>
          {ingredient.closing && <p className="bfit-ingredient-closing">{ingredient.closing}</p>}
        </article>)}
      </div>
    </section>

    <section className="product-section bfit-formula" aria-labelledby="bfit-formula-title">
      <SectionHeading eyebrow="La lógica de la fórmula" title="Entonces, ¿qué hace diferente a B-FIT?" intro="B-FIT no depende de una sola idea. Su fórmula reúne componentes con funciones distintas dentro de una misma estrategia." />
      <div className="bfit-formula-grid">{formulaMap.map((item, index) => <article key={item.label} className="bfit-formula-card">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <p className="bfit-formula-label">{item.label}</p>
        <h3>{item.ingredients}</h3>
        <p>{item.text}</p>
      </article>)}</div>
    </section>

    <section className="product-section bfit-situations" aria-labelledby="bfit-situations-title">
      <SectionHeading eyebrow="Situaciones" title="Puede tener sentido para ti si…" />
      <div className="bfit-situation-list">{product.needs.map((need, index) => <article key={need}><span>{String(index + 1).padStart(2, "0")}</span><h3>{need}</h3></article>)}</div>
    </section>

    <section className="product-section bfit-usage" aria-labelledby="bfit-usage-title">
      <div className="bfit-usage-panel">
        <div><p className="eyebrow">Cómo integrarlo</p><h2 id="bfit-usage-title">Hazlo parte de tu rutina.</h2><p>Una forma sencilla de empezar es mantener una pauta clara y observar cómo encaja en tu día.</p></div>
        <ol className="usage-list">{(product.usage || []).map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p></li>)}</ol>
      </div>
    </section>

    <section className="product-section bfit-observe" aria-labelledby="bfit-observe-title">
      <SectionHeading eyebrow="Qué observar" title="No busques sentir “algo fuerte”. Observa tu rutina." intro="B-FIT no debería evaluarse únicamente por una sensación inmediata. Hay señales mucho más útiles que puedes observar dentro de tu día." />
      <div className="bfit-observation-grid">{observationPoints.map((point, index) => <article key={point}><span>{String(index + 1).padStart(2, "0")}</span><h3>{point}</h3></article>)}</div>
      <p className="bfit-observation-close">Observar estos cambios te da más información que perseguir una sensación puntual después de tomar un sobre.</p>
    </section>

    <section className="product-section bfit-faq" aria-labelledby="bfit-faq-title">
      <SectionHeading eyebrow="Preguntas frecuentes" title="Lo que normalmente te preguntas." />
      <div className="faq-list">{(product.faq || []).map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
    </section>

    <section className="product-section bfit-responsible" aria-labelledby="bfit-responsible-title">
      <div className="responsible-panel"><div className="responsible-badge" aria-hidden="true">i</div><div><p className="eyebrow">Uso responsable</p><h2 id="bfit-responsible-title">Ten presente antes de usarlo.</h2><p>{(product.warnings || []).join(" ")}</p><p className="bfit-disclaimer">{product.disclaimer}</p></div></div>
    </section>

    <section className="product-section related-section" aria-labelledby="bfit-related-title">
      <SectionHeading eyebrow="Continúa explorando" title="También puede interesarte." />
      <div className="related-grid">{related.map((item) => <Link className="related-card" href={`/productos/${item.slug}`} key={item.slug} style={{ "--related-accent": item.theme.accent } as React.CSSProperties}><div><span className="eyebrow">{item.category}</span><h3>{item.name}</h3></div><span className="related-arrow" aria-hidden="true">↗</span></Link>)}</div>
    </section>

    <section className="product-section product-closing"><div className="closing-card"><div><p className="eyebrow">¿Te interesa este producto?</p><h2>Consulta disponibilidad y precio con la persona que te compartió este catálogo.</h2></div><Link className="cta-main" href="/#productos">Volver al catálogo <span aria-hidden="true">→</span></Link></div></section>
  </div>;
}
